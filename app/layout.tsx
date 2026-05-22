import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TikTok",
	description: "TikTok Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased no-scrollbar`}
		>
			<body className="relative h-screen overflow-hidden bg-black">
				<aside className="absolute bottom-0 right-0 w-full md:top-0 md:bottom-auto md:right-auto md:h-full md:w-20 lg:w-52 text-white z-20 flex md:flex-col justify-around md:justify-center md:gap-8 py-2 lg:items-center">
					<div className="hidden md:flex items-center justify-center gap-2 lg:w-32 lg:justify-start mx-auto pt-4">
						<Image
							src="/tiktok.png"
							width={35}
							height={35}
							alt="tiktok logo"
						/>
						<span className="text-lg font-bold hidden lg:inline">
							TikTok
						</span>
					</div>

					<div className="flex flex-col text-xs gap-1 lg:flex-row lg:items-center lg:gap-2 lg:w-32 mx-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<div className="hidden lg:flex">Trang chủ</div>
					</div>
					<div className="flex flex-col text-xs gap-1 lg:flex-row lg:items-center lg:gap-2 lg:w-32 mx-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>
						<div className="hidden lg:flex">Khám phá</div>
					</div>
					<div className="flex flex-col text-xs gap-1 lg:flex-row lg:items-center lg:gap-2 lg:w-32 mx-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>
						<div className="hidden lg:flex">Hồ sơ</div>
					</div>
				</aside>

				<main className="h-full flex items-center justify-center">
					<div className=" h-full w-full md:w-auto md:aspect-9/16 mb-20 md:mb-0">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
