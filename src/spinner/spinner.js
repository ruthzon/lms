import React, { Component } from 'react';
import { connect } from 'react-redux';
import './spinner.css'

export default connect(
    null,
    null
)(
    class Spinner extends Component {
        render() {
            return (
                // <a>just to check</a>
                <div className="load_page">
                    <span class="loader">Load&nbsp;ng</span> </div>
            );
        }
    })

// export default Description;
