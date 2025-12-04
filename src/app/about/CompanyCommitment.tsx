import Image from "next/image";

export default function CompanyCommitment() {
  return (
    <div className="py-25 px-12.5 flex justify-between">
      <div className="w-1/4 flex justify-start">
        <div className="flex flex-col justify-between">
          <Image
            src="/logo_full.png"
            width={176}
            height={55}
            alt="IKWP Logo"
          />
          <Image
            src="/old_car.png"
            width={245}
            height={152}
            alt="Old Car"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="text-[54px] font-semibold text-ikwp-orange-2 leading-17">
          <span className="text-ikwp-purple">lntiKarya WarnaPrima carries the vision of</span> &quot;Bringing Color to the World&quot;.
        </div>
        <div className="text-[32px] text-ikwp-blue leading-10">
          As one of the leading chemical trading companies in Indonesia, our commitment is to provide high-quality products that support industry needs with consistency and relevance.
        </div>
      </div>
      <div className="w-1/4 flex justify-end">
        <Image
          src="/houses.png"
          width={242}
          height={376}
          alt="Houses"
        />
      </div>
    </div>
  );
}
