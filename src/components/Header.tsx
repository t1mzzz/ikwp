import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full bg-transparent px-25 py-25 flex justify-between items-center absolute top-0 left-0 z-50">
            <Link href="/">
                <Image
                    src="/logo_full.png"
                    alt="IKWP Logo"
                    width={295}
                    height={100}
                />
            </Link>
            <div className="flex gap-12 justify-center items-center">
                <div className="text-ikwp-purple font-normal text-2xl flex gap-16">
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

                <a href="/contact" className="flex place-items-center bg-ikwp-orange-2 text-white font-semibold text-[2rem] px-9.5 py-4.5 rounded-full gap-3">
                    Contact us
                    <Image 
                        src="/arrow_right_2x.png" 
                        alt="Arrow Right" 
                        width={19}
                        height={32} 
                    />
                </a>
            </div>
        </div>
    );
}
