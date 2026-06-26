"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submitNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setMessage("Enter a valid email to subscribe.");
      return;
    }
    setMessage("Subscribed. This will connect to Supabase later.");
    setEmail("");
  }

  return (
    <section className="newsletter-card" aria-label="Newsletter signup">
      <div>
        <h2>Stay Updated</h2>
        <p>Get design tips, industry insights, and exclusive offers delivered to your inbox.</p>
      </div>
      <form onSubmit={submitNewsletter} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
        />
        <button type="submit" className="button button-primary">
          Subscribe
        </button>
        {message ? <span className="form-note">{message}</span> : null}
      </form>
    </section>
  );
}
