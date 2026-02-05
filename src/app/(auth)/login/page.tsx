"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [message, setMessage] = useState<string | null>(null);

  async function requestOtp() {
    setMessage(null);
    const res = await fetch("/api/auth/request-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken()
      },
      body: JSON.stringify({ phone })
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Coś poszło nie tak");
      return;
    }

    setMessage("Kod testowy to 123456");
    setStep("otp");
  }

  async function verifyOtp() {
    setMessage(null);
    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken()
      },
      body: JSON.stringify({ phone, otp })
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Nieprawidłowy kod");
      return;
    }

    window.location.href = "/groups";
  }

  return (
    <main className="min-h-screen px-5 py-10">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-ink/60">
          ← Powrót
        </Link>
        <div className="card p-6">
          <h1 className="text-2xl font-semibold">Zaloguj się</h1>
          <p className="mt-2 text-sm text-ink/70">
            Logowanie SMS to mock. Wpisz dowolny numer telefonu, a kod testowy to 123456.
          </p>

          {step === "phone" ? (
            <div className="mt-5 flex flex-col gap-3">
              <input
                className="rounded-xl2 border border-ink/10 bg-white px-4 py-3 text-sm"
                placeholder="+48 600 000 000"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <button
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand"
                onClick={requestOtp}
              >
                Wyślij kod
              </button>
            </div>
          ) : (
            <div className="mt-5 flex flex-col gap-3">
              <input
                className="rounded-xl2 border border-ink/10 bg-white px-4 py-3 text-sm"
                placeholder="123456"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
              />
              <button
                className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand"
                onClick={verifyOtp}
              >
                Zweryfikuj
              </button>
            </div>
          )}

          {message ? <p className="mt-3 text-sm text-coral">{message}</p> : null}
        </div>
      </div>
    </main>
  );
}

function getCsrfToken() {
  if (typeof document === "undefined") return "";
  const meta = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement | null;
  return meta?.content ?? "";
}
