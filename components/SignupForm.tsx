"use client";

import { useState } from "react";

const ALL_INTERESTS = [
  "Gut Health", "Hormones", "Cardio", "Cognition / Brain",
  "Energy & Mitochondria", "Toxins & Detox", "Nutrition", "Longevity",
];

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

interface FormData {
  firstName: string; lastName: string; email: string; phone: string;
  city: string; state: string; interests: string[]; hasProvider: string; consent: boolean;
}

const defaultData: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  city: "", state: "", interests: [], hasProvider: "", consent: false,
};

export default function SignupForm() {
  const [data, setData] = useState<FormData>(defaultData);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k: keyof FormData, v: string | boolean | string[]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }));
  };

  const toggleInterest = (i: string) => {
    setData((d) => ({
      ...d,
      interests: d.interests.includes(i)
        ? d.interests.filter((x) => x !== i)
        : [...d.interests, i],
    }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!data.firstName.trim()) errs.firstName = "Required";
    if (!data.lastName.trim()) errs.lastName = "Required";
    if (!data.email.trim()) errs.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.phone.trim()) errs.phone = "Required";
    else if (data.phone.replace(/\D/g, "").length < 10) errs.phone = "10-digit phone";
    if (!data.state) errs.state = "Pick a state";
    if (!data.consent) errs.consent = "Please agree to continue";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 900);
  };

  if (done) {
    return (
      <div className="form-card">
        <div className="form-card-bar" />
        <div className="form-success">
          <div className="check" aria-hidden="true" />
          <h3>You&apos;re on the list, {data.firstName}.</h3>
          <p>We&apos;ll match you with a Vibrant-trained provider in {data.state} and email instructions within 24 hours.</p>
          <div className="confirm-card">
            <div className="label">Confirmation</div>
            <div>Sent to <strong>{data.email}</strong></div>
          </div>
          <button className="btn-secondary" onClick={() => { setDone(false); setData(defaultData); }}>
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="form-card-bar" />
      <h3>Get matched at the booth</h3>
      <p className="sub">Fill this out and a Vibrant team member will pair you with a certified provider, plus give you a Beyond-exclusive starter offer.</p>

      <div className="form-row two">
        <div className={`field ${errors.firstName ? "error" : ""}`}>
          <label htmlFor="fn">First name</label>
          <input id="fn" type="text" value={data.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="Alex" />
          {errors.firstName && <div className="err-msg">{errors.firstName}</div>}
        </div>
        <div className={`field ${errors.lastName ? "error" : ""}`}>
          <label htmlFor="ln">Last name</label>
          <input id="ln" type="text" value={data.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Rivera" />
          {errors.lastName && <div className="err-msg">{errors.lastName}</div>}
        </div>
      </div>

      <div className={`field ${errors.email ? "error" : ""}`}>
        <label htmlFor="em">Email</label>
        <input id="em" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="alex@example.com" />
        {errors.email && <div className="err-msg">{errors.email}</div>}
      </div>

      <div className="form-row two">
        <div className={`field ${errors.phone ? "error" : ""}`}>
          <label htmlFor="ph">Phone</label>
          <input id="ph" type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 555-0142" />
          {errors.phone && <div className="err-msg">{errors.phone}</div>}
        </div>
        <div className={`field ${errors.state ? "error" : ""}`}>
          <label htmlFor="st">State</label>
          <select id="st" value={data.state} onChange={(e) => update("state", e.target.value)}>
            <option value="">Select…</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <div className="err-msg">{errors.state}</div>}
        </div>
      </div>

      <div className="field">
        <label>
          Areas of interest{" "}
          <span style={{ textTransform: "none", letterSpacing: 0, color: "#9aa3b3", fontFamily: "var(--font-sans)", fontSize: 11, marginLeft: 6 }}>optional</span>
        </label>
        <div className="interest-chips">
          {ALL_INTERESTS.map((it) => (
            <button key={it} type="button" className={`chip ${data.interests.includes(it) ? "on" : ""}`} onClick={() => toggleInterest(it)}>
              <span className="dot" />{it}
            </button>
          ))}
        </div>
      </div>

      <label className={`consent ${errors.consent ? "error" : ""}`} style={errors.consent ? { color: "#d04545" } : {}}>
        <input type="checkbox" checked={data.consent} onChange={(e) => update("consent", e.target.checked)} />
        <span>I agree to be contacted by Vibrant Wellness and a partnered provider about my interest. We never share your information with third parties.</span>
      </label>

      <button className="btn-primary" type="submit" disabled={submitting}>
        {submitting ? "Submitting…" : "Match me with a provider"}
        {!submitting && (
          <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </button>

      <div className="form-foot">
        <span>HIPAA Compliant</span><span className="sep" /><span>CLIA Certified Lab</span><span className="sep" /><span>No Spam</span>
      </div>
    </form>
  );
}
