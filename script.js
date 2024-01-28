const countervalue = document.querySelector('#counter');

const increment = () => {

    let value  = parseInt(countervalue.innerText);
    value = value + 1;
    countervalue.innerText = value;

};

const decrement = () => {

    let value  = parseInt(countervalue.innerText);
    value = value - 1;
    countervalue.innerText = value;

};
