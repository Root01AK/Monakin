"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

    // Who We Are animations
    if (whoWeAreRef.current) {
      gsap.fromTo(whoWeAreRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoWeAreRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(whoWeAreRef.current.querySelector(".content-card"), 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Mission animations
    if (missionRef.current) {
      gsap.fromTo(missionRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(missionRef.current.querySelector("blockquote"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current.querySelector("blockquote"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(missionRef.current.querySelector("p"), 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current.querySelector("p"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Contact animations
    if (contactRef.current) {
      gsap.fromTo(contactRef.current.querySelector("h2"), 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current.querySelector("h2"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contactRef.current.querySelector("p"), 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current.querySelector("p"),
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contactRef.current.querySelectorAll(".contact-section"), 
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.3, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Get Started
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Let's build the future of finance together
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section ref={missionRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 italic mb-8">
              "To empower businesses and individuals with intelligent financial solutions that are simple, secure, and accessible to all."
            </blockquote>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that the future of finance lies in the seamless integration of cutting-edge technology with user-centric design. By leveraging artificial intelligence, automation, and robust security measures, we create solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              We’re not just another fintech wall of bots, Let’s Talk Finance, Human to Human.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-section">
              <div className="glass-card rounded-3xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-white/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-white/50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none bg-white/50"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-section space-y-8">
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-cyan-500" />
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <div className="text-gray-600">sayhello@monakin.in</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-cyan-500" />
                    <div>
                      <div className="font-medium text-black">Phone</div>
                      <div className="text-gray-600">+91 9840488033</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-500" />
                    <div>
                      <div className="font-medium text-black">Office</div>
                      <div className="text-gray-600">Chennai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Social Links
                </h3>
                <div className="space-y-3">
                  <Link href="/solutions" className="block text-gray-600 hover:text-black transition-colors">
                    Explore Solutions →
                  </Link>
                  <Link href="/use-cases" className="block text-gray-600 hover:text-black transition-colors">
                    View Use Cases →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}