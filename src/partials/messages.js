import './../css/messages.css'
import React from 'react'
class Messages extends React.Component {
    state = {
        succ: true
    }
    constructor() {
        super()
        this.closeMsg = this.closeMsg.bind(this);

    }
    closeMsg() {
        this.setState({ succ: false })
    }
    render() {
        const { succ } = this.state
        if (this.props.succ) {
            return (

                <div style={succ ? {} : { display: 'none' }}>
                    <div className="succes-msg">
                        <span className="closebtn" onClick={this.closeMsg}>&times;</span>
                        <strong>Başarılı!  </strong>
                    {this.props.msg}
                    </div>
                </div>
            )
        } else if (this.props.err) {
            return <h1>Bir Hata Oluştu!</h1>;

        } else {
            return <div></div>
        }
    }
}

export default Messages;
