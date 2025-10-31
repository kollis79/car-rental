import Navbar from "./components/navbar";
import Section1 from "./components/section1";
import Product from "./components/product";
import Cars from "./components/cars";
import Footer from "./footer";
import MobileMenu from "./components/mobileMenu";

export default function Home() {
  return (
   
    <div>
      <Navbar/>
      <Section1/>
      <Product/>
      <Cars/>
      <Footer/>
      <MobileMenu />
      
   
    </div>
  );
}
