import { Tabs } from "antd";
import React from "react";
import UpComing from "./UpComing";
import CleaningBookingForm from "./MakeBooking";

const { TabPane } = Tabs;

const MyBookings = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="New Booking" key="1">
        <CleaningBookingForm />
      </TabPane>
      <TabPane tab="Upcoming Bookings" key="2">
        <UpComing />
      </TabPane>
    </Tabs>
  );
};

export default MyBookings;
