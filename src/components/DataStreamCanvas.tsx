"use client";

import React, { useEffect, useRef } from "react";

interface StreamParticle {
  x: number;
  y: number;
  z: number;
  prevX: number;
  prevY: number;
  speed: number;
  color: "red" | "white" | "ruby";
  length: number;
  thickness: number;
  phase: number;
}

export function DataStreamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 65 : 180;
    const fov = 350;

    const particles: StreamParticle[] = [];

    const initParticle = (): StreamParticle => {
      const isRed = Math.random() > 0.45;
      const isRuby = isRed && Math.random() > 0.6;
      return {
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 1000 + 100,
        prevX: 0,
        prevY: 0,
        speed: Math.random() * 6 + 4,
        color: isRuby ? "ruby" : isRed ? "red" : "white",
        length: Math.random() * 25 + 15,
        thickness: Math.random() * 1.8 + 0.8,
        phase: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(initParticle());
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) * 0.15;
      targetMouseY = (e.clientY - height / 2) * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    let tick = 0;

    const render = () => {
      tick += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Deep obsidian clear with motion trails
      ctx.fillStyle = "rgba(5, 6, 8, 0.28)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2 + mouseX;
      const cy = height / 2 + mouseY;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Sinuous stream flow
        const streamWave = Math.sin(tick + p.phase) * 1.5;
        p.x += streamWave;
        p.z -= p.speed;

        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 1.8;
          p.y = (Math.random() - 0.5) * height * 1.8;
          p.prevX = cx + (p.x / p.z) * fov;
          p.prevY = cy + (p.y / p.z) * fov;
        }

        const screenX = cx + (p.x / p.z) * fov;
        const screenY = cy + (p.y / p.z) * fov;

        if (p.prevX !== 0) {
          // Perspective alpha fade
          const alpha = Math.min(1, Math.max(0, (1000 - p.z) / 800));

          ctx.beginPath();
          ctx.moveTo(screenX, screenY);

          // Calculate head tail based on velocity vector
          const tailZ = p.z + p.length;
          const tailX = cx + (p.x / tailZ) * fov;
          const tailY = cy + (p.y / tailZ) * fov;

          ctx.lineTo(tailX, tailY);

          if (p.color === "red") {
            ctx.strokeStyle = `rgba(225, 37, 45, ${alpha * 0.85})`;
            ctx.shadowColor = "rgba(225, 37, 45, 0.7)";
            ctx.shadowBlur = 8;
          } else if (p.color === "ruby") {
            ctx.strokeStyle = `rgba(255, 60, 75, ${alpha * 0.95})`;
            ctx.shadowColor = "rgba(255, 60, 75, 0.8)";
            ctx.shadowBlur = 12;
          } else {
            ctx.strokeStyle = `rgba(240, 244, 250, ${alpha * 0.75})`;
            ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
            ctx.shadowBlur = 6;
          }

          ctx.lineWidth = Math.max(0.6, (1 - p.z / 1000) * p.thickness * 2.2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        p.prevX = screenX;
        p.prevY = screenY;
      }

      // Draw subtle horizon convergence line
      const grad = ctx.createLinearGradient(0, height * 0.65, width, height * 0.65);
      grad.addColorStop(0, "rgba(225, 37, 45, 0)");
      grad.addColorStop(0.5, "rgba(225, 37, 45, 0.15)");
      grad.addColorStop(1, "rgba(225, 37, 45, 0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.65);
      ctx.lineTo(width, height * 0.65);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
