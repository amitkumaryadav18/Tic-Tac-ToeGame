const body = document.getElementsByTagName('body')[0];


//  Function to directly create a node with Text and append to Element
const createNode = (element, Text , appendTo) =>{
    const tag = document.createElement(element);
    const textContent = document.createTextNode(Text);
    tag.appendChild(textContent);
    appendTo.appendChild(tag);
}
createNode('style','',body);

createNode('h1','Welcome To Tic-Tac-Toe Game!',body);
const tacToeHeading = document.querySelectorAll('h1')[0];
tacToeHeading.classList.add('style-head');
const mainStyle = document.querySelector('style');
createNode('h2',' Winner is',body);
document.querySelector('h2').classList.add('h2-ele');
// Main Styling 
mainStyle.innerHTML = 'body{ background-color: #1f2833;} .style-head{ margin-top: 3rem;font-size: 2rem;color: #66fcf1; text-align: center;}'
// Create the main div here
createNode('div', '',body);
const mainDiv = document.querySelectorAll('div')[0];

mainDiv.classList.add('maindiv');
mainStyle.append(' .maindiv{ position:absolute;content="";display:flex;flex-wrap: wrap;justify-content: space-between; top:50%;left:50%;transform:translate(-50%,-50%); background-color: #0b0c10; width: 44%;height: 70%;margin-top:2rem;}');

// Creating the small boxes
const createBoxes = (element, Text ,appendTo) =>{
    const tag = document.createElement(element);
    const textContent = document.createTextNode(Text);
    tag.appendChild(textContent);
    tag.classList.add('box');
    appendTo.appendChild(tag);
}

for(let i=0;i<9;i++){
    createBoxes('div','',mainDiv);
}
const myBoxes = document.querySelectorAll('.box');

mainStyle.append('.box{ margin: 0.1%;display:grid; width: 33%;height:33%; flex-direction: column; background-color: #45a29e; } .box:hover{ background-color: #c5c6c7; transition: 0.3s;}');
// Create two classes for '*' and 'O'
mainStyle.append('.cross{ background-color: #45a29e !important; margin:auto;text-align:center;font-size: 5rem;color:#1f2833  } .circle{ background-color: #45a29e;color:#1f2833; margin:auto;text-align:center;font-size: 5rem;  }' );

mainStyle.append(' .h2-ele{ text-align: center; color: #ac3b61; display: none;background-color: white; margin: 2% 40%;width: 20%; } .contestOver{ display: block;}');
mainStyle.append(' .green{ background-color: #66fcf1 !important; color: #1f2833 !important; transition: 0.6s;}');
for(let i=0;i<9;i++){
    document.querySelectorAll('.box')[i].classList.add(`box-${i}`);
}
let buttonShine = 0;
const appendWinner = (w)=>{
    const h2 = document.querySelector('h2');
    h2.append(` ${w}`);
    h2.classList.add('contestOver');
    document.body.querySelectorAll('.box').forEach((box)=>{
        box.style.pointerEvents = "none";
    })
    buttonShine =1;

}


const chanceOp = (ev) =>{
    if(n<9){
        if(n%2===0){
            doCircle(ev);
        }
        else{
            doCross(ev);
        }
        n++;
    }
   
}

let arr1 =[0,0,0,0,0,0,0,0,0];
let arr2 =[0,0,0,0,0,0,0,0,0];

const doCircle = (curr)=>{
    console.log(curr);
    createNode('p','O',curr.target);
    curr.target.classList.add('circle');
    for(let j=0; j<9;j++){
        if(curr.target.classList.contains(`box-${j}`))
            arr1[j]++;
    }
    if(n>3){
        const res = did1Win(arr1);
        if(res === true){
            appendWinner(' O');
            box.removeEventListener('click',chanceOp,{once:true});
        }
    }
}
function did1Win(arr1){
    if((arr1[0]===1&&arr1[4]===1&&arr1[8]===1 )){
        document.querySelector('.box-0').classList.add('green');
        document.querySelector('.box-4').classList.add('green');
        document.querySelector('.box-8').classList.add('green');
        return true;
    }
    else if(arr1[2]===1&&arr1[4]===1&&arr1[6]===1 ){
        document.querySelector('.box-2').classList.add('green');
        document.querySelector('.box-4').classList.add('green');
        document.querySelector('.box-6').classList.add('green');
        return true;
    }  
    else if(arr1[0]===1&&arr1[1]===1&&arr1[2]===1 ){
        document.querySelector('.box-0').classList.add('green');
        document.querySelector('.box-1').classList.add('green');
        document.querySelector('.box-2').classList.add('green');
        return true;
    }
    else if(arr1[3]===1&&arr1[4]===1&&arr1[5]===1 ){
        document.querySelector('.box-3').classList.add('green');
        document.querySelector('.box-4').classList.add('green');
        document.querySelector('.box-5').classList.add('green');
        return true;
    }
    else if(arr1[6]===1&&arr1[7]===1&&arr1[8]===1 ){
        document.querySelector('.box-6').classList.add('green');
        document.querySelector('.box-7').classList.add('green');
        document.querySelector('.box-8').classList.add('green');
        return true;
        }       
    else if(arr1[0]===1&&arr1[3]===1&&arr1[6]===1 ){
        document.querySelector('.box-0').classList.add('green');
        document.querySelector('.box-3').classList.add('green');
        document.querySelector('.box-6').classList.add('green');
        return true;
    
    }
    else if(arr1[1]===1&&arr1[4]===1&&arr1[7]===1 ){
        document.querySelector('.box-1').classList.add('green');
        document.querySelector('.box-4').classList.add('green');
        document.querySelector('.box-7').classList.add('green');
        return true;
    
    }
    else if(arr1[2]===1&&arr1[5]===1&&arr1[8]===1 ){
            document.querySelector('.box-2').classList.add('green');
            document.querySelector('.box-5').classList.add('green');
            document.querySelector('.box-8').classList.add('green');
            return true;
        }
   
}
const doCross = (curr)=>{
    createNode('p','X',curr.target);
    curr.target.classList.add('cross');
    for(let j=0; j<9;j++){
        if(curr.target.classList.contains(`box-${j}`))
            arr2[j]++;
    }
    if(n>3){
        let res = did1Win(arr2);
        console.log(res);
        if(res === true){
             appendWinner(' X');
        }
    }
}

var n=0;
myBoxes.forEach((box)=>{
    box.addEventListener('click',chanceOp,{once:true});
});

// Creating  a replay button ---

createNode('button','Restart Game',body);
const btn = document.querySelector('button');
mainStyle.append(' button{ position: absolute; bottom: 1%; left: 50%;cursor: pointer;transform: translate(-50%,-50%); width: 10%; height: 5%;background-color: #ac3b61;border-color:#ac3b61;color: #ddd;border-radius: 5%;font-size: 1.2rem;} ');

    document.body.addEventListener('click',()=>{
        if(buttonShine === 1){
            btn.classList.add('bright-color');
            setTimeout(()=>{
             btn.classList.remove('bright-color');
            },2000)
        }
    })

btn.addEventListener('click',()=>{
    document.location.reload();
});
// Adding a functionality so that on click btn flashes
mainStyle.append(' .bright-color{ background-color: #f13c20 !important;} button:hover{ color:white; background-color:#f13c20 !important ;}');

// Adding media Query to make It more responsive on small screens

mainStyle.append(' @media only screen and (max-width: 900px){ .mainDiv{ width: 80% !important; height: 50%;}}');