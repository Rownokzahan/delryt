import { AUTH_TOKEN_KEY } from "@/constants/cookies";
import { User } from "@/types";
import { cookies } from "next/headers";

export const getCurrentUser = async (): Promise<User | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN_KEY)?.value;

  if (!token) {
    console.log("Auth token not found");
    return null;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/customer/info`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log("Failed to fetch user", res.status);
      return null;
    }

    const data = await res.json();

    const user: User = {
      id: data.id,
      f_name: data.f_name,
      l_name: data.l_name,
      email: data.email,
      phone: data.phone,
      image: data.image,
    };

    return user;
  } catch (err) {
    console.log("Error fetching user:", err);
    return null;
  }
};
