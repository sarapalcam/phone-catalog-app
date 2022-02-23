import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "../styles/components/PhoneListContainer.scss";
import axios from "axios";
import { setPhones } from "../redux/actions/actions";

const PhoneList = () => {
  const phones = useSelector((state) => state.allPhones.phones);
  //const { id, image, name, price, currency } = phones[0];
  const dispatch = useDispatch();

  const fetchPhones = async () => {
    const response = await axios
      .get("http://localhost:4000/phones")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setPhones(response.data));
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const renderPhones = phones.map((phone) => {
    return (
      <Link key={phone.id} to={`/${phone.id}`}>
        <li className="catalog__product">
          <img
            className="catalog__product--img"
            src={phone.image}
            alt={phone.name}
          />
          <h3 className="catalog__product--name">{phone.name}</h3>
          <p className="catalog__product--price">
            {phone.price}
            {phone.currency}
          </p>
        </li>
      </Link>
    );
  });

  const renderListElement = () => {
    return (
      // <Link key={id} to={`/${id}`}>
      <>{renderPhones}</>
      // </Link>
    );
  };

  return <ul className="catalog">{renderListElement()}</ul>;
};

export default PhoneList;
