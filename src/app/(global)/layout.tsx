import GlobalNavbar from "@/components/GlobalNavbar";
import Link from "next/link";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <GlobalNavbar />

      <main className="min-h-[calc(100dvh-126px)]">{children}</main>

      <footer className="p-4">
        <p className="text-center text-sm">
          Copyright © {new Date().getFullYear()}. Delryt - All Rights Reserved.
          <Link href={"/terms"} className="ms-1 underline">
            Terms of use
          </Link>
        </p>
      </footer>
    </>
  );
};

export default GlobalLayout;
