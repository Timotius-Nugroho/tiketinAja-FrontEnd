import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";

import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import BasicReact from "./pages/learning/BasicReact/BasicReact";
import BasicHome from "./pages/learning/Home/Home";
import BasicMovieDetail from "./pages/learning/MovieDetail/MovieDetail";
import BasicRedux from "./pages/learning/BasicRedux/BasicRedux";
import Home from "./pages/main/Home/Home";
import MovieDetail from "./pages/main/MovieDetail/MovieDetail";
import Payment from "./pages/main/Payment/Payment";
import AdminManageMovie from "./pages/main/AdminManageMovie/AdminManageMovie";
import AdminDashboard from "./pages/main/AdminDashboard/AdminDashboard";
import Order from "./pages/main/Order/Order";
import Profile from "./pages/main/Profile/Profile";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <PublicRoute
                restricted={true}
                path="/register"
                exact
                component={Register}
              />
              <PublicRoute
                restricted={true}
                path="/login"
                exact
                component={Login}
              />
              <PublicRoute
                path="/learning/basic-react"
                exact
                component={BasicReact}
              />
              <PrivateRoute
                path="/learning/basic-home"
                exact
                component={BasicHome}
              />
              <Route
                path="/learning/basic-movie-detail/:id"
                exact
                component={BasicMovieDetail}
              />
              <Route
                path="/learning/basic-redux"
                exact
                component={BasicRedux}
              />
              <PublicRoute path="/" exact component={Home} />
              <PublicRoute
                path="/main/movie-detail/:id"
                exact
                component={MovieDetail}
              />
              <PrivateRoute path="/main/payment" exact component={Payment} />
              <PrivateRoute
                path="/main/admin/manage-movie"
                exact
                component={AdminManageMovie}
              />
              <PrivateRoute
                path="/main/admin/dashboard"
                exact
                component={AdminDashboard}
              />
              <PrivateRoute path="/main/order" exact component={Order} />
              <PrivateRoute path="/main/profile" exact component={Profile} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
