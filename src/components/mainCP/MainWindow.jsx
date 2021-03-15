import React, { Component } from 'react';
import { connect } from 'react-redux';
import KeyPad from "./KeyPad";
import Display from "./Display";
import History from "./History";

class MainWindow extends Component {

    render () {
        return (
            <div className="container m-auto max-w-max my-5 py-5 px-5 mx-5">
                <div className="flex justify-center flex-col">
                    <div className="self-end mx-1.5">
                        <Display />
                    </div>
                    <div>
                        <KeyPad/>
                    </div>
                    <div>
                        <History />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    history: state.history
});

export default connect(mapStateToProps)(MainWindow);