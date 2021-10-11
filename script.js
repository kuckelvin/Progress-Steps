const progress = document.querySelector(".progress")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle")

activeCircle = 1

next.addEventListener("click", () => {
    activeCircle++
    
    if (activeCircle > circles.length) {
        activeCircle = circles.length
    }
    updateDisplay()
})


prev.addEventListener("click", () => {
    activeCircle--
    if (activeCircle < 1) {
        activeCircle = 1
    }
    updateDisplay()
})

function updateDisplay () {
    circles.forEach((circle, idx) => {
        if (idx < activeCircle) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    actives = document.querySelectorAll(".active")

    progress.style.width = ((actives.length - 1)/(circles.length -1)) * 100 + "%"

    if (activeCircle === 1) {
        prev.disabled = true
    } else if (activeCircle === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}