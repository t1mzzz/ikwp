import Suppliers from "@/components/Suppliers";
import AboutLanding from "./AboutLanding";
import CompanyCommitment from "./CompanyCommitment";
import CompanyConnect from "./CompanyConnect";
import CompanyMissions from "./CompanyMissions";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutLanding />
      <CompanyCommitment />
      <CompanyMissions />
      <Suppliers />
      <CompanyConnect />
    </div>
  );
}
