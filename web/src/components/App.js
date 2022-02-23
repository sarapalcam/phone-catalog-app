import "../styles/index.scss";
import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import apiPhones from "../services/fetch";
import PhoneListContainer from "./PhoneListContainer";
import PhoneDetailComponent from "./PhoneDetailComponent";
import Loader from "./Loader";
import { useSelector, useDispatch } from 'react-redux';
import getList from '../features/slice'

function App() {
  const [phoneList, setPhoneList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiPhones().then((data) => {
      setPhoneList(data);
      setIsLoading(false);
    });
  }, []);


    // const phoneList = useSelector((state) => state.getList.value);
    // useDispatch();

  const routeData = useRouteMatch("/:phoneId");

  const getPhonesRoute = () => {
    const phoneDetails = routeData !== null ? routeData.params.phoneId : "";
    const selectedPhone = phoneList.find(
      (eachPhone) => eachPhone.id === phoneDetails
    );
    return (
      selectedPhone || {
        phone: "That phone does not exists :(",
        price: "No price available",
        id: "undefined",
      }
    );
  };

  return (
    <div className="App">
      <header className="header">
        <Link to="/">
          <h1 className="header__title">PhoneApp</h1>
        </Link>
        <h2 className="header__subtitle">
          Find the latest mobile phones at the best price!
        </h2>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/:phoneId">
            <PhoneDetailComponent selectedPhone={getPhonesRoute()} />
          </Route>
          <Route>
            <Loader isLoading={isLoading} />
            <PhoneListContainer exact path="/" phoneList={phoneList} />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <small className="footer__text">
          Developed by Sara Palomo Campesino for{" "}
          <a
            href="https://zignaly.com/"
            alt="Go to Zignaly website"
            className="footer__text--link"
            target="_blank"
          >
            Zignaly
          </a>
          . 2022
        </small>
      </footer>
    </div>
  );
}

export default App;
