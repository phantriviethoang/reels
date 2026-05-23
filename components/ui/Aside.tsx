import Image from "next/image";

const items = [
    {
        id: "home",
        label: "Trang chủ",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
    },
    {
        id: "discover",
        label: "Khám phá",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
    },
    {
        id: "profile",
        label: "Hồ sơ",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
    },
];

export default function Aside() {
    return (
        <aside className="fixed inset-x-0 bottom-0 z-20 flex w-full justify-around py-2 pb-[env(safe-area-inset-bottom)] text-white md:inset-y-0 md:left-0 md:right-auto mb-2 md:w-20 md:flex-col md:justify-center md:gap-8 lg:w-52 lg:items-center">
            <div className="hidden md:flex items-center justify-center gap-2 lg:w-32 lg:justify-start mx-auto pt-4">
                <Image src="/tiktok.png" width={35} height={35} alt="tiktok logo" />
                <span className="text-lg font-bold hidden lg:inline">TikTok</span>
            </div>

            {items.map((item) => (
                <div key={item.id} className="flex flex-col text-xs gap-1 lg:flex-row lg:items-center lg:gap-2 lg:w-32 mx-auto">
                    {item.icon}
                    <div className="hidden lg:flex">{item.label}</div>
                </div>
            ))}
        </aside>
    );
}
