import Image from "next/image";

export default function CompanyCommitment() {
  return (
    <div className="py-15 px-8 2xl:py-25 2xl:px-12.5 flex justify-between">
      <div className="w-1/4 hidden md:flex justify-start">
        <div className="flex flex-col justify-between">
          <img
            src="/logo_full.png"
            className="w-[118px] h-[37px] 2xl:w-[176px] 2xl:h-[55px]"
            alt="IKWP Logo"
          />
          <img
            src="/old_car.png"
            className="w-[163px] h-[101px] 2xl:w-[245px] 2xl:h-[152px]"
            alt="Old Car"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-0 justify-center">
        <div className="text-[36px] 2xl:text-[54px] font-semibold text-ikwp-orange-2 leading-12 2xl:leading-17">
          <span className="text-ikwp-purple">lntiKarya WarnaPrima carries the vision of</span> &quot;Bringing Color to the World&quot;.
        </div>
        <div className="text-[21px] 2xl:text-[32px] text-ikwp-blue leading-7 2xl:leading-10">
          As one of the leading chemical trading companies in Indonesia, our commitment is to provide high-quality products that support industry needs with consistency and relevance.
        </div>
      </div>
      <div className="w-1/4 hidden md:flex justify-end">
        <img
          src="/houses.png"          
          className="w-[161px] h-[251px] 2xl:w-[242px] 2xl:h-[376px]"
          alt="Houses"
        />
      </div>
    </div>
  );
}
