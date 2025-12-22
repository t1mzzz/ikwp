import Image from "next/image";

export default function Suppliers() {
  const suppliers = [ 
    { src: "/archroma.png", alt: "Archroma" },
    { src: "/lily_group.svg", alt: "Lily Group" },
    { src: "/clariant.svg", alt: "Clariant" },
    { src: "/qfoam.svg", alt: "Qfoam" },
  ];

  return (
    <div className="hidden p-17 2xl:p-25 w-full sm:flex justify-between items-center">
      <div className="w-1/2">
        <div className="w-19/20 2xl:w-full flex flex-col gap-10 2xl:gap-12.5">
          <div className="text-[36px] 2xl:text-[54px] font-semibold text-ikwp-purple leading-11 2xl:leading-17">
            Our Suppliers are <span className="text-ikwp-orange-1">established companies worldwide</span>
          </div>
          <div className="text-[21px] 2xl:text-[32px] text-ikwp-purple leading-7 2xl:leading-10">
            We partner with key leaders of chemical manufacture around the world, that are recognized for their quality and credibility for years.
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="grid grid-cols-2 gap-10 2xl:gap-15 justify-end">
          {suppliers.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
