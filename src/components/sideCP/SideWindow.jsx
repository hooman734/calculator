import React from 'react';

import Item from "./Item";

class SideWindow extends React.Component {
    divStyle = ({backgroundColor: 'rgb(16, 23, 34'});

    render () {
        return (
            <div className="container m-auto min-h-screen py-5 my-0 mx-5 px-5" style={this.divStyle}>
                <p className="text-blue-100 text-center text-5xl my-4">Calculated</p>
                <p className="text-blue-100 text-center mt-5 pt-5 text-xs">Select Your Calculator</p>
                <div className="flex justify-center flex-row mt-auto">
                    <div className="flex justify-center flex-col mt-4">
                        <div className="self-end mx-1.5">
                           <Item iconClass="fas fa-calculator"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-signal"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-dollar-sign"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-home"/>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col mt-4">
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-thermometer-half"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-heartbeat"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-clock"/>
                        </div>
                        <div className="self-end mx-1.5">
                            <Item iconClass="fas fa-database"/>
                        </div>
                    </div>
                </div>
                <p className="text-blue-100 text-center mt-5 text-xs text-opacity-25">Need Some Help?</p>
            </div>
        );
    }
}

export default SideWindow;