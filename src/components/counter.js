import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function Counter({ counter, inc, dec, rnd }) {
  return (
    <div className="container mt-4">
      <h1>
        Counter: <span>{counter}</span>
      </h1>

      <div className="row">
        <button className="btn btn-primary mr-2" onClick={dec}>
          DEC
        </button>
        <button className="btn btn-warning mr-2" onClick={inc}>
          INC
        </button>
        <button className="btn btn-danger" onClick={rnd}>
          RND
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(Counter);
