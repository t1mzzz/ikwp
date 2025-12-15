import Link from "next/link";

export default function Header() {
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
            w-[133px] lg:w-[197px] xl:w-[200px] 2xl:w-[295px]
            h-auto
          "
        />
      </Link>

      {/* NAVIGATION */}
      <div className="flex gap-6 lg:gap-8 2xl:gap-12 items-center">
        <div
          className="
            text-ikwp-purple font-normal
            lg:text-[13px] xl:text-[16px] 2xl:text-2xl
            flex gap-8 lg:gap-10 xl:gap-11 2xl:gap-16
          "
        >
          <a href="/products">Product Portfolio</a>
          <a href="/about">About Us</a>
          <a href="https://www.linkedin.com/company/intikarya-warnaprima/jobs/" target="_blank">Careers</a>
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
    </div>
  );
}
