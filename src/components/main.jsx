import React, { Component } from "react";
import generateWord from "./wordGenerator";
import "../stylesheets/main.css";

class Main extends Component {
    state = { currentWord: generateWord(1) };
    render() {
        return (
            <div className="container">
                <h1>Game Interface Here</h1>
                <p>[DEBUG] Current Word to Solve: {this.state.currentWord}</p>
            </div>
        );
    }
}

export default Main;
