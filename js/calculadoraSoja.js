
const button = document.getElementById("calculate");

button.addEventListener("click", () => {
    const valueDay = Number(document.getElementById("valueDay").value);
    const quantity = Number(document.getElementById("quantity").value);
    const product = document.getElementById("product").value;
    const unity = document.getElementById("unity").value;
    const list = document.getElementById("earns")
    console.log(valueDay, quantity, product, unity)

    let calculo = (product, unity) => {
        if (product === "moybean" && unity === "saca") {
            return list.innerText = (`${quantity * valueDay}`)
        } else if (product === "moybean" && unity === "kg") {
            return list.innerText = (`${quantity / 60 * valueDay}`)
        } else if (product === "corn" && unity === "saca") {
            return list.innerText = (`${quantity * valueDay}`)
        } else if (product === "corn" && unity === "kg") {
            return list.innerText = (`${quantity / 60 * valueDay}`)
        } else if (product === "wheat" && unity === "saca") {
            return list.innerText = (`${quantity * valueDay}`)
        } else if (product === "wheat" && unity === "kg") {
            return list.innerText = (`${quantity / 60 * valueDay}`)
        } else if (product === "strawberry" && unity === "box") {
            return list.innerText = (`${quantity * valueDay}`)
        } else {
            list.innerText = `Impossivel calcular`
        }
    };
    const earns = parseFloat(calculo(product, unity))
    localStorage.setItem("earns", earns)
    location.reload
    return console.log(typeof (calculo(product, unity)))
});

