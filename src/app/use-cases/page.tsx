"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Rocket, Building, Users, Code, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const headerRef = useRef<HTMLDivElement>(null);
  const useCaseRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Use Case sections animations
    useCaseRefs.current.forEach((section, index) => {
      if (section) {
        const isEven = index % 2 === 0;
        
        gsap.fromTo(section.querySelector(".icon-container"), 
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.8, 
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section.querySelector(".icon-container"),
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

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

        gsap.fromTo(section.querySelectorAll(".content-section"), 
          { x: isEven ? -30 : 30, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.2, 
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
          { scale: 0.9, opacity: 0, rotation: isEven ? -5 : 5 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 0,
            duration: 1, 
            ease: "power3.out",
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

  const useCases = [
    {
      id: "startups",
      name: "Startups & SMEs",
      icon: <Rocket className="w-12 h-12" />,
      problem: "Limited resources, need for rapid growth, and financial constraints make it challenging to build and scale effectively.",
      solution: "Our integrated financial and digital solutions provide startups with the tools they need to manage finances, process payments, and develop their digital presence without breaking the bank.",
      benefits: [
        "Cost-effective financial management tools",
        "Rapid digital development and deployment",
        "Scalable payment processing solutions",
        "AI-powered insights for growth optimization",
      ],
      cta: "Empower your startup",
      href: "/get-started",
    },
    {
      id: "enterprises",
      name: "Enterprises",
      icon: <Building className="w-12 h-12" />,
      problem: "Complex financial operations, legacy systems, and the need for digital transformation while maintaining security and compliance.",
      solution: "Enterprise-grade financial APIs and digital development services that seamlessly integrate with existing systems while providing modern, scalable solutions.",
      benefits: [
        "Seamless integration with legacy systems",
        "Bank-grade security and compliance",
        "Scalable infrastructure for high volume",
        "Custom digital transformation solutions",
      ],
      cta: "Transform your enterprise",
      href: "/get-started",
    },
    {
      id: "individuals",
      name: "Individuals & Professionals",
      icon: <Users className="w-12 h-12" />,
      problem: "Managing personal finances, tracking expenses, and making informed financial decisions can be overwhelming and time-consuming.",
      solution: "User-friendly financial tools that provide intelligent insights, automated budgeting, and seamless financial management for everyday life.",
      benefits: [
        "Intelligent expense tracking and categorization",
        "Automated budget creation and monitoring",
        "Personalized financial insights and recommendations",
        "Easy-to-use mobile and web interfaces",
      ],
      cta: "Take control of your finances",
      href: "/get-started",
    },
    {
      id: "developers",
      name: "Developers & Product Teams",
      icon: <Code className="w-12 h-12" />,
      problem: "Building financial applications requires complex integrations, compliance knowledge, and robust infrastructure - slowing down development cycles.",
      solution: "Comprehensive financial APIs and development tools that abstract away complexity, allowing developers to focus on building amazing products.",
      benefits: [
        "Easy-to-integrate financial APIs",
        "Comprehensive documentation and SDKs",
        "Sandbox environment for testing",
        "24/7 developer support and community",
      ],
      cta: "Start building",
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
            Use Cases
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Tailored solutions for every type of user and organization
          </p>
        </div>
      </section>

      {/* Use Cases Content */}
      <div className="space-y-32">
        {useCases.map((useCase, index) => (
          <section
            key={useCase.id}
            id={useCase.id}
            ref={el => useCaseRefs.current[index] = el}
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="flex items-center space-x-4 mb-6 icon-container">
                    <div className="text-cyan-500">
                      {useCase.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                      {useCase.name}
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div className="content-section">
                      <h3 className="text-lg font-semibold text-black mb-2">The Challenge</h3>
                      <p className="text-gray-600">{useCase.problem}</p>
                    </div>

                    <div className="content-section">
                      <h3 className="text-lg font-semibold text-black mb-2">Our Solution</h3>
                      <p className="text-gray-600">{useCase.solution}</p>
                    </div>

                    <div className="content-section">
                      <h3 className="text-lg font-semibold text-black mb-4">Key Benefits</h3>
                      <div className="space-y-3">
                        {useCase.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={useCase.href}
                    className="cta-button glass-card text-black px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center mt-8"
                  >
                    {useCase.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                <div className="visual-card glass-card rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="glass-light rounded-xl p-4">
                        <TrendingUp className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Growth</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Shield className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Security</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Zap className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Speed</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Users className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Support</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-lg">
                      {useCase.name} Dashboard
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
            Which use case fits your needs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's find the perfect solution for your specific requirements
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