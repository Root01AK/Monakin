"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonails";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star, TrendingUp, Users, Award, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Customers() {
  const headerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

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

    // Metrics animations
    if (metricsRef.current) {
      gsap.fromTo(metricsRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: metricsRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(metricsRef.current.querySelectorAll(".metric-card"), 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Testimonials animations
    if (testimonialsRef.current) {
      gsap.fromTo(testimonialsRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(testimonialsRef.current.querySelector("p"), 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current.querySelector("p"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(testimonialsRef.current.querySelectorAll(".testimonial-card"), 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Trust & Compliance animations
    if (trustRef.current) {
      gsap.fromTo(trustRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(trustRef.current.querySelector("p"), 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustRef.current.querySelector("p"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(trustRef.current.querySelectorAll(".trust-section"), 
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.3, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const metrics = [
    {
      value: "$2.5B+",
      label: "Transactions Processed",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      value: "500K+",
      label: "Active Users",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      value: "150+",
      label: "Countries Served",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  const complianceStandards = [
    "PCI DSS Compliant",
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "ISO 27001 Certified",
    "AML/KYC Compliant",
    "CCPA Ready",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Customers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Trusted by thousands of businesses worldwide
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="metric-card glass-card rounded-2xl p-6 text-center"
              >
                <div className="text-cyan-500 mb-4 flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
            < Testimonials />
      {/* Trust & Compliance Section */}
      <section ref={trustRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Trust & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bank-grade security and regulatory compliance you can count on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="trust-section">
              <h3 className="text-2xl font-bold text-black mb-6">
                Security First Approach
              </h3>
              <p className="text-gray-600 mb-6">
                We prioritize the security of your financial data above everything else. Our platform is built with multiple layers of security to ensure your information remains protected at all times.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">Multi-factor authentication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">Regular security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">24/7 monitoring</span>
                </div>
              </div>
            </div>

            <div className="trust-section">
              <h3 className="text-2xl font-bold text-black mb-6">
                Compliance Standards
              </h3>
              <p className="text-gray-600 mb-6">
                We maintain compliance with all major financial regulations and industry standards, ensuring your business stays compliant across jurisdictions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {complianceStandards.map((standard, index) => (
                  <div
                    key={standard}
                    className="glass-light rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {standard}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Join thousands of satisfied customers
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference that our solutions can make for your business
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