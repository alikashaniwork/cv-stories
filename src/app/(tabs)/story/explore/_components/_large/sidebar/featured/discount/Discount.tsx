import dynamic from "next/dynamic";
const Switch = dynamic(() => import("./Switch"), { ssr: false });

const Discount = () => {
    return (
        <div className="flex items-center justify-between">
            <p className="text-[.95rem] text-[#444]">تخفیف‌ها</p>
            <Switch />
        </div>
    );
};

export default Discount;
