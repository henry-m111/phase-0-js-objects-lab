// 1. Initialize Object (Double check property name casing!)
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// 2. Functions (Ensure names match the lab exactly)
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

// 3. ESSENTIAL: Module Exports (The test suite MUST have these)
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};

