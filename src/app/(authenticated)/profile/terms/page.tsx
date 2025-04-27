import TermsPage from "@/app/(main)/terms/page";
import ProfileHeaderBar from "../_components/ProfileHeaderBar";

const ProfileTermsPage = () => {
  return (
    <>
      <ProfileHeaderBar label="Terms & Conditions" />
      <TermsPage />
    </>
  );
};

export default ProfileTermsPage;
