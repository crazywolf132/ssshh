import React from "react"

class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guildID: "",
            cmd: ""
        }
    }
    componentDidMount() {
        const id = window.location.href.split("/")[4]
        const command = window.location.href.split("/")[5]
        this.setState({ guildID: id, cmd: command })
    }
    render() {
        const { guildID, cmd } = this.state
        return (
            <div>
                ID: {guildID}
             cmd: {cmd}
            </div>
        )
    }
}

export default Shop