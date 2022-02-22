const phoneDetail = ({ selectedPhone }) => {
  return (
    <li key={selectedPhone.id}>
      <p>Model: {selectedPhone.phone}.</p> <p>Price: {selectedPhone.price}</p>{" "}
      <p>Color: {selectedPhone.color}</p>
    </li>
  );
};

export default phoneDetail;
