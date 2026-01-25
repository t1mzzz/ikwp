export default function ProductLanding() {
  return (
    <div
      className="
      bg-[url('/product_landing_background.png')] 
      bg-cover 
      bg-center 
      h-screen
      flex
      flex-col
      text-ikwp-white
      px-17
      py-35
      lg:py-45
      2xl:px-25
      2xl:py-68
      "
    >
      <div className="flex-col place-items-center justify-center align-middle text-center gap-2 lg:gap-3 2xl:gap-5 lg:px-93 2xl:px-140 flex">
        <div className="md:px-50 lg:px-0 font-bold text-[60px] lg:text-[73px] 2xl:text-[110px] leading-15 md:leading-17 2xl:leading-25">
          Product Portfolio
        </div>
        <div className="md:px-30 lg:px-0 text-[22px] md:text-[16px] 2xl:text-2xl font-normal">
          We offer a comprehensive portfolio of chemical raw materials across
          four key segments:
        </div>
      </div>
    </div>
  );
}
