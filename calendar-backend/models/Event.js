const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  description: String,
  eventStart: String,
  eventFinish: String,
  day: Number,
  month: Number,
  year: Number,
  dateModified: { type: Date, default: Date.now }
});

mongoose.model('event', eventSchema);

module.exports = eventSchema;