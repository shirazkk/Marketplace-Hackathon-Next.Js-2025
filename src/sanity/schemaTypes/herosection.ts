import { Rule } from "sanity";

export const HeroSection = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'smallheading',
            title: 'SmallHeading',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().min(5).max(100).warning('Title should be between 5 and 100 characters.'),
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping in the Sanity Studio
            },
            validation: (Rule: Rule) => Rule.required().error('Image is required.'),
        },
    ],
};
