import Navbar from "./components/Navbar";
import Product from "./components/Package";
import Cars from "./components/cars";
import Footer from "./footer";
import MobileMenu from "./components/mobileMenu";
import Dash from "./components/Dash"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Product />
      <Cars />
      <Footer />
      <MobileMenu />
      <Dash />
    </div>
  );
}
