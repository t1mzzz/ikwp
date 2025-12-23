import Image from "next/image";

export default function OurProducts() {
  return (
    <div className="px-12.5 py-8 xl:py-16 2xl:py-21.5 flex flex-col place-items-center gap-8 xl:gap-11.5">
      <div className="text-ikwp-black font-semibold text-[42px] xl:text-[54px]">
        Our Products
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-x-8.5">
        <a
          href="/products?category=paint_coating#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/paint_coating.png"
            alt="Paint & Coating"
            className="w-max h-auto 2xl:w-[429px] 2xl:h-[500px]"
          />
        </a>

        <a
          href="/products?category=printing#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/printing.png"
            alt="Printing"
            className="w-max h-auto 2xl:w-[429px] 2xl:h-[500px]"
          />
        </a>

        <a
          href="/products?category=plastic#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/plastic.png"
            alt="Plastic"
            className="w-max h-auto 2xl:w-[429px] 2xl:h-[500px]"
          />
        </a>

        <a
          href="/products?category=construction#products"
          className="transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src="/construction.png"
            alt="Building Construction"
            className="w-max h-auto 2xl:w-[429px] 2xl:h-[500px]"
          />
        </a>
      </div>
    </div>
  );
}
