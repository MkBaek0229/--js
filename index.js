const $RoutineBtn = document.querySelector("#RTBT") 
const $WORKBtn = document.querySelector("#CHBT") 



function RoutineBtnclick() {
    let $Routine = document.querySelector("#Myroutine")
    
}

function WorkBtnclick() {
    let $Work = document.querySelector("#ChoiceWork")
    console.log($Work)
}

$RoutineBtn.addEventListener("click", RoutineBtnclick)

$WORKBtn.addEventListener("click", WorkBtnclick)