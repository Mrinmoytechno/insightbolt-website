"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      website: formData.get("website"),
      help: formData.get("help"),
      improvement: formData.get("improvement"),
      message: formData.get("message"),
      contactMethod: formData.get("contactMethod"),
      website_honeypot: formData.get("website_honeypot"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section section-dark" id="contact">
      <div className="section-shell">
        <div className="contact-grid">
          <div className="contact-heading">
            <div className="section-eyebrow section-eyebrow-light">
              START A PROJECT
            </div>

            <h2>LET&apos;S SEE IF WE MAKE SENSE.</h2>

            <p>
              Tell us what you&apos;re building.
              <br />
              We&apos;ll take a look and get back to you.
            </p>

            <span className="contact-promise">
              No 17-field corporate interrogation. Promise.
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div
              className="contact-honeypot"
              aria-hidden="true"
            >
              <label>
                Website
                <input
                  type="text"
                  name="website_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                YOUR NAME *
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  autoComplete="name"
                />
              </label>

              <label>
                BUSINESS NAME *
                <input
                  type="text"
                  name="business"
                  placeholder="Business name"
                  required
                  maxLength={150}
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                EMAIL *
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  maxLength={200}
                  autoComplete="email"
                />
              </label>

              <label>
                WEBSITE / INSTAGRAM
                <input
                  type="text"
                  name="website"
                  placeholder="@yourbusiness"
                  maxLength={300}
                  autoComplete="url"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                WHAT DO YOU NEED HELP WITH? *
                <select
                  name="help"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Social media">
                    Social media
                  </option>
                  <option value="Content">
                    Content
                  </option>
                  <option value="Campaign">
                    Campaign
                  </option>
                  <option value="Marketing">
                    Marketing
                  </option>
                  <option value="Not completely sure yet">
                    Not completely sure yet
                  </option>
                </select>
              </label>

              <label>
                WHAT ARE YOU TRYING TO IMPROVE? *
                <select
                  name="improvement"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Visibility">
                    Visibility
                  </option>
                  <option value="Enquiries">
                    Enquiries
                  </option>
                  <option value="Bookings">
                    Bookings
                  </option>
                  <option value="Sales">
                    Sales
                  </option>
                  <option value="Something else">
                    Something else
                  </option>
                </select>
              </label>
            </div>

            <label>
              TELL US A LITTLE ABOUT THE BUSINESS
              <textarea
                name="message"
                rows={5}
                maxLength={3000}
                placeholder="A little context about the business, what you're doing and what you'd like to improve."
              />
            </label>

            <fieldset>
              <legend>
                WHAT&apos;S THE BEST WAY TO REACH YOU? *
              </legend>

              <div className="contact-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    required
                  />
                  <span>Email</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="WhatsApp"
                  />
                  <span>WhatsApp</span>
                </label>
              </div>
            </fieldset>

            {status === "success" && (
              <div
                className="form-status form-status-success"
                role="status"
              >
                <strong>BRIEF RECEIVED.</strong>
                <span>
                  We&apos;ll review it before replying.
                </span>
              </div>
            )}

            {status === "error" && (
              <div
                className="form-status form-status-error"
                role="alert"
              >
                <strong>COULDN&apos;T SEND THE BRIEF.</strong>
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="button button-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "SENDING..."
                : "SEND THE BRIEF →"}
            </button>

            <p className="form-note">
              We&apos;ll review it before replying.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}