var isTurnOn=false;

function turnOn()
{
    isTurnOn=true;
    document.getElementById('display').disabled=false;
}
function trunOff()
{
    isTurnOn=false;
    document.getElementById('display').value=""
    document.getElementById('display').disabled=true;
}
function displayInInput(clickedElement)
{
if(isTurnOn)
{
    let clickedvalue=clickedElement.innerText;
    console.log(clickedvalue)
    let curvalue=document.getElementById('display').value;
    document.getElementById('display').value=curvalue+clickedvalue;
}
else
{
    alert("please turn on calculator")
}
}


function calculate()
{
    let expression=document.getElementById('display').value;
    let result =eval(expression);
    document.getElementById('display').value=result;
}

function clearALl()
{
    document.getElementById('display').value='';
}

function clearOnechar()
{
    let expression=document.getElementById('display').value;
    let size=expression.substring(size-1);
    document.getElementById('display').value=expression;
}