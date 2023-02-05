import axios from "axios";

export const trendQuery = async () => {
    try {
        const response = await axios(
            'https://api.themoviedb.org/3/trending/all/week?api_key=6e7eaf256e2890a0f83bf0d8fe3fe4d9'            
    );
        console.log(response.data.results);
        return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
