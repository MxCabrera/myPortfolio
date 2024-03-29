// name spacing object 
const app = {};
app.hamburger = document.querySelector('.hamburger');
app.navMenu = document.querySelector('.nav-menu');
app.hamburgerList = document.querySelectorAll('.listItem');
app.project = document.querySelector('.projectContainer');
app.arrow = document.querySelector('.bounce-1');

// forEach method that goes through the list of li elements
app.hamburgerList.forEach((item)=>{
   // event listener for every li element, that toggles drop down menu on click
   item.addEventListener('click', function(){
      // toggle variable class list between each click
      app.hamburger.classList.toggle('active');
      app.navMenu.classList.toggle('active');
   });
});

// event listener that opens the slide out menu when app scales down 768px & < 
app.hamburger.addEventListener('click', () => {
   // toggle variable class list between each click
   app.hamburger.classList.toggle('active');
   app.navMenu.classList.toggle('active');
});

// onClick event listener that scrolls down the window 
app.arrow.addEventListener('click', ()=>{
   window.scrollTo(0,700);
});

// // doesnt work. 
// app.contactInput = document.querySelector('.contactInput');
// app.contactText = document.querySelector('.contactText');
// app.contactSubmit = document.querySelector('.contactSubmit');
// console.log(app.contactInput)

// app.contactSubmit.addEventListener('submit', (e)=>{
//    // e.preventDefault();
//    console.log(app.contactInput);
//    app.contactInput.value = ``;
//    app.contactText.value =``;
// })

// project array containing the information of each project 
app.projects = [
{
   name: 'The Ultimate Watch List',
   image: './assets/_watchList.png',
      summary: 'An app that utilizes 2 TV Maze API endpoints to create a user search feature to check the best tv shows based off of what the user searches, as well as a show all tv shows in pages features. Created with my project partner, <a class="minha" href="https://helloitsminha.com/">Minha!</a>',
   livelink: 'https://theultimatewatchlist.netlify.app/',
   github: 'https://github.com/team-minha-and-miguel/project-2',
   langUsed: [
      "JavaScript", "HTML", "CSS", "API" , "SASS"
   ]
},
{
   name: 'Box Office Boffo',
   image: './assets/boxOfficeBoffo.JPG',
      summary: 'A movie application that uses data from the IMBD API to create a quiz that challenges users to rank the 10 highest grossing summer movie of the year out of 20 choices. User can choose a year to guess and appends info about each movie. App will send user a score and answer sheet based on how accurate they are to the correct list. You can compare your list with other lists ',
   livelink: 'https://project4-group5.netlify.app/',
   github: 'https://github.com/project4-group5/boxOfficeBoffo',
   langUsed: [
      "JavaScript", "HTML", "CSS", "API", "FireBase", "React" 
   ]
},
{
   name: 'Battle Rockets',
   image: './assets/_battleRockets.png',
   summary: 'A 2-player battleship-style game. Destroy your opponents rockets before they do! Take turns between your friend and each hit displays info from the SpaceX API.',
   livelink: 'https://rocketbattle.github.io/battleRockets/',
   github: 'https://github.com/rocketBattle/battleRockets',
   langUsed: [
      "JavaScript", "HTML", "CSS", "API", "JQUERY", "REACT", "SASS"
   ]

   
},
{
   name: 'Which GOAT Are You?',
   image: './assets/_whichGoat.png',
   summary: 'The Greatest of All Time. Find out which NBA legend your personality is linked closest to with this personality quiz. Created using Vanilla JavaScript.',
   livelink: 'https://mxcabrera.github.io/miguelCabreraProjectThree/',
   github: 'https://github.com/MxCabrera/miguelCabreraProjectThree',
   langUsed: [
      "JavaScript", "HTML", "CSS", "SASS"
   ]
},
{
   name: 'Trivia TV',
   image: './assets/_triviaTv.png',
   summary: 'Do you know your TV facts? Try this quiz that generates 10 random questions gathered from the Trivia API. Score well, a gif is given based on the amount you get right!',
   livelink: 'https://alanandmiguelprojectfour.github.io/triviaApp/',
   github: 'https://github.com/alanAndMiguelProjectFour/triviaApp',
   langUsed: [
      "JavaScript", "HTML", "CSS", "API", "SASS", "JQUERY"
   ]
},
{
   name: `Sophie's Website`,
   image: './assets/_sophie.png',
   summary: 'A personal website for an aspiring photographer',
   livelink: 'https://sophie-official-project-one.netlify.app/',
   github: 'https://github.com/MxCabrera/SophieProject01',
   langUsed: [
      "HTML", "CSS", "SASS"
   ]
},
{
   name: 'Lash Extension Company',
   image: './assets/_beautyBar.png',
   summary: 'In need of a beauty service or product? Check out this Beauty Bar where they specialize in Eyelash extensions, lamination, teeth whitening, tanning spray, make up facials and more! Book now! ',
   livelink: 'https://so-beautiful-co.netlify.app/',
   github: 'https://github.com/MxCabrera/soBeautifulCo',
   langUsed: [
      "JavaScript", "HTML", "CSS", "JQUERY", "SASS"
   ]
}];

// jQuery Works
$('.miguel').on('click', function(){
});

// add listeners function that waits for user change
app.addListeners = () => {
   // forEach method on array of projects to append to DOM 
   app.projects.forEach((project) => {
      // variable creation with html element connected
      const newListItem = document.createElement('li');
      // adding class attribute to variable
      newListItem.classList.add('project');
      // setting data-aos attribute to variable
      newListItem.setAttribute('data-aos', 'fade-up')
      // adding content to the variable html
      newListItem.innerHTML = `
         <div class="projPic">
            <img src="${project.image}" alt="${project.name}">
         </div>
         <div class="projLang">
            <a href="${project.livelink}" target="_blank">
               <h3 class="projName">${project.name}</h3>
            </a>
            <div class="projButtons">
               <a class="link" href="${project.livelink}" target="_blank">
                  <button>Live Link</button>
               </a>
               <a class="link" href="${project.github}" target="_blank">
                  <button>GitHub</button>
               </a>
            </div>
         </div>
         <div class="projSum">
            <p>${project.summary}</p>
         </div>
         `;
      // append the variable as a child to the HTML element in the DOM. 
      app.project.appendChild(newListItem);
   });
};

// AOS data for animation use
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 400, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


// text scramble for the header 
class TextScramble {
   constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
   };

   setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);

      this.queue = [];

      for (let i = 0; i < length; i++) {
         const from = oldText[i] || '';
         const to = newText[i] || '';
         const start = Math.floor(Math.random() * 40);
         const end = start + Math.floor(Math.random() * 40);
         this.queue.push({ from, to, start, end });
      };
      
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
   };

   update() {
      let output = '';
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
         let { from, to, start, end, char } = this.queue[i];

         if (this.frame >= end) {
            complete++;
            output += to;
         } else if (this.frame >= start) {
            if (!char || Math.random() < 0.02) {
               char = this.randomChar();
               this.queue[i].char = char;
            };
            output += `<span class="dud">${char}</span>`;
         } else {
            output += from;
         };
      };

      this.el.innerHTML = output
      if (complete === this.queue.length) {
         this.resolve()
      } else {
         this.frameRequest = requestAnimationFrame(this.update)
         this.frame++
      };
   };

   randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
   };
};

// text that will append to the DOM in order 
const phrases = [
   'Front End',
   'Web Developer',
   'Builder',
   'Learner'
];


const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
   fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800);
   });
   counter = (counter + 1) % phrases.length
};

next();






// function call that starts the app
app.init = () => {
   app.addListeners();
};

// initializing app start call
app.init();
