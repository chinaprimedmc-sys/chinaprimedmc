import { useMemo, useState } from "react";
import { Briefcase, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";

const partnerTypes = [
  "Travel advisor / agency",
  "Tour operator",
  "DMC partner",
  "Corporate travel / incentive",
  "Education / special-interest group",
  "Other",
];

const programTypes = [
  "Private FIT",
  "Small group",
  "Luxury / VIP",
  "MICE / incentive",
  "Corporate delegation",
  "Student / education",
  "Muslim-friendly",
  "Family travel",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    partnerType: "",
    programType: "",
    groupSize: "",
    destinations: "",
    travelWindow: "",
    budgetLevel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const brief = useMemo(() => {
    return [
      "China Prime DMC partner quote request",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `WhatsApp / phone: ${form.whatsapp}`,
      `Partner type: ${form.partnerType}`,
      `Program type: ${form.programType}`,
      `Estimated group size: ${form.groupSize}`,
      `Destinations / routing: ${form.destinations}`,
      `Travel window: ${form.travelWindow}`,
      `Budget level: ${form.budgetLevel}`,
      "",
      "Brief:",
      form.message,
    ].join("\n");
  }, [form]);

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Partner quote request for China program")}&body=${encodeURIComponent(brief)}`;
  const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(brief)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please include your name, company, email, and a short brief.");
      return;
    }
    setSubmitted(true);
    window.location.href = mailtoHref;
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #D9D4CC",
    borderRadius: "6px",
    boxSizing: "border-box",
    color: "#111827",
    fontFamily: "'Lora', Georgia, serif",
    fontSize: "0.95rem",
    outline: "none",
    padding: "12px 14px",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    color: "#6B7280",
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    marginBottom: "7px",
    textTransform: "uppercase",
  };

  return (
    <main style={{ backgroundColor: "#FFFFFF", paddingTop: "72px" }}>
      <section style={{ backgroundColor: "#0F172A", padding: "92px 24px" }}>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="b2b-eyebrow">Partner quote desk</p>
            <h1
              style={{
                color: "#FFFFFF",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                fontWeight: 300,
                letterSpacing: "0",
                lineHeight: 1,
                marginBottom: "22px",
              }}
            >
              Send us your China brief.
            </h1>
            <p className="b2b-lede" style={{ color: "#CBD5E1" }}>
              Share the essentials and our partner desk will respond with routing advice, feasibility notes, and next-step quote requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+44 7985 052302", href: WHATSAPP_URL },
              { icon: <Mail size={20} />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: <MapPin size={20} />, label: "Base", value: "Guangzhou, China", href: null },
              { icon: <Briefcase size={20} />, label: "Best for", value: "B2B, groups, FIT, MICE", href: null },
            ].map((item) => (
              <div key={item.label} style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: 22 }}>
                <div style={{ color: "#D4A373", marginBottom: 12 }}>{item.icon}</div>
                <p style={{ color: "#94A3B8", fontFamily: "'Montserrat', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 6, textTransform: "uppercase" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} style={{ color: "#FFFFFF", fontFamily: "'Lora', Georgia, serif", fontSize: "0.98rem", textDecoration: "none" }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ color: "#FFFFFF", fontFamily: "'Lora', Georgia, serif", fontSize: "0.98rem", margin: 0 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <aside>
            <p className="b2b-eyebrow">What to include</p>
            <h2 className="b2b-heading">The better the brief, the faster the quote.</h2>
            <div className="mt-8 space-y-4">
              {[
                "Client profile and travel style",
                "Dates or season",
                "Estimated group size",
                "Preferred destinations or routing",
                "Hotel level and budget range",
                "Special needs: halal, accessibility, VIP, education, MICE",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Send size={16} style={{ color: "#D4A373", flexShrink: 0, marginTop: 5 }} />
                  <p className="b2b-body" style={{ margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </aside>

          <form onSubmit={handleSubmit} style={{ backgroundColor: "#F7F4EF", border: "1px solid #E5E0D8", padding: "clamp(24px, 4vw, 42px)" }}>
            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Full name *</label>
                <input name="name" value={form.name} onChange={handleChange} style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Company *</label>
                <input name="company" value={form.company} onChange={handleChange} style={inputStyle} required />
              </div>
            </div>

            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>WhatsApp / phone</label>
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Partner type</label>
                <select name="partnerType" value={form.partnerType} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  {partnerTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Program type</label>
                <select name="programType" value={form.programType} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  {programTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Estimated group size</label>
                <input name="groupSize" value={form.groupSize} onChange={handleChange} placeholder="e.g. 2 VIPs, 18 guests, 60 pax" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Travel window</label>
                <input name="travelWindow" value={form.travelWindow} onChange={handleChange} placeholder="e.g. October 2026" style={inputStyle} />
              </div>
            </div>

            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Destinations / routing</label>
                <input name="destinations" value={form.destinations} onChange={handleChange} placeholder="e.g. Beijing, Xi'an, Shanghai" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Budget level</label>
                <select name="budgetLevel" value={form.budgetLevel} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  <option value="Comfort">Comfort</option>
                  <option value="Premium">Premium</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Ultra-luxury">Ultra-luxury</option>
                  <option value="Flexible / need advice">Flexible / need advice</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Brief *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={7}
                placeholder="Tell us what your client or group needs, what is confirmed, and what still needs advice."
                required
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {error && (
              <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FCA5A5", color: "#B91C1C", fontFamily: "'Lora', Georgia, serif", fontSize: "0.92rem", marginBottom: 18, padding: "12px 14px" }}>
                {error}
              </div>
            )}

            {submitted && (
              <div style={{ backgroundColor: "#ECFDF5", border: "1px solid #86EFAC", color: "#166534", fontFamily: "'Lora', Georgia, serif", fontSize: "0.92rem", marginBottom: 18, padding: "12px 14px" }}>
                Your email app should open with the prepared brief. You can also send it by WhatsApp below.
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                style={{
                  alignItems: "center",
                  backgroundColor: "#D4A373",
                  border: "none",
                  borderRadius: "999px",
                  color: "#FFFFFF",
                  display: "inline-flex",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  gap: 8,
                  justifyContent: "center",
                  padding: "14px 24px",
                }}
              >
                Prepare Email Brief <Mail size={17} />
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  alignItems: "center",
                  border: "1px solid #111827",
                  borderRadius: "999px",
                  color: "#111827",
                  display: "inline-flex",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  gap: 8,
                  justifyContent: "center",
                  padding: "13px 22px",
                  textDecoration: "none",
                }}
              >
                Send by WhatsApp <MessageCircle size={17} />
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
