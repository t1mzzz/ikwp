export default function Partners() {
  return (
    <div className="px-14 py-8 xl:py-16 2xl:py-20 flex flex-col place-items-center justify-center gap-16">
      <div className="grid lg:grid-cols-4 gap-12 xl:gap-25 2xl:gap-40 place-items-center justify-center align-middle justify-items-center">
        <img
          src="/archroma.png"
          alt="Archroma"
          className="w-auto h-auto 2xl:w-[382px] 2xl:h-[128px]"
        />
        <img
          src="/clariant.svg"
          alt="Clariant"
          className="w-auto h-auto 2xl:w-[357px] 2xl:h-[83px]"
        />
        <img
          src="/lily_group.svg"
          alt="Lily Group"
          className="w-auto h-auto 2xl:w-[311px] 2xl:h-[128px]"
        />
        <img
          src="/qfoam.svg"
          alt="Qfoam"
          className="w-auto h-auto 2xl:w-[228px] 2xl:h-[128px]"
        />
      </div>

      <div className="flex place-items-center justify-center">
        <a
          href="/about"
          className="flex place-items-center bg-ikwp-orange-2 text-white font-semibold text-xl 2xl:text-2xl px-6 py-3 lg:px-8 lg:py-4 rounded-full gap-3"
        >
          Discover our company
          <img
            src="/arrow_right_2x.png"
            alt="Arrow Right"
            className="
								w-[14px] lg:w-[14px] xl:w-[16px] 2xl:w-[19px]
								h-auto
							"
          />
        </a>
      </div>
    </div>
  );
}
