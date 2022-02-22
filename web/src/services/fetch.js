const getAllMobiles = () => {
  return fetch("http://localhost:4000/phones").then((response) =>
    response.json()
  );
};

export default getAllMobiles;
