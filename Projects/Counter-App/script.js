// const countvalue = document.querySelector("#counter");
const countvalue = document.getElementById("counter");

function increment(){
    // get the value from ui
    let value = parseInt(countvalue.innerText)

    // update the value
    value = value+1;
    
    // set the value into UI
    countvalue.innerText = value;
};

function decrement(){
    // get the value from ui
    let value = parseInt(countvalue.innerText)

    // update the value
    value = value-1;

    // set the value into UI
    countvalue.innerText = value;
}
