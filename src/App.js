import Home from "./pages/home.js"
import Guilds from "./pages/guilds.js"
import "./css/loading.css"
import ProtectedRoute from "./partials/protected.js"
import Header from "./partials/header.js"
import Footer from "./partials/footer.js"
import Commands from "./pages/commands.js"
import Mod from "./pages/mod.js"
import Loading from "./partials/loading.js"
import ErrPage from "./partials/error.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import React from "react"
import Test from "./pages/tests.js"
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            auth: false,
            user: {},
            load: true,
            guilds: {}
        }
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("/api/auth").then(res => res.json()).then(api => this.setState({ load: false, auth: api.auth }))
        }, 2500);
    }
    render() {
        const { load, auth } = this.state
        return (
            <div>
                {load && <Loading />}
                {!load &&
                  
                        <div>
                            <Router>

                                <Header auth={this.state.auth} />
                                {/* <Home /> */}
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/test" exact component={Test} />
                                    <ProtectedRoute path="/guilds" component={Guilds} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/:id" exact component={Commands} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/moderator" component={Mod} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/invite" component={Mod} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/register" component={Mod} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/word-game" component={Mod} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/shop" component={Mod} isAuth={auth} />
                                    <ProtectedRoute path="/dashboard/*/welcome" component={Mod} isAuth={auth} />
                                    {/* <ProtectedRoute path="/dashboard/:id/shop" exact component={Shop} isAuth={auth} />
                                <ProtectedRoute path="/dashboard/:id/mod" component={Mod} isAuth={auth} /> */}
                                    {/* <ProtectedRoute path="/dashboard/123456789/cmd" component={Commands} isAuth={auth} guildID={getParams} /> */}
                                    {/* <Route path="*" component={ErrPage} /> */}

                                </Switch>
                            </Router >
                        </div>

                }
            </div>


        )
    }

}

export default App


