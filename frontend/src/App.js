import './App.css'
import Header from "./components/header";
import Homepage from "./pages/Homepage";
import {Route, Switch, useLocation} from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import ProductOverview from "./pages/ProductOverview";
import ProductAdministration from "./pages/ProductAdministration";
import PrivateRoute from "./routing/PrivateRoute";
import RemoveProducts from "./pages/RemoveProducts";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import EditProduct2 from "./pages/EditProduct2";

function App() {

    const code = new URLSearchParams(useLocation().search).get("code");

    return (
        <div className="App">
            <Header className="App-header" />
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/auth">
                    <Auth code={code}/>
                </Route>
                <Route exact path="/products/overview/">
                    <ProductOverview />
                </Route>
                <PrivateRoute exact path="/administration">
                    <ProductAdministration/>
                </PrivateRoute>
                <PrivateRoute exact path="/administration/new/">
                    <NewProduct/>
                </PrivateRoute>
                <PrivateRoute exact path="/administration/delete/">
                    <RemoveProducts/>
                </PrivateRoute>
                <PrivateRoute exact path="/administration/edit/1">
                    <EditProduct/>
                </PrivateRoute>
                <PrivateRoute exact path="/administration/edit/2">
                    <EditProduct2/>
                </PrivateRoute>
            </Switch>
        </div>
    );
}

export default App;
