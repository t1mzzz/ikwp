import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <div className="w-full bg-ikwp-purple px-12.5 py-20 flex justify-between gap-24 text-ikwp-white font-futura">
        <div className="w-1/4 flex flex-col gap-16">
          <Link href="/">
            <Image
                src="/logo_full.png"
                alt="IKWP Logo"
                width={342}
                height={116}
            />
          </Link>
          <div className="flex flex-col gap-5 text-[28px] font-medium font-futura-md">
            <a href="/products">
              Product Portfolio
            </a>
            <a href="/about">
              About Us
            </a>
            <a href="/careers">
              Careers
            </a>
          </div>
        </div>
        <div className="w-1/4 text-[28px]">
          <div className="font-medium font-futura-md">
            Branch Offices:
          </div>

          <div className="font-thin gap-8">
            <div>
              JL Kartini No.82, Surabaya, East Java, 60264, Indonesia
            </div>
            <br />
            <div>
              Latinos Business District Blok C7, No 15-16, BSC City, South Tangerang, Banten, 15310, Indonesia
            </div>
          </div>
        </div>

        <div className="w-1/4 text-[28px]">
          <div className="font-medium font-futura-md">
            Head Office:
          </div>
          <div className="font-thin gap-8">
            <div>
              JL Putra Agung Timur Blok C-21, Surabaya, East Java, Indonesia
            </div>
          </div>
        </div>
        <div className="w-1/4 text-[28px] flex flex-col justify-between">
          <div>
            <div className="font-medium font-futura-md">
              Reach us:
            </div>
            <div className="flex gap-15">
              <div>
                A
              </div>
              <div>
                A
              </div>
              <div>
                A
              </div>
            </div>
          </div>
          <div className="text-[22px]">
            &copy; IKWP {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
}
