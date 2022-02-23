import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/components/PhoneListContainer.scss";

const phoneList = ({ phoneList }) => {
  const renderListElement = () => {
    return phoneList.map((eachPhone) => {
      return (
        <Link key={eachPhone.id}  to={`/${eachPhone.id}`}>
          <li className="catalog__product">
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

phoneList.defaultProps = {
  phoneList: {
    name: "Name of te phone model",
    price: 0,
    currency: "€",
    id: "name-of-the-phone-model",
    color: "undefined",
    image: "undefined",
    screenSize: "undefined",
    ppp: "undefined",
    camera: "undefined",
    os: "undefined"
  }
}

phoneList.propTypes = {
  phoneList: PropTypes.arrayOf(PropTypes.object),
};

export default phoneList;
