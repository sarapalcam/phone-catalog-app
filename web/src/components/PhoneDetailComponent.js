import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/components/PhoneDetailComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPhones } from "../redux/actions/actions";

const PhoneDetail = () => {
  const { phoneId } = useParams();
  const phone = useSelector((state) => {
    const find = state.allPhones.phones.find((phone) => phone.id === phoneId);
    return find;
  });
  const dispatch = useDispatch();

  const fetchPhoneDetail = async () => {
    const response = await axios
      .get(`http://localhost:4000/phones/`)
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(setPhones(response.data));
    };

  useEffect(() => {
    if(phoneId && phoneId !== ""){
      fetchPhoneDetail();
    }
  }, []);

  return (
    <div className="detail">
      <div className="detail__imgContainer">
        <Link to="/">
          <i className="fal fa-long-arrow-left detail__backArrow">
            <p className="detail__backArrow--text">Go back</p>
          </i>
        </Link>
        <img
          className="detail__img"
          src={phone.image}
          alt={phone.name}
        />
      </div>
      <div className="detail__container">
        <h3 className="detail__name">{phone.name}</h3>
        <p className="detail__price">
          {phone.price}
          {phone.currency}
        </p>
        <i className="fas fa-mobile-alt detail__icon">
          <p className="detail__icon--text">
            Screen: {phone.screenSize} {phone.ppp}ppp
          </p>
        </i>
        <i className="fas fa-camera-alt detail__icon">
          <p className="detail__icon--text">Camera: {phone.camera}.</p>
        </i>
        <i className="fas fa-palette detail__icon">
          <p className="detail__icon--text">Color: {phone.color}</p>
        </i>
        <i className="fas fa-robot detail__icon">
          <p className="detail__icon--text">OS: {phone.os}</p>
        </i>
      </div>
    </div>
  );
};

export default PhoneDetail;
