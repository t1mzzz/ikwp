interface ButtonProps {
    bgColor: string;
    fontSize?: string;
    fontWeight?: string;
    link: string;
    children?: React.ReactNode;
}

export default function Button({ bgColor, fontSize = "text-base", fontWeight = "font-bold", link, children }: ButtonProps) {
    return (
        <a href={link} className={`flex place-items-center ${bgColor} text-white ${fontWeight} ${fontSize} px-9 py-4 rounded-full`}>
            {children}
        </a>
    );
}
