"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfilePageMobile from "./_components/ProfilePageMobile";

const ProfilePage = () => {
  const [isDesktopScreen, setDesktopScreen] = useState(false);
  const router = useRouter();

  // Effect to check screen size and update state accordingly
  useEffect(() => {
    const checkScreenSize = () => {
      setDesktopScreen(window.innerWidth > 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Effect to redirect to desktop profile page when screen size is large
  useEffect(() => {
    if (isDesktopScreen) {
      router.push("/profile/my-orders", { scroll: false });
    }
  }, [router, isDesktopScreen]);

  // Prevent rendering on desktop screens
  if (isDesktopScreen) {
    return null;
  }

  return <ProfilePageMobile />;
};

export default ProfilePage;
