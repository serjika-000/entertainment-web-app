import movieImg from "../../public/assets/icon-category-movie.svg";
import MovieData from "../../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Recomended from "./Recomended";
import unsave from "../../public/assets/icon-bookmark-empty.svg";
import saved from "../../public/assets/icon-bookmark-full.svg";
import { useContext } from "react";
import { MyContext } from "./Context";

export default function Trending() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };

  const context = useContext(MyContext);
  const { data, setData }: any = context;

  return (
    <div className="mt-[24px]">
      <div>
        <h1 className="text-[#FFFFFF] text-[20px] font-light pl-[16px]">
          Trending
        </h1>
        <Slider {...settings}>
          {MovieData.map((movie, index) => {
            return movie.isTrending ? (
              <div
                className="max-w-[240px] h-[140px] relative mt-[16px] pl-[16px]"
                key={index}
              >
                <img
                  src={movie.thumbnail.trending?.small}
                  alt=""
                  className="rounded-[8px] w-[240px] h-[140px]"
                />
                <div
                  className="w-[32px] h-[32px] bg-[#596276] opacity-[0.5] rounded-full flex justify-center items-center absolute top-[5%] left-[84%] cursor-pointer"
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
                                }
                          ) => film !== movie
                        )
                      );
                    }
                  }}
                >
                  <img src={data.includes(movie) ? saved : unsave} alt="" />
                </div>
                <div className="pl-[16px] absolute top-[60%]">
                  <div className="flex items-center gap-[8px]">
                    <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                      {movie.year}
                    </p>
                    <div className="bg-white rounded-full w-[3px] h-[3px] opacity-[0.5]"></div>
                    <div className="flex items-center gap-[6px]">
                      <img src={movieImg} alt="" />
                      <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                        {movie.category}
                      </p>
                    </div>
                    <div className="bg-white rounded-full w-[3px] h-[3px] opacity-[0.5]"></div>
                    <p className="text-[12px] text-[white] font-light opacity-[0.75]">
                      {movie.rating}
                    </p>
                  </div>
                  <h2 className="text-[15px] text-[white] font-medium">
                    {movie.title}
                  </h2>
                </div>
              </div>
            ) : null;
          })}
        </Slider>
      </div>
      <Recomended />
    </div>
  );
}
