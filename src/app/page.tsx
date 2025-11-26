import Image from "next/image";
import Landing from "./Landing";
import OurProducts from "./OurProducts";
import AboutUs from "./AboutUs";
import Partners from "./Partners";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Landing />
      <OurProducts />
      <AboutUs />
      <Partners />
    </div>
    
  );
}
