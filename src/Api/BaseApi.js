import axios from "axios";

class BaseApi {
    static baseUrl = "https://masak-apa.tomorisakura.vercel.app/";

    static async higlightRecipe() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'api/recipes-length/?limit=8')
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

    static async allCategoriesRecipe() {
        let result = null;

        await axios.get(BaseApi.baseUrl + 'api/category/recipes')
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

    static async detailRecipe(key) {
        let result = null;

        await axios.get(BaseApi.baseUrl + `api/recipe/${key}`)
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