// ─────────────────────────────────────────────────────────────
//  إعدادات الموقع — عدّل هنا فقط. النصوص والأسعار في lib/content.ts
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.orazed.net", // ← بدون / في الآخر
  agency: "Grandeur Spaces",

  phoneIntl: "+201277707799",
  phoneDisplay: "01277707799",
  whatsapp: "201277707799",
  email: "leads@orazed.org",

  web3forms: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "f32b5f2a-7f7f-4e45-bafc-39a7fea3e25a",

  // Google Ads
  gtag: "",
  conv: {
    form: "",
    whatsapp: "",
    call: "",
  },

  // Google Tag Manager (اختياري — سيبه فاضي لو مش محتاجه)
  gtm: "",

  agencyCredit: { name: "One Click", url: "" },
} as const;

export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
export const isWeb3Ready = () => site.web3forms.length > 20 && !site.web3forms.startsWith("YOUR_");
