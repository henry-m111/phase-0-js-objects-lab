const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// DO NOT REMOVE THIS - CodeGrade needs it to run the tests
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};


