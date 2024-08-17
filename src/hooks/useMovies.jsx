import axios from "axios";
import { useEffect } from "react";
export const  fetchData = async () => {
    try {
        const response = await axios.get('/api/data.json');
 
        return response.data; 

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
export const Data = () => {
    useEffect(() => {
        const api = async () => {
            const data =await axios.get('/api/data.json')
            // setData(data.data)

            return data
        }   
        api()
    }, [])
}