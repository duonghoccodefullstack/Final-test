import { useEffect, useState } from "react"
import { fetchData ,Data } from "../hooks/useMovies"
const Card = ({ setItem,open}) => {

    const [data, setData] = useState([])
    useEffect(() => {
        const api = async () => {
            const data = await fetchData()
            setData(data.data)
        }
        api()
    }, [])
    const handleClick =(item) => {
        open(false)
        setItem(item)
    }
    return (

        <div>
            <h2 className="mb-[24px] font-semibold text-[32px]">New Release</h2>
            <div className="flex  gap-[30px] ">
                {data.length > 0 && data.map((item, idx) => (
                    <div key={idx} className="w-full" onClick={() => handleClick(item)}>
                        <div className="flex flex-col  group transition-transform transform hover:scale-105 duration-500 ease-in-out cursor-pointer">
                            <div className="w-[170px] ">
                                <div className="relative">
                                    <img src={item.image} className=""></img>
                                    <div className="absolute w-full h-full   bottom-0 bg-gradient-to-t from-[#192026]  opacity-100 ">
                                    </div>
                                </div>
                            </div >

                            <div className="text-center transition-transform  ease-in-out ">
                                <p className="-translate-y-10 ">Episode {item.episode}</p>
                                <p className=" -translate-y-5 w-[170px]">{item.movieName}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;