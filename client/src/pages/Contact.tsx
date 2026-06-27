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
    backgroundColor: "var(--brand-white)",
    border: "1px solid var(--brand-border)",
    borderRadius: 0,
    boxSizing: "border-box",
    color: "var(--brand-black)",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    padding: "13px 14px",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--brand-gray-600)",
    display: "block",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    fontSize: "0.7rem",
    fontWeight: 760,
    letterSpacing: "0.1em",
    marginBottom: "8px",
    textTransform: "uppercase",
  };

  return (
    <main style={{ backgroundColor: "var(--brand-white)", paddingTop: "72px" }}>
      <section className="mono-section bg-[var(--brand-black)] text-white">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="b2b-eyebrow" style={{ color: "var(--brand-gray-400)" }}>Partner quote desk</p>
            <h1 className="b2b-heading" style={{ color: "var(--brand-white)", maxWidth: 860 }}>
              Send a brief your operator can actually use.
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--brand-gray-800)] sm:grid-cols-2">
            {[
              { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+44 7985 052302", href: WHATSAPP_URL },
              { icon: <Mail size={18} />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: <MapPin size={18} />, label: "Base", value: "Guangzhou, China", href: null },
              { icon: <Briefcase size={18} />, label: "Best for", value: "B2B, groups, FIT, MICE", href: null },
            ].map((item) => (
              <div key={item.label} className="bg-[var(--brand-black)] p-6">
                <div className="mb-5 text-[var(--brand-gray-400)]">{item.icon}</div>
                <p className="mono-index mb-2" style={{ color: "var(--brand-gray-500)" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-semibold text-white" style={{ textDecoration: "none" }}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-white" style={{ margin: 0 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <p className="b2b-eyebrow">Brief structure</p>
            <h2 className="b2b-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 4.2rem)" }}>Faster quote, fewer follow-ups.</h2>
            <div className="mt-10 grid gap-px bg-[var(--brand-border)]">
              {[
                "Client profile and travel style",
                "Dates or season",
                "Estimated group size",
                "Preferred destinations or routing",
                "Hotel level and budget range",
                "Special needs: halal, accessibility, VIP, education, MICE",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 bg-[var(--brand-gray-50)] p-5">
                  <Send size={15} style={{ color: "var(--brand-black)", flexShrink: 0, marginTop: 4 }} />
                  <p className="b2b-body" style={{ margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="mono-card p-6 sm:p-8 lg:p-10">
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
              <div className="mb-5 border border-[var(--brand-black)] bg-white p-4 text-sm font-semibold text-[var(--brand-black)]">
                {error}
              </div>
            )}

            {submitted && (
              <div className="mb-5 border border-[var(--brand-border)] bg-[var(--brand-gray-100)] p-4 text-sm font-semibold text-[var(--brand-black)]">
                Your email app should open with the prepared brief. You can also send it by WhatsApp below.
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="mono-button">
                Prepare email <Mail size={17} />
              </button>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mono-button mono-button-secondary">
                Send by WhatsApp <MessageCircle size={17} />
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
