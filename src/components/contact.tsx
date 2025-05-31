"use client";

import { ArrowRightIcon, MailIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { addToWaitlist } from "~/actions/add-to-waitlist";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  async function handleAction(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = await addToWaitlist(formData);
      if (result && result.success) {
        setIsSubmitted(true);
      } else if (result && result.error) {
        setError(result.error);
      }
    });
  }

  return (
    <Card className="max-w-lg mx-auto mb-20 bg-gray-900/60 backdrop-blur-md border border-gray-800/50 shadow-2xl">
      <CardContent className="p-10">
        {!isSubmitted ? (
          <>
            <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Be the First to Know
            </h3>
            <p className="text-gray-400 text-center mb-8 text-lg">
              Get early access when we launch and be part of the conversation
              revolution.
            </p>
            <form action={handleAction} className="space-y-6">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-gray-800/50 border-gray-700/50 focus:border-cyan-500/50 text-white placeholder:text-gray-500 h-14 text-lg"
                required
                disabled={pending}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#123524] to-[#1e5c3a] text-white shadow-xl h-14 text-lg font-medium"
                disabled={pending}
              >
                {pending ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <MailIcon className="w-5 h-5 mr-3" />
                    Notify Me When Ready
                    <ArrowRightIcon className="w-5 h-5 ml-3" />
                  </>
                )}
              </Button>
              {error && <div className="text-red-500 text-center">{error}</div>}
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRightIcon className="w-10 h-10 text-white transform rotate-45" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              You&apos;re In!
            </h3>
            <p className="text-gray-400 text-lg">
              We&apos;ll notify you as soon as ThynkOf is ready to transform
              your conversations.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
