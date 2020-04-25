import React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";

export const NavigationContainer = (props) => {
  return <Navigation {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  barTitle: reduxState.app.name,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
