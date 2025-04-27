import { FaWallet } from "react-icons/fa";
import FilterByDate from "../_components/FilterByDate";
import ProfileHeaderBar from "../_components/ProfileHeaderBar";

const ProfileWalletPage = () => {
  return (
    <>
      <ProfileHeaderBar label="Delryt Wallet" />

      <main className="p-4 bg-uiBlack/10 space-y-4">
        <div className="p-4 rounded-md bg-uiWhite flex items-center gap-3">
          <div className="size-9 border rounded-full grid place-items-center">
            <FaWallet className="text-primary" />
          </div>
          <div>
            <p className="text-sm text-uiBlack-light leading-3">
              Total Wallet Balance
            </p>
            <h3 className="text-2xl font-medium">0.00</h3>
          </div>
        </div>

        <div className="rounded-md bg-uiWhite">
          <div className="p-4 border-b flex items-center justify-between">
            <div>
              <h3 className="sm:text-2xl font-medium">Transactions</h3>
              <p className="text-xs sm:text-base text-uiBlack-light">Displaying 1-0 of 0 results</p>
            </div>

            <FilterByDate />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileWalletPage;
