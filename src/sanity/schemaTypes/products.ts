import { Rule } from "sanity";

export const Products = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Set the order of this product. Lower numbers will appear first.',
            validation: (Rule: Rule) => Rule.required().min(1),
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: Rule) => Rule.required().min(3).error("Name is required and should have at least 3 characters."),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: Rule) => Rule.required().error("Slug is required."),
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule: Rule) =>
                Rule.required()
                    .positive()
                    .precision(2)
                    .error("Price is required and must be a positive number."),
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule: Rule) =>
                Rule.required()
                    .min(10)
                    .max(500)
                    .error("Description is required and must be between 10 and 500 characters."),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: Rule) => Rule.required().error("Image is required."),
        },
    ],
};
