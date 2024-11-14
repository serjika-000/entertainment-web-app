import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/icon-nav-home.svg";
import movies from "../../public/assets/icon-nav-movies.svg";
import tv from "../../public/assets/icon-nav-tv-series.svg";
import save from "../../public/assets/icon-nav-bookmark.svg";
import profile from "../../public/assets/image-avatar.png";
import { useNavigate } from "react-router-dom";

function DesktopHeader() {
  const navigate = useNavigate();
  return (
    <header className="xl:px-[32px] xl:py-[32px]">
      <div className="hidden bg-[#161D2F] w-[96px] h-[996px] xl:flex flex-col rounded-[20px]">
        <img
          src={logo}
          alt=""
          className="w-[32px] h-[25px] mt-[35px] ml-[35px]"
        />
        <div className="flex flex-col items-center gap-[25px] mt-[75px]">
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
        <img
          src={profile}
          alt=""
          className="w-[40px] h-[40px] ml-[32px] mt-[640px]"
        />
      </div>
    </header>
  );
}

export default DesktopHeader;
