import { inter } from "@/fonts/fonts";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Delryt",
  description: "Food delivery app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
