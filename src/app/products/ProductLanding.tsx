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
      py-45
      2xl:px-25
      2xl:py-68
      "
    >
      <div className="flex flex-col place-items-center justify-center align-middle text-center gap-3 2xl:gap-5 px-93 2xl:px-140">
        <div className="font-bold text-[73px] 2xl:text-[110px] leading-17 2xl:leading-25">
          Product Portfolio
        </div>
        <div className="text-[16px] 2xl:text-2xl font-normal">
          We offer a comprehensive portfolio of chemical raw materials across
          four key segments:
        </div>
      </div>
    </div>
  );
}
