"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    gradient: "from-[#0a1628] via-[#0d2040] to-[#0a2a3a]",
    accent: "rgba(0,212,255,0.15)",
    icon: "fa-code",
    iconColor: "text-cyan",
    title: "Custom Software Development",
    subtitle: "Built for Your Business Needs",
    desc: "Robust, scalable, and secure applications to streamline your operations and drive growth.",
    btn: { text: "Our Services", href: "/services/custom-software" },
  },
  {
    gradient: "from-[#0d1f3a] via-[#0a1e35] to-[#051528]",
    accent: "rgba(0,180,255,0.12)",
    icon: "fa-laptop-code",
    iconColor: "text-blue-400",
    title: "Innovative SaaS Solutions",
    subtitle: "Digital Transformation",
    desc: "Modern web applications and software platforms tailored for enterprise and startups alike.",
    btn: { text: "SaaS Products", href: "/services/saas-solutions" },
  },
  {
    gradient: "from-[#051528] via-[#0a2235] to-[#0d1a2e]",
    accent: "rgba(0,212,255,0.10)",
    icon: "fa-cloud",
    iconColor: "text-cyan",
    title: "Cloud Architecture",
    subtitle: "Scalable Infrastructure",
    desc: "Deploy, manage, and scale your applications with modern cloud technologies and reliable hosting.",
    btn: { text: "Cloud Services", href: "/services/cloud-architecture" },
  },
  {
    gradient: "from-[#0a1e35] via-[#0d2845] to-[#051528]",
    accent: "rgba(100,180,255,0.12)",
    icon: "fa-mobile-screen",
    iconColor: "text-blue-300",
    title: "Complete Digital Partner",
    subtitle: "One Stop Tech Solutions",
    desc: "Web services, mobile app development, bulk SMS, and comprehensive consulting — your trusted technology partner.",
    btn: { text: "All Services", href: "/services" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden" id="home">
      <div className="relative min-h-[520px] md:min-h-[560px]">
        {/* Gradient backgrounds */}
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Animated glow orb */}
            <div
              className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: s.accent }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl"
              style={{ background: s.accent }}
            />
          </div>
        ))}

        {/* Big icon visual (right side, background) */}
        <div
          key={`icon-${current}`}
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-[320px] h-[320px] opacity-10 animate-fadeSlideIn"
        >
          <i className={`fas ${slide.icon} text-[220px] text-white`} />
        </div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        {/* Content */}
        <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20 md:py-28 min-h-[520px]">
          <div
            key={current}
            className="flex-1 max-w-xl text-center lg:text-left animate-fadeSlideIn"
          >
            <span className="inline-flex items-center gap-2 bg-cyan/15 text-cyan text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-cyan/25 backdrop-blur-sm">
              <i className={`fas ${slide.icon} text-xs`} />
              {slide.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              {slide.desc}
            </p>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href={slide.btn.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark hover:shadow-[0_8px_25px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 transition-all"
              >
                {slide.btn.text}
                <i className="fas fa-arrow-right text-sm" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white/10 text-white border-2 border-white/20 hover:border-cyan hover:text-cyan hover:-translate-y-0.5 transition-all backdrop-blur-sm"
              >
                <i className="fas fa-phone text-sm" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Stats on right */}
          <div className="flex-1 hidden lg:flex flex-col items-center gap-5">
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Projects", icon: "fa-check-circle" },
                { num: "200+", label: "Clients", icon: "fa-users" },
                { num: "10+", label: "Years", icon: "fa-clock" },
                { num: "24/7", label: "Support", icon: "fa-headset" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors"
                >
                  <i className={`fas ${s.icon} text-cyan text-xl mb-2`} />
                  <h3 className="text-2xl font-bold text-white">{s.num}</h3>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all rounded-full ${
                i === current
                  ? "w-8 h-3 bg-cyan"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-20 backdrop-blur-sm border border-white/10"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </section>
  );
}
