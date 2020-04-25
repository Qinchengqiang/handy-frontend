import { Card, Popover, Button } from "antd";
import React from "react";
const sesstionTable = {
  1: "7:00 AM",
  2: "7:30 AM",
  3: "8:00 AM",
  4: "8:30 AM",
  5: "9:00 AM",
  6: "9:30 AM",
  7: "10:00 AM",
  8: "10:30 AM",
  9: "11:00 AM",
  10: "11:30 AM",
  11: "12:00 PM",
  12: "12:30 PM",
  13: "1:00 PM",
  14: "1:30 PM",
  15: "2:00 PM",
  16: "2:30 PM",
  17: "3:00 PM",
  18: "3:30 PM",
  19: "4:00 PM",
  20: "4:30 PM",
  21: "5:00 PM",
  22: "5:30 PM",
  23: "6:00 PM",
  24: "6:30 PM",
  25: "7:00 PM",
  26: "7:30 PM",
  27: "8:00 PM",
  28: "8:30 PM",
  29: "9:00 PM",
};
const BookingCard = ({ bookingInfo }) => {
  const proFirstName = bookingInfo.proId.firstName;
  const proPhone = bookingInfo.proId.contactNum;
  const jobDate = new Date(bookingInfo.bookingDate);
  const startTime = bookingInfo.startSession;
  const endTime = bookingInfo.endSession;
  const popoverContent = (
    <div>
      <p style={{ textTransform: "capitalize" }}>{`Pro: ${proFirstName}`}</p>
      <p>{`Contact Number: ${proPhone}`}</p>
      <p>{`Job Date: ${jobDate.toDateString()}`}</p>
      <p>{`Job Starts at: ${sesstionTable[startTime]}`}</p>
      <p>{`Job Finishes at: ${sesstionTable[endTime]}`}</p>
    </div>
  );
  return (
    <div className="resultsCard">
      <Card
        title={jobDate.toDateString()}
        extra={
          <Popover content={popoverContent} title="Job Details">
            <Button type="primary">Job Details</Button>
          </Popover>
        }
        style={{ width: 300 }}
      >
        <p style={{ textTransform: "capitalize" }}>{`Pro: ${proFirstName}`}</p>
        <p>{`Job Time: ${sesstionTable[startTime]}`}</p>
      </Card>
    </div>
  );
};

export default BookingCard;
