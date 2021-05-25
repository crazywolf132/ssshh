import "./../css/navbar.css"
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false,
            auth: false,
            user: {}
        }
        this.handleNav = this.handleNav.bind(this);
    }
    componentDidMount() {
        fetch("/api/get/user")
            .then(res => res.json())
            .then(res => {
                if (res.user == false) {
                    this.setState({ auth: false })

                } else {
                    this.setState({ user: res.user, auth: true })

                }
            })
    }

    handleNav() {
        if (this.state.dropdown) {
            this.setState({ dropdown: false })
        } else {
            this.setState({ dropdown: true })

        }

    }


    render() {
        const { dropdown, user, auth } = this.state
        return (
            <div>
                <header>
                    <div className="navbar_left">
                        <Link to="/">
                            <a className="logo_text" href="/">Egg</a>
                        </Link>
                        <div className="navbar_left_child">
                            <ul>
                                <li>
                                    <Link to="/store">
                                    <i class="fas fa-store"></i>  Mağaza
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/support">
                                    <i class="fas fa-ticket-alt"></i> Yardım Merkezi
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar_right">
                        {auth &&
                            <div>
                                <div className="dropdown_wrapper">
                                    <img className="user_avatar" src={user.avatar} />
                                    <button className="navbar_btn" onClick={this.handleNav}>{user.tag} <i class="fas fa-chevron-down"></i></button>
                                </div>
                                <div className="dropdown_wrapper_res">
                                    <img className="user_avatar_res" src={user.avatar} />
                                    <button className="navbar_btn_res" onClick={this.handleNav}><i class="fas fa-chevron-down"></i></button>
                                </div>
                            </div>
                        }
                        {!auth &&
                            <div>
                                <a className="login_btn" href="http://localhost:3001/auth/discord">Giriş Yap!</a>
                            </div>

                        }
                    </div>

                </header>
                {dropdown &&
                    <div className="navbar_child" >
                        <Link to="/guilds">
                            <p> <i class="fas fa-server"></i>  Sunucular</p>
                        </Link>
                        <a href="http://localhost:3001/api/logout" id="logout"><i class="fas fa-sign-out-alt"></i> Çıkıp Yap</a>
                    </div>
                }
            </div>
        )
    }
}

export default Header;