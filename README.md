### Where art thou?

#### Background

Geolocation is a powerfully communicative tool, especially in the mobile market
where users often find themselves in unfamiliar locales with only their mobile device
to clarify where they are. This app seeks to utilize geo-location based functionality
by giving mobile users an easy way to share their location with others on request.


#### Functionality & MVP

With this app, users will be able to:

- [ ] Use geolocation to pinpoint exactly where the user is
- [ ] Allow user to send out request for position of another user via text
- [ ] Be able to send text message response with location to requesting user
- [ ] Mobile friendly with UI/UX in mind

Wireframe

![homepage](./where.png)

#### Technologies & Technical Challenges
This app will be implemented using JavaScript and React Native.  In addition to the webpack.config.js and package.json files, there will be one script:

- app.js : will contain the rerendering of requests and emergency contacts

The primary technical challenges will be:

- Learning React Native
- Implementing the geolocation API
- Converting response to text message

#### Group Members & Work Breakdown
Our group consists of two members, Scott Mosher and Dallas Morgan.

Scott's primary responsibilities will be:
- research react native components
- learn the integration of text API
- frontend styling

Dallas' primary responsibilities will be:
- setting up backend for users and sessions
- integration of geolocation API
- coordinating AJAX requests to server

#### Implementation Timeline
###### Day 1: Get started learning the basics of React Native and how it interacts with the backend
- setup package.json
- setup rails backend

###### Day 2: Work on integrating geolocation and research text API
- begin basic views for React Native
- get location to pop up on the views

###### Day 3: Work on sending out requests to other users
- get requests to specific users
- be able to respond with location

###### Day 4: Work on integrating text API
- be able to respond and request with text messages
- begin styling

###### Day 5: Style and test for bugs
- finish view styling
- ensure smooth usability

#### Future Plans
- Implement yelp API for more detailed responses
- Allow user to turn on location sharing
- Implement panic button
