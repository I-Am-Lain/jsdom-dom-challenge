const timer = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const likes = document.querySelector(".likes")
const pause = document.querySelector("#pause")

let myInterval = setInterval(makeTimeWork, 1000)

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function makeTimeWork(){
    timer.innerText = (parseInt(timer.innerText))+1
}

function makeTimeGoBackwards(){
    timer.innerText = (parseInt(timer.innerText))-1
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function iLikeDis(){
    const li = document.createElement("li")
    const likesArray = document.querySelectorAll(".likes li")
    let match = false

    likesArray.forEach(function(like) { 
        if (like.innerText.split(" ")[0] === timer.innerText){
            let myChange = like.innerText.split(" ")
            myChange[3] = parseInt(like.innerText.split(" ")[3])+1
            like.innerText = myChange.join(" ")
            match = true
        }
    })

    if (match == false) {
        li.innerText = `${timer.innerText} was liked 1 times!`
        likes.appendChild(li)
    }

}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

function pauseTime(){
    if (pause.innerText == "pause"){
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        document.querySelector("#submit").disabled = true

        clearInterval(myInterval)

        document.querySelector("#pause").innerText = "resume"
    } else if (pause.innerText == "resume"){
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        document.querySelector("#submit").disabled = false

        myInterval = setInterval(makeTimeWork, 1000)     // changing the global variable?


        document.querySelector("#pause").innerText = "pause"
    }
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function changeButtons(){
    const body = document.querySelector("body")
    const form = document.querySelector("#comment-form")
    const commentList = document.querySelector("#list")

    body.addEventListener("click", function(event){
        if (event.target.id === "plus"){
            makeTimeWork()
        } else if (event.target.id === "minus") {
            makeTimeGoBackwards()
        } else if (event.target.id === "heart") {
            iLikeDis()
        } else if (event.target.id === "pause") {
            pauseTime()
        }
    })

    form.addEventListener("submit", function(event){
        event.preventDefault()

        let p = document.createElement("p")
        p.innerText = event.target[0].value

        commentList.appendChild(p)
    })

}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function main(){
    changeButtons()
}

main()