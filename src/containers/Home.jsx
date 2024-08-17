import { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import NavBar from "../components/Navbar";
import Item from "../components/ItemCard";

const Home = () => {
    const [data,setData] = useState([])
    const [isOpen,setIsOpen] = useState(true)
    return ( 
        <div className="font-pop ">
            <NavBar></NavBar>
            {!isOpen ? <Item data={data}></Item> :
            
            <div>
                    <Banner />
                    <Card setItem={setData} open={setIsOpen}/>
            </div>}
           
           
        </div>
     );
}
 
export default Home;