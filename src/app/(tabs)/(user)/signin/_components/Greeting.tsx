import Image from "next/image";

export default function Greeting() {
    return (
        <div className="flex flex-col items-center pt-14">
            <Image width={80} height={80} src="/logo.png" alt="" className="" />
            <p className="font-sfb text-neutral-200 text-3xl tracking-wide">
                Welcome.
            </p>
        </div>
    );
}
