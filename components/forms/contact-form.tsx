"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-form";
import { type ContactFormState } from "@/app/actions/contact-form";

interface ContactFormProps {
  onSubmit: (formData: FormData) => Promise<ContactFormState>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<ContactFormState>({});

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function handleAction(formData: FormData) {
    // Clear any previous server errors
    form.clearErrors();

    startTransition(async () => {
      const result = await onSubmit(formData);
      setFormState(result);

      if (result.success) {
        form.reset();
      } else if (result.errors) {
        // Get current form values
        const currentValues = form.getValues();

        // Only set errors for fields that are still invalid
        Object.entries(result.errors).forEach(([key, message]) => {
          const fieldKey = key as keyof ContactFormValues;
          const fieldValue = currentValues[fieldKey];

          // Validate the current field value against the schema
          try {
            contactFormSchema.shape[fieldKey].parse(fieldValue);
          } catch (e) {
            // Only set error if the field is still invalid
            form.setError(fieldKey, {
              type: "server",
              message,
            });
          }
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form action={handleAction} className="space-y-6">
        {formState.success && (
          <div className="p-4 border border-green-500 bg-green-50 text-green-700 rounded-md">
            Message transmitted successfully
          </div>
        )}
        {formState.error && (
          <div className="p-4 border border-red-500 bg-red-50 text-red-700 rounded-md">
            {formState.error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User size={14} />
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    className="border-primary bg-background"
                    {...field}
                  />
                </FormControl>
                <div className="h-1">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User size={14} />
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    className="border-primary bg-background"
                    {...field}
                  />
                </FormControl>
                <div className="h-1">
                  <FormMessage className="text-xs" />
                </div>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Mail size={14} />
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="border-primary bg-background"
                  {...field}
                />
              </FormControl>
              <div className="h-1">
                <FormMessage className="text-xs" />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MessageSquare size={14} />
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[150px] border-primary bg-background resize-none"
                  {...field}
                />
              </FormControl>
              <div className="h-1">
                <FormMessage className="text-xs" />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
