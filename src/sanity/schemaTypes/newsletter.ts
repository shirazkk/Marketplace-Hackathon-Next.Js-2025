import { defineType, defineField } from "sanity";

export const newsletterSchema = defineType({
  name: "newsletter",
  title: "Newsletter Subscriptions",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.required().email().error("Please enter a valid email address."),
    }),
    defineField({
      name: "createdAt",
      title: "Subscribed On",
      type: "datetime",
      initialValue: new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
