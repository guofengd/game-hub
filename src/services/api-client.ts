import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1306f61357474e978a686e4db7ee5037"
    }
})