import { MOCK_USER, useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login, user } = useAuth();
  console.log("user", user);

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => login({ ...MOCK_USER })}>login</button>
    </>
  );
}
