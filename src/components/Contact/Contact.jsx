import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Styles
import "./contact.scss";

//Components
import contact from "../../data/contact";
import AnimateSection from "../AnimateSection";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState(null); // null | 'success' | {type: 'error', message?}
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null); // { type: 'success'|'error', message: string }

  React.useEffect(() => {
    if (status === "success") {
      setNotification({
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
    } else if (status && status.type === "error") {
      setNotification({
        type: "error",
        message:
          status.message ||
          "Sorry, there was a problem sending your message. Please try again later.",
      });
    }
  }, [status]);

  React.useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return;
    setLoading(true);
    setStatus(null);
    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      const endpoint = `https://formspree.io/f/${formspreeId}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "", company: "" });
      } else {
        let warnMsg = "";
        try {
          const data = await res.json();
          if (data && data.errors && data.errors.length > 0) {
            warnMsg = data.errors.map((e) => e.message).join(" ");
          }
        } catch {}
        setStatus({ type: "error", message: warnMsg || undefined });
      }
    } catch {
      setStatus({ type: "error" });
    }
    setLoading(false);
  };

  return (
    <>
      {notification && (
        <div className={`notification-bar ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <AnimateSection as="section" id="contact" className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-lead">
          Have a project or question? I’d love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <ul className="contact-details">
              {contact.email && (
                <li>
                  <span className="label">Email</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.email}</span>
                </li>
              )}
              {contact.phone && (
                <li>
                  <span className="label">Phone</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.phone}</span>
                </li>
              )}
              {contact.location && (
                <li>
                  <span className="label">Location</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.location}</span>
                </li>
              )}
              {contact.timezone && (
                <li>
                  <span className="label">Timezone</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.timezone}</span>
                </li>
              )}
              {contact.availability && (
                <li>
                  <span className="label">Availability</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.availability}</span>
                </li>
              )}
              {contact.responseTime && (
                <li>
                  <span className="label">Response</span>
                  <span className="colon">:</span>
                  <span className="value">{contact.responseTime}</span>
                </li>
              )}
              {Array.isArray(contact.languages) &&
                contact.languages.length > 0 && (
                  <li>
                    <span className="label">Languages</span>
                    <span className="colon">:</span>
                    <span className="value">
                      {contact.languages.join(", ")}
                    </span>
                  </li>
                )}
            </ul>

            {contact.cta?.url && (
              <a
                className="contact-cta"
                href={contact.cta.url}
                target="_blank"
                rel="noreferrer">
                {contact.cta.label || "Book a call"}
              </a>
            )}

            {Array.isArray(contact.socials) && contact.socials.length > 0 && (
              <ul className="contact-socials">
                {contact.socials.map((s) => {
                  let Icon = null;
                  if (s.icon === "FaGithub") Icon = FaGithub;
                  if (s.icon === "FaLinkedin") Icon = FaLinkedin;
                  return (
                    <li key={s.name}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {Icon && (
                          <Icon
                            style={{ verticalAlign: "middle", marginRight: 6 }}
                          />
                        )}
                        {s.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off">
            <div className="form-row">
              <label htmlFor="name">Full Name</label>
              <input
                className="text-dark"
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name || ""}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                className="text-dark"
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email || ""}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject (optional)</label>
              <input
                className="text-dark"
                id="subject"
                name="subject"
                type="text"
                placeholder="Project inquiry"
                value={form.subject}
                onChange={onChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                className="text-dark"
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={onChange}
                required
                maxLength={1000}
                rows={6}
              />
              <div className="char-count">{form.message.length}/1000</div>
            </div>

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                className="text-dark"
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-outline-primary"
                disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              <p className="privacy-note">Your info is used only to respond.</p>
            </div>
            {status === "success" && (
              <div className="form-success">
                Thank you! Your message has been sent.
              </div>
            )}
            {status && status.type === "error" && (
              <div className="form-error">
                Sorry, there was a problem sending your message. Please try
                again later.
                <br />
                {status.message && (
                  <span className="form-warning">{status.message}</span>
                )}
              </div>
            )}
          </form>
        </div>
      </AnimateSection>
    </>
  );
}
