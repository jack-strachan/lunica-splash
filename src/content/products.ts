import type { ProductSectionData } from "@/components/marketing/product-section"

export const products: ProductSectionData[] = [
  {
    name: "Collections",
    subtitle: "that gets cash in faster",
    href: "/collections",
    tabs: [
      {
        title: "Always-on\nmonitoring",
        description:
          "Track open receivables continuously and trigger the next best action based on invoice status and behavior.",
        image: "/images/features/always-on-monitoring.png",
      },
      {
        title: "Proactive\nfollow-up",
        description:
          "Automatically reach out before invoices go overdue, so your team stays ahead instead of reacting late.",
      },
      {
        title: "Invoice\nconfirmation",
        description:
          "Verify receipt and correctness early to reduce avoidable delays, confusion, and last-minute disputes.",
      },
      {
        title: "Smart\nescalation",
        description:
          "Route high-risk accounts, exceptions, and stalled invoices to the right owner at the right time.",
      },
    ],
  },
  {
    name: "Credit",
    subtitle: "that helps you approve with confidence",
    href: "/credit",
    tabs: [
      {
        title: "Digital credit\napplications",
        description:
          "Replace PDFs and email threads with a clean, structured credit application experience for new customers.",
        image: "/images/features/digital-credit-applications.png",
      },
      {
        title: "Faster\nunderwriting",
        description:
          "Collect the right information upfront so your team can review and approve accounts more efficiently.",
      },
      {
        title: "Automated\nrisk assessment",
        description:
          "Use rules and AI-powered signals to evaluate risk, surface concerns, and support better decisions.",
      },
      {
        title: "Clear approval\nworkflows",
        description:
          "Standardize how credit decisions are reviewed, approved, and documented across your team.",
      },
    ],
  },
  {
    name: "Online Payments",
    subtitle: "that makes paying easy",
    tabs: [
      {
        title: "Shareable\npayment links",
        description:
          "Send payment links through email, text, or any channel to remove friction and speed up collection.",
        image: "/images/features/online-payment-links.png",
      },
      {
        title: "Mobile-friendly\ncheckout",
        description:
          "Give customers a seamless payment experience that works smoothly across desktop and mobile.",
      },
      {
        title: "Secure payment\nexperience",
        description:
          "Provide a trusted, modern flow that makes it easy for customers to pay quickly and confidently.",
      },
      {
        title: "Faster cash\ncollection",
        description:
          "Reduce delays between invoice delivery and payment by making the path to pay immediate.",
      },
    ],
  },
  {
    name: "Payments Portal",
    subtitle: "that keeps every invoice in one place",
    tabs: [
      {
        title: "Self-serve\npayments",
        description:
          "Let customers pay on their own time without needing your team to resend links or documents.",
        image: "/images/features/self-serve-payments.png",
      },
      {
        title: "Centralized\ninvoice view",
        description:
          "Give customers a single place to review balances, open invoices, due dates, and payment history.",
      },
      {
        title: "Better payment\nvisibility",
        description:
          "Make status, activity, and outstanding amounts easy to understand for both your team and customers.",
      },
      {
        title: "Less manual\nchasing",
        description:
          "Cut down on back-and-forth by turning invoice review and payment into a simple self-serve workflow.",
      },
    ],
  },
  {
    name: "Customer Portal",
    subtitle: "that gives customers more control",
    tabs: [
      {
        title: "Self-service\naccount access",
        description:
          "Give customers a secure place to manage their account without relying on calls and email threads.",
        image: "/images/features/self-service-account-access.png",
      },
      {
        title: "One place\nfor documents",
        description:
          "Centralize invoices, statements, account details, and payment information in one branded experience.",
      },
      {
        title: "Dispute\nmanagement",
        description:
          "Create a clear workflow for questions and disputes so issues are surfaced and resolved faster.",
      },
      {
        title: "Built for\nsales-led teams",
        description:
          "Support the way your organization works with a portal designed for real customer relationships and complexity.",
      },
    ],
  },
]
