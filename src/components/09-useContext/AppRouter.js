import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    // Link
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        {/* por si introducen una url que no existe los redirija al home */}
                        <Redirect to="/" />
                    </Switch>   
                </div>
            </div>
        </Router>
    )
}
