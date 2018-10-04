import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard'

import Product from '../product/all';
import ProductCreate from '../product/create';
import userProducts from '../product';
import Other from '../product/other';

const App = () => (
  <main>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/products/create" component={ProductCreate} />
      <Route path="/products/" component={Product} />
      <Route path='/user/products' component={userProducts}/>
      <Route path="/products/:id" component={Other} />
      {/* <Route exact path="/pricing" component={Pricing} /> */}
    </Switch>
    

    {/* <Footer/> */}
  </main>
);
export default App;
