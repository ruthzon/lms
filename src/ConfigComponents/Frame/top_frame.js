import React from 'react';
import { connect } from 'react-redux';
import './frame.css'
// import logo from '../../assets/leader_logo.png'
// import thumbtack from './img_from_xd/thumbtack-solid.svg'
import $ from 'jquery'
// import { setFlagToggleCon ,setFlagthumbtack} from '../../redux/actions/funnel.action'


function Top_frame(props) {


    return (
        <div id="top_frame" className="row d-flex justify-content-between align-items-right mx-0">
            <a id="leader_logo" href="https://lobby.leader.codes/" className="d-flex">
                {/* <img src={logo} id="img_logo" class="m-auto"></img> */}
                logo
            </a>


            <div className="mr-3">
                <img src={'./img_from_xd/thumbtack-solid.svg'} id="thumbtack" className={props.thumbtack?"rotateThumbtack":""} onClick={() => props.changeFlagThumbtack(!props.thumbtack)} />

                <button id="menu2" className="material-icons align-middle pl-2 pointer btn btn-simple" onClick={!props.thumbtack && (() => props.changeFlagConfigurator(!props.flagCon))}>
                    menu
                </button>
            </div>
        </div>
    )
}

// export default connect(
//     (state) => {
//         return {
//             flagCon: state.funnel.isOpenConfigurator,
//             thumbtack: state.funnel.thumbtack
//         }
//     },
//     (dispatch) => {
//         return {
//             changeFlagConfigurator: function (newFlag) {dispatch(setFlagToggleCon(newFlag))},
//             changeFlagThumbtack: function (newFlag) {dispatch(setFlagthumbtack(newFlag))}
//         }
//     }
// )(Top_frame)

export default connect(null,null)(Top_frame);

