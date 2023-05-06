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
   name: 'project One',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
},
{
   name: 'project Two',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
},
{
   name: 'project Three',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
},
{
   name: 'project Four',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
},
{
   name: 'project Five',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
},
{
   name: 'project Six',
   image: 'imagePath',
   summary: 'summaryParagraph',
   livelink: 'https://www.project.com/'
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

