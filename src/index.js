const myBox = document.getElementById('my-box');
let myBoxWidth = "50px";
let myBoxHeight = "50px";
let myBoxColor = "red"


function changeColor(){
    if (myBoxColor == 'red'){
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
        myBoxColor = 'red'
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