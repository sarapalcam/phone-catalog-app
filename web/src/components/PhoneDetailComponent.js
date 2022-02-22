import { Link } from "react-router-dom";
import "../styles/components/PhoneDetailComponent.scss";

const phoneDetail = ({ selectedPhone }) => {
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
          src={selectedPhone.image}
          alt={selectedPhone.name}
        />
      </div>
      <div className="detail__container">
        <h3 className="detail__name">{selectedPhone.name}</h3>
        <p className="detail__price">
          {selectedPhone.price}
          {selectedPhone.currency}
        </p>
        <i className="fas fa-mobile-alt detail__icon">
          <p className="detail__icon--text">
            Screen: {selectedPhone.screenSize} {selectedPhone.ppp}ppp
          </p>
        </i>
        <i className="fas fa-camera-alt detail__icon">
          <p className="detail__icon--text">Camera: {selectedPhone.camera}.</p>
        </i>
        <i className="fas fa-palette detail__icon">
          <p className="detail__icon--text">
            Color: {selectedPhone.color}
          </p>
        </i>
        <i className="fas fa-robot detail__icon">
          <p className="detail__icon--text">OS: {selectedPhone.os}</p>
        </i>
      </div>
    </div>
  );
};

export default phoneDetail;
