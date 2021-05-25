import React from 'react'
class Login extends React.Component {

    constructor(props) {
        super(props)

    }
    componentDidMount() {
            window.open("http://localhost:3001/auth/discord", "_parent")


    }
    render() {
        return (
            <div>
                <h1>Burası için giriş yapmalısın!</h1>
            </div>
        )
    }
}

export default Login;
