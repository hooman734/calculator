import React from 'react';
import KeyPad from "./KeyPad";
import Display from "./Display";
import History from "./History";

class MainWindow extends React.Component {
    render () {
        return (
            <div className="container m-auto max-w-max my-5 py-5 px-5 mx-5">
                <div className="flex justify-center flex-col">
                    <div className="self-end mx-1.5">
                        <Display input={"123.1255005"}/>
                    </div>
                    <div>
                        <KeyPad/>
                    </div>
                    <div>
                        <History previousActions={{prev1: "922 x 4 = 368.8", prev2: '922 x 4 = 368.8', prev3: "922 x 4 = 368.8"}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainWindow;