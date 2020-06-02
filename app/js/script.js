//Get all selector buttons
const selectors = document.getElementsByClassName('selector');
let selected = 'cur';

//Make first selector button the selected one
selectors.item(0).style.backgroundColor = '#3663FF';
selectors.item(0).style.color = 'white';
selectors.item(0).style.cursor = 'default';

//Change color of clicked selector
for (let i = 0; i < selectors.length; i++){
  //Listen for any of the buttons being clicked
  selectors.item(i).addEventListener('click', event => {
    //Set the currently selected button
    selected = event.target.id;
    for (let j = 0; j <selectors.length; j++){
      if (event.target.isSameNode(selectors.item(j))){
        //Change background of clicked button and remove hover event
        event.target.style.backgroundColor = '#3663FF';
        event.target.style.color = 'white';
        event.target.style.cursor = 'default';
        event.target.removeEventListener('mouseenter', addEnterTransition);
        event.target.removeEventListener('mouseleave', addLeaveTransition);
      }else{
        //Reset background of all other buttons and add hover event
        selectors.item(j).style.backgroundColor = '#3FC1FD';
        selectors.item(j).style.color = 'black';
        selectors.item(j).style.cursor = 'pointer';
        selectors.item(j).addEventListener('mouseenter', addEnterTransition);
        selectors.item(j).addEventListener('mouseleave', addLeaveTransition);
      }
    }
  });
}

//Add mouse enter color transition
const addEnterTransition = event => {
  event.target.style.backgroundColor = '#3663FF';
  event.target.style.color = 'white';
};

//Add mouse leave color transition
const addLeaveTransition = event => {
  event.target.style.backgroundColor = '#3FC1FD';
  event.target.style.color = 'black';
};

//API key from my account in order to access weather data
const apiKey = 'f8abd2b386c863b278970549d4f4f4f1';

//Function that returns a promise with the acquired JSON data
const getData = async url => {
  //Return the data or log the error
  try {
    return await (await fetch(url)).json();
  }catch (error){
    console.log(error);
  }
};

//Sample API call and console log
getData(`http://api.openweathermap.org/data/2.5/weather?id=4438121&appid=${apiKey}`).then(res => {
  console.log(res);
});