export const expertsContent = {
  hero: {
    badge: "LUNICA EXPERT NETWORK",
    heading: "Work with people who know collections",
    description:
      "Collections is a person-to-person industry. Our network of commission-based specialists brings real-world credit and AR expertise directly to your team — for sales, onboarding, and beyond.",
    primaryCta: {
      text: "Find your expert",
      href: "#experts",
    },
    secondaryCta: {
      text: "Talk to a specialist",
      href: "#match",
    },
  },
  experts: [
    {
      name: "Diana Reyes",
      title: "Collections & Credit Strategist",
      specialty: "Collections, Credit Risk",
      experience: "14 years",
      bio: "Former VP of Credit at a national distributor. Specializes in high-volume B2B collections and building scalable credit policies from the ground up.",
      industries: ["Distribution", "Manufacturing", "Wholesale"],
      avatar: null,
    },
    {
      name: "Marcus Webb",
      title: "Order-to-Cash Consultant",
      specialty: "Order-to-Cash, AR Automation",
      experience: "11 years",
      bio: "Built and led O2C operations at two Fortune 500 companies. Deep expertise in ERP integrations and reducing DSO through process re-engineering.",
      industries: ["Healthcare", "SaaS", "Retail"],
      avatar: null,
    },
    {
      name: "Priya Nair",
      title: "Commercial Credit Advisor",
      specialty: "Credit Underwriting, Risk Modeling",
      experience: "9 years",
      bio: "Credit analyst background at a major commercial bank. Now helps mid-market companies implement data-driven credit decisioning and scoring frameworks.",
      industries: ["Financial Services", "Staffing", "Construction"],
      avatar: null,
    },
    {
      name: "Tom Callahan",
      title: "AR Transformation Lead",
      specialty: "Collections, Onboarding, Process Design",
      experience: "17 years",
      bio: "Spent nearly two decades as a collections manager and AR director. Guides Lunica customers through implementation with hands-on, no-nonsense support.",
      industries: ["Distribution", "Food & Beverage", "Logistics"],
      avatar: null,
    },
    {
      name: "Sandra Kim",
      title: "Credit Policy Specialist",
      specialty: "Credit Policy, Dispute Resolution",
      experience: "12 years",
      bio: "Designed credit policies for enterprise and mid-market organizations. Skilled at navigating complex dispute workflows and aligning credit with sales.",
      industries: ["Technology", "Professional Services", "Manufacturing"],
      avatar: null,
    },
    {
      name: "James Okoye",
      title: "Collections Operations Expert",
      specialty: "Collections Ops, Team Training",
      experience: "10 years",
      bio: "Ran collections departments for two regional banks before moving into B2B AR consulting. Focused on getting teams productive on new systems fast.",
      industries: ["Banking", "Distribution", "Healthcare"],
      avatar: null,
    },
  ],
  whatExpertsDo: {
    badge: "WHAT EXPERTS DO",
    heading: "More than software support",
    description:
      "Lunica experts aren't account managers — they're practitioners who've worked in credit and collections for years. They show up for the hard conversations.",
    roles: [
      {
        icon: "TrendingUp",
        title: "Sales guidance",
        description:
          "Help you evaluate whether Lunica is the right fit before you commit. Honest, direct, and never just trying to close a deal.",
      },
      {
        icon: "BookOpen",
        title: "Domain expertise",
        description:
          "Deep knowledge of collections, credit underwriting, and order-to-cash workflows. They've done the job — they know what actually works.",
      },
      {
        icon: "Wrench",
        title: "Implementation & onboarding",
        description:
          "Hands-on support getting Lunica live in your environment. From data migration to workflow setup, they stay until you're running smoothly.",
      },
    ],
  },
  testimonials: [
    {
      quote:
        "Diana walked us through our entire collections process before we even signed. She identified three gaps in our credit policy that we hadn't noticed in years. That kind of insight before day one set the tone for everything.",
      author: "Rachel M.",
      role: "Director of Credit, Industrial Supply Co.",
    },
    {
      quote:
        "Tom was on a call with our team every week for the first two months. He wasn't just answering questions about the software — he was helping us think through how to actually run collections better. That's rare.",
      author: "Brian K.",
      role: "VP Finance, Regional Distributor",
    },
    {
      quote:
        "We were skeptical about another AR platform. Marcus took the time to map out our exact O2C workflow and showed us exactly how Lunica would plug in. That specificity won us over.",
      author: "Leena S.",
      role: "Controller, Healthcare Services Group",
    },
  ],
  cta: {
    badge: "GET MATCHED",
    heading: "Not sure where to start?",
    subheading: "We'll match you with the right expert.",
    description:
      "Tell us a bit about your team and what you're working on. We'll connect you with the expert whose background fits your situation.",
    primaryCta: {
      text: "Get matched",
      href: "/demo",
    },
    fields: [
      { label: "Your name", type: "text", placeholder: "Jane Smith" },
      { label: "Company", type: "text", placeholder: "Acme Corp" },
      {
        label: "Primary challenge",
        type: "select",
        placeholder: "Select one",
        options: [
          "Reducing DSO",
          "Credit policy & decisioning",
          "Collections automation",
          "Order-to-cash overhaul",
          "Software onboarding",
          "Other",
        ],
      },
      { label: "Work email", type: "email", placeholder: "jane@acmecorp.com" },
    ],
  },
}
