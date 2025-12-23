import { LinkedIn, Mail, WhatsApp } from "@/constants/icons";
import Link from "next/link";

export default function Footer() {
  const indoYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date());

  return (
    <div className="w-full bg-ikwp-purple px-6 xl:px-8 2xl:px-12.5 py-8 lg:py-13 2xl:py-20 flex flex-col sm:flex-row justify-between gap-16 2xl:gap-24 text-ikwp-white font-futura">
      <div className="sm:w-1/4 flex flex-col gap-4 sm:gap-11 2xl:gap-16">
        <Link href="/">
          <img src="/logo_full_white.png" alt="IKWP Logo" className="w-2/5 sm:w-max" />
        </Link>
        <div className="flex flex-col gap-1 sm:gap-2 xl:gap-3 2xl:gap-5 text-[28px] sm:text-[15px] xl:text-[19px] 2xl:text-[28px] font-medium font-futura-md">
          <a href="/products">Product Portfolio</a>
          <a href="/about">About Us</a>
          <a href="https://www.linkedin.com/company/intikarya-warnaprima/jobs/">Careers</a>
        </div>
      </div>
      <div className="sm:w-1/4 text-[28px] xl:text-[19px] 2xl:text-[28px]">
        <div className="font-medium font-futura-md">Branch Offices:</div>

        <div className="font-light gap-5 2xl:gap-8">
          <div>JL Kartini No.82, Surabaya, East Java, 60264, Indonesia</div>
          <br />
          <div>
            Latinos Business District Blok C7, No 15-16, BSC City, South
            Tangerang, Banten, 15310, Indonesia
          </div>
        </div>
      </div>

      <div className="sm:w-1/4 text-[28px] xl:text-[19px] 2xl:text-[28px]">
        <div className="font-medium font-futura-md">Head Office:</div>
        <div className="font-light gap-5 2xl:gap-8">
          <div>
            JL Putra Agung Timur Blok C-21, Surabaya, East Java, Indonesia
          </div>
        </div>
      </div>
      <div className="sm:w-1/4 text-[28px] xl:text-[19px] 2xl:text-[28px] flex flex-col justify-between">
        <div>
          <div className="font-medium font-futura-md">Reach us:</div>
          <div className="flex gap-8 xl:gap-10 2xl:gap-15">
            <a href="https://wa.me/628974577767">
              <WhatsApp className="w-[49px] 2xl:w-[73px]" />
            </a>
            <a href="https://www.linkedin.com/company/intikarya-warnaprima/">
              <LinkedIn className="w-[49px] 2xl:w-[73px]" />
            </a>
            <a href="mailto:admin@intikaryawp.com">
              <Mail className="w-[49px] 2xl:w-[73px]" />
            </a>
          </div>
        </div>
        <div className="text-[28px] lg:text-[15px] 2xl:text-[22px]">
          &copy; IKWP {indoYear}
        </div>
      </div>
    </div>
  );
}
