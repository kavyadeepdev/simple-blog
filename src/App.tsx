import authService from "./appwrite/auth";
import { useUserStore } from "./store/store";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <button
        onClick={() => {
          console.log(authService.login("kaden@kaden.io", "kadenstack"));
          console.log(authService.getUserInfo());
        }}
      >
        PRINTTT
      </button>
    </>
  );
}

export default App;
