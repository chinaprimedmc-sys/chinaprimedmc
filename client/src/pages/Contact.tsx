import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { MapPin, Mail, MessageCircle, CheckCircle } from "lucide-react";

const MESSAGE_TEMPLATES = [
  {
    label: "Cultural Tour",
    text: "I'm interested in a cultural immersion tour of China. I'd love to explore ancient temples, local traditions, and authentic cuisine. Please help me plan an itinerary.",
  },
  {
    label: "Family Trip",
    text: "We are planning a family trip to China and would like a child-friendly itinerary covering iconic landmarks and fun activities. Please suggest suitable destinations and duration.",
  },
  {
    label: "Culinary Journey",
    text: "I'm passionate about food and would love a culinary-focused journey through China — cooking classes, local markets, and regional specialties. Can you design a bespoke experience?",
  },
  {
    label: "Corporate / B2B",
    text: "We are organising a corporate group trip to China for our team. We need help with logistics, cultural activities, and team-building experiences. Please get in touch.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    travelersCount: "",
    estimatedTravelTime: "",
    travelStyle: "",
    budgetRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setError("");
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const applyTemplate = (text: string) => {
    setForm((prev) => ({ ...prev, message: text }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in Name, Email, and Message.");
      return;
    }
    submitMutation.mutate(form);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #E2E8F0",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
    outline: "none",
    fontFamily: "'Lora', Georgia, serif",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#64748B",
    marginBottom: "6px",
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", paddingTop: "72px" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A373", marginBottom: "16px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
          Get In Touch
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#FFFFFF", marginBottom: "16px", letterSpacing: "-0.02em", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          Begin Your Journey
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94A3B8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7, fontFamily: "'Lora', Georgia, serif" }}>
          Tell us about your dream China experience. Our experts will craft a personalised itinerary just for you.
        </p>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }} className="contact-layout">

          {/* Left — Contact Info */}
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#0F172A", marginBottom: "8px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Contact Details
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "40px", lineHeight: 1.7, fontFamily: "'Lora', Georgia, serif" }}>
              We respond to all enquiries within 24 hours. For urgent requests, WhatsApp is fastest.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                {
                  icon: <MessageCircle size={20} />,
                  label: "WhatsApp",
                  value: "+44 7985 052302",
                  href: "https://wa.me/447985052302",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "Chinaprimedmc@gmail.com",
                  href: "mailto:Chinaprimedmc@gmail.com",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Headquarters",
                  value: "Guangzhou, Guangdong, China",
                  href: null,
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Offices",
                  value: "13 cities across China",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#FDF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4A373", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "4px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.95rem", color: "#0F172A", textDecoration: "none", fontFamily: "'Lora', Georgia, serif" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#D4A373"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#0F172A"; }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.95rem", color: "#0F172A", fontFamily: "'Lora', Georgia, serif", margin: 0 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/447985052302"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "40px",
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                padding: "14px 28px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                fontFamily: "'Montserrat', sans-serif",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1ebe5d"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#25D366"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 40px", backgroundColor: "#F0FDF4", borderRadius: "16px", border: "1px solid #BBF7D0" }}>
                <CheckCircle size={56} style={{ color: "#16A34A", margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: "1.8rem", fontWeight: 400, color: "#0F172A", marginBottom: "12px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Enquiry Received!
                </h3>
                <p style={{ fontSize: "1rem", color: "#475569", lineHeight: 1.7, fontFamily: "'Lora', Georgia, serif" }}>
                  Thank you for reaching out. Our team will review your enquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", country: "", travelersCount: "", estimatedTravelTime: "", travelStyle: "", budgetRange: "", message: "" });
                  }}
                  style={{ marginTop: "24px", padding: "12px 28px", backgroundColor: "#D4A373", color: "#FFFFFF", border: "none", borderRadius: "50px", cursor: "pointer", fontSize: "0.9rem", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: "#F8F9FA", borderRadius: "16px", padding: "40px", border: "1px solid #E2E8F0" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#0F172A", marginBottom: "8px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Send an Enquiry
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "32px", fontFamily: "'Lora', Georgia, serif" }}>
                  Fields marked * are required.
                </p>

                {/* Name + Email */}
                <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }} />
                  </div>
                </div>

                {/* Phone + Country */}
                <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="" style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Country of Residence</label>
                    <input name="country" value={form.country} onChange={handleChange} placeholder="" style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }} />
                  </div>
                </div>

                {/* Travelers + Travel Duration */}
                <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                  <div>
                    <label style={labelStyle}>Number of Travellers</label>
                    <select name="travelersCount" value={form.travelersCount} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                      <option value="">Select...</option>
                      <option value="1">Solo (1)</option>
                      <option value="2">Couple (2)</option>
                      <option value="3-5">Small Group (3–5)</option>
                      <option value="6-10">Group (6–10)</option>
                      <option value="10+">Large Group (10+)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Trip Duration</label>
                    <select name="estimatedTravelTime" value={form.estimatedTravelTime} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                      <option value="">Select...</option>
                      <option value="3-5 days">3–5 days</option>
                      <option value="7-10 days">7–10 days</option>
                      <option value="14 days">14 days</option>
                      <option value="21 days">21 days</option>
                      <option value="21+ days">21+ days</option>
                      <option value="Flexible">Flexible / Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={labelStyle}>Budget Range (per person)</label>
                  <select name="budgetRange" value={form.budgetRange} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}>
                    <option value="">Select...</option>
                    <option value="Under $3,000">Under $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* Message with Templates */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={labelStyle}>Your Message *</label>

                  {/* Template Buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    <p style={{ width: "100%", fontSize: "0.8rem", color: "#94A3B8", fontFamily: "'Montserrat', sans-serif", margin: "0 0 4px 0" }}>
                      Quick templates:
                    </p>
                    {MESSAGE_TEMPLATES.map((tpl) => (
                      <button
                        key={tpl.label}
                        type="button"
                        onClick={() => applyTemplate(tpl.text)}
                        style={{
                          padding: "6px 14px",
                          borderRadius: "20px",
                          border: "1px solid #D4A373",
                          backgroundColor: form.message === tpl.text ? "#D4A373" : "transparent",
                          color: form.message === tpl.text ? "#FFFFFF" : "#D4A373",
                          fontSize: "0.8rem",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 500,
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (form.message !== tpl.text) {
                            e.currentTarget.style.backgroundColor = "#FDF8F0";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (form.message !== tpl.text) {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }
                        }}
                      >
                        {tpl.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your dream China journey — destinations, interests, special occasions, or any questions..."
                    required
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#D4A373"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "#E2E8F0"; }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "8px", padding: "12px 16px", marginBottom: "20px", color: "#DC2626", fontSize: "0.9rem", fontFamily: "'Lora', Georgia, serif" }}>
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: submitMutation.isPending ? "#A0856A" : "#D4A373",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "'Montserrat', sans-serif",
                    cursor: submitMutation.isPending ? "not-allowed" : "pointer",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { if (!submitMutation.isPending) e.currentTarget.style.backgroundColor = "#B8860B"; }}
                  onMouseLeave={(e) => { if (!submitMutation.isPending) e.currentTarget.style.backgroundColor = "#D4A373"; }}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
