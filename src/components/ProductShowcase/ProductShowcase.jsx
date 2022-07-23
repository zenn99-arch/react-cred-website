import React,{useEffect, useState,useRef} from 'react'

import "./ProductShowCase.css"

const ProductShowcase = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const ref = useRef(null);
  
    const toggleAnimation = (e) => {
      if (e[0]?.isIntersecting) {
        setShowAnimation(true);
      }
    };
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(toggleAnimation, options);
      if (!showAnimation) {
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
    
    return (
      <div
        className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
        scale-in-bottom
        ref={ref}
      >
        {showAnimation && (
          <div className="showcase-wrapper">
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
              alt='img1' className="showcase-ui showcase-mockup-1"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
              alt='img2' className="showcase-ui showcase-mockup-2"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
              alt='img3' className="showcase-ui showcase-mockup-3"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
              alt='img4' className="showcase-ui showcase-mockup-4"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
              alt='img5' className="showcase-ui showcase-mockup-5"
            />
          </div>
        )}
      </div>
    );
  };

export default ProductShowcase;