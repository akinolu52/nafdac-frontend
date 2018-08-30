import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard'

// import SignUp from '../sign-up';
// import Pricing from '../pricing';
// import Header from '../../partials/header'
// import Footer from '../../partials/footer'

const userAuth = {
    isAuthenticated: false,
    authenticated(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    }
}

const App = () => (
  <main>

    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about-us" component={About} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route exact path="/pricing" component={Pricing} /> */}
    </Switch>

    {/* <Footer/> */}
  </main>
);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) =>(
//         userAuth.isAuthenticated === true 
//         ? <Component {...props} />
//         : <Redirect to="/login" />
//     )} />
// )

export default App;
