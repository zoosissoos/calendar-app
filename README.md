# calendar-app
An app to keep track of important dates

## Getting Started

To get running locally you will have to follow install directions below

### Prerequisites/Technologies Used

- react.js
- react-redux
- mongoose

### Installing

- Clone into desired location

- You will be required to add Mlab manually as this is not yet deployed
  To do this, visit the mlab site and follow directions to create and connect a new database.
  - Then create a "dev.js" file in /calendar-backend/config

  - In the "dev.js" file add:
  ```
    module.exports = {
      mongoURI: '*your mongo information here*'
    };
  ```


- 'cd' into calendar-backend folder
- perform 'npm install' or 'yarn install'

- 'cd' into calendar-backend folder
- perform 'npm install' or 'yarn install'

- 'cd' into calendar-backend folder
- run 'yarn dev' and visit localhost in browser.


### Future development

I wish to fix when adding an event it can only add an event for the current day. This is a state issue that I wish to resolve shortly.

This will also have the ability to switch months.

I also wish to have this deployed with individual oAuth.


## Deployment

This has not been deployed.

## Authors

* **Daniel Lewis** - *Initial work* - [zoosissoos](https://github.com/zoosissoos)
