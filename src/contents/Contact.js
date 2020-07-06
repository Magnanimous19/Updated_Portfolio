import React, { Component } from 'react';
import Resume from "../image/resume.pdf";

class Contact extends Component {
    render() {
        return (
            <div className="condiv"><h1 className="subtopic">Contact Me</h1>
                <h2>Email  :   reidburnsy19@hotmail.com</h2>
                <h2>Github   :  <a href="https://github.com/Magnanimous19?tab=repositories"> Magnanimous19</a> </h2>
                <h2>Linkedin    : <a href="https://www.linkedin.com/in/reid-burns-79b86219a/">Reid Burns</a></h2>
                <h2>Resume  : <a href= {Resume}>Resume</a></h2>
            </div>
        )
    }
}

export default Contact