import React, { Component } from "react";
import { Card, Modal, Button, Input, Result } from "antd";
import { placeABooking } from "./api/bookingAPICalls";
import { connect } from "react-redux";

class AvailProCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      resultVisible: false,
      payload: {},
    };
  }
  showModal = () => {
    this.setState({
      ...this.state,
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ...this.state,
      ModalText: "Trying to place your booking with our Pro",
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        visible: false,
        confirmLoading: false,
        resultVisible: true,
      });
      this.handleMakeBooking(this.state.payload);
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      ...this.state,
      visible: false,
    });
  };

  handleCloseResult = () => {
    this.setState(() => ({
      ...this.state,
      resultVisible: false,
    }));
  };
  handleResultOk = () => {
    this.setState({
      ...this.state,
      resultVisible: false,
    });
  };
  handleMakeBooking = async (payload) => {
    console.log(payload);
    const res = await placeABooking(payload).then((res) => res);
    console.log(res);
  };
  componentDidMount() {
    const { _id: proId } = this.props.proInfo;

    const { bookingDate, startSession, endSession } = this.props.bookingInfo;
    const payload = {
      customerId: this.props.userId,
      proId,
      bookingDate,
      startSession,
      endSession,
      notes: "",
    };
    this.setState({
      ...this.state,
      payload,
    });
  }
  render() {
    const { _id: proId, firstName, serviceType } = this.props.proInfo;

    const { bookingDate, startSession, endSession } = this.props.bookingInfo;
    const payload = {
      customerId: this.props.userId,
      proId,
      bookingDate,
      startSession,
      endSession,
      notes: "",
    };

    return (
      <div className="resultsCard">
        <Card
          title={firstName}
          style={{ width: 300, textTransform: "capitalize" }}
          extra={
            <Button type="primary" onClick={this.showModal}>
              Book Me
            </Button>
          }
        >
          <Modal
            title="Title"
            visible={this.state.visible}
            onOk={this.handleOk}
            confirmLoading={this.state.confirmLoading}
            onCancel={this.handleCancel}
          >
            <p>{`You are about to book with ${firstName} on ${bookingDate}`}</p>
          </Modal>
          <Modal
            title="Result"
            visible={this.state.resultVisible}
            onOk={this.handleCloseResult}
          >
            <Result
              status="success"
              title={`Successfully Booked with ${firstName}`}
              /* extra={[
                    <Button type="primary" onClick={this.handleCloseResult}>
                      Close this window
                    </Button>,
                  ]} */
            />
          </Modal>
          <p>{firstName}</p>
          <p>Service Type: {serviceType}</p>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //rawOutput: state.bookingReducer,
    userId: state.authentication.user,
    //bookings: state.bookingReducer.bookings
    //bookingIds:state.bookingIds
  };
};

export default connect(mapStateToProps)(AvailProCard);
