import { Rule } from "sanity";

export const CompanyLogos = {
    name: 'compoanylogo',
    title: 'Companylogo',
    type: 'document',
    fields: [
        {
            name: 'logos',
            title: 'Logos',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: Rule) => Rule.required().error('Image is required.'),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,  
            },
            validation: (Rule: Rule) => Rule.required().error('Slug is required.'),
        },
    ],
};
