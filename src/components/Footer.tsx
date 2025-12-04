import { LinkedIn, Mail, WhatsApp } from "@/constants/icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const indoYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date());

  return (
    <div className="w-full bg-ikwp-purple px-8 xl:px-8 2xl:px-12.5 py-20 flex justify-between gap-14 2xl:gap-24 text-ikwp-white font-futura">
      <div className="w-1/4 flex flex-col gap-16">
        <Link href="/">
          <img
            src="/logo_full_white.png"
            alt="IKWP Logo"
            className="w-max"
          />
        </Link>
        <div className="flex flex-col gap-4 xl:gap-4 2xl:gap-5 text-[20px] xl:text-[24px] 2xl:text-[28px] font-medium font-futura-md">
          <a href="/products">Product Portfolio</a>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
        </div>
      </div>
      <div className="w-1/4 text-[20px] xl:text-[24px] 2xl:text-[28px]">
        <div className="font-medium font-futura-md">Branch Offices:</div>

        <div className="font-thin gap-8">
          <div>JL Kartini No.82, Surabaya, East Java, 60264, Indonesia</div>
          <br />
          <div>
            Latinos Business District Blok C7, No 15-16, BSC City, South
            Tangerang, Banten, 15310, Indonesia
          </div>
        </div>
      </div>

      <div className="w-1/4 text-[20px] xl:text-[24px] 2xl:text-[28px]">
        <div className="font-medium font-futura-md">Head Office:</div>
        <div className="font-thin gap-8">
          <div>
            JL Putra Agung Timur Blok C-21, Surabaya, East Java, Indonesia
          </div>
        </div>
      </div>
      <div className="w-1/4 text-[20px] xl:text-[24px] 2xl:text-[28px] flex flex-col justify-between">
        <div>
          <div className="font-medium font-futura-md">Reach us:</div>
          <div className="flex gap-4 xl:gap-10 2xl:gap-15">
            <a href="">
              <WhatsApp className="w-[60px] 2xl:w-[73px]" />
            </a>
            <a href="">
              <LinkedIn className="w-[60px] 2xl:w-[73px]"/>
            </a>
            <a href="">
              <Mail className="w-[60px] 2xl:w-[73px]"/>
            </a>
          </div>
        </div>
        <div className="text-[18px] 2xl:text-[22px]">&copy; IKWP {indoYear}</div>
      </div>
    </div>
  );
}
