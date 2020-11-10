import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "./firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };
//  getUidByUserName=(usrName)=> {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: "https://hub.leader.codes/api/getUser/" + usrName,
//             method: "GET",
//             withCradentials: true,
//             dataType: "json",
//             contentType: "application/json",
//             success: function (data) {
//                 resolve(uId)
//             },
//             error: function (err) { console.log(err) }
//         });
//     })
// }
// getUidByUserName(usrName).then((uid) => {....})
  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
