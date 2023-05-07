// name spacing object 
const app = {};
app.hamburger = document.querySelector('.hamburger');
app.navMenu = document.querySelector('.nav-menu');
app.hamburgerList = document.querySelectorAll('.listItem');


// forEach method that goes through the list of li elements
app.hamburgerList.forEach((item)=>{
   // event listener for every li element, that toggles drop down menu on click
   item.addEventListener('click', function(){
      console.log('hey thurrrr');
      app.hamburger.classList.toggle('active');
      app.navMenu.classList.toggle('active');
   });
});


// event listener that opens the slide out menu when app scales down 768px & < 
app.hamburger.addEventListener('click', () => {
   app.hamburger.classList.toggle('active');
   app.navMenu.classList.toggle('active');
});

// project array containing the information of each project
app.projects = [
{
   name: 'The Ultimate Watch List App',
   image: 'imagePath',
   summary: 'An app that utilizes 2 TV Maze API endpoints to create a user search feature to check the best tv shows based off of what the user searches, as well as a show all tv shows in pages features',
   livelink: 'https://theultimatewatchlist.netlify.app/'
},
{
   name: 'Battle Rockets',
   image: 'imagePath',
   summary: 'A 2-player battleship-style game. Destroy your opponents rockets before they do! Take turns between your friend and each hit displays info from the SpaceX API.',
   livelink: 'https://rocketbattle.github.io/battleRockets/'
   
},
{
   name: 'Which GOAT Are You?',
   image: 'imagePath',
   summary: 'The Greatest of All Time. Find out which NBA legend your personality is linked closest to with this personality quiz. Created using Vanilla JavaScript.',
   livelink: 'https://mxcabrera.github.io/miguelCabreraProjectThree/'
},
{
   name: 'Trivia TV',
   image: 'imagePath',
   summary: 'Do you know your TV facts? Try this quiz that generates 10 random questions gathered from the Trivia API. Score well, a gif is given based on the amount you get right!',
   livelink: 'https://alanandmiguelprojectfour.github.io/triviaApp/'
},
{
   name: `Sophie's Website`,
   image: 'imagePath',
   summary: 'A personal website for an aspiring photographer',
   livelink: 'https://sophie-official-project-one.netlify.app/'
},
{
   name: 'Lash Extension Company',
   image: 'imagePath',
   summary: 'In need of a beauty service or product? Check out SoBeautiful&Co Beauty Bar where they specialize in Eyelash extensions, lamination, teeth whitening, tanning spray, make up facials and more! Book now! ',
   livelink: 'https://so-beautiful-co.netlify.app/'
}];

// test to see if items append properly
app.projects.forEach((item)=>{
   console.log(item);
});



// jQuery Works
$('.miguel').on('click', function(){
   console.log('hey');
});

// add listeners function that waits for user change
app.addListeners = () => {
   console.log('app has started');
};

// function call that starts the app
app.init = () => {
   app.addListeners();
};

// initializing app start call
app.init();

// adding stuff