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
