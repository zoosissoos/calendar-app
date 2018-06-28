const mongoose = require('mongoose');

const Event = mongoose.model('event');

module.exports = app => {
  
  //sends all the saved events to the user
  app.get('/api/events/all', (req, res) => {
    Event.find().exec((err, event)=>{
      res.send({event});
    })
  });

  //gets events for specific month
  app.get('/api/events/:year/:month', async (req, res) => {
    try {
      const {month, year} = req.params
      const eventRes = await Event.find({
        month,
        year
      })
      res.send(eventRes);
    } 
    catch (err) {
      res.send(err);
    }
  });

  //gets events for specific day
  app.get('/api/events/:month/:day/:year', async (req, res) => {
    try {
      const {month, day, year} = req.params
      console.log(req.params)
      const eventRes = await Event.find({
        month,
        day,
        year,
      })
      console.log(eventRes)
      res.send(eventRes);
    } 
    catch (err) {
      res.send(err);
    }
  });

  //handles event save requests
  app.post('/api/events', async (req, res) => {

    //destructures data from req.body
    const { title, description, eventStart, eventFinish } = req.body;

    const dateModified = new Date();
    const day = dateModified.getDate()
    const month = dateModified.getMonth()
    const year = dateModified.getFullYear()

    //creates new instance of event
    const event = new Event({
      title,
      description,
      eventStart,
      eventFinish,
      month,
      day,
      year,
      dateModified
    });
    console.log('event :', event)

    try {
      //tries saving event and sends response
      const eventSave = await event.save();
      res.send(eventSave);
    } 
    catch (err) {
      //catches and sends error
      res.send(err);
    }
  });

  app.delete('/api/events/:_id', async (req, res) => {
    try {
      const {_id} = req.params
      const eventRes = await Event.deleteOne({_id})
      res.send(eventRes);
    } 
    catch (err) {
      res.send(err);
    }
  })
}
