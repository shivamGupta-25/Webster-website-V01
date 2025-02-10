import About from "./_components/About";
import Banner from "./_components/Banner";
import Council from "./_components/Council";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import PastEvent from "./_components/PastEvent";
import Workshop from "./_components/Workshop";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Workshop />
    <PastEvent />
    <Council />
    <Footer />
    </>
  );
}
