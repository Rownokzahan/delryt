import "../styles/globals.css";
import clsx from "clsx";
import { rubik } from "@/fonts/fonts";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Delryt",
  description: "Food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(rubik.className, "antialiased bg-uiWhite text-uiBlack")}>
        <Navbar />
        <div className="min-h-[calc(100vh-248px)] sm:min-h-[calc(100vh-140px)]">
          {children}
        </div>
      </body>
    </html>
  );
}
