export type Locale = "en" | "am";

export const locales: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "am", label: "Amharic", nativeLabel: "አማርኛ" },
];

export interface Dictionary {
  nav: {
    about: string;
    programs: string;
    ministries: string;
    impact: string;
    events: string;
    resources: string;
    getInvolved: string;
    donate: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    viewAll: string;
    registerNow: string;
    donateNow: string;
    subscribe: string;
    submit: string;
    sending: string;
    backToTop: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterCopy: string;
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      programs: "Programs",
      ministries: "Ministries",
      impact: "Impact",
      events: "Events",
      resources: "Resources",
      getInvolved: "Get Involved",
      donate: "Donate",
      contact: "Contact",
    },
    hero: {
      eyebrow: "New Covenant Life Ministries",
      headline: "Raising Servant Leaders. Restoring Families. Renewing Nations.",
      subhead:
        "We equip Christ-centered leaders, strengthen marriages, and empower youth to transform communities across Ethiopia and beyond.",
      ctaPrimary: "Explore Our Programs",
      ctaSecondary: "Give Today",
    },
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      viewAll: "View All",
      registerNow: "Register Now",
      donateNow: "Donate Now",
      subscribe: "Subscribe",
      submit: "Submit",
      sending: "Sending…",
      backToTop: "Back to top",
    },
    footer: {
      newsletterTitle: "Stay Connected",
      newsletterCopy:
        "Get stories of transformation and ministry updates delivered to your inbox.",
      rights: "All rights reserved.",
    },
  },
  am: {
    nav: {
      about: "ስለ እኛ",
      programs: "ፕሮግራሞች",
      ministries: "አገልግሎቶች",
      impact: "ተጽዕኖ",
      events: "ዝግጅቶች",
      resources: "ግብዓቶች",
      getInvolved: "ይሳተፉ",
      donate: "ይለግሱ",
      contact: "አግኙን",
    },
    hero: {
      eyebrow: "አዲስ ኪዳን ሕይወት አገልግሎት",
      headline: "አገልጋይ መሪዎችን ማፍራት፤ ቤተሰቦችን መመለስ፤ ብሔራትን ማደስ።",
      subhead:
        "በኢትዮጵያ እና ከዚያም ባሻገር ማህበረሰቦችን ለመለወጥ ክርስቶስ ማዕከል ያደረጉ መሪዎችን እናዘጋጃለን፣ ትዳሮችን እናጠናክራለን፣ ወጣቶችንም እናበረታታለን።",
      ctaPrimary: "ፕሮግራሞቻችንን ይመልከቱ",
      ctaSecondary: "ዛሬ ይለግሱ",
    },
    common: {
      readMore: "ተጨማሪ ያንብቡ",
      learnMore: "የበለጠ ይወቁ",
      viewAll: "ሁሉንም ይመልከቱ",
      registerNow: "አሁን ይመዝገቡ",
      donateNow: "አሁን ይለግሱ",
      subscribe: "ይመዝገቡ",
      submit: "ላክ",
      sending: "በመላክ ላይ…",
      backToTop: "ወደ ላይ ተመለስ",
    },
    footer: {
      newsletterTitle: "ግንኙነት ይኑረን",
      newsletterCopy: "የለውጥ ታሪኮችን እና የአገልግሎት ዝማኔዎችን በኢሜይል ይቀበሉ።",
      rights: "መብቱ በህግ የተጠበቀ ነው።",
    },
  },
};
