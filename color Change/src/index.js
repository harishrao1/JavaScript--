





//variables

const changeBackground = document.body;

const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");
const hslPage = document.getElementById("hsl-page");

//variable Wrappers
const hexWrapper = document.getElementById("hex-wrapper");
const rgbWrapper = document.getElementById("rgb-wrapper");
const hslWrapper = document.getElementById("hsl-wrapper");

// Buttons for change of Background
const hexColor = document.getElementById("hex-color");
const rgbColor = document.getElementById("rgb-color");
const hslColor = document.getElementById("hsl-color");



hexPage.addEventListener("click", function() {

    if(hexPage.style.textDecoration != "underline"){
        hexWrapper.style.display = "block";
        rgbWrapper.style.display = "none";
        hslWrapper.style.display = "none";

        hexPage.style.textDecoration = "underline";
        rgbPage.style.textDecoration = "none";
        hslPage.style.textDecoration = "none";


        changeBackground.style.backgroundColor = hexColor.textContent;
    }
});

// for rgb 
rgbPage.addEventListener("click", function() {

    if(rgbPage.style.textDecoration != "underline"){
        
        rgbWrapper.style.display = "block";
        hexWrapper.style.display = "none";
        hslWrapper.style.display = "none";
        
        rgbPage.style.textDecoration = "underline";
        hexPage.style.textDecoration = "none";
        hslPage.style.textDecoration = "none";


        changeBackground.style.backgroundColor = rgbColor.textContent;
    }
});

hslPage.addEventListener("click", function() {

    if(hslPage.style.textDecoration != "underline"){
        
        hslWrapper.style.display = "block";
        hexWrapper.style.display = "none";
        rgbWrapper.style.display = "none";
        
        
        hslPage.style.textDecoration = "underline";
        hexPage.style.textDecoration = "none";
        rgbPage.style.textDecoration = "none";
        


        changeBackground.style.backgroundColor = hslColor.textContent;
    }
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;

hexColor.addEventListener("click", function(){
    let hexColorValue = "#";

    for(let i=0;i<6;i++){
        randomNumberValue = Math.floor(Math.random() * hex.length);
        hexColorValue = hexColorValue + hex[randomNumberValue];
    }

    hexColor.textContent = hexColorValue;

    changeBackground.style.background = hexColorValue;
});

// rgb button
rgbColor.addEventListener("click", function () {
    // randomly picks a number between 0 and 255
    let a = Math.floor(Math.random() * 256);

    let b = Math.floor(Math.random() * 256);
    
    let c = Math.floor(Math.random() * 256);
    
    const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
   
    rgbColor.textContent = rgbColorValue;


    changeBackground.style.background = rgbColorValue;
  })

  
  // hsl button
hslColor.addEventListener("click", function () {
    // randomly picks a number between 0 and 360
    let a = Math.floor(Math.random() * 361);
    
    let b = Math.floor(Math.random() * 101);

    let c = Math.floor(Math.random() * 101);
    
    const hslColorValue = `hsl(${a}, ${b}%, ${c}%)`;
    
    hslColor.textContent = hslColorValue;
    
    changeBackground.style.background = hslColorValue;
  });
  

