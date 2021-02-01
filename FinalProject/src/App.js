import './App.css';
import HomeReviews from './components/Allreviews';
import RegisterUser from './components/Register';
import LoginUser from './components/Login';
import UserHome from './components/UserHome';
import CreateReview from './components/CreateReview';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Route, Link, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/#">MOVIE REVIEW</a>
      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <Link to="/Home"><li className="nav-item"><a className="nav-link" href="/#">HOME</a></li></Link>
          <Link to="/Register"><li className="nav-item"><a className="nav-link" href="/#">REGISTER</a></li></Link>
          <Link to="/Login"><li className="nav-item"><a className="nav-link" href="/#">LOGIN</a></li></Link>
        </ul>
      </div>
     </nav>
     <Switch>
      <Provider store={store}>
          <Route exact path="/Home" component={HomeReviews}></Route>
          <Route exact path="/Register" component={RegisterUser}></Route>
          <Route exact path="/Login" component={LoginUser}></Route>
          <Route exact path="/UserHome" component={UserHome}></Route>
          <Route exact path="/CreateReview" component={CreateReview}></Route>
      </Provider>
    </Switch>
    </div>
  );
}

export default App;
