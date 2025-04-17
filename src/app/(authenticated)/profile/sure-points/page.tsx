import ProfileHeaderMobile from "../_components/ProfileHeaderMobile";
import FilterByDate from "../_components/FilterByDate";
import { MdOutlineOfflineBolt, MdOfflineBolt } from "react-icons/md";

const ProfileSurePointsPage = () => {
  return (
    <>
      <ProfileHeaderMobile label="Sure Points" />

      <main className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm sm:text-xl font-medium">Statement</h3>
            <p className="text-xs sm:text-base text-uiBlack-light leading-3">
              Displaying 1-2 of 2 results
            </p>
          </div>

          <FilterByDate />
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-4 text-sm gap-2">
            <p className="px-3 py-2">Date</p>
            <p className="px-3 py-2">Activity</p>
            <p className="px-3 py-2">Amount</p>
            <p className="px-3 py-2">Balance</p>
          </div>

          <div className="mb-4 bg-gray-100 border rounded-md grid grid-cols-4 gap-2">
            <div className="w-max px-3 py-2 text-center">
              <p className="text-uiBlack-light text-sm">Mar</p>
              <p className="text-lg leading-3">12</p>
              <p className="text-uiBlack-light text-sm">2021</p>
            </div>

            <div className="px-3 py-2">
              <p className="text-primary font-medium">Points Expired</p>
            </div>

            <div className="px-3 py-2">
              <p className="flex items-center gap-1 text-[#d3445e]">
                - <MdOutlineOfflineBolt /> 500
              </p>
            </div>

            <div className="px-3 py-2">
              <p className="flex items-center gap-1">
                <MdOfflineBolt className="text-[#d3445e]" /> 0
              </p>
            </div>
          </div>

          <div className="bg-gray-100 border rounded-md grid grid-cols-4 gap-2">
            <div className="w-max px-3 py-2 text-center">
              <p className="text-uiBlack-light text-sm">Jan</p>
              <p className="text-lg leading-3">11</p>
              <p className="text-uiBlack-light text-sm">2021</p>
            </div>

            <div className="px-3 py-2">
              <p className="text-primary font-medium">Welcome Points</p>
              <p className="text-sm text-uiBlack-light">Expiry: 12 Mar</p>
            </div>

            <div className="px-3 py-2">
              <p className="flex items-center gap-1 text-success">
                + <MdOutlineOfflineBolt /> 500
              </p>
            </div>

            <div className="px-3 py-2">
              <p className="flex items-center gap-1">
                <MdOfflineBolt className="text-[#d3445e]" /> 500
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileSurePointsPage;
