let eventKey = document.getElementById("eventkey")
let eventWhich = document.getElementById("eventwhich")
let eventCode = document.getElementById("eventcode")
let eventKey2 = document.getElementById("bigNumber")

document.addEventListener("keydown", (event) => {
    console.log(event)
eventKey.innerText = event.key;
eventWhich.innerText = event.which;
eventCode.innerText = event.code;
eventKey2.innerText = event.which;

})
