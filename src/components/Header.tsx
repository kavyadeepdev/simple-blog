import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex w-full justify-between px-20 py-8">
      <div className="left w-1/2">
        <Link to={"/"}>Simple Blog</Link>
      </div>
      <div className="right w-1/2 flex justify-end">
        {/* <Button variant="link">Link</Button> */}
        <Link to={"/login"}>
          <Button variant={"default"}>Login</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
