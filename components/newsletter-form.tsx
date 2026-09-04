"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 650);
  };

  return (
    <form className="newsletter-form" onSubmit={submit} noValidate>
      <label htmlFor="email">E-posta adresin</label>
      <div className="input-row">
        <input id="email" name="email" type="email" autoComplete="email" placeholder="sen@ornek.com" required aria-describedby="email-status" />
        <button className="primary-button" type="submit" disabled={status === "loading"} aria-busy={status === "loading"}>
          Hediyeni al
          <ArrowRight size={18} weight="bold" />
        </button>
      </div>
      <p id="email-status" className={`form-message ${status}`} aria-live="polite">
        {status === "success" && <><CheckCircle size={18} weight="fill" /> Harika, ücretsiz setin için kayıt alındı.</>}
        {status === "error" && <><WarningCircle size={18} weight="fill" /> Geçerli bir e-posta adresi gir.</>}
        {status === "loading" && "Hediyen hazırlanıyor."}
        {status === "idle" && "Yalnızca yeni koleksiyonlar ve stüdyo hediyeleri için yazarız."}
      </p>
    </form>
  );
}
