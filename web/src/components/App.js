import "../styles/index.scss";
import "../styles/App.scss";
import { Switch, Route, Link } from "react-router-dom";
import PhoneListContainer from "./PhoneListContainer";
import PhoneDetailComponent from "./PhoneDetailComponent";

function App() {

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
            <PhoneDetailComponent />
          </Route> 
          <Route>
            <PhoneListContainer exact path="/" />
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
            rel="noreferrer"
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
