import Image from "next/image";

export default function AboutUs() {
    return (
      <div className="pb-8 px-12.5 flex items-center overflow-visible">
        <a href="/about" 
          className="bg-ikwp-gray-1 w-max py-13 px-12.5 flex gap-12.5 rounded-[40px] transform transition-transform duration-300 ease-in-out hover:scale-105"
          style={{ boxShadow: '8px 15px 25px rgba(0,0,0,0.16)' }}  
        >
          <div className="w-1/2">
            <Image
              src="/landing_about.png"
              alt="About Us"
              width={882}
              height={520}
            />
          </div>
          <div className="w-1/2 2xl:py-12.5">
            <div className="font-bold xl:text-[50px] 2xl:text-[90px] xl:pt-10 2xl:pt-12.5 xl:leading-24 2xl:leading-27.5 text-ikwp-purple">
              About Us
            </div>
            <div className="xl:text-[18px] 2xl:text-[28px] xl:leading-5 2xl:leading-9 text-ikwp-black font-normal pr-2">
              Our commitment is to provide high-quality products that support industry needs with consistency and relevance. We continuously promote innovation and quality-check to fulfill the dynamic and competitive market needs. We highlight product safety to ensure every product is safe and qualified for use.
            </div>
          </div>
        </a>
      </div>
    )
}