import React, { Component } from 'react'
import './../css/App.css';
import axios from 'axios'
import Messages from '../partials/messages'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      guild: {},
      user: {},
      error: false,
      name: '',
      succ: false,
      alertMsg: '',
      lastname: '',
      loading: false
    }
    this.sumbitHandler = this.sumbitHandler.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    fetch("/api/get")
      .then(res => res.json())
      .then(apiRes => this.setState({ guild: apiRes.guilds, user: apiRes.user }))
      .catch(e => this.setState({ error: true }))
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  sumbitHandler(event) {
    event.preventDefault();
    const { name, lastname } = this.state
    const data = {
      name: name,
      lastname: lastname,
    }
    this.setState({ loading: true })
    // setTimeout(() => {
    //   this.setState({ loading: false })
    // }, 1500);
    axios.post("/api/save", data).then(res => {
      this.setState({ loading: false, succ: true, alertMsg: "Ayarlar kaydedildi!" })
    }).catch(e => {
      this.setState({ error: true })
    });


  }


  render() {
    const { loading } = this.state;
    return (
      <div>
        <title>Anasayfa</title>
        <Messages succ={this.state.succ} msg={this.state.alertMsg}/>
        <h1>Hoşgeldin, {this.state.user.tag} </h1>
        <form onSubmit={this.sumbitHandler}>
          <input
            type='text' name="name"
            onChange={this.handleInputChange}
          />
          <input
            type='text' name="lastname"
            onChange={this.handleInputChange}
          />
          <input
            type='submit'
          />
          <button type="submit" className="button" onClick={this.fetchData} disabled={loading}>
            {loading && (
              <i
                className="fas fa-circle-notch fa-spin"
                style={{ marginRight: "5px" }}
              />
            )}
            {loading && <span>Kaydediliyor</span>}
            {!loading && <span>Kaydet</span>}
          </button>
        </form>
        <div>
          <h1>===================================</h1>
          <p>İsim:{this.state.name}</p>
          <p>Soyİsim:{this.state.lastname}</p>
        </div>
      </div>

    );
  }
}

export default App;
