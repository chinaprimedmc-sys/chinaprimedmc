import { useMemo, useState } from "react";
import { Briefcase, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { EMAIL, WHATSAPP_URL } from "@/lib/data";
import MediaHero from "@/components/MediaHero";
import DarkImageSection from "@/components/DarkImageSection";
import { pageHeroImages } from "@/lib/heroImages";

const partnerTypes = [
  "Private traveler / family",
  "Couple",
  "Friends / small group",
  "Multi-generation family",
  "Senior travelers",
  "Muslim travelers",
  "Women travelers",
  "Other",
];

const programTypes = [
  "Private trip",
  "Family trip",
  "Luxury / VIP",
  "Multi-city China",
  "Muslim-friendly",
  "First-time China",
  "Senior-friendly",
  "Women-friendly",
  "Nature and photography",
];

const briefTemplates = [
  {
    label: "Private traveler",
    programType: "First-time China",
    message: [
      "Traveler profile:",
      "We are planning our own private China trip and would like help shaping the route.",
      "",
      "Travel window and group:",
      "Please advise based on our travel month, number of travelers, ages, comfort level, and preferred pace.",
      "",
      "Places or experiences we like:",
      "Classic China icons, scenic landscapes, food, culture, family-friendly experiences, Muslim-friendly planning, women-friendly flow, or senior-friendly pacing.",
      "",
      "What we need back:",
      "A suggested private route, how many days it should take, what can be customized, and what details you need before quoting.",
    ].join("\n"),
  },
  {
    label: "Private trip",
    programType: "Private trip",
    message: [
      "Client profile:",
      "Two private travelers looking for a custom China itinerary.",
      "",
      "Route or destinations:",
      "Please suggest the best route based on the travel window and preferred pace.",
      "",
      "Service expectations:",
      "Private guide, private transfers, quote-ready hotel options, key attraction tickets, and clear inclusions/exclusions.",
      "",
      "Important preferences:",
      "Preferred pace, hotel level, dietary needs, special interests, and any must-see places will be confirmed after your first proposal.",
    ].join("\n"),
  },
  {
    label: "Small group",
    programType: "Multi-city China",
    message: [
      "Group profile:",
      "We are planning a private China trip for a small group and need a practical, customizable itinerary.",
      "",
      "Expected group size:",
      "Please quote based on the group size entered above, and advise if pricing changes at key passenger numbers.",
      "",
      "Route requirements:",
      "Please recommend a practical route with realistic driving times, hotel standards, guide service, attraction tickets, and meal planning.",
      "",
      "What we need back:",
      "Suggested route, inclusions, exclusions, hotel category, guide/vehicle standard, cancellation terms, and operational notes.",
    ].join("\n"),
  },
  {
    label: "Muslim-friendly",
    programType: "Muslim-friendly",
    message: [
      "Traveler needs:",
      "We need a Muslim-friendly China trip with practical halal meal planning and prayer-time awareness.",
      "",
      "Route expectations:",
      "Please suggest destinations and attractions that work well for Muslim travelers, with realistic restaurant options and guide support.",
      "",
      "Service requirements:",
      "Halal-friendly meals where available, mosque or prayer-stop advice, private transfers, English-speaking guide, and clear notes where local options are limited.",
      "",
      "What we need back:",
      "Route recommendation, meal notes, inclusions, exclusions, and operational limitations if any.",
    ].join("\n"),
  },
  {
    label: "Family travel",
    programType: "Family trip",
    message: [
      "Family profile:",
      "We are planning a family-friendly China trip and need a route that balances culture, comfort, and activities for children.",
      "",
      "Child details:",
      "Please advise based on the children's ages, preferred pace, and any theme park or animal experiences that fit the route.",
      "",
      "Service requirements:",
      "Private transfers, family-friendly guide, hotel room configuration advice, child-friendly meals, and realistic daily timing.",
      "",
      "What we need back:",
      "Suggested route, family room options, included/excluded items, and practical notes for parents.",
    ].join("\n"),
  },
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
      "China Prime DMC private trip request",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `WhatsApp / phone: ${form.whatsapp}`,
      `Request type: ${form.partnerType}`,
      `Trip type: ${form.programType}`,
      `Number of travelers: ${form.groupSize}`,
      `Destinations / routing: ${form.destinations}`,
      `Travel window: ${form.travelWindow}`,
      `Budget level: ${form.budgetLevel}`,
      "",
      "Brief:",
      form.message,
    ].join("\n");
  }, [form]);

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Private China trip request")}&body=${encodeURIComponent(brief)}`;
  const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(brief)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const applyTemplate = (template: typeof briefTemplates[number]) => {
    setForm((prev) => ({
      ...prev,
      programType: prev.programType || template.programType,
      message: template.message,
    }));
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
      <MediaHero
        image={pageHeroImages.contact}
        alt="China Prime DMC private China trip planning consultation."
        eyebrow="Private China trip desk"
        title="Tell us what kind of China trip you are planning."
        body="Send a simple wish list, a rough route, or a fully formed plan. We will help shape the trip around your dates, pace, comfort level, dietary needs, family needs, and must-see places."
      >
          <div className="grid grid-cols-1 gap-px bg-white/20 sm:grid-cols-2">
            {[
              { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+44 7985 052302", href: WHATSAPP_URL },
              { icon: <Mail size={18} />, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: <MapPin size={18} />, label: "Base", value: "Guangzhou, China", href: null },
              { icon: <Briefcase size={18} />, label: "Best for", value: "Private trips, families, Muslim travelers, senior travelers", href: null },
            ].map((item) => (
              <div key={item.label} className="bg-black/56 p-6 backdrop-blur-sm">
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
      </MediaHero>

      <section className="mono-section bg-[var(--brand-gray-50)]">
        <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside>
            <p className="b2b-eyebrow">Brief structure</p>
            <h2 className="b2b-heading" style={{ fontSize: "clamp(2.2rem, 4vw, 4.2rem)" }}>A simpler way to start planning China.</h2>
            <div className="mt-10 grid gap-px bg-[var(--brand-border)]">
              {[
                "Traveler profile and travel style",
                "Dates or season",
                "Number of travelers",
                "Preferred destinations or routing",
                "Hotel level and budget range",
                "Special needs: halal, accessibility, family, senior, women-friendly, VIP",
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
                <label style={labelStyle}>Family / group name *</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company, agency, or family name" style={inputStyle} required />
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
                <label style={labelStyle}>Request type</label>
                <select name="partnerType" value={form.partnerType} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  {partnerTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Trip type</label>
                <select name="programType" value={form.programType} onChange={handleChange} style={inputStyle}>
                  <option value="">Select...</option>
                  {programTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
              <div>
                <label style={labelStyle}>Number of travelers</label>
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
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <label style={{ ...labelStyle, marginBottom: 0 }}>Brief *</label>
                <div className="flex flex-wrap gap-2">
                  {briefTemplates.map((template) => (
                    <button
                      key={template.label}
                      type="button"
                      onClick={() => applyTemplate(template)}
                      className="border border-[var(--brand-border)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-gray-700)] transition-colors hover:border-[var(--brand-black)] hover:text-[var(--brand-black)]"
                    >
                      {template.label}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={10}
                placeholder="Tell us who is traveling, when you want to go, what you want to see, your pace, hotel style, dietary needs, and anything we should plan around."
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

      <DarkImageSection
        image="/trade-shows/icgte-2026-kuala-lumpur/china-prime-dmc-icgte-2026-kuala-lumpur-one-on-one-buyer-consultation.jpeg"
        alt="China Prime DMC private China trip planning support."
        eyebrow="Before you brief us"
        title="The more specific the wish list, the better the first route."
        body="Dates, traveler type, group size, hotel expectation, route idea, meal needs, and pace tell us which guides, vehicles, hotels, and daily timing make sense."
        actions={
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mono-button" style={{ backgroundColor: "var(--brand-white)", borderColor: "var(--brand-white)", color: "var(--brand-black)" }}>
            Send brief by WhatsApp <MessageCircle size={17} />
          </a>
        }
      >
        <div className="grid gap-px bg-white/20 sm:grid-cols-2">
          {["Route logic", "Private guides", "Ground delivery", "In-trip support"].map((item) => (
            <div key={item} className="bg-black/58 p-6 text-sm font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
      </DarkImageSection>
    </main>
  );
}
