import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Trending from "./Trending";
import DesktopHeader from "./DesktopHeader";

export default function Layout() {
    return (
      <>
        <div className="xl:flex">
          <div className="xl:flex xl:flex-col">
            <DesktopHeader />
          </div>
          <div className="xl:flex xl:flex-col xl:flex-grow]">
            <Header />
            <SearchBar />
            <Trending />
            <Outlet />
          </div>
        </div>
      </>
    );
  }