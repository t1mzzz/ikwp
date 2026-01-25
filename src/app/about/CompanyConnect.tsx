export default function CompanyConnect() {
  return (
    <div className="py-17 px-8 2xl:py-25 2xl:px-12.5">
      <div className="bg-ikwp-purple rounded-4xl p-8 2xl:p-12.5 w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
        <div className="lg:w-1/2 flex flex-col text-left justify-between text-white gap-4 lg:gap-0">
          <div className="flex flex-col gap-4 2xl:gap-6">
            <div className="lg:w-1/2 text-[36px] 2xl:text-[54px] font-medium leading-10 2xl:leading-15">
              Let&apos;s make a colorful world
            </div>
            <div className="w-22/25 text-lg lg:text-[19px] 2xl:text-[28px] font-regular leading-6 2xl:leading-9">
              Our team has a strong history of collaborating closely with clients as long-term partners, creating customized solutions that support their success in local markets.
            </div>
          </div>
          <div className="flex flex-col place-items-center md:place-items-start justify-end">
            <a href="mailto:admin@intikaryawp.com" className="w-fit flex place-items-center items-center justify-center bg-ikwp-orange-1 text-white font-semibold text-lg md:text-[29px] 2xl:text-[43px] px-9 2xl:px-12 py-3 2xl:py-4.5 rounded-full gap-4 2xl:gap-6">
              Connect with us
              <img
                src="/arrow_right_2x.png" 
                alt="Arrow Right"
                className="w-[13px] h-[20px] 2xl:w-[19px] 2xl:h-8" 
              />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end">
          <img
            src="/colorful_world.png"
            alt="Connect"
            className="w-auto h-auto rounded-4xl md:rounded-[4rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
