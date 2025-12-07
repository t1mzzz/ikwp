import Image from "next/image";

export default function Partners() {
  return (
    <div className="px-14 py-20 flex flex-col place-items-center justify-center gap-16">
      <div className="grid grid-cols-4 gap-40 place-items-center justify-center align-middle justify-items-center">
        <Image
          src="/archroma.png"
          alt="Archroma"
          width={382}
          height={128}
        />
        <Image
          src="/clariant.svg"
          alt="Clariant"
          width={357}
          height={83}
        />
        <Image
          src="/lily_group.svg"
          alt="Lily Group"
          width={311}
          height={128}
        />
        <Image
          src="/qfoam.svg"
          alt="Qfoam"
          width={228}
          height={128}
        />
      </div>

      <div className="flex place-items-center justify-center">
        <a href="/about" className="flex place-items-center bg-ikwp-orange-2 text-white font-semibold text-[2rem] px-9.5 py-4.5 rounded-full gap-3">
          Discover our company
          <Image 
              src="/arrow_right_2x.png" 
              alt="Arrow Right" 
              width={19}
              height={32} 
          />
      </a>
      </div>
    </div>
  );
}