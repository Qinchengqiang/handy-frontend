import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { showUpcoming } from "../../../redux/actions/bookingsActions";
import BookingCard from "./BookingCard";

const UpComing = (props) => {
  const { rawOutput} = props;
  const bookings = rawOutput.bookings || [];
  const userId = window.localStorage.getItem('_id');
  return (
    <>
      <h3>Your upcoming bookings</h3>
      <Button
        type="primary"
        icon="reload"
        onClick={() => props.showUpcoming(userId)}
      >
        Refresh
      </Button>

      <hr />
      {bookings.length > 0
        ? bookings.map((booking, index) => {
            return (
              <BookingCard key={`booking-${index}`} bookingInfo={booking} />
            );
          })
        : null}
      {/*<pre>
        <code>{JSON.stringify(rawOutput, null, 4)}</code>
      </pre>*/}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rawOutput: state.bookingReducer,
   // userId: state.authentication.user,
    //bookings: state.bookingReducer.bookings
    //bookingIds:state.bookingIds
  };
};

export default connect(mapStateToProps, { showUpcoming })(UpComing);
