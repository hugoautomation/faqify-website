# Sanityblocks

Introducing Sanityblocks - a new Sanity Next.js Template that provides production-ready React components with pre-built Sanity schemas and GROQ queries.

Includes:

- Page Builder;
- 100+ blocks;
- Contact Form;
- Dynamic Navigation;
- Site Settings;
- Og Image Generator;
- Fully Integrated Sanity Typegen;
- Cursor Rules to generate GROQ queries, schemas, types and components.

![Screenshot of Sanity Studio using Presentation Tool to do Visual Editing](https://cdn.sanity.io/images/qsj7puih/production/1169bd414a1d91b5b7232aad6735b0a86de4288a-1366x692.png)

[![Next.js][next-js]][next-js-url] [![Sanity][sanity]][sanity-url] [![React][react]][react-url] [![Typescript][typescript]][typescript-url] [![Tailwind][tailwind]][tailwind-url] [![Shadcn][shadcn]][shadcn-url]

[Docs](https://docs.shadcnblocks.com/) | [Components](https://schemaui.com/docs/components) | [Demo](https://sanityblocks.schemaui.com/) | [Templates](https://schemaui.com/templates)

## Getting Started

### Installing the template

#### 1. Initialize template with Sanity CLI

Run the command in your Terminal to clone the repository:

```bash
git clone https://github.com/serge-0v/sanityblocks.git
```

#### 2. Install dependencies

```bash
pnpm install
```

#### 3. Create a new Sanity project

- Navigate to [Sanity](https://www.sanity.io/manage) and create a new project.
- Navigate to API and add CORS origins `http://localhost:3000`
- Add a new API token with read access (Viewer) and copy the token to .env as `SANITY_API_READ_TOKEN`
- Copy the project ID and dataset name and paste them to .env as `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Update `NEXT_PUBLIC_SANITY_DATASET` with `production` if you plan to work with only one dataset, otherwise use `development` and add dataset named `development` at Sanity Manage

#### 3. Run the template locally

Start the development servers:

```bash
pnpm dev
```

#### 4. Open the app and sign in to the Studio

- Open the Next.js app at [http://localhost:3000](http://localhost:3000)
- Open the Studio running locally in your browser on [http://localhost:3000/studio](http://localhost:3000/studio). You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

### Adding content with Sanity

#### 1. Import Sample Data (Optional)

Import the demo dataset to get started with sample content:

```bash
npx sanity dataset import sample-data.tar.gz production --replace
```

#### 2. Publish your first document

The template comes pre-defined with a schema containing `Author`, `Category`, `FAQ`, `Page`, `Post`, `Testimonial`, `Contact` and `Settings` document types.

From the Studio, click "+ Create" and select the `Page` document type. Go ahead and create and publish the document.

Your content should now appear in your Next.js app ([http://localhost:3000](http://localhost:3000))

#### 3. Extending the Sanity schema

The schema for the `Page` document type is defined in the `sanity/schemas/document/page.ts` file. You can [add more document types](https://www.sanity.io/docs/schema-types) to the schema to suit your needs.

### Deploying your application

#### 1. Configure CORS settings

Add your production URL to the CORS Origins in your Sanity project settings to allow your deployed site to communicate with Sanity.

#### 2. Deploy to Vercel

Deploy your website to Vercel:

1. Create a new repository on [GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
2. Push your code to GitHub
3. Create a [new Vercel project](https://vercel.com/new)
4. Connect your GitHub repository and import the project
5. Copy the environment variables from the `.env.local` file and paste them to your Vercel project settings. Vercel supports pasting all variables at once.
6. Deploy

### Inviting collaborators

Now that you've deployed your Next.js application and Sanity Studio, you can optionally invite a collaborator to your Studio. Open up [Manage](https://www.sanity.io/manage), select your project and click "Invite project members"

They will be able to access the deployed Studio, where you can collaborate together on creating content.

### Configuring Resend

To use the contact form, you need to configure Resend.

1. Create a new [Resend account](https://resend.com/signup)
2. Create a new [API key](https://resend.com/api-keys)
3. Add new domain to the [domains](https://resend.com/domains)
4. Set the API key and email address to send andreceive form submissions in the Vercel project settings or in the `.env.local` file

## Sanity TypeGen

To generate the types, run the following command:

```bash
npx sanity schema extract
```

This will generate `schema.json` file in the root of the project.

To generate the types, run the following command:

```bash
npx sanity typegen generate
```

This will generate the types in the `sanity.types.ts` file in the root of the project.

## Environment variables

All environment variables and their descriptions:

- `NEXT_PUBLIC_SITE_URL` - your website url. For example, `https://yourwebsite.com` without trailing slash.
- `NEXT_PUBLIC_SITE_ENV` - specifies the environment type (development/production) and affects metadata configuration. Setting this to "development" prevents search engine indexing, which is useful for staging environments (e.g., `dev.yourwebsite.com`).
- `NEXT_PUBLIC_SANITY_API_VERSION` - your Sanity API version. You don't have to use specific dates, any past or present date is valid, and today's date will always give you the latest version - no need to check release history. For example: YYYY-MM-DD.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - your Sanity project ID. For example, abc12345.
- `NEXT_PUBLIC_SANITY_DATASET` - your Sanity dataset name. For example, production.
- `SANITY_API_READ_TOKEN` - your Sanity read token for Next.js to fetch data.
- `RESEND_API_KEY` - your RESEND api key for the contact form.
- `RESEND_TO_EMAIL` - your email address to receive contact form submissions.
- `RESEND_FROM_EMAIL` - your email address to send contact form submissions from.

[react-url]: https://reactjs.org/
[next-js-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[shadcn-url]: https://ui.shadcn.com/
[sanity-url]: https://www.sanity.io/
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[next-js]: https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=Next.js
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[tailwind]: https://img.shields.io/badge/Tailwind_CSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=319795
[shadcn]: https://img.shields.io/badge/shadcn/ui-20232A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBjbGFzcz0iaC02IHctNiI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9Im5vbmUiPjwvcmVjdD48bGluZSB4MT0iMjA4IiB5MT0iMTI4IiB4Mj0iMTI4IiB5Mj0iMjA4IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiPjwvbGluZT48bGluZSB4MT0iMTkyIiB5MT0iNDAiIHgyPSI0MCIgeTI9IjE5MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMyIj48L2xpbmU+PC9zdmc+&logoColor=ffffff
[sanity]: https://img.shields.io/badge/Sanity-20232A?style=for-the-badge&logo=sanity&logoColor=F97316
