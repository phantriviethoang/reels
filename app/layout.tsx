import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "@/components/ui/Aside";

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
                <Aside />

                <main className="h-full flex items-center justify-center">
                    <div className=" h-full w-full md:w-auto md:aspect-9/16 mb-20 md:mb-0">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
