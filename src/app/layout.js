import { inter } from "@/fonts/fonts";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Delryt",
  description: "Food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <div className="min-h-[calc(100vh-248px)] sm:min-h-[calc(100vh-140px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
