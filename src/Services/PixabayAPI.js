import axios from "axios";

const BASIC_URL = "https://pixabay.com/api/";
const API_KEY = "21838364-8451c122c72af9b2106f1fefd";

function fetchImages(searchQuery, page) {
  return axios
    .get(
      `${BASIC_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=10`
    )
    .then((responce) => responce.data.hits);
}

export default fetchImages;
