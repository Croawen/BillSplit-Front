import React from "react";
import { connect } from "react-redux";
import AuthWrapper from "./Auth/AuthWrapper";
import MainWrapper from "./Main/MainWrapper";

class Wrapper extends React.Component {
  state = {};

  render() {
    const currentUser  = this.props.currentUser;
    return currentUser ? (<MainWrapper />) : (<AuthWrapper />);
  }
}
const mapState = state => ({
  currentUser: state.currentUser.currentUser,
});

export default connect(mapState)(Wrapper);
