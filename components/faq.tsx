"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "How does PABoost secure my data?",
      answer:
        "We use enterprise-grade security with SOC 2 compliance and end-to-end encryption. All data is stored in secure Canadian data centers that comply with privacy regulations.",
    },
    {
      question: "Do you support on-prem or VPC?",
      answer:
        "Yes, we offer deployment options for both on-premises installations and Virtual Private Cloud environments for enterprise clients with specific security requirements.",
    },
    {
      question: "Are there volume discounts?",
      answer:
        "Yes, we provide tiered volume-based pricing for brokerages with multiple users. Contact our sales team for custom pricing options.",
    },
    {
      question: "Do you support SSO?",
      answer:
        "Yes, we support Single Sign-On integration with major identity providers including Okta, Azure AD, and Google Workspace.",
    },
    {
      question: "How can I help and manage multiple clients in my account?",
      answer:
        "Our platform includes a comprehensive client management dashboard that allows you to organize, track, and manage multiple clients efficiently from a single interface.",
    },
    {
      question: "Where can I see more resources?",
      answer:
        "Visit our resources page for webinars, guides, and documentation, or contact support@paboost.com for personalized assistance.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-accent transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
