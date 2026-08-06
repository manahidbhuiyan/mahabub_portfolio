export const contactContent = {
  eyebrow: "Contact",
  title: "Let's Build Something Amazing Together.",
  description:
    "Whether you're hiring, launching a product, or looking for a collaborator — I'd love to hear from you. Reach out and let's talk about what we can create.",
  availability: {
    label: "Available for opportunities",
    detail: "Open to full-time roles, freelance projects, and thoughtful collaborations.",
  },
  info: {
    location: {
      label: "Location",
      value: "Uttara, Dhaka, Bangladesh",
    },
    timezone: {
      label: "Timezone",
      value: "BST (UTC+6)",
    },
    response: {
      label: "Response time",
      value: "Usually within 24 hours",
    },
  },
  form: {
    title: "Compose a message",
    subtitle:
      "Fill this in and I’ll open your email client with the message ready to send.",
    submit: "Open email client",
    submitting: "Opening email…",
    successTitle: "Email client opened",
    successBody:
      "Your email app should open with this message filled in. If nothing opened, email me directly.",
    errorTitle: "Couldn’t open email",
    errorBody: "Please try again, or email me directly — I’m happy to connect.",
    reset: "Compose another",
  },
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    subject: { label: "Subject", placeholder: "Role, project, or collaboration" },
    message: {
      label: "Message",
      placeholder:
        "Tell me about the opportunity, timeline, and how I can help.",
    },
  },
} as const;
