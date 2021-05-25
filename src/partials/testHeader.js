// import './../css/indextest.css';
import "./../css/navbar.css"
import { ReactComponent as BellIcon } from './../icons/bell.svg';
import { ReactComponent as MessengerIcon } from './../icons/messenger.svg';
import { ReactComponent as CaretIcon } from './../icons/caret.svg';
import { ReactComponent as PlusIcon } from './../icons/plus.svg';
import { ReactComponent as CogIcon } from './../icons/cog.svg';
import { ReactComponent as ChevronIcon } from './../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './../icons/arrow.svg';
import { ReactComponent as BoltIcon } from './../icons/bolt.svg';

import React, { Component, useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.handleNav = this.handleNav.bind(this);
    }

    handleNav(props) {
        console.log(this.state.dropdown)
        if (this.state.dropdown) {
            this.setState({ dropdown: false })
        } else {
            this.setState({ dropdown: true })

        }

    }


    render() {
        const { auth } = this.props
        const { dropdown } = this.state
        return (
            <div>
                { auth &&
                    <div>
                        <a>{dropdown}</a>
                        <button onClick={this.handleNav}>Hop</button>
                        {dropdown &&
                            <div>
                                <h1>Tets</h1>
                            </div>
                        }
                    </div>
                }
            </div>

        )
    }
}

export default Header;