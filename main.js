const context = {
    projects: [
      {
        image: './assets/images/fanpage.png',
        demoLink: 'https://edwardfarris.github.io/RKSFanPage/.',
        name: 'Artist Fan Page',
        description: 'A general informational webpage sharing details about a popular band. The page includes custom sized images with thoughtful positioning, band member names and roles, a short biograpgy paragraph, a few popular song titles, an embedded youtube music video, and a fully functional navigation bar with external resource links. Find concert tour dates, a full biography page, and more.',
        techUsed: 'HTML, CSS, Google-Fonts, Font-Awesome',
        gitHub: 'https://github.com/EdwardFarris/RKSFanPage'
      },
      {
        image: './assets/images/teaShop.png',
        demoLink: 'https://edwardfarris.github.io/tea-shop-website/',
        name: 'Cozy Tea Website',
        description: "A personal webpage that illustrates details about a fictional tea shop. This page is elegantly designed with a dark color scheme and stunning images. Featured products of the month, various shop locations, and contact information are displayed quite tastefully. Advanced CSS features include relative positioning and opacity, flexbox responsive design, z-index layering, and a fixed navbar.",
        techUsed: 'HTML, CSS, Google-Fonts',
        gitHub: 'https://github.com/EdwardFarris/tea-shop-website'
      },
      {
        image: './assets/images/hangman.png',
        demoLink: 'https://edwardfarris.github.io/Word-Guess-Game/',
        name: 'Hangman Game',
        description: "A hangman style game with a U.S. States theme. Players must press keyboard letters in order to fill in the missing letter spaces for the secret state name. Guesses are limited to 10 incorrect guesses before player loses. Letters that have been guessed, number of player wins, and remaining number of guesses are all tracked and displayed. A new secret state name is randomly generated each new round.",
        techUsed: 'HTML, CSS, Google-Fonts, JavaScript',
        gitHub: 'https://github.com/EdwardFarris/Word-Guess-Game'
      },
      {
        image: './assets/images/crystalCollect.png',
        demoLink: 'https://edwardfarris.github.io/crystal-collector/',
        name: 'Crystal Collector',
        description: "A classic guessing game where users are shown a random number to match each round. There are 4 different crystals, each randomly assigned a different hidden value. Crystals are clicked, which add that crystals value to player's total score. Matching the randomly generated number results in a win. If players total score goes over the target number, gameplay is reset, new crystal values are assigned and the game restarts.",
        techUsed: 'HTML, CSS, Google-Fonts, JavaScript',
        gitHub: 'https://github.com/EdwardFarris/crystal-collector'
      },
      {
        image: './assets/images/formStory.png',
        demoLink: 'https://edwardfarris.github.io/form-a-story/',
        name: 'Form A Story',
        description: "A 'Mad Libs' style application meant for entertaining younger children and to help them learn. It allows them to input their own personalized verbs, adjectives, animals etc. and create their own customized fictional story. The app focuses on the proper use of HTML forms, including various input types and buttons, input validation and return values, using JavaScript logic in order to personally create a different story every time.",
        techUsed: 'HTML, CSS, JavaScript',
        gitHub: 'https://github.com/EdwardFarris/form-a-story'
      },
      {
        image: './assets/images/musiconHome.png',
        demoLink: 'https://edwardfarris.github.io/musicon-store/',
        name: 'MusiCon Store',
        description: "A virtual marketplace website allowing visitors to browse musical instruments for purchase. It uses JavaScript logic and Handlebars to dynamically update the price and information pertaining to specific items based on whether the listed items are on sale or not. Backend logic is not currently setup to actually make online purchases, but users can simply utilize the contact page in order to call/email the store to place orders.",
        techUsed: 'HTML, CSS, JavaScript, Handlebars',
        gitHub: 'https://github.com/EdwardFarris/musicon-store'
      },
      {
        image: './assets/images/gotTrivia.png',
        demoLink: 'https://edwardfarris.github.io/TriviaGame/',
        name: 'Trivia Quiz',
        description: "A Game of Thrones themed quiz that prompts users to answer multiple choices questions in a limited amount of time. The page will then display the number of questions that were answered correctly and/or incorrectly. Average time given is about 10 seconds per question with 10 questions total. Features include the use of jQuery and JavaScript timer that changes the page dynamically when time runs out. Study up, Winter is coming!",
        techUsed: 'HTML, CSS, Google-Fonts, JavaScript, jQuery',
        gitHub: 'https://github.com/EdwardFarris/TriviaGame'
      },
      {
        image: './assets/images/demo.png',
        demoLink: ' https://edwardfarris.github.io/dog-dash-app/',
        name: 'Dog Dash App',
        description: "Built with a collaborative team, this application utilizes google maps and open weather map APIs! Simply enter a valid zip code and press submit! Dog Dash displays the addresses of any dog park locations within the specified zip code, as well as current weather conditions for that area. Future development plans would include showing the google-map with pinned locations.",
        techUsed: 'HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX',
        gitHub: 'https://github.com/EdwardFarris/dog-dash-app'
      },
      {
        image: './assets/images/marvel.png',
        demoLink: 'https://tranquil-stream-41866.herokuapp.com/',
        name: 'Marvel Memory Game',
        description: "This app utilizes the explosive power of the React Js library. This allows the state of the components to be updated quickly and dynamically during gameplay. 12 images of marvel characters are displayed in a flex grid. When clicked, all images are immediately and randomly shuffled. Successfully click on all 12 Marvel characters without clicking the same character twice, and YOU WIN! Wins and losses are tracked and displayed. ",
        techUsed: 'HTML, CSS, JavaScript, React, NPM, Heroku',
        gitHub: 'https://github.com/EdwardFarris/clickygame'
      },
      {
        image: './assets/images/cart.jpeg',
        demoLink: 'https://github.com/EdwardFarris/Bamazon-App',
        name: 'Bamazon App',
        description: "Please see ReadMe file in gitHub for instructions on running this program! Bamazon is a Node app similar to amazon. Customers can browse products for purchase through the command line. All transactions update the product details in a MySQL database. The manager side allows updates to be made to products in the database. Items can be viewed, existing items replenished/stocked, new products added, and low inventory flagged.",
        techUsed: 'HTML, CSS, Node.js, MySQL, JavaScript, NPM',
        gitHub: 'https://github.com/EdwardFarris/Bamazon-App'
      },
      ]
  };
  
  const templateElement = document.getElementById('templateHB');
  
  const templateSource = templateElement.innerHTML;
  
  const template = Handlebars.compile(templateSource);
  
  const compiledHtml = template(context);
  
  document.getElementById('information').innerHTML = compiledHtml;


  