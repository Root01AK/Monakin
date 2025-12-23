"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const brandingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(heroRef.current.querySelector("h1"), 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(heroRef.current.querySelector("p"), 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(heroRef.current.querySelectorAll(".cta-button"), 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.3"
      );
    }

    // Solutions animations
    if (solutionsRef.current) {
      gsap.fromTo(solutionsRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: solutionsRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(solutionsRef.current.querySelectorAll(".solution-card"), 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: solutionsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Use Cases animations
    if (useCasesRef.current) {
      gsap.fromTo(useCasesRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: useCasesRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(useCasesRef.current.querySelectorAll(".use-case-card"), 
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: useCasesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Technology animations
    if (techRef.current) {
      gsap.fromTo(techRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: techRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(techRef.current.querySelectorAll(".tech-card"), 
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Branding animations
    if (brandingRef.current) {
      gsap.fromTo(brandingRef.current.querySelector("blockquote"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: brandingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // CTA animations
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(ctaRef.current.querySelector(".cta-button"), 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const useCases = [
    { name: "Startups & Founders", href: "/use-cases#startups" },
    { name: "Businesses & Enterprises", href: "/use-cases#enterprises" },
    { name: "Individuals & Professionals", href: "/use-cases#individuals" },
    { name: "Developers & Product Teams", href: "/use-cases#developers" },
  ];

  const technologies = [
    { name: "AI-Powered Intelligence", href: "/technology#ai" },
    { name: "Automated Workflows", href: "/technology#automation" },
    { name: "Bank-Grade Security & AML", href: "/technology#security" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Building intelligent financial and digital solutions for the modern world.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            A unified ecosystem for credit, money management, finance APIs, and digital product development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="cta-button glass-card text-black px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/solutions"
              className="cta-button glass-card text-black px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
      <AboutSection />


      {/* Use Cases Preview */}
      <section ref={useCasesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every type of user and organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.name}
                className="use-case-card glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-black mb-2">
                  {useCase.name}
                </h3>
                <Link
                  href={useCase.href}
                  className="text-cyan-500 font-medium hover:text-black transition-colors"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section ref={techRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Powered by Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that drives our solutions forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-card glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold text-black mb-4">
                  {tech.name}
                </h3>
                <Link
                  href={tech.href}
                  className="text-cyan-500 font-medium hover:text-black transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Statement */}
      <section ref={brandingRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 italic mb-8">
            "We believe finance should be simple, intelligent, and accessible — powered by technology that works silently and securely in the background."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Ready to build the future of finance?
          </h2>
          <Link
            href="/get-started"
            className="cta-button bg-cyan-500 text-black px-8 py-4 rounded-full font-medium hover:bg-cyan-400 transition-colors inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}