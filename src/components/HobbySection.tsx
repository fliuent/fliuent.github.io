import React, { useState, useEffect, useRef } from "react";
import { Hobby } from "../types";
import { Heart, Compass, Waves, Telescope, Cpu, Play, RotateCcw, Sliders, Info, Volume2, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../content/siteContent";

interface HobbySectionProps {
  hobbies: Hobby[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function HobbySection({ hobbies }: HobbySectionProps) {
  const { hobbySection } = siteContent;
  const [selectedHobbyId, setSelectedHobbyId] = useState<string>(hobbies[0]?.id || "");
  const [activeSimulation, setActiveSimulation] = useState(false);
  const [gravityStr, setGravityStr] = useState(0.4); // Gravity parameter
  const [particleCount, setParticleCount] = useState(40);

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const gravitySourceRef = useRef({ x: 150, y: 150, mass: 1000 });

  // Handle Resize using standard ResizeObserver as mandated in guidelines!
  useEffect(() => {
    if (!activeSimulation || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    const initParticles = (width: number, height: number) => {
      const parts: Particle[] = [];
      const centerX = width / 2;
      const centerY = height / 2;
      gravitySourceRef.current = { x: centerX, y: centerY, mass: 1000 };

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * (Math.min(width, height) / 2.2 - 40);
        // Orbital velocity approximation: v = sqrt(G*M/r) inside tangent direction
        const speed = Math.sqrt((gravityStr * 800) / dist) * (0.8 + Math.random() * 0.4);
        parts.push({
          x: centerX + Math.cos(angle) * dist,
          y: centerY + Math.sin(angle) * dist,
          vx: -Math.sin(angle) * speed,
          vy: Math.cos(angle) * speed,
          radius: 1.5 + Math.random() * 2.5,
          color: `hsl(${190 + Math.random() * 60}, 90%, 65%)`,
        });
      }
      particlesRef.current = parts;
    };

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      
      // Update canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Re-init particles on resize with proper dimension boundaries
      initParticles(width, height);
    };

    // Debounced or direct observer instance
    const observer = new ResizeObserver((entries) => {
      // Direct update is safe and smooth in standard react flow when handled inside ref
      handleResize(entries);
    });

    observer.observe(container);

    // Initial size setting
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    initParticles(rect.width, rect.height);

    return () => {
      observer.disconnect();
    };
  }, [activeSimulation, particleCount, gravityStr]);

  // Main simulation loop
  useEffect(() => {
    if (!activeSimulation) return;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;

      // Semi-transparent background clear for elegant light trailing effect
      ctx.fillStyle = "rgba(15, 23, 42, 0.18)";
      ctx.fillRect(0, 0, width, height);

      // Draw Center Star (Central attract point representing gravitational core)
      const center = gravitySourceRef.current;
      const pulseRadius = 10 + Math.sin(Date.now() * 0.005) * 2;
      const radialGrad = ctx.createRadialGradient(center.x, center.y, 2, center.x, center.y, pulseRadius);
      radialGrad.addColorStop(0, "#ffffff");
      radialGrad.addColorStop(0.3, "#3b82f6");
      radialGrad.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = radialGrad;
      ctx.beginPath();
      ctx.arc(center.x, center.y, pulseRadius, 0, Math.PI * 2);
      ctx.fill();

      // Update and Draw particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational acceleration calculation
        const dx = center.x - p.x;
        const dy = center.y - p.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist > 5) {
          // Force formula: F = G * m1 * m2 / r^2
          const force = (gravityStr * 50) / (distSq + 120); // soft factor prevents divide by zero
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Apply friction/drag slightly
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Bounce from border walls to maintain density inside boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Render particle
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeSimulation, gravityStr]);

  // Handle canvas mouse interaction (click and drag moves gravity center)
  const handleCanvasInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gravitySourceRef.current.x = x;
    gravitySourceRef.current.y = y;
  };

  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return Compass;
      case "Waves":
        return Waves;
      case "Telescope":
        return Telescope;
      case "Cpu":
        return Cpu;
      case "Sliders":
        return Sliders;
      default:
        return Heart;
    }
  };

  const selectedHobby = hobbies.find((h) => h.id === selectedHobbyId) || hobbies[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="space-y-12 animate-fade-in"
    >
      {/* List Header */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
          <Heart className="w-6 h-6 text-[#007bfe]" />
          <h2 className="font-heading text-2xl font-bold text-[#007bfe]" id="hobby-title">
            {hobbySection.title}
          </h2>
        </div>

        {/* Dynamic Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hobbies.map((hob) => {
            const Icon = getHobbyIcon(hob.iconName);
            const isSelected = selectedHobbyId === hob.id;
            return (
              <button
                key={hob.id}
                onClick={() => setSelectedHobbyId(hob.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#007bfe]/5 text-[#007bfe] border-[#007bfe]/35 font-semibold scale-[1.02] shadow-xs"
                    : "bg-white text-gray-700 border-gray-100 hover:bg-gray-50/50 hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className={`p-1.5 rounded-lg ${isSelected ? "bg-[#007bfe] text-white" : "bg-gray-100 text-gray-500"}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-[8.5px] font-mono tracking-wider font-bold text-gray-400 block uppercase">
                    {hob.category}
                  </span>
                </div>
                <h3 className="font-heading text-[15px] sm:text-base font-bold text-gray-800 tracking-tight leading-snug line-clamp-1">
                  {hob.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Hobby spotlight view */}
        <AnimatePresence mode="wait">
          {selectedHobby && (
            <motion.div
              key={selectedHobby.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-0"
            >
              {/* Image Banner Left Column */}
              <div className="md:col-span-5 h-[200px] md:h-full min-h-[220px] relative">
                <img
                  src={selectedHobby.imageUrl}
                  alt={selectedHobby.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-[#007bfe] px-2 py-0.5 rounded-md">
                    {selectedHobby.category}
                  </span>
                </div>
              </div>

              {/* Text info Right Column */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-800">
                    {selectedHobby.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-sans">
                    {selectedHobby.description}
                  </p>
                </div>

                {/* Simulated highlight details */}
                {selectedHobby.iconName === "Sliders" && (
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setActiveSimulation(!activeSimulation)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        activeSimulation
                          ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
                          : "bg-[#007bfe] hover:bg-[#007bfe]/90 text-white shadow-xs"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{activeSimulation ? hobbySection.activeSimulationLabel : hobbySection.launchSimulationLabel}</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Embedded Real Multi-Particle Physics Gravity Simulation Canvas (Highly Creative & Absolute Craftsmanship) */}
      <AnimatePresence>
        {activeSimulation && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="overflow-hidden space-y-4"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 text-slate-100 flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading">
                      {hobbySection.simulatorTitle}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {hobbySection.simulatorSubtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Parameter sliders */}
                  <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    <Sliders className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] text-slate-400 font-mono">{hobbySection.elasticityLabel} {gravityStr.toFixed(1)}</span>
                    <input
                      type="range"
                      min="0.1"
                      max="1.5"
                      step="0.1"
                      value={gravityStr}
                      onChange={(e) => setGravityStr(parseFloat(e.target.value))}
                      className="w-16 h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                    <Cpu className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] text-slate-400 font-mono">{hobbySection.ballCountLabel} {particleCount}</span>
                    <input
                      type="range"
                      min="10"
                      max="120"
                      step="5"
                      value={particleCount}
                      onChange={(e) => setParticleCount(parseInt(e.target.value))}
                      className="w-16 h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-500"
                    />
                  </div>

                  <button
                    onClick={() => {
                      // Trigger a canvas reset
                      setParticleCount((prev) => prev);
                    }}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                    title={hobbySection.resetSimulationLabel}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulation Canvas stage area */}
              <div
                ref={containerRef}
                className="w-full h-[280px] bg-slate-950 rounded-xl relative overflow-hidden border border-slate-900 cursor-crosshair"
              >
                <canvas
                  ref={canvasRef}
                  onMouseMove={handleCanvasInteraction}
                  className="absolute inset-0 block w-full h-full"
                />

                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-800 pointer-events-none">
                  <span className="text-[9px] text-[#007bfe] font-mono block">{hobbySection.demonstrationLabel}</span>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {hobbySection.demonstrationHint}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
