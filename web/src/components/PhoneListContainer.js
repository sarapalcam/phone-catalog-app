import { Link } from "react-router-dom";

const phoneList = ({ phoneList }) => {
  return phoneList.map((eachPhone) => {
    return (
        <Link key={eachPhone.id} to={`/${eachPhone.id}`}>
          <ul>
            <li>
              Model: {eachPhone.phone}. Price: {eachPhone.price}
            </li>
          </ul>
        </Link>
    );
  });
};

export default phoneList;
