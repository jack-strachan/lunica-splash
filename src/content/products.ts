import type { ProductSectionData } from "@/components/marketing/product-section"

export const products: ProductSectionData[] = [
  {
    name: "Collections",
    subtitle: "that gets cash in faster",
    href: "/collections",
    tabs: [
      {
        title: "Invoice\nconfirmation",
        description:
          "Verify invoices before they are sent to customers to reduce avoidable delays, confusion, and last-minute disputes.",
        graphicId: "collections-confirmation",
      },
      {
        title: "Proactive\nfollow-up",
        description:
          "Automatically reach out before invoices go overdue, so your team stays ahead instead of reacting late.",
        graphicId: "collections-followup",
      },
      {
        title: "Always-on\nmonitoring",
        description:
          "Track open receivables continuously and trigger the next best action based on invoice status and behavior.",
        image: "/images/features/always-on-monitoring.png",
        graphicId: "collections-monitoring",
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
          "Standardize how credit decisions are handled across your team, with instant approval you control.",
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
    subtitle: "that keeps portals from delaying cash",
    href: "/invoice-upload",
    tabs: [
      {
        title: "Automatic portal\nupload",
        description:
          "Upload invoices into Coupa, SAP Ariba, and other portals automatically, with AI that adapts when portals change.",
        graphicId: "portal-invoices",
      },
      {
        title: "Secure credential\nhandling",
        description:
          "Connect the portals your customers require without storing credentials inside Lunica systems.",
        graphicId: "portal-self-serve",
      },
      {
        title: "Portal status\ntracking",
        description:
          "Track every portal submission and instantly know when an invoice is accepted, disputed, or needs an update.",
        graphicId: "portal-visibility",
      },
      {
        title: "Exception\nresolution",
        description:
          "Fix portal issues automatically when possible and route anything that needs your team before payment is delayed.",
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
        title: "What customers\nactually owe",
        description:
          "Show customers their current balance, open invoices, credits, and the exact amount due before they pay.",
        graphicId: "customer-portal-access",
      },
      {
        title: "Customizable\ncard fees",
        description:
          "Configure compliant card convenience fees with triggers for past-due balances, large invoices, customers, or payment methods.",
        graphicId: "customer-portal-documents",
      },
      {
        title: "Pay by\njob",
        description:
          "Let customers review balances by job, select the work they want to pay for, and reconcile payments faster.",
        graphicId: "customer-portal-activity",
      },
      {
        title: "Built for\nsales-led teams",
        description:
          "Put each customer’s salesperson, photo, expertise, and contact details front and center inside the portal.",
        graphicId: "customer-portal-sales",
      },
    ],
  },
]
