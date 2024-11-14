import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/icon-nav-home.svg";
import movies from "../../public/assets/icon-nav-movies.svg";
import tv from "../../public/assets/icon-nav-tv-series.svg";
import save from "../../public/assets/icon-nav-bookmark.svg";
import profile from "../../public/assets/image-avatar.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-[#161D2F] flex justify-between items-center px-[16px] h-[56px] xl:hidden">
        <img src={logo} alt="" className="w-[25px] h-[20px]" />
        <div className="flex items-center gap-[25px]">
          <img
            src={home}
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            alt=""
            onClick={() => navigate("/layout")}
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={movies}
            alt=""
            onClick={() => navigate("/movies")}
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={tv}
            alt=""
            onClick={() => navigate("/series")}
          />
          <img
            className="hover:opacity-50 transition-opacity duration-300 hover:filter hover:invert-[0%] cursor-pointer"
            src={save}
            alt=""
            onClick={() => navigate("/saved-movies")}
          />
        </div>
        <img src={profile} alt="" className="w-[24px] h-[24px]" />
      </div>
    </header>
  );
}
