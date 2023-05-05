import React, { Component } from "react";

export default class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Band Member</h1>
        <p>
          Et sunt magna minim commodo labore anim exercitation tempor magna quis. Sint laborum eiusmod incididunt proident enim minim excepteur esse labore
          magna. Excepteur est sunt deserunt aute mollit est eiusmod veniam incididunt non do incididunt sint. Anim ad magna voluptate elit. Et sunt magna minim
          commodo labore anim exercitation tempor magna quis. Sint laborum eiusmod incididunt proident enim minim excepteur esse labore magna. Excepteur est
          sunt deserunt aute mollit est eiusmod veniam incididunt non do incididunt sint. Anim ad magna voluptate elit. Et sunt magna minim commodo labore anim
          exercitation tempor magna quis. Sint laborum eiusmod incididunt proident enim minim excepteur esse labore magna. Excepteur est sunt deserunt aute
          mollit est eiusmod veniam incididunt non do incididunt sint. Anim ad magna voluptate elit. Et sunt magna minim commodo labore anim exercitation tempor
          magna quis. Sint laborum eiusmod incididunt proident enim minim excepteur esse labore magna. Excepteur est sunt deserunt aute mollit est eiusmod
          veniam incididunt non do incididunt sint. Anim ad magna voluptate elit. Et sunt magna minim commodo labore anim exercitation tempor magna quis. Sint
          laborum eiusmod incididunt proident enim minim excepteur esse labore magna. Excepteur est sunt deserunt aute mollit est eiusmod veniam incididunt non
          do incididunt sint. Anim ad magna voluptate elit. Et sunt magna minim commodo labore anim exercitation tempor magna quis. Sint laborum eiusmod
          incididunt proident enim minim excepteur esse labore magna. Excepteur est sunt deserunt aute mollit est eiusmod veniam incididunt non do incididunt
          sint. Anim ad magna voluptate elit.
        </p>

        <div>{this.props.children}</div>
      </div>
    );
  }
}
