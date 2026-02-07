import axios from "axios";

export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b20c559a5644451f9e9e92189fb635be'
    }
});
