import axios from "axios";

export const getWikiSearchResults = async (searchTerm: string) => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&query[term][title]=${searchTerm}&limit=5`
  );
  console.log(response);
  return response.data.data;
};
