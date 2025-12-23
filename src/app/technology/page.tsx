"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Brain, Workflow, Shield, CheckCircle, BarChart, Lock, Zap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Technology() {
  const headerRef = useRef<HTMLDivElement>(null);
  const techRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stackRef = useRef<HTMLDivElement>(null);

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

    // Technology sections animations
    techRefs.current.forEach((section, index) => {
      if (section) {
        const isEven = index % 2 === 0;
        
        gsap.fromTo(section.querySelector(".icon-container"), 
          { scale: 0, opacity: 0, rotation: -180 },
          { 
            scale: 1, 
            opacity: 1, 
            rotation: 0,
            duration: 1, 
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

        gsap.fromTo(section.querySelectorAll(".feature-card"), 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            stagger: 0.15, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(section.querySelector(".visual-card"), 
          { scale: 0.8, opacity: 0, x: isEven ? -50 : 50 },
          { 
            scale: 1, 
            opacity: 1, 
            x: 0,
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

    // Technology Stack animations
    if (stackRef.current) {
      gsap.fromTo(stackRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(stackRef.current.querySelector("p"), 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current.querySelector("p"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(stackRef.current.querySelectorAll(".stack-card"), 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const technologies = [
    {
      id: "ai",
      name: "AI & Intelligence",
      icon: <Brain className="w-12 h-12" />,
      description: "Advanced artificial intelligence powers our financial solutions, providing intelligent insights and automated decision-making.",
      features: [
        {
          title: "Credit scoring",
          description: "Machine learning algorithms analyze thousands of data points to provide accurate credit risk assessment.",
          benefits: ["Higher approval rates", "Reduced default risk", "Real-time decisions"],
        },
        {
          title: "Expense categorization",
          description: "AI automatically categorizes transactions and spending patterns for better financial management.",
          benefits: ["Automatic categorization", "Spending pattern recognition", "Budget optimization"],
        },
        {
          title: "Predictive insights",
          description: "Predictive analytics forecast financial trends and provide actionable recommendations.",
          benefits: ["Future trend forecasting", "Personalized recommendations", "Risk mitigation"],
        },
      ],
    },
    {
      id: "automation",
      name: "Automation",
      icon: <Workflow className="w-12 h-12" />,
      description: "Streamlined workflows and automated processes reduce manual work and increase efficiency.",
      features: [
        {
          title: "KYC automation",
          description: "Automated Know Your Customer processes with document verification and identity validation.",
          benefits: ["Faster onboarding", "Reduced manual work", "Improved compliance"],
        },
        {
          title: "Loan approval workflows",
          description: "End-to-end automated loan processing from application to disbursement.",
          benefits: ["Quick approvals", "Reduced processing time", "Consistent decision-making"],
        },
        {
          title: "Financial reporting",
          description: "Automated generation of financial reports and compliance documentation.",
          benefits: ["Real-time reporting", "Regulatory compliance", "Customizable reports"],
        },
      ],
    },
    {
      id: "security",
      name: "AML & Security",
      icon: <Shield className="w-12 h-12" />,
      description: "Bank-grade security and comprehensive Anti-Money Laundering measures protect your financial data.",
      features: [
        {
          title: "Transaction monitoring",
          description: "Real-time monitoring of transactions to detect suspicious activities and prevent fraud.",
          benefits: ["Fraud detection", "Real-time alerts", "Risk mitigation"],
        },
        {
          title: "Fraud detection",
          description: "Advanced fraud detection systems using machine learning and pattern recognition.",
          benefits: ["Proactive fraud prevention", "Machine learning powered", "Reduced losses"],
        },
        {
          title: "Compliance reporting",
          description: "Automated compliance reporting for regulatory requirements and audits.",
          benefits: ["Regulatory compliance", "Automated reporting", "Audit readiness"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Cutting-edge technology that powers our financial solutions
          </p>
        </div>
      </section>

      {/* Technology Content */}
      <div className="space-y-32">
        {technologies.map((tech, index) => (
          <section
            key={tech.id}
            id={tech.id}
            ref={el => techRefs.current[index] = el}
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="flex items-center space-x-4 mb-6 icon-container">
                    <div className="text-cyan-500">
                      {tech.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                      {tech.name}
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 mb-8">
                    {tech.description}
                  </p>

                  <div className="space-y-6">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-card glass-card rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-black mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <div>
                          <h4 className="text-sm font-medium text-black mb-2">Key Benefits:</h4>
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="visual-card glass-card rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="glass-light rounded-xl p-4">
                        <BarChart className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Analytics</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Lock className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Security</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Zap className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Speed</p>
                      </div>
                      <div className="glass-light rounded-xl p-4">
                        <Brain className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Intelligence</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-lg">
                      {tech.name} Platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 glass-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Ready to leverage our technology?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our technology stack can power your next project
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