import axios from "axios";

export default class WebRequest{
    static async Get(url){
        try {
            const response = await axios.get(url);
            return  response.data
        } catch (error) {
            console.log(error)
        }
    }
}