// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import CourseConfig from '../coursepage/CourseConfig';
// import './frame.css'

// function Configurator(props) {

//     // const [flag, setFlag] = useState(false);
//     // const{ flagCon} =props
//     let flagCon = true;
//     return (
//         <>
//             {  flagCon &&
//                 <div id="wrap-configurator" className="pt-4 px-2">
//                     <div id="head-configurator" class="row d-flex justify-content-between m-0 mb-3 mt-1">
//                         <span className="material-icons" >
//                             settings
//                     </span>

//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 21.5">
//                             <defs></defs>
//                             <path className="a" d="M8,18.75A10.75,10.75,0,1,0,18.75,8,10.75,10.75,0,0,0,8,18.75Zm10.75,7.976V10.774a7.976,7.976,0,1,1,0,15.952Z" transform="translate(-8 -8)"></path>
//                         </svg>
//                     </div>

//                     <div id="accordion" className=''>
//                         {/* <CourseConfig /> */}
//                         {/* <div className="card button_collapse p-0">
//                             <div className="card-header p-0" id="headingOne">
//                                 <h5 className="m-0">
//                                     <button className="btn btn-link d-flex justify-content-between p-0 px-1  align-items-center" data-toggle="collapse"
//                                         data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//                                         Page Setting <span className="material-icons align-middle arrow-collapse">
//                                             keyboard_arrow_right
//                                     </span>
//                                     </button>

//                                 </h5>
//                             </div>
//                             <div id="collapseOne" className="collapse" name="0" aria-labelledby="headingOne"
//                                 data-parent="#accordion">
//                                 <div id="pageSetting-body" className="card-body p-2">
//                                     aaaabbb

//                             </div>
//                             </div>
//                         </div> */}


//                         <div id="bottom_configurtor"></div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// export default connect(
//     // (state) => {
//     //     return {
//     //         flagCon: state.funnel.isOpenConfigurator
//     //     }
//     // }
// )(Configurator)

