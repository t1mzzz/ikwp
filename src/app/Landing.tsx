import Image from "next/image";

export default function Landing() {
    return (
        <div
            className="
            bg-[url('/landing_background.png')] 
            bg-cover 
            bg-center 
            h-screen
            flex
            text-ikwp-purple
            px-25
            py-57
            "
        >
            <div className="w-2/5">
            <div className="font-bold text-[90px] leading-25">
                Bringing <span className="text-ikwp-orange-1">Color</span> to the World
            </div>
            <div className="w-fit py-14.5">
                <a href="/products" className='flex place-items-center bg-ikwp-orange-1 text-ikwp-white font-semibold text-[2rem] px-9.5 py-4 rounded-full gap-3'>
                    Learn more
                    <Image 
                    src="/arrow_right_2x.png" 
                    alt="Arrow Right" 
                    width={19}
                    height={32} 
                    />
                </a>
            </div>
            </div>
            <div className="w-3/5 flex justify-items-end text-[28px] leading-[35px] font-normal pl-75 py-7">
                We provide high-quality chemical raw materials, driven by collaboration and excellence to advance the industry and ensure customer satisfaction.
            </div>
        </div>
    )
}