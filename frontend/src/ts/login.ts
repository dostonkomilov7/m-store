// ─── Types ────────────────────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_API_URL;

interface LoginPayload {
    email: string;
    password: string;
    remember: boolean;
}

// ─── DOM Refs ─────────────────────────────────────────────────────────────────

const fEmail = document.getElementById("f-email") as HTMLInputElement;
const fPassword = document.getElementById("f-password") as HTMLInputElement;
const fRemember = document.getElementById("f-remember") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
const btnText = document.getElementById("btn-text") as HTMLSpanElement;
const appleBtn = document.getElementById("apple-btn") as HTMLButtonElement;
const togglePwBtn = document.getElementById("toggle-pw") as HTMLButtonElement;
const eyeIcon = document.getElementById("eye-icon") as unknown as SVGElement;
const errEmail = document.getElementById("err-email") as HTMLSpanElement;
const errPassword = document.getElementById("err-password") as HTMLSpanElement;
const googleBtn = document.getElementById("google-btn") as HTMLButtonElement;
const githubBtn = document.getElementById("github-btn") as HTMLButtonElement;
const toast = document.getElementById("toast") as HTMLDivElement;

// ─── Password toggle ──────────────────────────────────────────────────────────

const EYE_OPEN = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
const EYE_CLOSED = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;

togglePwBtn.addEventListener("click", () => {
    const isPassword = fPassword.type === "password";
    fPassword.type = isPassword ? "text" : "password";
    eyeIcon.innerHTML = isPassword ? EYE_CLOSED : EYE_OPEN;
});

// ─── Validation ───────────────────────────────────────────────────────────────

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(): boolean {
    let valid = true;

    const setErr = (input: HTMLInputElement, span: HTMLSpanElement, msg: string): void => {
        input.classList.add("error");
        span.textContent = msg;
        valid = false;
    };
    const clearErr = (input: HTMLInputElement, span: HTMLSpanElement): void => {
        input.classList.remove("error");
        span.textContent = "";
    };

    const email = fEmail.value.trim();
    if (!email) setErr(fEmail, errEmail, "Email is required.");
    else if (!validateEmail(email)) setErr(fEmail, errEmail, "Enter a valid email address.");
    else clearErr(fEmail, errEmail);

    const pw = fPassword.value;
    if (!pw) setErr(fPassword, errPassword, "Password is required.");
    else if (pw.length < 6) setErr(fPassword, errPassword, "Password must be at least 6 characters.");
    else clearErr(fPassword, errPassword);

    return valid;
}

// Clear errors on input
fEmail.addEventListener("input", () => {
    fEmail.classList.remove("error");
    errEmail.textContent = "";
});
fPassword.addEventListener("input", () => {
    fPassword.classList.remove("error");
    errPassword.textContent = "";
});

// ─── Submit ───────────────────────────────────────────────────────────────────

submitBtn.addEventListener("click", async () => {
    if (!validate()) return;

    const payload: LoginPayload = {
        email: fEmail.value.trim(),
        password: fPassword.value,
        remember: fRemember.checked,
    };

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");

    try {
        // Simulate API call — replace with your real endpoint
        await fakeLogin(payload);
        showToast("✓ Signed in successfully. Redirecting…", false);
        setTimeout(() => {
            window.location.href = "dashboard";
        }, 1200);
    } catch (err: any) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        showToast(err.message || "User is not found !", true);
        fPassword.classList.add("error");
        errPassword.textContent = err.message || "Invalid credentials.";
    }
});

// ─── OAuth ────────────────────────────────────────────────────────────────────

googleBtn.addEventListener("click", () => {
    setOAuthLoading(googleBtn, "Connecting to Google…");
    setTimeout(() => {

        window.location.href = `${API_URL}/auth/google`
        showToast("✓ Signed in successfully. Redirecting…", false);
        resetOAuthBtn(googleBtn, "Continue with Google");
    }, 1500);
});

// appleBtn.addEventListener("click", () => {
//     setOAuthLoading(appleBtn, "Connecting to Apple…");
//     setTimeout(() => {
//         showToast("Apple OAuth — connect your backend here.", false);
//         resetOAuthBtn(appleBtn, "Continue with Apple");
//     }, 1500);
// });

githubBtn.addEventListener("click", () => {
    setOAuthLoading(githubBtn, "Connecting to GitHub…");
    setTimeout(() => {
        window.location.href = `${API_URL}/auth/github`
        showToast("✓ Signed in successfully. Redirecting…", false);
        resetOAuthBtn(githubBtn, "Continue with GitHub");
    }, 1500);
});


function setOAuthLoading(btn: HTMLButtonElement, label: string): void {
    btn.disabled = true;
    btn.style.opacity = "0.65";
    const span = document.createElement("span");
    span.className = "oauth-loading-text";
    span.textContent = label;
    btn.dataset.originalHtml = btn.innerHTML;
    btn.innerHTML = "";
    btn.appendChild(span);
}

function resetOAuthBtn(btn: HTMLButtonElement, _label: string): void {
    btn.disabled = false;
    btn.style.opacity = "";
    btn.innerHTML = btn.dataset.originalHtml || "";
}

// ─── Mock login (replace with real API call) ──────────────────────────────────

function fakeLogin(payload: LoginPayload): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            // Simulate success for demo — swap with fetch() to your auth endpoint
            if (payload.email && payload.password.length >= 6) {
                const res = await fetch(`${API_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                    })
                })

                if(res.status !== 201) {
                    reject('User is not found')
                }
                resolve();
            } else {
                reject(new Error("Invalid email or password."));
            }
        }, 1400);
    });
}

// ─── Toast ────────────────────────────────────────────────────────────────────

let toastTimer: ReturnType<typeof setTimeout> | null = null;

function showToast(msg: string, isError: boolean = false): void {
    toast.textContent = msg;
    toast.classList.toggle("error", isError);
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

// ─── Enter key submit ─────────────────────────────────────────────────────────

document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") submitBtn.click();
});