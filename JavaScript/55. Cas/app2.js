const getComments = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.message));
};

getComments();
