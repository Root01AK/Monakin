"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    quote: string;
    name: string;
    position: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "The service has been exceptional in exceeding our expectations. The candidate screening process saved us countless hours.",
        name: "James Robinson",
        position: "VP of HR, Apex Dynamics",
    },
    {
        quote:
            "Streamlined process and outstanding quality of candidates. Their team understood our needs perfectly.",
        name: "David Mitchell",
        position: "Recruitment Head",
    },
    {
        quote:
            "Our hiring efficiency improved by 40% after implementing their solution. Truly a game-changer for our company.",
        name: "Sarah Johnson",
        position: "Talent Acquisition Director",
    },
    {
        quote:
            "The onboarding process was seamless and the support team was incredibly responsive throughout.",
        name: "Michael Chen",
        position: "Operations Manager",
    },
    {
        quote:
            "We've tried several services before, but none matched the quality and efficiency this team delivers.",
        name: "Emily Rodriguez",
        position: "HR Director",
    },
    {
        quote:
            "From first contact to final placement, the experience was professional and exceeded our expectations.",
        name: "Robert Taylor",
        position: "CEO, Innovate Solutions",
    },
];

const TestimonialCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cards = cardRefs.current;
        const words = titleRef.current?.querySelectorAll<HTMLElement>(".bg-line") || [];

        // Scatter cards randomly
        const scatterCards = () => {
            cards.forEach((card) => {
                if (!card) return;
                gsap.to(card, {
                    x: gsap.utils.random(-250, 250),
                    y: gsap.utils.random(-150, 150),
                    rotation: gsap.utils.random(-15, 15),
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                });
            });
        };

        // Align cards to original position
        const alignCards = () => {
            gsap.to(cards, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "power3.out",
            });
        };

        // Animate background words
        gsap.fromTo(
            words,
            { opacity: 0, y: 80, filter: "blur(6px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 1.2,
                stagger: 0.25,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "top 20%",
                    scrub: true,
                },
            }
        );

        scatterCards();

        // Add hover events
        cards.forEach((card) => {
            if (!card) return;
            card.addEventListener("mouseenter", alignCards);
            card.addEventListener("mouseleave", scatterCards);
        });

        return () => {
            cards.forEach((card) => {
                if (!card) return;
                card.removeEventListener("mouseenter", alignCards);
                card.removeEventListener("mouseleave", scatterCards);
            });
        };
    }, []);

    useEffect(() => {
        const words = titleRef.current?.querySelectorAll<HTMLElement>(".word") || [];
        gsap.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="testimonial-container" ref={containerRef}>
            <div className="testimonial-title" ref={titleRef}>
                <div className="testimonial-bg-text">
                    {["What they", "say ?"].map((line, i) => (
                        <div key={i} className="bg-line" style={{ marginBottom: "0.2em" }}>
                            {line}
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial-grid">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-card"
                        ref={(el) => {
                            cardRefs.current[index] = el!;
                        }}
                        style={{ zIndex: testimonials.length - index, opacity: 0 }}
                    >
                        <div className="quote-icon">"</div>
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <div className="testimonial-author">
                            <div className="author-name">{testimonial.name}</div>
                            <div className="author-position">{testimonial.position}</div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default TestimonialCards;
