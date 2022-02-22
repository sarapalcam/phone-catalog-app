import "../styles/index.scss";
import { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import apiPhones from "../services/fetch";
import PhoneListContainer from "./PhoneListContainer";
import PhoneDetailComponent from "./PhoneDetailComponent";
import Loader from "./Loader";

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
      <h1>Phone App</h1>
      <Switch>
        <Route exact path="/:phoneId">
          <PhoneDetailComponent selectedPhone={getPhonesRoute()} />
        </Route>
        <Route>
        <Loader isLoading={isLoading} />
          <PhoneListContainer exact path="/" phoneList={phoneList}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
