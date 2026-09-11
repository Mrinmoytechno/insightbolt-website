export default function Contact() {
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

          <form className="contact-form">
            <div className="form-row">
              <label>
                YOUR NAME *
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                BUSINESS NAME *
                <input
                  type="text"
                  name="business"
                  placeholder="Business name"
                  required
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
                />
              </label>

              <label>
                WEBSITE / INSTAGRAM
                <input
                  type="text"
                  name="website"
                  placeholder="@yourbusiness"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                WHAT DO YOU NEED HELP WITH? *
                <select name="help" required defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="social-media">Social media</option>
                  <option value="content">Content</option>
                  <option value="campaign">Campaign</option>
                  <option value="marketing">Marketing</option>
                  <option value="not-sure">Not completely sure yet</option>
                </select>
              </label>

              <label>
                WHAT ARE YOU TRYING TO IMPROVE? *
                <select name="improvement" required defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="visibility">Visibility</option>
                  <option value="enquiries">Enquiries</option>
                  <option value="bookings">Bookings</option>
                  <option value="sales">Sales</option>
                  <option value="something-else">Something else</option>
                </select>
              </label>
            </div>

            <label>
              TELL US A LITTLE ABOUT THE BUSINESS
              <textarea
                name="message"
                rows={5}
                placeholder="A little context about the business, what you're doing and what you'd like to improve."
              />
            </label>

            <fieldset>
              <legend>WHAT&apos;S THE BEST WAY TO REACH YOU? *</legend>

              <div className="contact-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    required
                  />
                  <span>Email</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                  />
                  <span>WhatsApp</span>
                </label>
              </div>
            </fieldset>

            <button type="submit" className="button button-primary form-submit">
              SEND THE BRIEF →
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