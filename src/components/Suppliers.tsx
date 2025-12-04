import Image from "next/image";

export default function Suppliers() {
  const suppliers = [ 
    { src: "/archroma.png", alt: "Archroma" },
    { src: "/lily_group.svg", alt: "Lily Group" },
    { src: "/clariant.svg", alt: "Clariant" },
    { src: "/qfoam.svg", alt: "Qfoam" },
  ];

  return (
    <div className="p-25 w-full flex justify-between items-center">
      <div className="w-1/2 flex flex-col gap-12.5">
        <div className="text-[54px] font-semibold text-ikwp-purple leading-17">
          Our Suppliers are <span className="text-ikwp-orange-1">established companies worldwide</span>
        </div>
        <div className="text-[32px] text-ikwp-purple leading-10">
          We partner with key leaders of chemical manufacture around the world, that are recognized for their quality and credibility for years.
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="grid grid-cols-2 gap-15 justify-end">
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
