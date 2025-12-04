import { Cities, Clients, Provinces } from "@/constants/icons";
import Image from "next/image";

export default function AboutLanding() {
  return (
    <div
      className="
      bg-[url('/about_landing_background.png')] 
      bg-[length-120%]
      bg-top-left
      h-screen
      flex
      flex-col
      justify-between
      gap-7
      text-ikwp-purple
      px-25
      pt-57
      pb-40
      "
    >
      <div className="flex flex-col gap-7">
        <div className="w-2/5 font-bold text-[90px] leading-25">
          Creating Together
        </div>
        <div className="w-9/25 text-[24px] leading-7.5">
          &quot;To be a trusted partner in providing high-quality chemical raw materials, with a spirit of collaboration and excellence to advance the industry and ensure customer satisfaction.&quot;
        </div>
      </div>
      <div className="flex gap-17">
        <div className="w-[195px] h-[152px] bg-white rounded-4xl px-7 py-4.5 flex flex-col place-items-center gap-2 text-ikwp-orange-2 text-[22px] font-semibold">
          <Clients className="w-20 h-20" style={{ color: 'ikwp-orange-2' }}/>
          120+ clients
        </div>
        <div className="w-[195px] h-[152px] bg-white rounded-4xl px-7 py-4.5 flex flex-col place-items-center gap-2 text-ikwp-purple text-[22px] font-semibold">
          <Cities className="w-20 h-20" style={{ color: 'ikwp-purple' }}/>
          17+ cities
        </div>
        <div className="w-[195px] h-[152px] bg-white rounded-4xl px-7 py-4.5 flex flex-col place-items-center gap-2 text-ikwp-green text-[22px] font-semibold">
          <Provinces className="w-20 h-20" style={{ color: 'ikwp-green' }}/>
          7+ provinces
        </div>
      </div>
    </div>
  );
}