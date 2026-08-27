import { defineField, defineType } from "sanity";

export const profileType = defineType({
    name: "profile",
    title: "Profile Settings",
    type: "document",

    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "professionalTitle",
            title: "Professional Title",
            type: "string",
            description: "Example: Quality Assurance Lead",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "headline",
            title: "Short Headline",
            type: "string",
            description: "Example: Quality Assurance • Agile • AI",
        }),

        defineField({
            name: "introduction",
            title: "Short Introduction",
            type: "text",
            rows: 4,
            description: "This will appear in the main section of your homepage.",
            validation: (rule) => rule.required().max(400),
        }),

        defineField({
            name: "about",
            title: "About Me",
            type: "text",
            rows: 8,
            description: "Your longer professional and personal introduction.",
        }),

        defineField({
            name: "ministryStatement",
            title: "Technology and Ministry Statement",
            type: "text",
            rows: 5,
            description:
                "Describe how you want to use technology and your profession for ministry.",
        }),

        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description: "Example: Professional portrait of Dhods Soledad",
                }),
            ],
        }),

        defineField({
            name: "resume",
            title: "Résumé PDF",
            type: "file",
            description:
                "Upload your newest résumé here whenever it needs to be replaced.",
            options: {
                accept: "application/pdf",
            },
        }),

        defineField({
            name: "email",
            title: "Email Address",
            type: "string",
        }),

        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "Example: Taguig City, Philippines",
        }),

        defineField({
            name: "linkedInUrl",
            title: "LinkedIn URL",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),

        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url",
            validation: (rule) =>
                rule.uri({
                    scheme: ["http", "https"],
                }),
        }),

        defineField({
            name: "availability",
            title: "Availability or Opportunity Statement",
            type: "string",
            description:
                "Example: Open to QA leadership, Agile, AI, and ministry opportunities.",
        }),
    ],

    preview: {
        select: {
            title: "fullName",
            subtitle: "professionalTitle",
            media: "profileImage",
        },
    },
});