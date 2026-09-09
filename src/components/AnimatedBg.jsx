import React, { useEffect, useRef } from 'react';

export const AnimatedBg = ({ theme }) => {
  const canvasRef = useRef(null);
  const themeRef = useRef(theme);

  // Keep themeRef updated
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle settings
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }

    // Smooth lerp for theme transition: 0.0 = dark, 1.0 = light
    let themeRatio = themeRef.current === 'light' ? 1.0 : 0.0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate themeRatio towards target
      const targetRatio = themeRef.current === 'light' ? 1.0 : 0.0;
      themeRatio += (targetRatio - themeRatio) * 0.06;

      // Draw subtle luminous gradients smoothly blended
      const g1Alpha = 0.14 * (1 - themeRatio) + 0.06 * themeRatio;
      const grad1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 10, width * 0.8, height * 0.2, 400);
      grad1.addColorStop(0, `rgba(99, 102, 241, ${g1Alpha})`);
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const g2Alpha = 0.12 * (1 - themeRatio) + 0.05 * themeRatio;
      const grad2 = ctx.createRadialGradient(width * 0.15, height * 0.65, 10, width * 0.15, height * 0.65, 380);
      grad2.addColorStop(0, `rgba(6, 182, 212, ${g2Alpha})`);
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Mouse interaction
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const angle = Math.atan2(dyMouse, dxMouse);
          p1.x += Math.cos(angle) * 1.5;
          p1.y += Math.sin(angle) * 1.5;
        }

        // Draw particle dot with smooth color blending
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        
        // Blend between dark indigo and light indigo
        const dotR = Math.round(99 * (1 - themeRatio) + 79 * themeRatio);
        const dotG = Math.round(102 * (1 - themeRatio) + 70 * themeRatio);
        const dotB = Math.round(241 * (1 - themeRatio) + 229 * themeRatio);
        const dotAlpha = p1.baseAlpha * (1 - 0.25 * themeRatio);
        ctx.fillStyle = `rgba(${dotR}, ${dotG}, ${dotB}, ${dotAlpha})`;
        ctx.fill();

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            const lineAlpha = (1 - dist / 130) * (0.22 * (1 - themeRatio) + 0.12 * themeRatio);
            // Blend from cyber cyan (6, 182, 212) to light indigo (79, 70, 229)
            const lineR = Math.round(6 * (1 - themeRatio) + 79 * themeRatio);
            const lineG = Math.round(182 * (1 - themeRatio) + 70 * themeRatio);
            const lineB = Math.round(212 * (1 - themeRatio) + 229 * themeRatio);

            ctx.strokeStyle = `rgba(${lineR}, ${lineG}, ${lineB}, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount, keep particles alive

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};
