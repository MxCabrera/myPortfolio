// name spacing object 
const app = {};

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


app.projects.forEach((item)=>{
   console.log(item)
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