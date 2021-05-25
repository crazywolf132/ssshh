import React from "react"
import Login from "./login.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isLogged: false, test: "asdasdasdasd", login: false }

    }
    componentDidMount() {

        fetch("/api/auth").then(res => res.json()).then(token => {
            console.log(token.auth)
            this.setState({ login: token.auth })
        })


    }
    render() {
        const { isLogged } = this.state
        //this.state.isLogged ? <Route path={this.props.path} component={this.props.component} /> : <Login />
        return (
            <div>
                {this.props.isAuth && <Route path={this.props.path} component={this.props.component} />}
                {!this.props.isAuth && <Login />}

            </div>
        )
    }
}

export default ProtectedRoute
