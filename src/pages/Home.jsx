import React from 'react'
import Header from '../components/common/Header/Header';
import Hero from '../components/HeroSection/Hero';
import ProductShowcase from '../components/ProductShowcase/ProductShowcase';
import FeelSpecial from '../components/FeelSpecial/FeelSpecial';
import CredExperience from '../components/CredExprience/CredExperience';
import CredSecurity from '../components/CredSecurity/CredSecurity';
import BrandsLove from '../components/BrandsLove/BrandsLove';
import WindowPeak from '../components/WindowPeak/WindowPeak';
import MobileScroll from '../components/MobileScroll/MobileScroll';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ProductShowcase/>
      <FeelSpecial/>
      <BrandsLove/>
      <CredExperience/>
      <MobileScroll/>
      <div className="non-mobile">
        <WindowPeak/>
      </div>
      <CredSecurity/>
    </div>
  )
}

export default Home;