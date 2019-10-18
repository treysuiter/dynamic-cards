console.log("we good")


const buildTheDom = (text) => {
    // console.log(text)
    return `
    <div id="newDOM">${text}</div>
    <button id="deleteButton">Delete</button>
    `
}

document.querySelector("#createButton").addEventListener("click", function () {
    let textHTML = ""
    let enteredText = document.querySelector("#textArea").value
    // console.log(enteredText)
    textHTML =  buildTheDom(enteredText)
    document.querySelector("#deleteThis").innerHTML = textHTML

})