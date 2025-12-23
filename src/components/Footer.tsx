"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
/* ------------------ GSAP Hook ------------------ */
function useGsapFooterAnimation() {
  const footerRef = useRef<HTMLElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const brandingRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      !footerRef.current ||
      !watermarkRef.current ||
      !brandingRef.current ||
      !linksRef.current ||
      !bottomRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // Watermark fade-in
      gsap.fromTo(
        watermarkRef.current!,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 0.1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        }
      );

      // Branding animation
      gsap.from(brandingRef.current!, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      // Links stagger
      gsap.from(linksRef.current!.children, {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Bottom text
      gsap.from(bottomRef.current!, {
        opacity: 0,
        y: 15,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return {
    footerRef,
    watermarkRef,
    brandingRef,
    linksRef,
    bottomRef,
  };
}

/* ------------------ Footer Component ------------------ */
export default function Footer() {
  const {
    footerRef,
    watermarkRef,
    brandingRef,
    linksRef,
    bottomRef,
  } = useGsapFooterAnimation();

  return (
    <footer className="footer" ref={footerRef}>
      {/* Decorative background word */}
      <div
        className="footer-watermark"
        aria-hidden="true"
        ref={watermarkRef}
      >
        Mo<span>n</span>a<span>k</span>in
      </div>

      <div className="footer-inner">
        <div className="footer-top">
          {/* Branding */}
          <div className="footer-branding" ref={brandingRef}>
            <div className="footer-logo">
              Mon<span>eta</span>.
            </div>
            <h2 className="footer-tagline">
              Take control. Stay on track.
              <br />
              Enjoy financial freedom, your way.
            </h2>
          </div>

          {/* Links */}
          <div className="footer-links" ref={linksRef}>
            <div className="footer-column">
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions#monetapay" className="hover:text-white transition-colors">Monetapay</Link></li>
                <li><Link href="/solutions#smart-finance" className="hover:text-white transition-colors">Smart Finance</Link></li>
                <li><Link href="/solutions#faas" className="hover:text-white transition-colors">FaaS</Link></li>
                <li><Link href="/solutions#digital-development" className="hover:text-white transition-colors">Digital Development</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
            <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
                <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/customers" className="hover:text-white transition-colors">Customers</Link></li>
                <li><Link href="/get-started" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom" ref={bottomRef}>
          <p>
            © {new Date().getFullYear()} Monakin Services Pvt Ltd. All rights reserved.
          </p>
          {/* <p>Designed by Vcraftyu Company</p> */}
        </div>
      </div>
    </footer>
  );
}
