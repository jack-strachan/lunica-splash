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
        graphicId: "collections-monitoring",
      },
      {
        title: "Proactive\nfollow-up",
        description:
          "Automatically reach out before invoices go overdue, so your team stays ahead instead of reacting late.",
        graphicId: "collections-followup",
      },
      {
        title: "Invoice\nconfirmation",
        description:
          "Verify receipt and correctness early to reduce avoidable delays, confusion, and last-minute disputes.",
        graphicId: "collections-confirmation",
      },
      {
        title: "Smart\nescalation",
        description:
          "Route high-risk accounts, exceptions, and stalled invoices to the right owner at the right time.",
        graphicId: "collections-escalation",
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
        graphicId: "credit-applications",
      },
      {
        title: "Faster\nunderwriting",
        description:
          "Collect the right information upfront so your team can review and approve accounts more efficiently.",
        graphicId: "credit-underwriting",
      },
      {
        title: "Automated\nrisk assessment",
        description:
          "Use rules and AI-powered signals to evaluate risk, surface concerns, and support better decisions.",
        graphicId: "credit-risk",
      },
      {
        title: "Clear approval\nworkflows",
        description:
          "Standardize how credit decisions are reviewed, approved, and documented across your team.",
        graphicId: "credit-approvals",
      },
    ],
  },
  {
    name: "Disputes",
    subtitle: "that resolves issues before they delay cash",
    href: "/disputes",
    tabs: [
      {
        title: "Resolution\ncopilot",
        description:
          "Move issues from triage to credit memo, approval, or customer confirmation with a clear audit trail.",
        graphicId: "disputes-resolution",
      },
      {
        title: "Proof of delivery\nupload",
        description:
          "Collect delivery receipts, photos, and supporting documents directly on the dispute case.",
        graphicId: "disputes-proof",
      },
      {
        title: "Team\ncollaboration",
        description:
          "Loop in sales, operations, credit, and AR with shared context so every issue moves forward.",
        graphicId: "disputes-collaboration",
      },
      {
        title: "Root-cause\nvisibility",
        description:
          "Spot recurring dispute drivers across customers, invoices, and teams so you can prevent repeat issues.",
        graphicId: "disputes-visibility",
      },
    ],
  },
  {
    name: "Online Payments",
    subtitle: "that makes paying easy",
    href: "/online-payments",
    tabs: [
      {
        title: "Shareable\npayment links",
        description:
          "Send payment links through email, text, or any channel to remove friction and speed up collection.",
        image: "/images/features/online-payment-links.png",
        graphicId: "payments-links",
      },
      {
        title: "Mobile-friendly\ncheckout",
        description:
          "Give customers a seamless payment experience that works smoothly across desktop and mobile.",
        graphicId: "payments-checkout",
      },
      {
        title: "Secure payment\nexperience",
        description:
          "Provide a trusted, modern flow that makes it easy for customers to pay quickly and confidently.",
        graphicId: "payments-secure",
      },
      {
        title: "Faster cash\ncollection",
        description:
          "Reduce delays between invoice delivery and payment by making the path to pay immediate.",
        graphicId: "payments-collection",
      },
    ],
  },
  {
    name: "Invoice Upload",
    subtitle: "Automatically upload and track your invoices",
    tabs: [
      {
        title: "Smart data\nextraction",
        description:
          "Extract invoice numbers, due dates, totals, customers, and line-level details without manual entry.",
        graphicId: "portal-invoices",
      },
      {
        title: "Automatic invoice\ncapture",
        description:
          "Pull invoices from email, portals, and shared inboxes so documents land in the right workflow automatically.",
        image: "/images/features/self-serve-payments.png",
        graphicId: "portal-self-serve",
      },
      {
        title: "Upload status\ntracking",
        description:
          "See which invoices were received, processed, matched, or need review from one clear status view.",
        graphicId: "portal-visibility",
      },
      {
        title: "Exception\nrouting",
        description:
          "Route missing fields, duplicates, and mismatches to the right teammate before they slow down processing.",
        graphicId: "portal-chasing",
      },
    ],
  },
  {
    name: "Customer Portal",
    subtitle: "that gives customers more control",
    href: "/customer-portal",
    tabs: [
      {
        title: "Self-service\naccount access",
        description:
          "Give customers a secure place to manage their account without relying on calls and email threads.",
        image: "/images/features/self-service-account-access.png",
        graphicId: "customer-portal-access",
      },
      {
        title: "One place\nfor documents",
        description:
          "Centralize invoices, statements, account details, and payment information in one branded experience.",
        graphicId: "customer-portal-documents",
      },
      {
        title: "Account activity\nhistory",
        description:
          "Show customers recent payments, document views, updates, and account changes in one transparent timeline.",
        graphicId: "customer-portal-activity",
      },
      {
        title: "Built for\nsales-led teams",
        description:
          "Support the way your organization works with a portal designed for real customer relationships and complexity.",
        graphicId: "customer-portal-sales",
      },
    ],
  },
]
