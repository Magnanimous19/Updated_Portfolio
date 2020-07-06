import React, { Component } from 'react';
import memepic from "../image/project1.png";
import LIRIpic from "../image/LIRIbot.png";
import trainpic from "../image/train.png";

class Project extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Projects</h1>

            <h2><p>Meme Generator: Type any word and receive a random Gif and Reddit Comment</p></h2>
            <h3><a href="https://github.com/ChristineDang/OdincoGaming"> Meme Generator</a></h3>
            <img src={memepic} className="memepic"></img>            

            <br></br>

            <h2><p>LIRI Bot: LIRI will be a command line node app that takes in parameters and give you back data.</p></h2>
            <h3><a href="https://github.com/Magnanimous19/LIRIBot"> LIRI Bot</a></h3>
            <img src={LIRIpic} className="LIRIpic"></img>             

            <br></br>

            <h2><p>Train Scheduler: Uses Firebase to add and host arrival/departure times of trains</p></h2>
            <h3><a href="https://github.com/Magnanimous19/TrainScheduler"> Train Scheduler</a></h3>
            <img src={trainpic} className="trainpic"></img>           

            </div>
        )
    }
}
    
export default Project