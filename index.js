// Ensure there is NO code above this line
const attendee = {
  attendeeId: "T001", // Verify if the lab needs 'attendeeID' (capital D)
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(obj) {
  console.log(obj.name);
}

function logTicketPrice(obj) {
  console.log(obj.ticketPrice);
}

function updateTicketType(obj, newType) {
  obj.ticketType = newType;
}

function updateTicketPrice(obj, newPrice) {
  obj.ticketPrice = newPrice;
}

function removeEventProperty(obj) {
  delete obj.event;
}

function addCheckedInProperty(obj) {
  obj.checkedIn = true;
}

// CodeGrade REQUIRES these exports to run its tests
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};
