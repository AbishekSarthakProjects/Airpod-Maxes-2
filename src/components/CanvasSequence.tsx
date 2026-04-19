"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

const currentFrame = (index: number) => 
  `/sequence/frame_${index.toString().padStart(4, '0')}.jpg`;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        // Initial render when first frame is loaded
        if (i === 1) {
          renderFrame(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match window viewport
    const { innerWidth, innerHeight } = window;
    if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center the image on canvas every frame
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;
    
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map scroll progress (0-1) to frame index (0-239)
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * (FRAME_COUNT - 1))
    );
    
    requestAnimationFrame(() => renderFrame(images[frameIndex]));
  });

  // Initial render once images are loaded
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      renderFrame(images[0]);
    }
  }, [images]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * (FRAME_COUNT - 1))
      );
      if (images[frameIndex]) {
        renderFrame(images[frameIndex]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="sticky top-0 h-screen w-full bg-apple-bg overflow-hidden z-0 flex items-center justify-center">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
