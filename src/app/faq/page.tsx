import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  const FAQSs = [
    {
      id: 1,
      FAQS: "What types of furniture do you offer at Comforty?",
      answer:
        "At Comforty, we specialize in high-quality furniture including ergonomic chairs, stylish sofas, wooden chairs, wing chairs, desk chairs, and park benches. Our collection is designed to provide comfort, style, and durability.",
    },
    {
      id: 2,
      FAQS: "How can I place an order on Comforty?",
      answer:
        "You can easily place an order by browsing our collection, selecting your preferred furniture, and proceeding to checkout. We offer secure online payments and multiple payment options, including credit/debit cards and online wallets.",
    },
    {
      id: 3,
      FAQS: "Do your chairs and sofas come with a warranty?",
      answer:
        "Yes, all our products come with a standard 1-year warranty covering manufacturing defects. For more details, visit our Warranty Policy page.",
    },
    {
      id: 4,
      FAQS: "How long does delivery take, and do you offer free shipping?",
      answer:
        "Delivery times vary based on your location. Typically, orders are delivered within 5-7 business days. We also offer free shipping on select items and bulk orders.",
    },
    {
      id: 5,
      FAQS: "Can I return a product if I’m not satisfied?",
      answer:
        "Yes, we offer a hassle-free return policy. If you're not satisfied with your purchase, you can return the product within 14 days. Please ensure the item is in its original condition. Read more on our Return Policy page.",
    },
    {
      id: 6,
      FAQS: "Do you offer installment plans or financing options?",
      answer:
        "Yes! Comforty offers easy installment plans through partner financing services. You can choose a payment plan that suits your budget at checkout.",
    },
    {
      id: 7,
      FAQS: "How do I clean and maintain my Comforty furniture?",
      answer:
        "Regular dusting and wiping with a damp cloth help maintain your furniture. For wooden chairs and tables, use a mild wood polish. For fabric sofas and chairs, vacuuming and spot-cleaning work best. Check our Furniture Care Guide for more details.",
    },
    {
      id: 8,
      FAQS: "Do you have a physical showroom where I can try the furniture?",
      answer:
        "Currently, we operate as an online furniture store. However, we offer a detailed return policy to ensure customer satisfaction. Keep an eye on our website for upcoming showroom openings.",
    },
    {
      id: 9,
      FAQS: "Can I customize my furniture order?",
      answer:
        "Yes, we offer customization on select furniture items, including size, color, and fabric. Contact our support team for personalized orders.",
    },
    {
      id: 10,
      FAQS: "Is Comforty available internationally?",
      answer:
        "Currently, we deliver across Pakistan. International shipping is coming soon! Stay tuned for updates on our website.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10 max-w-[1500px]">
      <div>
        <h1 className="text-5xl font-bold text-center mb-8">
          Frequently Asked FAQSs
        </h1>
        <p className="text-center text-fourth mb-12">
          Find answers to the most common FAQSs about our furniture, delivery,
          payments, and policies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-[95%] lg:w-[90%] xl:w-[80%] mx-auto gap-6 p-2 md:p-4">
        {FAQSs.map((item) => (
          <div
            key={item.id}
            className="bg-FAQS p-2 md:p-4 shadow-md rounded-lg"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  {item.FAQS}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
