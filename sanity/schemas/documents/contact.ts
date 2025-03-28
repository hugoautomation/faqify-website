import { defineField, defineType } from "sanity";
import { PhoneCall } from "lucide-react";

export default defineType({
  name: "contact",
  title: "Contact Page",
  type: "document",
  icon: PhoneCall,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "tagline",
      type: "string",
      group: "content",
      description: "The tagline shown above the title (e.g. 'Get in Touch')",
      validation: (Rule) => Rule.required().error("Tagline is required"),
    }),
    defineField({
      name: "title",
      type: "string",
      group: "content",
      description: "The main title of the contact page",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "email",
      type: "string",
      group: "content",
      description: "Contact email address",
      validation: (Rule) =>
        Rule.required().email().error("A valid email address is required"),
    }),
    defineField({
      name: "officeHours",
      type: "object",
      group: "content",
      fields: [
        defineField({
          name: "days",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "hours",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "responseTime",
      type: "string",
      group: "content",
      description: "Expected response time message",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      type: "image",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      email: "email",
    },
    prepare({ title, email }) {
      return {
        title: "Contact Page Settings",
        subtitle: email,
      };
    },
  },
});
