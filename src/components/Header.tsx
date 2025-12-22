"use client";

import Link from "next/link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div
      className="
        w-full bg-transparent
        flex justify-between items-center
        absolute top-0 left-0 z-50
        
        px-8 py-10
        lg:px-14 lg:py-12
        xl:px-18 xl:py-16
        2xl:px-25 2xl:py-25
      "
    >
      <Link href="/">
        <img
          src="/logo_full.png"
          alt="IKWP Logo"
          className="
            w-[120px] md:w-[133px] lg:w-[197px] xl:w-[200px] 2xl:w-[295px]
            h-auto
          "
        />
      </Link>

      {/* NAVIGATION */}
      <div className="hidden sm:flex md:gap-6 lg:gap-8 2xl:gap-12 md:items-center">
        <div
          className="
            text-ikwp-purple font-normal
            lg:text-[13px] xl:text-[16px] 2xl:text-2xl
            flex gap-8 lg:gap-10 xl:gap-11 2xl:gap-16
          "
        >
          <a href="/products">Product Portfolio</a>
          <a href="/about">About Us</a>
          <a
            href="https://www.linkedin.com/company/intikarya-warnaprima/jobs/"
            target="_blank"
          >
            Careers
          </a>
        </div>

        <a
          href="mailto:admin@intikaryawp.com"
          className="
            flex items-center
            bg-ikwp-orange-2 text-white
            font-semibold
            
            text-lg lg:text-xl xl:text-[21px] 2xl:text-[32px]
            px-4 py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-9.5 2xl:py-4.5

            rounded-full gap-2 lg:gap-2.5 xl:gap-3
          "
        >
          Contact us
          <img
            src="/arrow_right_2x.png"
            alt="Arrow Right"
            className="
              w-[8px] lg:w-[10px] xl:w-[13px] 2xl:w-[19px]
              h-auto
            "
          />
        </a>
      </div>
      <div className="text-4xl md:hidden" onClick={() => setOpenMenu(true)}>
        <MenuRoundedIcon
          className="sm:hidden"
          sx={{
            fontSize: {
              xs: 34,
              sm: 37
            },
          }}
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {openMenu && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center">
          <div className="w-full flex justify-end px-8 py-10 text-4xl">
            <div className="h-[41px] items-center">
              <CloseRoundedIcon
                sx={{
                  fontSize: {
                    xs: 34,
                    sm: 37,
                  },
                }}
                onClick={() => setOpenMenu(false)}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 text-2xl font-semibold">
            <a href="/products" onClick={() => setOpenMenu(false)}>
              Product Portfolio
            </a>
            <a href="/about" onClick={() => setOpenMenu(false)}>
              About Us
            </a>
            <a
              href="https://www.linkedin.com/company/intikarya-warnaprima/jobs/"
              target="_blank"
              onClick={() => setOpenMenu(false)}
            >
              Careers
            </a>
            <a
              href="mailto:admin@intikaryawp.com"
              onClick={() => setOpenMenu(false)}
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
