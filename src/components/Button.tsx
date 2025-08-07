interface ButtonProps {
    bgColor: string;
    link: string;
    children?: React.ReactNode;
}

export default function Button({ bgColor, link, children }: ButtonProps) {
    return (
        <a href={link} className={`flex place-items-center ${bgColor} text-white font-bold px-6 py-3 rounded-full`}>
            {children}
        </a>
    );
}
