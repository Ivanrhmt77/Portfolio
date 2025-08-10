import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Ivan",
  description:
    "Learn more about Ivan Rahmat's background, interests, and skills.",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <div className="font-sans h-screen w-full flex flex-col bg-background">
          <Header />

          <main className="flex-1 py-8">
            <div className="max-w-[1160px] mx-auto h-full px-4">{children}</div>
          </main>

          <Footer />
        </div>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
