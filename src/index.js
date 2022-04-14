const myBox = document.getElementById('my-box');
let myBoxWidth = myBox.style.width;
let myBoxHeight = myBox.style.height;
let myBoxColor = myBox.style.backgroundColor
myBoxWidth = "50px"
myBoxHeight = "50px"

function changeColor(){
    if (myBoxColor == ''){
        myBoxColor = 'blue';}
    else if (myBoxColor == 'blue'){
        myBoxColor = 'purple';
    } else if (myBoxColor == 'purple'){
        myBoxColor = 'teal';
    } else if (myBoxColor == 'teal'){
        myBoxColor = 'green';
    } else if (myBoxColor == 'green'){
        myBoxColor = 'yellow';
    }
    else if (myBoxColor == 'yellow'){
        myBoxColor = 'orange';
    }
    else if (myBoxColor == 'orange'){
        myBoxColor = 'red';
    }

    else {
        myBoxColor = 'blue'
    }
    myBox.style.backgroundColor = myBoxColor;
}

function resize(){
    myBoxWidth = parseInt(myBoxWidth) + 10;
    myBoxHeight = parseInt(myBoxHeight) + 10;

    
    myBox.style.width = `${myBoxWidth}px`;
    myBox.style.height = `${myBoxHeight}px`;
}

function onClick(){
    changeColor();
    resize();
  

}

myBox.addEventListener('click', onClick);