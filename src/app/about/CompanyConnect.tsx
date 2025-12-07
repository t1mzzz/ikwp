import Image from "next/image";

export default function CompanyConnect() {
  return (
    <div className="py-25 px-12.5">
      <div className="bg-ikwp-purple rounded-4xl p-12.5 w-full flex justify-between">
        <div className="w-1/2 flex flex-col text-left justify-between text-white">
          <div className="flex flex-col gap-6">
            <div className="w-1/2 text-[54px] font-medium leading-15">
              Let&apos;s make a colorful world
            </div>
            <div className="w-22/25 text-[28px] font-regular leading-9">
              Our team has a strong history of collaborating closely with clients as long-term partners, creating customized solutions that support their success in local markets.
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <a href="mailto:admin@intikaryawp.com" className="w-fit flex place-items-center items-center justify-center bg-ikwp-orange-1 text-white font-semibold text-[43px] px-12 py-4.5 rounded-full gap-6">
              Connect with us
              <Image 
                  src="/arrow_right_2x.png" 
                  alt="Arrow Right" 
                  width={19}
                  height={32} 
              />
          </a>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src="/colorful_world.png"
            alt="Connect"
            width={933}
            height={622}
            className="rounded-[4rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
