import { CustomerSuccess, GlobalStandards, MutualTrust, Partnership, SustainableGrowth } from "@/constants/icons";
import { ComponentType, SVGProps } from "react";

interface Mission {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function CompanyMissions() {
  const missions: Mission[] = [
    {
      title: "Partnership",
      icon: Partnership
    },
    {
      title: "Customer Success is Our Priority",
      icon: CustomerSuccess
    },
    {
      title: "Global Standards, Local Exellence",
      icon: GlobalStandards
    },
    {
      title: "Mutual Trust and Respect",
      icon: MutualTrust
    },
    {
      title: "Sustainable Growth",
      icon: SustainableGrowth
    }
  ]

  return (
    <div className="px-8 2xl:px-12.5">
      <div className="bg-ikwp-orange-1 rounded-4xl p-8 2xl:p-12.5 grid md:grid-cols-5 gap-8 2xl:gap-12.5">
        {missions.map((mission, index) => (
          <div 
            key={index} 
            className="bg-white rounded-4xl flex flex-col text-center items-center py-5 px-4 2xl:py-7 2xl:px-6"
            style={{ boxShadow: '8px 15px 25px rgba(0,0,0,0.16)' }}
          >
            <mission.icon className="w-30 h-30 2xl:w-45 2xl:h-45" style={{ color: "ikwp-orange-2" }}/>
            <div className="text-ikwp-orange-2 text-[18px] 2xl:text-[28px] font-semibold">
              {mission.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
