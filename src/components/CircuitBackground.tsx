'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const NODE_COUNT = 38;
const MAX_DIST = 220;
const PACKET_CHANCE = 0.008;

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<Packet[]>([]);
  const rafRef = useRef<number>(0);
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.4 + 0.8,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.012,
      });
    }
    nodesRef.current = nodes;
    packetsRef.current = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodesRef.current.length === 0) {
        initNodes(window.innerWidth, window.innerHeight);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      ctx.clearRect(0, 0, w, h);

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += n.pulseSpeed;

        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      // Draw connections + spawn packets
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * (isDark ? 0.12 : 0.08);

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);

          // Right-angle automation-style paths
          const midX = nodes[i].x + dx * 0.5;
          if (Math.abs(dx) > Math.abs(dy)) {
            ctx.lineTo(midX, nodes[i].y);
            ctx.lineTo(midX, nodes[j].y);
          } else {
            const midY = nodes[i].y + dy * 0.5;
            ctx.lineTo(nodes[i].x, midY);
            ctx.lineTo(nodes[j].x, midY);
          }
          ctx.lineTo(nodes[j].x, nodes[j].y);

          ctx.strokeStyle = isDark
            ? `rgba(59, 130, 246, ${alpha})`
            : `rgba(10, 124, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Spawn data packets along connections
          if (Math.random() < PACKET_CHANCE && packets.length < 30) {
            packets.push({
              from: i,
              to: j,
              progress: 0,
              speed: 0.006 + Math.random() * 0.01,
            });
          }
        }
      }

      // Draw traveling data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const a = nodes[pkt.from];
        const b = nodes[pkt.to];
        const t = pkt.progress;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        const packetAlpha = Math.sin(t * Math.PI) * (isDark ? 0.55 : 0.4);

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(34, 230, 193, ${packetAlpha})`
          : `rgba(18, 214, 176, ${packetAlpha})`;
        ctx.fill();

        // Tiny glow
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(34, 230, 193, ${packetAlpha * 0.25})`
          : `rgba(18, 214, 176, ${packetAlpha * 0.2})`;
        ctx.fill();
      }

      // Draw nodes with pulse
      for (const n of nodes) {
        const pulse = 0.5 + Math.sin(n.pulsePhase) * 0.5;
        const nodeAlpha = (isDark ? 0.2 : 0.14) + pulse * (isDark ? 0.18 : 0.12);

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(59, 130, 246, ${nodeAlpha})`
          : `rgba(10, 124, 255, ${nodeAlpha})`;
        ctx.fill();

        // Outer pulse ring on some nodes
        if (n.radius > 1.6) {
          const ringAlpha = pulse * (isDark ? 0.08 : 0.05);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 4 + pulse * 3, 0, Math.PI * 2);
          ctx.strokeStyle = isDark
            ? `rgba(34, 230, 193, ${ringAlpha})`
            : `rgba(18, 214, 176, ${ringAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isDark, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
