import { MOCK_USER, useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const { login, user } = useAuth();
  console.log("user", user);

  return (
    <>
      <h1>Login Page</h1>
      <Button onClick={() => login({ ...MOCK_USER })}>Login</Button>
    </>
  );
}
