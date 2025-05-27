import AuthContent from "@/components/AuthContent";

const LoginPage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center bg-uiWhite">
      <div className="w-full max-w-[500px] h-screen sm:h-max rounded-lg overflow-hidden shadow pb-1">
        <AuthContent />
      </div>
    </div>
  );
};

export default LoginPage;
