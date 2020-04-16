//create a variable called h1Target and it must target the proper id from html page

var h1Target = document.querySelector("#target");

//give a new style attribute to the h1Target and set the color to red

h1Target.setAttribute("style", "color: red");

//you can get the attribute style of h1Target in console. You will see the color red.
console.log(h1Target.getAttribute("style"));
var color = true;
var themeMode = h1Target.getAttribute("class");
//click is an event listener that listens to a click.
//we added a function inside of the addEventListeners so that we can do an action when we click
// on the variable h1Target.
h1Target.addEventListener("click", function()
{
    // console.log("hello world");
    // if(color === true)
    // {
    //     h1Target.setAttribute("style","color: black");
    //     color = false;
    // }
    // else if(color === false)
    // {
    //     h1Target.setAttribute("style","color: red");
    //     color = true;
    // }
    // h1Target.setAttribute("class","darkMode");

    //first you need to read the class and save it to a variable
    //set up a condition
    //see what the class is
    // if the class is darkMode, then we need to clear the class
    //if the class is empty => we set the class to darkMode
    if(themeMode === "darkMode")
    {
        h1Target.setAttribute("class", "lightMode");
        
    }
    else if(themeMode === "lightMode")
    {
        h1Target.setAttribute("class", "darkMode");
    }
});