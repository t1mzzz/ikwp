import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        bg-[linear-gradient(110deg,#000744,#14194526_80%),url('/landing_background.png')] 
        bg-cover 
        bg-center 
        h-screen
        px-16
        py-32
        flex flex-col
        text-ikwp-white
      "
    >
      <div className="w-1/2 font-semibold text-[120px] leading-40">
        Bringing <span className="text-ikwp-orange">Color</span> to the World
      </div>
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-6">
          <div className="w-3/8 text-xl leading-7">
            Your trusted partner in delivering high-quality chemical products for diverse industries.
          </div>
          <div className="w-fit">
            <a href="/products" className='flex place-items-center bg-ikwp-orange text-ikwp-white font-semibold text-3xl px-12 py-4 rounded-full'>
                Explore Our Products
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex gap-5">
            <div className="bg-ikwp-white rounded-sm">
              <Image
                src="/globe.svg"
                alt="Globe Icon"
                width={64}
                height={64}
              />
            </div>
            <div className="justify-center items-center">
              <div className="text-2xl font-medium leading-6">
                <span className="text-4xl font-semibold">300+</span>
                <br/>
                Clients Nationwide
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="bg-ikwp-white rounded-sm">
              <Image
                src="/globe.svg"
                alt="Globe Icon"
                width={64}
                height={64}
              />
            </div>
            <div className="justify-center items-center">
              <div className="text-2xl font-medium leading-6">
                <span className="text-4xl font-semibold">500+</span>
                <br/>
                Diverse Products
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="bg-ikwp-white rounded-sm">
              <Image
                src="/globe.svg"
                alt="Globe Icon"
                width={64}
                height={64}
              />
            </div>
            <div className="justify-center items-center">
              <div className="text-2xl font-medium leading-6">
                <span className="text-4xl font-semibold">50+</span>
                <br/>
                Cities Nationwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
