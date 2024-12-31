import { defineField, defineType } from "sanity";

export const contactMessage = defineType({
    name: "contactmessage",
    title: "Contact Message",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "subject",
            title: "Subject",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "usermessage",
            title: "Message",
            type: "text",
            validation: (Rule) => Rule.required().min(10),
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
