# Project Cosmo.IO
## Contributions
Brandon: All 3D elements (THREE.js backgrounds, textures and models) and most of the front-end side on index, story, nav and footer
,
Yang Yi: All Trivia API calling functions and checking answers, game.html displaying of questions and score, checking of category picked
,
Donovan: All RestDB leaderboard GET functions and POST functions to database after game is finished, play.html radio buttons and their style
## Overview
!!! MUST RUN ON A LIVE SERVER (eg. GitHub Pages / VSC Live Server extension) OR website will not work!! (due to textures and models)
GitHub Pages link: https://brazeennp.github.io/FED_CosmoIO_website/
GitHub Repo link: https://github.com/brazeenNP/FED_CosmoIO_website/

Oh no!
I'm Cosmo the astronaut, and I find myself stranded on the moon with my trusty spaceship but not enough fuel to make it back home. The good news? Our spaceship runs on knowledge, and that's where **you** come in!

Embark on an out-of-this-world journey to help me get back to Earth by answering trivia questions across various topics. Whether it's testing your mathematical prowess, challenging your musical ear, or delving into general knowledge, your answers will fuel our spaceship's knowledge engines.

How to Play:

Choose your preferred difficulty level: Easy, Medium, or Hard. Based on your selection, the fuel level will decrease accordingly to each wrong answer.
Face questions from math, music, and general knowledge categories.
Correct answers maintain our fuel gauge, propelling us closer to home, while wrong answers will decrease the fuel gauge, leaving us with a lesser chance of getting back!
The more questions you answer correctly, the closer we get to a safe return!
Compete with other players to reach the highest fuel percentage left when you reach Earth and top the leaderboards with your knowledge skills!
Assemble your trivia knowledge and soar through the stars together. Get ready for an astronomical adventure that combines learning and fun. Are you ready to help Cosmo make it back to Earth?

Let your cosmic quest begin! 

## Design Process
For parts the design of this website, we decided to use a 3D JavaScript library called three.js to add planets and stars in a 3-dimensional space. The first thing that comes to mind when people think of space is a vast, never-ending void, so we 
made sure to make it feel like that by adding 3D elements (which also add to the user experience with user interactions using mouse movement), as we felt a 2D space environment might not have had the same effect. In addition, we used fonts that
we felt aligned with the space theme of the website, incorporating Sci-Fi fonts like Orbitron into our website to complete the feel. Space itself is a dark place, 
and hence we stuck to an overall darker theme and colour scheme for the website as having too many bright elements would take away from the environment and feeling of space we wanted to portray.

User stories:
As a curious and avid learner, I want to explore a gamified trivia experience, so that I can learn new facts and trivia, while also doing it in a fun, entertaining and unique way.

As a player interested in mathematics, I want to face math-related trivia questions, so that I can apply and test my mathematical knowledge, while doing it in a fun way instead of the usual textbook questions.

As a music lover, I want to test myself with music-related trivia questions, so that I can enjoy challenges related to my passion and test my musical knowledge.

As a general knowledge buff, I want to answer questions covering a variety of topics, so that I can showcase my broad knowledge and learn new facts.

As a competitive game player, I want to see how little fuel I can use to get back to Earth compared to other players, and keep setting new high scores.

As a user navigating the website, I want clear instructions on how to play the game, so that I can easily understand the rules and objectives of the cosmic quest.

As a user seeking a fun and immersive experience, I want to experience the website's engaging visuals and animations, so that I can enjoy a visually appealing journey as I play, while also getting the chance to learn new facts.

From general users to competitive players, this site will give everyone a fun, challenging and enjoyable experience to learn new facts and improve their knowledge.

Link to wireframe: https://www.figma.com/file/xP1nhMGGa15kuIKq9YzPp0/Untitled?type=design&node-id=0%3A1&mode=design&t=gh4KoKB3AKzYDNSZ-1

## Features
### All pages have responsive design
Navigation Bar
1. Simple and clean layout with links to all starting pages
2. Turns into dropdown menu at appropriate width

Footer
1. Links to all pages
2. Summary of libraries and technologies used for the website
3. Fully linked social media pages (they are linked to NASA's socials because this game does not actually have a social media page)

Home Page
1. 3D background with animated and appropriately textured planets and stars
2. Camera moves slightly with mouse when mouse is moving around
3. Blue neon effect on the title "Cosmo.IO"
4. Call-to-action button that can be pressed to redirect to the "Play" page and start the game, including hover effects (centered and big so players cannot miss it)
5. Navigation bar on this page has a transparent background for a nice and integrated effect
6. Real-time game leaderboard to see who has the most points (points are calculated using fuel left * difficulty multiplier)
7. 'About' section at the bottom if players would like to read Cosmo's story, as well as the technologies used in the game

Play Page 
1. Neon Difficulty and Category buttons to select category
2. Text form with animations for player to enter username (which will be shown on the leaderboard)
3. Data validation function to check if difficulty, category and username have all been selected before user can proceed
4. HD background of stars
5. Neon text effect for "Setup"
   
Story Page
1. HD edited spaceship cockpit background
2. High definition looped Lottie animation of crying astronaut
3. Visual novel text box layout of Cosmo the astronaut talking to you to gamify the story
4. Call to action button ("Save Cosmo and the crew!") to start the quiz, including hover effects

Game Page
1. 3D background with stars and high definition textured planet Earth
2. 3D Low-Poly spaceship model facing Earth to represent Cosmo's journey back to earth, allowing the players to feel more immersed in his journey back home
3. Animated fuel bar that will decrease (starts from 100%) if player does not answer questions correctly
4. Translucent overlay for question container to allow player to see questions and answers more easily
5. Scoreboard (out of 10) that will increase by one each time the player answers correctly
6. 4 appropriately spaced boxes with labels for each option (questions are multiple-choice with 4 options) (layout will change from column to row depending on the size of the screen)
7. "Check Answer" button that will reveal if answer is wrong or correct, and then load the next question
8. Box with category name that is chosen
9. Message to display points and status when game is over (if fuel is 0, player has failed but if fuel is > 0 after 10 questions, points will be shown along with a congratulatory message)
10. Exit button after game has ended to return to home page

## References
Assets:
Icons for category:
https://ionic.io/ionicons
Math, general, music and all difficulty icons from
https://ionic.io/ionicons
Moon texture
https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg
Mars texture
https://planetpixelemporium.com/mars5672.html
Jupiter texture
https://planetpixelemporium.com/jupiter.html
Earth texture
https://planetpixelemporium.com/earth8081.html
Saturn texture
https://planetpixelemporium.com/saturn.html
Story page background: (slightly edited on fotor)
https://wallpapersafari.com/w/PEM7r2
Low poly space shuttle 3d model on game page:
https://sketchfab.com/3d-models/low-poly-space-shuttle-afa0ac2dc78744dfb54303226dcbe9b2
play.html background:
https://wallpapersafari.com/w/OGXT7Z

Fonts:
https://fonts.google.com/specimen/Orbitron?query=orbit
https://fonts.google.com/specimen/Exo+2

Lottie animations:
Crying astronaut
https://lottiefiles.com/animations/crying-baby-astronaut-MhjdKWRLpX

Libraries/APIs used:
Threejs
https://threejs.org/
Bootstrap 5
https://getbootstrap.com/

JQuery
https://jquery.com/
Leaderboard RESTDb API
https://cosmoboard-64b9.restdb.io/rest/playerstats
APIKEY: 65bf102f0496a574bb2b4723

API Links:
https://opentdb.com/ (Trivia API)
https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple (General url)
https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple (Mathematics url)
https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple (Music url)











