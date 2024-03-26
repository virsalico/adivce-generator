let adive;
let fetchAdivce = async () => {
    try {
        let ftch = await fetch("https://api.adviceslip.com/advice");
        let reponse = await ftch.json();
        return reponse;   
    } catch (error) {
        console.log(error)   
    }
}


async function getadvice() {
    let data = await fetchAdivce();
    let advice_id = document.getElementById("advice_id");
    let advice = document.getElementById("advice");
    advice_id.textContent = data.slip.id;
    advice.textContent = '"'+data.slip.advice+'"';
}

getadvice();

let dice = document.getElementById("dice_container");
dice.addEventListener("click",() => {
    getadvice();
});