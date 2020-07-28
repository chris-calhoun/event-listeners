
const sentence1 = (arg) => {
    return `${arg}`;
}

const sentence2 = (arg) => {
    return `${arg}`;
}

const sentencesCombined = (str, func) => {
    return func(str);
}

console.log(sentence1("Hi, I'm Chris"))
console.log(sentencesCombined("Hello test 1", sentence1))
console.log(sentencesCombined("Hello test 2", sentence2))


// ***** DOM *****

// const myBtn = document.getElementById("main-btn")
// console.log(myBtn)

const myBtn = document.querySelector("#main-btn")
console.log(myBtn)


// Event Listners
myBtn.addEventListener("click", (youClickedMe) => {
    console.log(youClickedMe);
})

//
const youClickedMe = () => {
    console.log("You clicked me!");
}


