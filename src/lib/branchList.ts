import { BRANCH_ID_KEY } from "@/constants/cookies";
import { Branch } from "@/types";
import { cookies } from "next/headers";

export const fetchBranchList = async (): Promise<Branch[] | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/branch/list`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch branch list:", res.status);
      return null;
    }

    const branches: Branch[] = await res.json();
    return branches;
  } catch (error) {
    console.error("Error fetching branch list:", error);
    return null;
  }
};
