import Image from "next/image";

export default function Landing() {
  return (
    <div
      className="
        bg-[url('/landing_background.png')] 
        bg-cover 
        bg-center
        md:bg-left
        xl:bg-top 2xl:bg-center 
        h-screen
        flex
        text-ikwp-purple
        px-8 py-28
        xl:px-16 xl:py-38
        2xl:px-25 2xl:py-57
      "
    >
      <div className="w-full xl:w-2/5">
        <div
          className="
            font-bold 
            text-[48px] leading-[1.1]
            lg:text-[60px]
            xl:text-[60px]
            2xl:text-[90px] 2xl:leading-25
          "
        >
          Bringing <span className="text-ikwp-orange-1">Color</span> to the World
        </div>

        <div className="w-fit py-8 lg:py-10 xl:py-12 2xl:py-14.5">
          <a
            href="/about"
            className="
              flex place-items-center
              bg-ikwp-orange-1 text-ikwp-white
              font-semibold
              text-2xl xl:text-xl 2xl:text-2xl
              px-6 py-3 lg:px-8 lg:py-4
              rounded-full gap-3
            "
          >
            Learn more
            <img
							src="/arrow_right_2x.png"
							alt="Arrow Right"
							className="
								w-[14px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px]
								h-auto
							"
						/>
          </a>
        </div>
      </div>

      <div
        className="
          hidden xl:flex
          xl:w-4/7 2xl:w-3/5
          justify-items-end
          text-[18px] leading-[26px]
          lg:text-[22px] lg:leading-[30px]
          xl:text-[20px] xl:leading-[30px]
          2xl:text-[28px] 2xl:leading-[35px]
          font-normal
          pl-10 lg:pl-16 xl:pl-32 2xl:pl-75
          py-4 lg:py-6 xl:py-7
        "
      >
        We provide high-quality chemical raw materials, driven by collaboration
        and excellence to advance the industry and ensure customer satisfaction.
      </div>
    </div>
  );
}
