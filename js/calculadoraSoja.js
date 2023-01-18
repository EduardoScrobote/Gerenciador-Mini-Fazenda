
const button = document.getElementById("calculate")

button.addEventListener("click", () => {
    const calcu = document.getElementById("calcu")
    const value = document.getElementById("value")
    const quantity = document.getElementById("quantity")

    const exactQuantity = Number(quantity.value) / 60
    const totalEarn = Number(exactQuantity) * Number(value.value);
    console.log(totalEarn.toFixed([0]))
    calcu.classList.add("result")
return calcu.innerHTML = `<p>Seus ganhos são <span> R$${Number(totalEarn.toFixed([0]))} </span></p>`
})


