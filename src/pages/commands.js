import React from "react"
import { Link } from "react-router-dom";
import { getID } from "../utils/functions";
import "../css/commands.css";
class Commands extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guildID: "",
            cmd: ""
        }
    }

    componentDidMount() {
        this.setState({ guildID: getID(window.location.href) })
    }

    render() {
        const { guildID } = this.state
        return (
            <div>
                <div className="cmd_header centered">
                    <h1>Lütfen Bir Özellik seçiniz</h1>
                </div>
                <div className="cmds_wrapper">
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/moderator`}>
                        <img src="/public/icons/mod.svg" />
                        <div className="cmd_content">
                            <h4>Moderatör</h4>
                            <p>Sunucunuzu yönetmek için harika!</p>
                        </div>
                    </Link>
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/invite`}>
                        <img src="/public/icons/invite.svg" />
                        <div className="cmd_content">
                            <h4>Davet</h4>
                            <p>Kimin kimleri davet ettiğini takip edin!</p>
                        </div>
                    </Link>
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/register`}>
                        <img src="/public/icons/register.svg" />
                        <div className="cmd_content">
                            <h4>Kayıt</h4>
                            <p>Sunucunuza birini almadan önce kayıt etmek iyi bir fikir olabilir.</p>
                        </div>
                    </Link>
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/word-game`}>
                        <img src="/public/icons/word-game.svg" />
                        <div className="cmd_content">
                            <h4>Kelime Oyunu</h4>
                            <p>Sözlükler ile destekli, Türkçe İngilizce kelime oyunu.</p>
                        </div>
                    </Link>
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/shop`}>
                        <img src="/public/icons/store.svg" />
                        <div className="cmd_content">
                            <h4>Sunucu Marketi</h4>
                            <p>Egg'in ekonomisinden faydalanarak sunucu üyeleriniz için roller satın.</p>
                        </div>
                    </Link>
                    <Link className="cmd_wrapper" to={`/dashboard/${guildID}/welcome`}>
                        <img src="/public/icons/welcome.svg" />
                        <div className="cmd_content">
                            <h4>Karşılama</h4>
                            <p>Yeni gelen sunucu üyelerinize sıcak bir karşılama yapın!</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Commands
