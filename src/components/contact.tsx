"use client";

import { ArrowRightIcon, MailIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

export function Contact() {
  return (
    <Card className="max-w-lg mx-auto mb-20 bg-gray-900/60 backdrop-blur-md border border-gray-800/50 shadow-2xl">
      <CardContent className="p-10">
        <h3 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Be the First to Know
        </h3>
        <p className="text-gray-400 text-center mb-8 text-lg">
          Get early access when we launch and be part of the conversation
          revolution.
        </p>
        <div className="mb-6 text-center text-yellow-400 font-semibold">
          Waitlist coming soon! <br /> The signup form will be available here.
        </div>
        <form className="space-y-6 opacity-50 pointer-events-none select-none">
          <Input
            type="email"
            placeholder="Enter your email address"
            disabled
            className="bg-gray-800/50 border-gray-700/50 focus:border-cyan-500/50 text-white placeholder:text-gray-500 h-14 text-lg"
            required
          />
          <Button
            type="submit"
            disabled
            className="w-full bg-gradient-to-r from-[#123524] to-[#1e5c3a] text-white shadow-xl h-14 text-lg font-medium opacity-70 cursor-not-allowed"
          >
            <MailIcon className="w-5 h-5 mr-3" />
            Notify Me When Ready
            <ArrowRightIcon className="w-5 h-5 ml-3" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
