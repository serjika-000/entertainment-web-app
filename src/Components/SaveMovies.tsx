import Header from "./Header";
import DesktopHeader from "./DesktopHeader";
import SearchBar from "./SearchBar";
import movieImg from "../../public/assets/icon-category-movie.svg";
import unsave from "../../public/assets/icon-bookmark-empty.svg";
import saved from "../../public/assets/icon-bookmark-full.svg";
import { Key, useContext } from "react";
import { MyContext } from "./Context";

export default function SaveMovies() {
  const context = useContext(MyContext);
  const { data, setData, searchInput }: any = context;

  return (
    <>
      <Header />
      <div className="flex flex-col xl:flex-row">
        <DesktopHeader />
        <div className="w-full xl:w-auto">
          <SearchBar />
          <div className="mt-[24px]">
            <h1 className="text-[#FFFFFF] text-[20px] font-light pl-[16px]">
              Bookmarked Movies
            </h1>
            <div className="flex flex-wrap gap-y-14">
              {data
                .filter((item: { title: string }) =>
                  item.title.toUpperCase().includes(searchInput.toUpperCase())
                )
                .map(
                  (
                    movie:
                      | {
                          title: string;
                          thumbnail: {
                            trending: { small: string; large: string };
                            regular: {
                              small: string;
                              medium: string;
                              large: string;
                            };
                          };
                          year: number;
                          category: string;
                          rating: string;
                          isBookmarked: boolean;
                          isTrending: boolean;
                        }
                      | {
                          title: string;
                          thumbnail: {
                            regular: {
                              small: string;
                              medium: string;
                              large: string;
                            };
                            trending?: undefined;
                          };
                          year: number;
                          category: string;
                          rating: string;
                          isBookmarked: boolean;
                          isTrending: boolean;
                        },
                    index: Key | null | undefined
                  ) => {
                    return !movie.isBookmarked ? (
                      <div
                        className="min-w-[164px] h-[110px] relative mt-[16px] pl-[16px]"
                        key={index}
                      >
                        <img
                          src={movie.thumbnail.regular?.small}
                          alt=""
                          className="rounded-[8px] w-[100%] h-[100%]"
                        />
                        <div
                          className="w-[32px] h-[32px] bg-[#596276] opacity-[0.5] rounded-full flex justify-center items-center absolute top-[5%] left-[77%] cursor-pointer"
                          onClick={() => {
                            if (!data.includes(movie)) {
                              setData([...data, movie]);
                            } else {
                              setData(
                                data.filter(
                                  (
                                    film:
                                      | {
                                          title: string;
                                          thumbnail: {
                                            trending: {
                                              small: string;
                                              large: string;
                                            };
                                            regular: {
                                              small: string;
                                              medium: string;
                                              large: string;
                                            };
                                          };
                                          year: number;
                                          category: string;
                                          rating: string;
                                          isBookmarked: boolean;
                                          isTrending: boolean;
                                        }
                                      | {
                                          title: string;
                                          thumbnail: {
                                            regular: {
                                              small: string;
                                              medium: string;
                                              large: string;
                                            };
                                            trending?: undefined;
                                          };
                                          year: number;
                                          category: string;
                                          rating: string;
                                          isBookmarked: boolean;
                                          isTrending: boolean;
                                        }
                                  ) => film !== movie
                                )
                              );
                            }
                          }}
                        >
                          <img
                            src={data.includes(movie) ? saved : unsave}
                            alt=""
                          />
                        </div>
                        <div className="mt-[8px]">
                          <div className="flex items-center gap-[6px]">
                            <p className="text-[11px] text-[white] font-light opacity-[0.75]">
                              {movie.year}
                            </p>
                            <div className="bg-white rounded-full w-[2px] h-[2px] opacity-[0.5]"></div>
                            <div className="flex items-center gap-[6px]">
                              <img src={movieImg} alt="" />
                              <p className="text-[11px] text-[white] font-light opacity-[0.75]">
                                {movie.category}
                              </p>
                            </div>
                            <div className="bg-white rounded-full w-[2px] h-[2px] opacity-[0.5]"></div>
                            <p className="text-[11px] text-[white] font-light opacity-[0.75]">
                              {movie.rating}
                            </p>
                          </div>
                          <h2 className="text-[14px] text-[white] font-medium">
                            {movie.title}
                          </h2>
                        </div>
                      </div>
                    ) : null;
                  }
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
