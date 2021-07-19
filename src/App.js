import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './product/product_form';

import ProductLists from './product/product_list';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (

    <div className="App content">
      <nav className="navbar" >
        <div className="container-fluid">
          <div className="navbar-brand" >
            <img src="/logo.png" alt="STC Logo" height="40px" className="d-inline-block align-text-top" />
          </div>
        </div>
      </nav>
      <Router>
        <Switch>

          <Route exact path="/products"  >
            <ProductForm />
          </Route>
          <Route exact path={["/", "/lists"]}>
            <ProductLists />
          </Route>
        </Switch>

      </Router>





    </div>
  );
}

export default App;
