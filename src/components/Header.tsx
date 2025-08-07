import Image from "next/image";
import Button from "./Button";

export default function Header() {
    return (
        <div className="w-full bg-ikwp-white px-20 pt-10 pb-5 flex justify-between align-center">
            <a href="/">
                <Image
                    src="/logo_full.png"
                    alt="IKWP Logo"
                    width={170}
                    height={60}
                />
            </a>
            <div className="flex gap-4">
                <Button bgColor="bg-ikwp-navy" link="/contact">
                    Contact Us
                </Button>
            </div>
        </div>
    );
}
