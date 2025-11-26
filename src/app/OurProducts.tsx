import Image from "next/image";

export default function OurProducts() {
    return (
      <div className="px-12.5 py-21.5 flex flex-col place-items-center gap-11.5">
        <div className="text-ikwp-black font-semibold text-[54px]">
          Our Products
        </div>
        <div className="grid grid-cols-4 gap-x-8.5">
          <Image
            src="/paint_coating.png"
            alt="Paint & Coating"
            width={429}
            height={500}
          />

          <Image
            src="/printing.png"
            alt="Printing"
            width={429}
            height={500}
          />

          <Image
            src="/plastic.png"
            alt="Plastic"
            width={429}
            height={500}
          />

          <Image
            src="/construction.png"
            alt="Building Construction"
            width={429}
            height={500}
          />
        </div>
      </div>
    )
}