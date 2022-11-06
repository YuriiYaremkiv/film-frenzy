const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'd08efe59ac708d7aace6afed9ba7eae9';

const getFetchTrending = async () => {
  const response = await fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`);
  const data = await response.json();
  return data.results;
};

export default { getFetchTrending };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
