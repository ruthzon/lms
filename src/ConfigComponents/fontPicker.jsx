import React, { Component } from "react";
import FontPicker from "font-picker-react";
 
export default class fontPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFontFamily: "Open Sans",
        };
    }
 //
    render() {
        const YOUR_API_KEY = 'AIzaSyCzgSJ33qliZxON6yFXjEpUudk2QsNTkBg'
        return (
            <div>
                <FontPicker
                    apiKey="YOUR_API_KEY"
                    activeFontFamily={this.state.activeFontFamily}
                    onChange={(nextFont) =>
                        this.setState({
                            activeFontFamily: nextFont.family,
                        })
                    }
                />
                <p className="apply-font">The font will be applied to this text.</p>
            </div>
        );
    }
}