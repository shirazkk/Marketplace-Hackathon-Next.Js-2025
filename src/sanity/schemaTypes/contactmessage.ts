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
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "subject",
            title: "Subject",
            type: "string",
        }),
        defineField({
            name: "usermessage",
            title: "Message",
            type: "text",
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
        }),
    ],
});
