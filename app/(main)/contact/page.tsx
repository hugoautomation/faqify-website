import { TextRoll } from "@/components/ui/text-roll";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { submitContactForm } from "@/app/actions/contact-form";
import { fetchSanityContact } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/sanity/lib/metadata";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const contact = await fetchSanityContact();

  return generatePageMetadata({
    page: contact,
    slug: "contact",
    type: "page",
  });
}

export default async function ContactPage() {
  const contact = await fetchSanityContact();

  return (
    <div className="container px-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <div className="p-8 lg:p-16 lg:pl-24">
            <div className="max-w-2xl">
              <div className="mb-8">
                <Badge variant="outline" className="h-8">
                  {contact?.tagline}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mt-6 relative">
                  <TextRoll>{contact?.title || ""}</TextRoll>
                </h1>
              </div>

              <ContactForm onSubmit={submitContactForm} />
            </div>
          </div>
        </div>

        {/* Side Info Section */}
        <div className="border-t lg:border-t-0 p-8 lg:p-16 relative">
          <div className="space-y-8">
            <div className="border p-6 relative group hover:border-primary/50 transition-colors">
              <h3 className="font-medium mb-2">Email Us</h3>
              <a
                href="mailto:hello@example.com"
                className="text-sm text-primary/70 hover:text-primary flex items-center gap-2"
              >
                <Mail size={14} />
                {contact?.email}
              </a>
              <div className="absolute -top-1 -right-1 w-full h-full border border-primary -z-10" />
            </div>

            <div className="border p-6 relative group hover:border-primary/50 transition-colors bg-primary/5">
              <h3 className="font-medium mb-2">Office Hours</h3>
              <p className="text-sm text-primary/70">
                {contact?.officeHours?.days}
                <br />
                {contact?.officeHours?.hours}
              </p>
              <div className="absolute -top-1 -right-1 w-full h-full border border-primary -z-10" />
            </div>

            <div className="border p-6 relative group hover:border-primary/50 transition-colors">
              <h3 className="font-medium mb-2">Response Time</h3>
              <p className="text-sm text-primary/70">{contact?.responseTime}</p>
              <div className="absolute -top-1 -right-1 w-full h-full border border-primary -z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
