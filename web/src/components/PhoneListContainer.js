import { Link } from "react-router-dom";
import "../styles/components/PhoneListContainer.scss";

const phoneList = ({ phoneList }) => {
  const renderListElement = () => {
    return phoneList.map((eachPhone) => {
      return (
        <Link to={`/${eachPhone.id}`}>
          <li key={eachPhone.id} className="catalog__product">
            <img
              className="catalog__product--img"
              src={eachPhone.image}
              alt={eachPhone.name}
            />
            <h3 className="catalog__product--name">{eachPhone.name}</h3>
            <p className="catalog__product--price">
              {eachPhone.price}
              {eachPhone.currency}
            </p>
          </li>
        </Link>
      );
    });
  };

  return <ul className="catalog">{renderListElement()}</ul>;
};

export default phoneList;
