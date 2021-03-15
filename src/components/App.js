import './App.css';
import MainWindow from "./mainCP/MainWindow";
import SideWindow from "./sideCP/SideWindow";
import React from "react";

function App() {
    const divStyle = ({backgroundColor: 'rgb(29, 41, 58'});
    return (
      <div className="container m-auto max-w-full" style={divStyle}>
          <div className="flex xs:justify-center justify-evenly flex-row">
              <div className="self-stretch">
                  <SideWindow/>
              </div>
              <div className="self-stretch">
                  <MainWindow/>
              </div>
          </div>
      </div>);
}

export default App;
