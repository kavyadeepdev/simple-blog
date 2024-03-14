import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "@/appwrite/auth";
import { useUserStore } from "@/store/store";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const { status, user, login, logout } = useUserStore((state) => state);

  const handleSignUp = () => {
    authService.signUp(email, password, name);
    login(authService.getUserInfo());
    navigate("/");
  };

  return (
    <div className="grid justify-center">
      <p>{status ? "The user is logged in" : "LOGGED OUT"}</p>
      <div className="text-center w-96 space-y-4">
        <Input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <Link to={"/login"}>Already have an account? Sign in here!</Link>
        <Button onClick={handleSignUp}>Login</Button>
      </div>
    </div>
  );
};

export default SignUp;
