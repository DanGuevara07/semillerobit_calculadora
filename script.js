const opbutton = document.getElementById("operator")
const selectButton = document.querySelectorAll(".selectButton")
const modal = document.querySelector(".modal")
const result = document.querySelector(".result")
const firstNumber = document.getElementById("firstNumber")
const secondNumber = document.getElementById("secondNumber")

const showModal = ()=>{
    modal.style.display = "block"
}
const hideModal = ()=>{
    modal.style.display = "none"
}
const calculate = ()=>{
    try {
        if(opbutton.innerText==="/" && secondNumber.value === "0"){
            result.innerText = "No se puede dividir sobre cero"
        }else{
            result.innerText= `${firstNumber.value} ${opbutton.innerText} ${secondNumber.value} = ${eval(`${firstNumber.value}${opbutton.innerText}${secondNumber.value}`)}`
        }
    } catch (error) {
        result.innerText = ""
    }  
}
opbutton.addEventListener("click",()=>{
    showModal()
})
for(let i of selectButton){
    i.addEventListener("click",()=>{
        hideModal()
        opbutton.innerText = i.innerText
        calculate()
    })
}
firstNumber.addEventListener("input",()=>{
    calculate()
})
secondNumber.addEventListener("input",()=>{
    calculate()
})


