 
// option 1
{/* <button onclick="document.body.style.backgroundColor='green'">make me different color!</button> */}

// option 2 (sometimes)
    {/* <button onclick="makeRed()">make me rad</button> */}
function makeRed(){
            document.body.style.backgroundColor='red';
}

// option 3
const makeBlueBtn = document.getElementById('makeblue');
makeBlueBtn.onclick= makeBlue
function makeBlue(){
    document.body.style.backgroundColor='blue'; 
} 

// option 4(1)
const makeGray= document.getElementById('gray');
makeGray.onclick=function makeMeGray(){
    document.body.style.backgroundColor='gray';
}

// option 4(2)

const makePink= document.getElementById('makepink');
makePink.addEventListener('click',MakePink)
function MakePink(){
    document.body.style.backgroundColor='pink';
}

// option 4(3)

const makeYellow= document.getElementById('makeyellow');
makeYellow.addEventListener('click',function MakeYellow(){
    document.body.style.backgroundColor='yellow';
});

// option 4 final-- (use usually)

document.getElementById('orange').addEventListener('click',function(){
    document.body.style.backgroundColor='orange';
});