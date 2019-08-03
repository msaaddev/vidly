import React, { Component } from "react";

class Like extends Component {
  state = {};

  clickEvent() {
    return <i class="fa fa-heart" aria-hidden="true" />;
  }
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick = {this.props.onClick}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
