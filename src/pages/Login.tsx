import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import authService from "@/appwrite/auth";
import { useUserStore } from "@/store/store";
import { useNavigate, Link } from "react-router-dom";
import { log } from "console";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { status, user, login, logout } = useUserStore((state) => state);

  const handleLogin = async () => {
    const session = await authService.login(email, password);
    if (session) {
      const userData = await authService.getUserInfo();
      if (userData) {
        login(authService.getUserInfo());
        navigate("/");
      }
    } else {
      console.log(session);
      console.log("FAILED LOGIN");
    }
  };

  return (
    <div className="grid justify-center">
      <p>{status ? "The user is logged in" : "LOGGED OUT"}</p>
      <div className="text-center w-96 space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to={"/signup"}>Don't have an account? Sign up here!</Link>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
