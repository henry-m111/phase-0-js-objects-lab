// Declare and Initialize the Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// You can verify it by logging it to the console
console.log(attendee);
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// To test it, call the function:
logAttendeeName(attendee); // Output: Alice Smith
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// To test it:
logTicketPrice(attendee); // Output: 150
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// To test it:
updateTicketType(attendee, "General Admission");
console.log(attendee.ticketType); // Output: General Admission
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// To test it:
updateTicketPrice(attendee, 125.50);
console.log(attendee.ticketPrice); // Output: 125.5
function removeEventProperty(attendee) {
  delete attendee.event;
}

// To test it:
removeEventProperty(attendee);
console.log(attendee.event); // Output: undefined
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// To test it:
addCheckedInProperty(attendee);
console.log(attendee.checkedIn); // Output: true
