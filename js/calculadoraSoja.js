
const button = document.getElementById("calculate");

button.addEventListener("click", () => {
    const valueDay = Number(document.getElementById("valueDay").value);
    const quantity = Number(document.getElementById("quantity").value);
    const product = document.getElementById("product").value;
    const unity = document.getElementById("unity").value;
    const calcu = document.getElementById("calcu")
    console.log(valueDay, quantity, product, unity)
    let calculo = (product, unity) => {
        if (product === "moybean" && unity === "saca") {
            return calcu.innerHTML += (`<p>O valor total é ${quantity * valueDay}</p>`)
        }  else if (product === "moybean" && unity === "kg") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity / 60 * valueDay}</p>`)
        }   else if (product === "corn" && unity === "saca") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity * valueDay}</p>`)
        }   else if (product === "corn" && unity === "kg") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity / 60  * valueDay}</p>`)
        }   else if (product === "wheat" && unity === "saca") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity * valueDay}</p>`)
        }   else if (product === "wheat" && unity === "kg") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity / 60 * valueDay}</p>`)
        }   else if (product === "strawberry" && unity === "box") {
            return calcu.innerHTML +=(`<p>O valor total é ${quantity * valueDay}</p>`)
        } else {
           calcu.innerHTML = `<p>Impossivel calcular</p>`
        }
    };
    return console.log(calculo(product, unity))
});

