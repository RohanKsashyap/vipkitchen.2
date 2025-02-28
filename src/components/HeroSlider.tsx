import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Premium Modular Kitchens",
    subtitle: "Lifetime warranty with premium materials and expert craftsmanship",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/modular-kitchens"
  },
  {
    id: 2,
    title: "Luxury Interior Design",
    subtitle: "Transform your space with our bespoke interior design solutions",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/interior-designing"
  },
  {
    id: 3,
    title: "Smart Home Automation",
    subtitle: "Control your entire home from anywhere with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "/home-automation"
  }
];

const HeroSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentSlide = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideElements = slider.querySelectorAll('.slide');
    const slidesCount = slideElements.length;

    // Initialize GSAP timeline
    timelineRef.current = gsap.timeline({ 
      repeat: -1,
      onRepeat: () => {
        currentSlide.current = (currentSlide.current + 1) % slidesCount;
      }
    });

    // Set initial states
    gsap.set(slideElements, { 
      autoAlpha: 0,
      display: 'none',
      scale: 1.1
    });
    
    gsap.set(slideElements[0], { 
      autoAlpha: 1,
      display: 'flex',
      scale: 1
    });

    // Create animation for each slide
    slideElements.forEach((slide, index) => {
      const nextIndex = (index + 1) % slidesCount;
      
      // Text elements within the slide
      const title = slide.querySelector('.slide-title');
      const subtitle = slide.querySelector('.slide-subtitle');
      const button = slide.querySelector('.slide-button');
      
      // Animation sequence for current slide
      timelineRef.current?.add(gsap.timeline()
        .to(title, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, 0)
        .to(subtitle, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, 0.2)
        .to(button, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, 0.4)
        .to({}, { duration: 4 }) // Hold for 4 seconds
        .to([title, subtitle, button], { y: -50, autoAlpha: 0, duration: 0.7, ease: "power3.in" })
        .to(slide, { scale: 1.1, duration: 1.5, ease: "power3.in" }, "-=0.7")
      );
      
      // Transition to next slide
      timelineRef.current?.add(gsap.timeline()
        .set(slideElements[nextIndex], { autoAlpha: 0, display: 'flex', scale: 1.1 })
        .to(slide, { autoAlpha: 0, display: 'none', duration: 0.5, ease: "power3.in" }, 0)
        .to(slideElements[nextIndex], { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power3.out" }, 0)
      );
    });

    // Clean up
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={sliderRef} className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`slide absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24 ${index === 0 ? 'active' : ''}`}
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-3xl text-white">
            <h1 className="slide-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transform translate-y-20 opacity-0">
              {slide.title}
            </h1>
            <p className="slide-subtitle text-xl md:text-2xl mb-8 transform translate-y-20 opacity-0">
              {slide.subtitle}
            </p>
            <Link 
              to={slide.link}
              className="slide-button inline-flex items-center gap-2 bg-amber-600 text-white py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 text-lg font-medium transform translate-y-20 opacity-0"
            >
              <span>Explore Now</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;