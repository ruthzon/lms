import React from 'react';
import { connect } from 'react-redux';
import './frame.css'
// import logo from '../../assets/leader_logo.png'
// import thumbtack from './img_from_xd/thumbtack-solid.svg'
import $ from 'jquery'
import { actions } from '../../Store/actions';
// import { setFlagToggleCon ,setFlagthumbtack} from '../../redux/actions/funnel.action'


function mapStateToProps(state) {
    return {
        styles: state.stylesReducer.styles,
        user: state.userReducer.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    setConfigurator: () => dispatch(actions.setConfigurator()),
    setThumbtack: () => dispatch(actions.setThumbtack()),
});

function Top_frame(props) {
    return (
        <div id="top_frame" className="row d-flex justify-content-between align-items-right mx-0">
            <a id="leader_logo" className="d-flex" >
                <img src={'./img_from_xd/leader-logo.png'} id="img_logo" class="m-auto"></img>

            </a>


            <div id="top_frame_icons" className="mr-3">
                <img src={props.user.photoURL} className="logo-img" />

                <img src={'./img_from_xd/thumbtack-solid.svg'} id="thumbtack" className={props.styles.thumbtack ? "rotateThumbtack" : ""} onClick={() => props.setThumbtack()} />
                <img src={'./img_from_xd/menu.png'} id="menu" className="" onClick={() => props.setConfigurator()} />
                {/* 
                <button id="menu2" className="material-icons align-middle pl-2 pointer btn btn-simple" onClick={(() => props.setConfigurator())}>
                    menu
                </button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Top_frame);

