import React, { useState } from "react";

import { connect } from "react-redux";
import { showUpcoming } from "../../../redux/actions/bookingsActions";

const UpComing = (props) => {
  const [input, setInput] = useState("");
  const { rawOutput, userId } = props;

  return (
    <>
      <h3>Your upcoming bookings</h3>

      <button
        name={`submitQuery`}
        id={`submitQuery`}
        onClick={(e) => props.showUpcoming(userId)}
      >
        submit
      </button>
      <hr />

      <pre>
        <code>{JSON.stringify(rawOutput, null, 4)}</code>
      </pre>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rawOutput: state.bookingReducer,
    userId: state.authentication.user,
    //bookings: state.bookingReducer.bookings
    //bookingIds:state.bookingIds
  };
};

export default connect(mapStateToProps, { showUpcoming })(UpComing);
