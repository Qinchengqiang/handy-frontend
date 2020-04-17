export const mockUserData = {
  usr001: {
    userId: "usr001",
    isLogin: true,
    userInfo: {
      firstName: "Ryan",
      lastName: "Reynolds",
      suburb: "Sydney",
      state: "NSW",
      postCode: "2000"
    },
    bookingIds: ["syd001", "syd002"],
    bookings: {
      syd001: {
        userId: "usr001",
        proId: "pro123",
        startTime: "2020-04-01-07",
        endTime: "2020-04-01-11",
        notes: "$100 tips if shirtless"
      },
      syd002: {
        userId: "usr001",
        proId: "pro456",
        startTime: "2020-04-17-15",
        endTime: "2020-04-17-20",
        notes: "$100 tips if babysit while cleaning"
      }
    }
  },
  usr002: {
    userId: "usr002",
    isLogin: true,
    userInfo: {
      firstName: "Tom",
      lastName: "Cruise",
      suburb: "Wollongong",
      state: "NSW",
      postCode: "2500"
    },
    bookingIds: ["syd003", "syd004"],
    bookings: {
      syd003: {
        userId: "usr002",
        proId: "pro112",
        startTime: "2020-04-15-07",
        endTime: "2020-04-15-11",
        notes: "$100 tips if shirtless"
      },
      syd004: {
        userId: "usr002",
        proId: "pro258",
        startTime: "2020-04-17-15",
        endTime: "2020-04-17-20",
        notes: "$100 tips if babysit while cleaning"
      }
    }
  },
  usr003: {
    userId: "usr003",
    isLogin: true,
    userInfo: {
      firstName: "Chris",
      lastName: "Evans",
      suburb: "Paddington",
      state: "NSW",
      postCode: "2021"
    },
    bookingIds: ["syd005", "syd006"],
    bookings: {
      syd005: {
        userId: "usr003",
        proId: "pro360",
        startTime: "2020-04-25-07",
        endTime: "2020-04-25-10",
        notes: "$100 tips if shirtless"
      },
      syd006: {
        userId: "usr003",
        proId: "pro016",
        startTime: "2020-04-31-15",
        endTime: "2020-04-31-20",
        notes: "$100 tips if babysit while cleaning"
      }
    }
  }
};
