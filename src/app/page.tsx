import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <main className="relative min-h-[500vh]">
      <Navbar />
      
      {/* 
        CanvasSequence handles the image rendering and maps scroll position to frame index.
        It is sticky to the viewport, staying fixed while the rest of the page scrolls.
      */}
      <CanvasSequence />

      {/* 
        Content Sections
        These overlay the canvas and scroll naturally over it. 
        They are spaced out with h-screen to trigger at different scroll depths.
      */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        
        {/* HERO: 0-15% */}
        <section id="overview" className="h-screen flex items-center justify-center px-6 lg:px-20 pointer-events-auto">
          <StorySection
            headline="AirPods Max 2"
            subheadline="Sound beyond limits."
            supportingLines={[
              "The most advanced personal listening experience Apple has ever engineered."
            ]}
            align="center"
            className="mt-20" // Offset for navbar
          />
        </section>

        {/* ENGINEERING REVEAL: 15-40% */}
        <section id="acoustic" className="h-[120vh] flex flex-col justify-end pb-[20vh] px-6 lg:px-24 pointer-events-auto">
          <StorySection
            headline="Engineered from the inside out."
            supportingLines={[
              "A custom-built high-excursion driver, precision-tuned for low distortion and remarkable range.",
              "Every material, every tolerance, every curve — designed with one purpose: pure sound."
            ]}
            align="left"
          />
        </section>

        {/* NOISE CANCELLATION: 40-65% */}
        <section id="cancellation" className="h-[120vh] flex flex-col justify-center px-6 lg:px-24 pointer-events-auto">
          <StorySection
            headline="Silence on a whole new level."
            supportingLines={[
              "Six outward-facing mics. Two inward-facing. Total acoustic awareness.",
              "Computational audio processes 48,000 times per second, in real time.",
              "Active Noise Cancellation that adapts as fast as the world changes around you."
            ]}
            align="right"
          />
        </section>

        {/* SPATIAL AUDIO: 65-85% */}
        <section id="spatial" className="h-[100vh] flex flex-col justify-center px-6 lg:px-24 pointer-events-auto">
          <StorySection
            headline="Spatial audio. Everywhere you go."
            supportingLines={[
              "Dynamic head tracking places sound precisely in three-dimensional space — movies, music, and calls feel boundlessly real.",
              "Personalized Spatial Audio maps the geometry of your ears, tailoring the soundscape just for you."
            ]}
            align="left"
          />
        </section>

        {/* REASSEMBLY & CTA: 85-100% */}
        <section id="buy" className="h-screen flex items-center justify-center px-6 lg:px-20 pointer-events-auto">
          <div className="flex flex-col items-center justify-center text-center mt-32">
            <StorySection
              headline="Hear everything. Feel nothing else."
              subheadline="AirPods Max 2. Crafted for clarity, built for the world."
              align="center"
              className="mb-10"
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#" 
                className="px-8 py-3 rounded-full bg-apple-accent text-apple-bg font-semibold text-lg hover:bg-white transition-colors"
              >
                Order AirPods Max 2
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white font-medium text-lg transition-colors border-b border-transparent hover:border-white"
              >
                Explore the full specs
              </a>
            </div>
            <p className="mt-8 text-sm text-white/40">
              Available in Midnight, Starlight, Sky Blue, Orange, and Purple.
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
}
