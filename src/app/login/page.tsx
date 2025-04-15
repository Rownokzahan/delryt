import AuthContent from "@/components/AuthContent";

const LoginPage = () => {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="w-full max-w-[500px] h-max rounded-lg overflow-hidden shadow pb-1">
        <AuthContent />
      </div>
    </main>
  );
};

export default LoginPage;
