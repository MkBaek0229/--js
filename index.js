
const $WORKBtn = document.querySelector("#CHBT") 
let $Work = document.querySelector("#ChoiceWork")





// 불러오기 / 운동선택하기 버튼 내용 로직 
function WorkBtnclick() {
    if($Work.style.display =="none" && $Routine.style.display =="none") {
        $Work.style.display = "block";
        console.log("WorkbtnOn")
        const $Form2 = document.querySelector("#WorkForm")
        $Form2.innerHTML = 
        `<input type="text id="plus_Workout Placeholder="찾으시는 운동검색"></input>
        <div id="Select">
        <input type="button" value="북마크✨">
        </input><input type="button" value="하체"></input><input type="button" value="가슴"></input><input type="button" value="등"></input>
        </div>
        
        `
    }
    else {
        $Work.style.display = "none"
        console.log("WorkbtnOff")
    }
}



$WORKBtn.addEventListener("click", WorkBtnclick)

















