
const checkButton = document.getElementById('checkButton');
const value1 = document.getElementById('ivalue1');

checkButton.addEventListener("click", checkInput);
value1.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        event.preventDefault();
        checkInput();
    }
});

function checkInput(){
    let date_value = new Date(value1.value);
    formatDate (date_value);

}

function formatDate(date){
    const curr_date = new Date();
    const diff = curr_date-date;
    if (diff < 1000 && diff >=0){
        alert("прямо сейчас");
        return;
    }
    if (diff < 60*1000 && diff >=0){
        alert(`${curr_date.getSeconds()-date.getSeconds()} секунд назад`);
        return;
    }
    if (diff < 60*60*1000 && diff >=0){
        alert(`${curr_date.getMinutes()-date.getMinutes()} минут назад`);
        return;
    }

    alert(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`);

}



