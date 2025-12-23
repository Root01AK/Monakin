"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CreditCard, TrendingUp, Zap, Code, Smartphone, Palette, ShoppingCart } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header animations
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.querySelector("h1"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(headerRef.current.querySelector("p"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    // Solution sections animations
    solutionRefs.current.forEach((section, index) => {
      if (section) {
        const isEven = index % 2 === 0;

        gsap.fromTo(section.querySelector("h2"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.querySelector("h2"),
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelector("p"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.querySelector("p"),
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelectorAll(".feature-item"),
          { x: isEven ? -30 : 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelector(".cta-button"),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.querySelector(".cta-button"),
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelector(".visual-card"),
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section.querySelector(".visual-card"),
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });
  }, []);

  const solutions = [
    {
      id: "monetapay",
      name: "Moneta Pay",
      description: "A smarter way to manage credit and payments—designed to give you confidence, clarity, and control over your money.",
      features: [
        {
          icon: <CreditCard className="w-5 h-5" />,
          title: "All-in-one credit app",
          description: "Manage your credit effortlessly with fast approvals and a smooth, stress-free experience."
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Smart credit limits",
          description: "Your limits grow with you, adapting automatically to your spending and repayment habits."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "AI-powered risk intelligence",
          description: "Behind the scenes, AI works to assess risk accurately and keep your credit journey safe and fair."
        },
      ],

      cta: "Get started with Monetapay",
      href: "/get-started",
    },
    {
      id: "smart-finance",
      name: "Nummus",
      description: "Gain complete financial control with AI-driven insights, automated budgeting, and predictive money management.",
      features: [
        { icon: <TrendingUp className="w-5 h-5" />, title: "Expense tracking", description: "Track expenses in real time with intelligent categorization and pattern recognition powered by AI." },
        { icon: <CreditCard className="w-5 h-5" />, title: "Budgeting", description: "Create adaptive budgets that learn from your spending behavior and help you stay on track automatically." },
        { icon: <Zap className="w-5 h-5" />, title: "Intelligent insights", description: "Unlock AI-powered recommendations, spending forecasts, and personalized financial insights to make smarter decisions faster." },
      ],
      cta: "Explore Smart Finance",
      href: "/get-started",
    },
    {
      id: "faas",
      name: "Finance-as-a-Service (FaaS)",
      description: "Comprehensive financial APIs to power your applications and services",
      features: [
        { icon: <CreditCard className="w-5 h-5" />, title: "Invoicing", description: "Effortless invoice creation with secure payment processing and real-time transaction tracking." },
        { icon: <TrendingUp className="w-5 h-5" />, title: "Money Management", description: "Intelligent financial management powered by advanced credit scoring and risk assessment." },
        { icon: <Zap className="w-5 h-5" />, title: "Anti-Money Laundering", description: "Robust identity verification and end-to-end compliance to meet global regulatory standards." },
        { icon: <Zap className="w-5 h-5" />, title: "Reporting", description: "Actionable insights through detailed financial reports, compliance summaries, and performance analytics." },
      ],
      cta: "Integrate FaaS",
      href: "/get-started",
    },
    {
      id: "digital-development",
      name: "Digital Development Services",
      description: "End-to-end digital solutions to bring your vision to life",
      features: [
        { icon: <Code className="w-5 h-5" />, title: "Web Development", description: "Next.js, React, Django applications" },
        { icon: <Smartphone className="w-5 h-5" />, title: "Mobile App Development", description: "iOS and Android native applications" },
        { icon: <Palette className="w-5 h-5" />, title: "Branding & UI/UX", description: "Complete brand identity and user experience design" },
        { icon: <ShoppingCart className="w-5 h-5" />, title: "WordPress & Wix", description: "Professional website development and customization" },
        { icon: <Code className="w-5 h-5" />, title: "E-commerce Solutions", description: "Complete online store development and integration" },
      ],
      cta: "Start your project",
      href: "/get-started",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Comprehensive financial and digital solutions designed for the modern economy
          </p>
        </div>
      </section>

      {/* Solutions Content */}
      <div className="space-y-32">
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            id={solution.id}
            ref={el => solutionRefs.current[index] = el}
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    {solution.name}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {solution.description}
                  </p>

                  <div className="space-y-6 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item flex items-start space-x-4">
                        <div className="text-cyan-500 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={solution.href}
                    className="cta-button glass-card text-black px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className="visual-card glass-card rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-cyan-500 mb-4">
                      {solution.id === 'monetapay' && <CreditCard className="w-24 h-24 mx-auto" />}
                      {solution.id === 'smart-finance' && <TrendingUp className="w-24 h-24 mx-auto" />}
                      {solution.id === 'faas' && <Zap className="w-24 h-24 mx-auto" />}
                      {solution.id === 'digital-development' && <Code className="w-24 h-24 mx-auto" />}
                    </div>
                    <p className="text-gray-500 text-lg">
                      {solution.name} Interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card mt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <Link
            href="/get-started"
            className="cta-button bg-cyan-500 text-black px-8 py-4 rounded-full font-medium hover:bg-cyan-400 transition-colors inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}