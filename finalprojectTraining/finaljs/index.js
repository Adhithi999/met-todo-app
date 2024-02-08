let addbtn=document.querySelector("#add-btn")
let save = document.querySelector("#save")
let todobtn=document.querySelector("#tobtn")
let popup = document.querySelector("#popup")
todobtn.addEventListener("click",() => {
    popup.classList.remove("d-none")

})
save.addEventListener("click",() => {
    popup.classList.add("d-none")
    
})