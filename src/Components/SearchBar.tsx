import { useContext } from "react";
import search from "../../public/assets/icon-search.svg";
import { MyContext } from "./Context";

export default function SearchBar() {
  const context = useContext(MyContext);
  const { setSearchInput }: any = context;

  return (
    <div>
      <div className="flex justify-start gap-[16px] pl-[16px] pt-[24px] xl:mt-[40px]">
        <img
          src={search}
          alt=""
          className="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]"
        />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="searchInput"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
    </div>
  );
}
