import { Component } from "react";

export class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleChange = (event) => {
        let s = event.target.value;
        s = s.trim()
        if(s === ""){
            this.setState({count: 0});
            return
        }
        let answer = 1
        for (let i = 0; i < s.length; ++i) {
            if (i > 0 && (s[i-1] === ' ' || s[i-1] === '\n') && (s[i] === ' ' || s[i] === '\n')) continue;
            else if (s[i] === ' ' || s[i] === '\n') answer += 1;
        }
        this.setState({count: answer});
    }

    render() {
        return(
            <center>
                <div>
                    <h1>Responsive Paragraph Word Counter</h1>
                    <textarea name="para" id="para" cols="70" rows="10" placeholder="Enter the content here" onChange={this.handleChange}></textarea>
                    <p>Word Count: {this.state.count}</p>
                </div>
            </center>
        )
    }
}