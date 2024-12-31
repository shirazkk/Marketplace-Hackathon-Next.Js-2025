import { Rule } from "sanity";

export const TopCategories = {
    name: "topproducts",
    title: "TopProducts",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: Rule) => Rule.required().error("Image is required."),
        },
        {
            name: "productname",
            title: "Product Name",
            type: "string",
            validation: (Rule: Rule) =>
                Rule.required()
                    .min(3)
                    .error("Product name is required and should have at least 3 characters."),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "productname",
                maxLength: 96,
            },
            validation: (Rule: Rule) => Rule.required().error("Slug is required."),
        },
        {
            name: "quantityofproduct",
            title: "Quantity of Product",
            type: "number",
            validation: (Rule: Rule) =>
                Rule.required()
                    .integer()
                    .positive()
                    .error("Quantity is required and must be a positive integer."),
        },

    ],
};
