import Hero from "./Hero";
import Intro from "./Intro";
import Pricing from "./Pricing";
import Footer from "./Footer";

export default function Body() {
  return (
    <div>
      <div className="px-4">
        <Intro />
        <Hero />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
