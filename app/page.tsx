import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Zap,
  Rocket,
} from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { SignUpButton } from "@clerk/nextjs";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-100 overflow-hidden pt-20">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-yellow-400 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2000">
          <Zap className="w-10 h-10 text-blue-400 opacity-50" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float animation-delay-4000">
          <TrendingUp className="w-12 h-12 text-green-400 opacity-50" />
        </div>

        {/* Hero Section */}
        <div className="text-center py-20 lg:py-32 relative">
          <Rocket className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI-Powered Social Media Content Generator
          </h1>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Create engaging content for Twitter, Instagram, and LinkedIn with
            cutting-edge AI technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">Start Creating</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20" id="features">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">
            Supercharge Your Social Media Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Twitter Threads",
                icon: <Twitter className="w-10 h-10 mb-4 text-blue-400" />,
                description:
                  "Generate compelling Twitter threads that engage your audience and boost your reach.",
              },
              {
                title: "Instagram Captions",
                icon: <Instagram className="w-10 h-10 mb-4 text-pink-400" />,
                description:
                  "Create catchy captions for your Instagram posts that increase engagement and followers.",
              },
              {
                title: "LinkedIn Posts",
                icon: <Linkedin className="w-10 h-10 mb-4 text-blue-600" />,
                description:
                  "Craft professional content for your LinkedIn network to establish thought leadership.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gray-900 rounded-3xl my-20 relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
              Why Choose Our AI Content Generator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Save time and effort on content creation",
                "Consistently produce high-quality posts",
                "Increase engagement across all platforms",
                "Stay ahead of social media trends",
                "Customize content to match your brand voice",
                "Scale your social media presence effortlessly",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 relative">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Ready to revolutionize your social media strategy?
          </h2>
          {userId ? (
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link href="/generate">
                Generate Content Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <SignUpButton mode="modal">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
          <p className="mt-4 text-gray-400">No credit card required</p>
        </div>
      </main>
    </div>
  );
}
