import React from "react"
import axios from "axios"
class Mod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            guildID: "",
            cmd: "",
            settings: {},
            load: true,
            error: false,
            errMsg: "",
            saveLoad: false,
            update: {}
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
    componentDidMount() {
        const id = window.location.href.split("/")[4]

        fetch(`/api/get/guild/${id}`)
            .then(res => res.json())
            .then(api => {
                if (api.status != 200) {
                    return
                }
                this.setState({ guildID: id, load: false, settings: api.guilid })
            })
    }
    handleInput(event) {
        this.setState({ update: { $set: { ...this.state.update.$set, [event.target.name]: event.target.value } } })
    }
    handleForm() {
        this.setState({ saveLoad: true })
        const data = this.state.update
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const body = { update: data };

        axios.post(`http:/localhost:3001/api/save/guild/781472117895200779`, body, axiosConfig)
            .then(res => this.setState({ saveLoad: false }))
            .catch(err => console.log('Login: ', err));
    }

    render() {
        const state = this.state
        return (
            <div>
                <p>{JSON.stringify(state.update)}</p>
                <p>{JSON.stringify(state.embed)}</p>
                <input onChange={this.handleInput} type="text" name="prefix"></input>
                <button onClick={this.handleForm} disabled={state.saveLoad ? true : false}>{state.saveLoad ? "Kaydediliyor" : "Kaydet"}</button>
            </div>
        )
    }
}

export default Mod
