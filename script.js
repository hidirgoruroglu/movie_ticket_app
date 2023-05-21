const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");

const calculateTotal = () =>{
    const selectedSeats = container.querySelectorAll(".seat.selected");
    const selectedSeatCount =selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = select.value * selectedSeatCount;
}


container.addEventListener("click",(e)=>{
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculateTotal();
    }
});

select.addEventListener("change",(e) => {
    calculateTotal();
})