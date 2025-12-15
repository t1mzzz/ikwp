import Image from "next/image";

export default function OurProducts() {  
  return (
    <div className="px-12.5 xl:py-16 2xl:py-21.5 flex flex-col place-items-center gap-11.5">
      <div className="text-ikwp-black font-semibold text-[54px]">
        Our Products
      </div>
      <div className="grid grid-cols-4 gap-x-8.5">
        <a
          href="/products?category=paint_coating#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image
            src="/paint_coating.png"
            alt="Paint & Coating"
            width={429}
            height={500}
          />
        </a>

        <a
          href="/products?category=printing#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image src="/printing.png" alt="Printing" width={429} height={500} />
        </a>

        <a
          href="/products?category=plastic#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image src="/plastic.png" alt="Plastic" width={429} height={500} />
        </a>

        <a
          href="/products?category=construction#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <Image
            src="/construction.png"
            alt="Building Construction"
            width={429}
            height={500}
          />
        </a>
      </div>
    </div>
  );
}
