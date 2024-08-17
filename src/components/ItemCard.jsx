import Video from "./videoFame";
import { useEffect, useState } from "react";
import { fetchData } from "../hooks/useMovies";
const Item = ({ data }) => {
    const [state, setState] = useState(null)
    useEffect(() => {
        const fetechdata = async () => {
            const data = await fetchData()
            console.log(data.data);

            setState(data.data)
        }
        fetechdata()
    }, [])
    return (
        <div>
            {state
                ? <div className="flex  p-[40px] gap-[30px] ">
                    <div className="w-[813px]">
                        <h1 className="font-semibold text-[32px] mb-[32px]">{data.movieName}-Episode {data.episode}</h1>
                        <Video></Video>
                        <div>
                            <div className="flex gap-10 mb-10">
                                <div className="">
                                    <img src={data.image} alt="" className="w-[270px]  bg-contain rounded-3xl" />
                                </div>

                                <div className="flex justify-between flex-col">
                                    <div>
                                        <h2 className="font-semibold text-[20px]">Type:</h2>
                                        <p className="text-aMovie">{data.type}</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[20px]">Status :</h2>
                                        <p className="text-aMovie">{data.status}</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[20px]">Studios :</h2>
                                        <p className="text-aMovie">{data.studios}</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[20px]">Duration :</h2>
                                        <p className="text-aMovie">{data.timeline} Min.</p>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[20px]">Genres :</h2>
                                        <p className="text-aMovie">{(data.genres).join(", ")}</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h2 className="font-semibold text-[20px]">Sypnosis :</h2>
                                <p className="text-aMovie leading-7 mt-[4px]">{data.description}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold text-[32px]">Popular Anime</h1>
                        <div className="grid grid-cols-2 gap-4">
                            {state.length > 0 && state.map((item, index) => (
                                <div key={index} className="p-2 group transition-transform transform hover:scale-105 duration-500 ease-in-out cursor-pointer">
                                    <img src={item.image} alt="" className="w-full h-auto object-cover" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div> :
                <p>Loading...</p>
            }

        </div>
    );
}

export default Item;