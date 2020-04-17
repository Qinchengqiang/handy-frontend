import React, { useState } from "react";

import { connect } from "react-redux";
import { showUpcoming } from "../../../redux/actions/bookingsActions";
//import {addNotes} from "../../../redux/actions/bookingsActions";

const UpComing = (props) => {
  const [input, setInput] = useState("");
  const { rawOutput } = props;

  return (
    <>
      <h2>Upcoming bookings</h2>
      <input
        type="text"
        placeholder={`enter usr001 to test`}
        name={`userId`}
        id={`userId`}
        required={true}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        name={`submitQuery`}
        id={`submitQuery`}
        onClick={(e) => props.showUpcoming(input)}
      >
        submit
      </button>
      <hr />

      <pre>
        <code>{JSON.stringify(rawOutput.data, null, 4)}</code>
      </pre>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rawOutput: state.bookingReducer,
    //userId: state.bookingReducer.userId,
    //bookings: state.bookingReducer.bookings
    //bookingIds:state.bookingIds
  };
};

export default connect(mapStateToProps, { showUpcoming })(UpComing);
