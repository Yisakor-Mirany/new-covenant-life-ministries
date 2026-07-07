export const siteConfig = {
  name: "New Covenant Life Ministries",
  shortName: "NCLM",
  tagline: "Raising Servant Leaders. Restoring Families. Renewing Nations.",
  description:
    "New Covenant Life Ministries equips servant leaders, strengthens marriages and families, and empowers youth through transformational, Christ-centered leadership development across Ethiopia and beyond.",
  url: "https://www.newcovenantlifeministries.org",
  email: "info@newcovenantlifeministries.org",
  phone: "+251 911 000 000",
  address: "Bole Road, Addis Ababa, Ethiopia",
  officeHours: "Monday – Friday, 9:00 AM – 5:00 PM (EAT)",
  social: {
    facebook: "https://facebook.com/newcovenantlifeministries",
    instagram: "https://instagram.com/newcovenantlifeministries",
    youtube: "https://youtube.com/@newcovenantlifeministries",
    twitter: "https://x.com/nclministries",
  },
  founder: "Founder & President",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "All Programs",
        href: "/programs",
        description: "Explore our full leadership development portfolio",
      },
      {
        label: "Transformational Leadership & Family Development",
        href: "/programs/transformational-leadership-and-family-development",
        description: "Our flagship holistic leadership program (TLFDP)",
      },
      {
        label: "Servant Leadership Development",
        href: "/programs/servant-leadership-development",
        description: "Christ-centered leadership formation",
      },
      {
        label: "Youth Leadership Development",
        href: "/programs/youth-leadership-development",
        description: "Equipping the next generation of leaders",
      },
      {
        label: "Christian Marriage Leadership",
        href: "/programs/christian-marriage-leadership",
        description: "Building healthy, Christ-centered marriages",
      },
    ],
  },
  {
    label: "Ministries",
    href: "/leadership-academy",
    children: [
      {
        label: "Leadership Academy",
        href: "/leadership-academy",
        description: "Courses, cohorts, and certification",
      },
      {
        label: "Youth Development",
        href: "/youth-development",
        description: "Bible study, entrepreneurship, mentorship",
      },
      {
        label: "Marriage Ministry",
        href: "/marriage-ministry",
        description: "Courses, counseling, and family resources",
      },
    ],
  },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Get Involved", href: "/get-involved", description: "Volunteer, partner, and serve" },
      { label: "Donate", href: "/donate", description: "Fuel transformation across communities" },
      { label: "Contact Us", href: "/contact", description: "Reach our team" },
    ],
  },
] as const;

export const FOOTER_LINKS = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Statement of Faith", href: "/about#statement-of-faith" },
    { label: "Impact & Reports", href: "/impact" },
    { label: "Careers", href: "/get-involved" },
  ],
  programs: [
    { label: "TLFDP", href: "/programs/transformational-leadership-and-family-development" },
    { label: "Servant Leadership", href: "/programs/servant-leadership-development" },
    { label: "Youth Leadership", href: "/programs/youth-leadership-development" },
    { label: "Marriage Leadership", href: "/programs/christian-marriage-leadership" },
  ],
  resources: [
    { label: "Blog", href: "/resources" },
    { label: "Sermons & Teaching", href: "/resources#sermons" },
    { label: "Downloads", href: "/resources#downloads" },
    { label: "Events", href: "/events" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
} as const;
