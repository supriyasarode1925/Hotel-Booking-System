import { Hero } from '../Components/Home/Hero';
import { Aboutsection } from '../Components/Home/Aboutsection';
import { CTA } from '../Components/Home/CTA';
import { Features } from '../Components/Home/Features';
import { HotelBook } from '../Components/Home/HotelBook';

export const Home = () => {
     return (
      <>
          <Hero />
          <Aboutsection />
          <HotelBook />
          <CTA />
          <Features />
      </>
     )
}