# Europeer-In

CodeClan group project, built over 6 days in January 2022. 
A full stack educational app on Europe, using NodeJS, Express and MongoDB on the backend, React, Leaflet and Bootstrap on the frontend.

## Brief:
**Educational App**

The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.

**The chosen topic for the project was Europe, specifically, European countries.**

### MVP

A user should be able to:

* view some educational content on a country
* be able to interact with a map to read about a chosen country

### Possible Extensions

* Use an API to bring in more content on European countries, and store that information in a database.
* Have a variety of quizzes for the user to test their new found knowledge


### Things which went well, and things I'd do differently next time
#### Main things I learnt
* Leaflet, which I had had a tiny smidgen of experience with during a weekend homework
* All about GeoJSON files, and even getting some QGIS experience!
* Programming and working as group, especially using some agile methods like daily stand-ups or pair and mob programming
* A brief introduction to Bootstrap and how useful (and occasionally painful) it can be

#### Things we would have done differently and/or wished we'd had time for
* Checking in more during the initial weekend - some blockers could have been solved much earlier!
* The option for a user to select a quiz topic from a list
  * We had all the data for many more quizzes, and the quiz code would have been suitable for any quiz with a few tweaks. Just not quite enough time to implement before the presentation was due!

----

Running instructions -
From the command line, assuming you have all of the required aforementioned backend programs installed:

1) cd into the server folder and do an npm install
2) npm run seeds
3) npm start 
4) in a new tab, cd into the client folder and do an npm install
5) npm start

Then navigate to the URL react is running on (by default this is http://127.0.0.1:3000)
