import React, { useEffect, useRef } from 'react';

export const AnimatedBg = ({ theme }) => {
  const canvasRef = useRef(null);
  const themeRef  = useRef(theme);

  useEffect(() => { themeRef.current = theme; }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let rafId;

    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Mouse repulsion
    const mouse = { x: -2000, y: -2000, radius: 130 };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Particles
    const COUNT = Math.min(Math.floor((W * H) / 13000), 90);
    const pts = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.65,
      vy: (Math.random() - 0.5) * 0.65,
      r:  Math.random() * 1.8 + 0.8,
      a:  Math.random() * 0.55 + 0.15,
    }));

    // Aurora blobs
    const blobs = [
      { x: W * 0.80, y: H * 0.18, r: 380, vx: 0.18, vy: 0.10, color: [99, 102, 241] },
      { x: W * 0.12, y: H * 0.70, r: 360, vx: -0.14, vy: -0.09, color: [6, 182, 212] },
      { x: W * 0.55, y: H * 0.85, r: 300, vx: 0.10, vy: 0.14, color: [245, 158, 11] },
    ];

    let ratio = themeRef.current === 'light' ? 1.0 : 0.0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Smooth theme lerp
      const target = themeRef.current === 'light' ? 1.0 : 0.0;
      ratio += (target - ratio) * 0.05;

      // --- Aurora blobs ---
      blobs.forEach((b) => {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r || b.x > W + b.r) b.vx *= -1;
        if (b.y < -b.r || b.y > H + b.r) b.vy *= -1;

        const alpha = 0.11 * (1 - ratio) + 0.045 * ratio;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},${alpha})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      // --- Particles ---
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d  = Math.hypot(dx, dy);
        if (d < mouse.radius) {
          const ang = Math.atan2(dy, dx);
          p.x += Math.cos(ang) * 1.8;
          p.y += Math.sin(ang) * 1.8;
        }

        // Dot color blend
        const pR = Math.round(99  * (1 - ratio) + 79  * ratio);
        const pG = Math.round(102 * (1 - ratio) + 70  * ratio);
        const pB = Math.round(241 * (1 - ratio) + 229 * ratio);
        const pA = p.a * (1 - 0.3 * ratio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pR},${pG},${pB},${pA})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < pts.length; j++) {
          const q   = pts[j];
          const ddx = p.x - q.x;
          const ddy = p.y - q.y;
          const dd  = Math.hypot(ddx, ddy);
          if (dd < 125) {
            const lA = (1 - dd / 125) * (0.20 * (1 - ratio) + 0.10 * ratio);
            const lR = Math.round(6   * (1 - ratio) + 99  * ratio);
            const lG = Math.round(182 * (1 - ratio) + 102 * ratio);
            const lB = Math.round(212 * (1 - ratio) + 241 * ratio);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${lR},${lG},${lB},${lA})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};
