import axios from "axios";
import { fetchData } from "../hooks/useMovies";
import { useEffect, useState } from "react";

const Banner = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const api = async () => {
            try {
                const data = await fetchData(); 
                setState(data.banner[0]);
            } catch (error) {
                console.error(error);
            }
        }
        api();
    }, []);
    return (
        <div>
            <h2 className="font-semibold text-[32px] my-[29px]">Explore</h2>
            <p className="my-[29px] text-aMovie">What are you gonna watch today?</p>
            <div className="">
                <div className="relative my-[29px]">
                    <img src="/src/assets/imgtest/banner.png" alt="" width={"100%"} />
                    <div className="absolute h-full w-full inset-0 bg-gradient-to-tr from-[#192026]  to-transparent opacity-100 "></div>
                    <div className="absolute bottom-0 h-full text-sm p-10 text-white  shadow-md w-[75%]   ">
                        <div className="absolute bottom-10 left-10 w-[586px] h-[161px] flex flex-col justify-around">
                            <h1 className="font-semibold text-[36px]">{state.movieName}</h1>
                            <p className="text-[16px] leading-loose ">
                                Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
