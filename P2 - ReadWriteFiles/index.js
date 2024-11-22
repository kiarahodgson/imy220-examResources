const { validDate, checkName } = require('./dataValidation');
const { fileRead, fileWrite } = require('./fileManager');

const events = fileRead('events.json'); // Read events from the input file

// Filter events with valid dates
const filteredEvents = events.filter(event => validDate(event.date));

// Process events to add the validName property
const processedEvents = filteredEvents.map(event => ({
    ...event,
    validName: checkName(event.title)
}));

// Write the processed events to a new file
fileWrite('newEvents.json', processedEvents);
