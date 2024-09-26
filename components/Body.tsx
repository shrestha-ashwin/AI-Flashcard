import Hero from "./Hero";
import Intro from "./Intro";
import Pricing from "./Pricing";

export default function Body() {
  return (
    <div className="px-4">
      <Intro />
      <Hero />
      <Pricing />
    </div>
  );
}
