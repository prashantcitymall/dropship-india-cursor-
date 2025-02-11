import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
`;

const ElectricField = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const initCanvas = () => {
      canvas.width = width;
      canvas.height = height;
      particles.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: Math.random() * 0.5 + 0.5
      }));
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.radius
      );
      gradient.addColorStop(0, `rgba(0, 245, 160, ${particle.alpha})`);
      gradient.addColorStop(1, 'rgba(0, 245, 160, 0)');
      ctx.fillStyle = gradient;
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const connectParticles = (p1, p2) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 245, 160, ${0.2 * (1 - distance / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.current.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        drawParticle(particle);

        for (let j = i + 1; j < particles.current.length; j++) {
          connectParticles(particle, particles.current[j]);
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      initCanvas();
    };

    initCanvas();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

export default ElectricField;
