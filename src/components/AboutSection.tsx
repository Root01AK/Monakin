"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const splitToChars = (el: HTMLElement | null) => {
  if (!el || el.dataset.split === "true") return;

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.nodeValue && node.nodeValue.trim().length > 0) nodes.push(node);
  }

  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    for (const ch of node.nodeValue || "") {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      frag.appendChild(span);
    }
    node.parentNode?.replaceChild(frag, node);
  });

  el.dataset.split = "true";
};

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const splitTargets = gsap.utils.toArray<HTMLElement>([
      ".about-text h2.split",
      ".about-text p.split",
      ".about-details h3.split",
      ".about-details p.split",
      ".about-btn.split",
    ]);

    splitTargets.forEach((el) => splitToChars(el));

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      ".about-text h2 .char",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out" },
      "start"
    );
    tl.fromTo(
      ".about-text p .char",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.01, duration: 0.5, ease: "power1.out" },
      ">0.3"
    );
    tl.fromTo(
      ".mask-img",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: "back.out(1.7)" },
      ">0.5"
    );
    tl.fromTo(
      ".img-box",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      ">0.3"
    );
    tl.fromTo(
      ".about-details h3 .char",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.03, ease: "power2.out" },
      ">0.4"
    );
    tl.fromTo(
      ".about-details p .char",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, stagger: 0.008, ease: "power1.out" },
      ">0.2"
    );
    tl.fromTo(
      ".about-btn .char",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.5, ease: "power2.out" },
      ">0.3"
    );
    tl.fromTo(
      ".about-vertical",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "start"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="about-section min-h-screen relative" ref={sectionRef}>

      <div className="about-container flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        {/* Left Content */}
        <div className="about-text max-w-xl">
          <h2 className="split text-4xl font-bold mb-6">
            Who We Are & <span>What We Do </span>
          </h2>
          <p className="split text-lg leading-relaxed">
            At 10.8, we believe in the power of community, compassion, and
            action. Our mission is simple: to support those in need and create
            lasting change through meaningful initiatives. Whether it's
            providing essential resources, empowering individuals, or fostering
            sustainable solutions, we are committed to making a difference—one
            act of kindness at a time.
          </p>
        </div>

        {/* Right Big Typography with Images */}
        <div className="about-bigtext text-7xl font-extrabold tracking-tight">
          <h1>
            <span className="mask-img img1">m</span>
            <span className="mask-img img2">o</span>
            <span className="mask-img img3">n</span>
            <span className="mask-img img4">e</span>
            <span className="mask-img img5">t</span>
            <span className="mask-img img6">a</span>
          </h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="about-grid mt-16 grid md:grid-cols-2 gap-12 px-6 md:px-16">
        <div className="about-images">
          <div className="img-box rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/crew-banner.jpg"
              alt="Office"
              width={500}
              height={350}
              className="object-cover"
            />
          </div>
        </div>

        <div className="about-details">
          <h3 className="split text-2xl font-semibold mb-4">Sharing is Caring</h3>
          <p className="split text-lg leading-relaxed">
            At 10.8, we believe in the power of community, compassion, and
            action. Our mission is simple: to support those in need and create
            lasting change. Whether it's providing essential resources or
            empowering individuals, we are committed to making a difference—one
            act of kindness at a time.
          </p>
        </div>
      </div>

      <style jsx>{`
        .char {
          display: inline-block;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}
