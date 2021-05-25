import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../css/guilds.css";
import Loading from "../partials/loading.js"
import "../css/style.css";

class Guilds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notFoundBot: [],
            foundBot: [],
            user: {},
            auth: false,
            err: false,
            errMsg: "",
            load: true,
            userName: ""
        }

    }
    componentDidMount() {
        fetch("/api/get/user")
            .then(res => res.json())
            .then(res => {
                if (res.user) {
                    fetch("/api/get/guilds").then(res => res.json()).then(api => {
                        this.setState({ userName: res.user.tag.split("#")[0], user: res.user, notFoundBot: api.notFoundBot, foundBot: api.foundBot, auth: true, load: false })
                    });
                } else {
                    this.setState({ err: true })

                }
            })
    }
    noIcon(words) {
        return words.split(" ").map(elm => { return elm.slice(0, 1).toUpperCase() })
    }


    render() {
        const { auth, user, foundBot, notFoundBot, load, userName } = this.state

        return (
            <div>
                <div>
                {load && <Loading />}
                </div>
             <div>
             {!load &&
                    <div className="guild_container">
                        <div>
                            <h1 ><span className="main_color">{userName}</span>, Lütfen Sunucu Seçin</h1>
                        </div>
                        {foundBot.map(elm => {
                            return (
                                <div>
                                    <div className="guild_wrapper" key={elm.id}>
                                        <div className="top">
                                            {elm.icon && <img src={`https://cdn.discordapp.com/icons/${elm.id}/${elm.icon}`} />}
                                            {!elm.icon && <div className="no_icon">{this.noIcon(elm.name)}</div>}
                                            <h4>{elm.name}</h4>
                                        </div>
                                        <div className="bottom">
                                            <Link to={`/dashboard/${elm.id}`}>
                                                <p>Sunucuya Git</p>
                                            </Link>
                                        </div>
                                        {/* 
                                            <h1 key={elm.id}>{elm.name}</h1> */}
                                    </div>
                                </div>
                            )
                        })}
                        {notFoundBot.map(elm => {
                            return (
                                <div>
                                    <div className="guild_wrapper" key={elm.id}>
                                        <div className="top">
                                            {elm.icon && <img src={`https://cdn.discordapp.com/icons/${elm.id}/${elm.icon}`} />}
                                            {!elm.icon && <div className="no_icon"><p>{this.noIcon(elm.name)}</p></div>}
                                            <h4>{elm.name}</h4>
                                        </div>
                                        <div className="bottom">
                                            <a href={`http://localhost:3001/api/addBot/${elm.id}`} target="_blank" id="notFoundBot">Egg'i Kur</a>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                }

             </div>
                
            </div>

        );
    }
}

export default Guilds;
