import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-8 space-y-6">
      {/* Divider */}
      <div className="h-[2px] w-28 mx-auto bg-uiBlack/20 relative">
        <span className="px-3 text-sm font-medium bg-uiWhite text-uiBlack-light absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          Or
        </span>
      </div>

      <button className="mx-auto px-4 py-3 border rounded-full shadow-md flex items-center gap-2">
        <FcGoogle className="text-lg" />
        <span className="text-sm text-uiBlack-light">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
