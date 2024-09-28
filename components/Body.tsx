import Hero from "./Hero";
import Intro from "./Intro";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Outro from "./Outro";

export default function Body() {
  return (
    <div>
      <div className="px-4">
        <Intro />
        <Hero />
        <Pricing />
        <Outro />
      </div>
      <Footer />
    </div>
  );
}
