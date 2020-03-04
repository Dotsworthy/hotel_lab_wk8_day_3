use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Boris Johnson",
    email: "boris@gmail.com",
    checkedInStatus: "Checked-In"
  },
  {
    name: "Tony Blair",
    email: "tony@yahoo.com",
    checkedInStatus: "Checked-Out"
  },
  {
    name: "David Cameron",
    email: "david@geocities.com",
    checkedInStatus: "Not-Arrived"
  }
])
