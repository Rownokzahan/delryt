import { useLoginMutation } from "@/store/auth/authApi";

const useAuth = () => {
  const [login, { isLoading, error, data }] = useLoginMutation();

  const handleLogin = (credentials: {
    name_or_email: string;
    password: string;
  }) => {
    return login(credentials);
  };

    return { login: handleLogin, isLoading, error, data };
};

export default useAuth;