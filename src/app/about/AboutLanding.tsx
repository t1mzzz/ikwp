import { Cities, Clients, Provinces } from "@/constants/icons";
import Image from "next/image";

export default function AboutLanding() {
  return (
    <div
      className="
      bg-[url('/about_landing_background.png')] 
      bg-[length:1622px_auto]
      bg-top-left
      2xl:bg-auto
      2xl:bg-[length-120%]
      h-screen
      flex
      flex-col
      justify-between
      gap-7
      text-ikwp-purple
      px-8 py-28
      xl:px-18 2xl:px-25
      xl:pt-40 xl:pb-30
      2xl:pt-57 2xl:pb-40
      "
    >
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-7">
        <div className="w-2/5 font-bold text-[48px] xl:text-[60px] 2xl:text-[90px] leading-[1.1] 2xl:leading-25">
          Creating Together
        </div>
        <div className="w-3/5 md:w-9/25 xl:text-[16px] 2xl:text-[24px] xl:leading-5 2xl:leading-7.5">
          &quot;To be a trusted partner in providing high-quality chemical raw materials, with a spirit of collaboration and excellence to advance the industry and ensure customer satisfaction.&quot;
        </div>
      </div>
        <div className="w-max flex md:flex-row flex-col gap-4 md:gap-14 2xl:gap-17 text-[14px] 2xl:text-[22px] md:whitespace-normal">
          <div className="lg:w-[130px] lg:h-[100px] 2xl:w-[195px] 2xl:h-[152px] bg-white rounded-4xl px-5 py-3 2xl:px-7 2xl:py-4.5 flex md:flex-col place-items-center gap-2 text-ikwp-orange-2 font-semibold">
            <Clients className="flex w-8 h-8 md:w-14 md:h-14 2xl:w-20 2xl:h-20" style={{ color: 'ikwp-orange-2' }}/>
            120+ clients
          </div>
          <div className="lg:w-[130px] lg:h-[100px] 2xl:w-[195px] 2xl:h-[152px] bg-white rounded-4xl px-5 py-3 2xl:px-7 2xl:py-4.5 flex md:flex-col place-items-center gap-2 text-ikwp-purple font-semibold">
            <Cities className="flex w-8 h-8 md:w-14 md:h-14 2xl:w-20 2xl:h-20" style={{ color: 'ikwp-purple' }}/>
            17+ cities
          </div>
          <div className="lg:w-[130px] lg:h-[100px] 2xl:w-[195px] 2xl:h-[152px] bg-white rounded-4xl px-5 py-3 2xl:px-7 2xl:py-4.5 flex md:flex-col place-items-center gap-2 text-ikwp-green font-semibold">
            <Provinces className="flex w-8 h-8 md:w-14 md:h-14 2xl:w-20 2xl:h-20" style={{ color: 'ikwp-green' }}/>
            7+ provinces
          </div>
      </div>
    </div>
  );
}