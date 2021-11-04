import './App.css'
import Header from "./components/header";
import Homepage from "./pages/Homepage";
import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";

function App() {

    return (
        <div className="App">
            <Header className="App-header"/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
