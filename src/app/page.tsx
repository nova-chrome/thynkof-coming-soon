import {
  BrainIcon,
  MessageSquareIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import { AnimatedText } from "~/components/animated-text";
import { Contact } from "~/components/contact";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: MessageSquareIcon,
      title: "Conversation Analysis",
      description:
        "AI-powered insights into dialogue patterns and communication styles",
      gradient: "from-[#123524] to-[#1e5c3a]",
    },
    {
      icon: BrainIcon,
      title: "Smart Summaries",
      description:
        "Distill long conversations into key points and actionable insights",
      gradient: "from-[#123524] to-[#2d7a4f]",
    },
    {
      icon: UsersIcon,
      title: "Relationship Mapping",
      description: "Understand dynamics between conversation participants",
      gradient: "from-[#1e5c3a] to-[#123524]",
    },
    {
      icon: SparklesIcon,
      title: "Sentiment Analysis",
      description:
        "Detect emotions, tone, and underlying meanings in conversations",
      gradient: "from-[#2d7a4f] to-[#123524]",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-8 px-6 py-3 text-sm font-medium bg-gray-900/80 backdrop-blur-md border border-gray-700/50 text-gray-300"
          >
            <ZapIcon className="w-4 h-4 mr-2 text-cyan-400" />
            AI-Powered Conversation Intelligence
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
            ThynkOf
          </h1>

          <AnimatedText />

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Transform how you understand conversations with our AI that analyzes
            dialogue patterns, extracts insights, and reveals the hidden
            dynamics in human communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-500 bg-gray-900/50 backdrop-blur-md border border-gray-800/50 hover:border-gray-700/50"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Signup */}
        <Contact />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjQiLz4KICA8L3N2Zz4K')]"></div>
    </div>
  );
}
