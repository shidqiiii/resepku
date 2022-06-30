import axios from "axios";

class BaseApi {
    static baseUrl = "https://masak-apa.tomorisakura.vercel.app/";

    static async higlightRecipe() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'api/recipes-length/?limit=5')
            .then((response) => {
                // console.log(response.data);
                result = response.data
            })
            .catch((error) => {
                console.log(error);
            })
        // console.log(result);
        return result
    }

}

export { BaseApi }