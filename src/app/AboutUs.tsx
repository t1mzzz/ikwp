import Image from "next/image";

export default function AboutUs() {
    return (
      <div className="pb-8 px-12.5 flex place-items-center">
        <a href="/about" className="bg-ikwp-gray-1 w-max py-13 px-12.5 flex gap-12.5 shadow-2xl rounded-[40px]">
          <div className="w-1/2">
            <Image
              src="/landing_about.png"
              alt="About Us"
              width={882}
              height={520}
            />
          </div>
          <div className="w-1/2 py-12.5">
            <div className="font-bold text-[90px] pt-12.5 leading-27.5 text-ikwp-purple">
              About Us
            </div>
            <div className="text-[28px] leading-9 text-ikwp-black font-normal pr-2">
              Our commitment is to provide high-quality products that support industry needs with consistency and relevance. We continuously promote innovation and quality-check to fulfill the dynamic and competitive market needs. We highlight product safety to ensure every product is safe and qualified for use.
            </div>
          </div>
        </a>
      </div>
    )
}