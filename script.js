let arr = [{
    question: "What is the full form of HTML?",
    ans1: "Hyper Text Markup Language",
    ans2: "Hyper Text Markup List",
    ans3: "Hyper Text Mask List",
    ans4: "Hyper Test Markup Last"

},
{
    question: "What is the full form of CSS?",
    ans1: "Cascading Style Sheet",
    ans2: "Class Style Sheet",
    ans3: "Class Space Sheet",
    ans4: "Class Style Sheeting",

},
{
    question: "What is the full form of JS?",
    ans1: "Javascript",
    ans2: "Java Source",
    ans3: "Jet Skey",
    ans4: "Java Sheets",

},
{
    question: "Whaich is a CSS framework?",
    ans1: "Bootstrap",
    ans2: "React JS",
    ans3: "React Native",
    ans4: "Laravel",

}]
let i = 0;
let corrctAns = 0;
let submitTest = document.getElementById("submit_test");
let next_question = document.getElementById("next_question");
let music = new Audio("./music1.wav")      
let winner = new Audio("./winner1.mp3")      
arr.map(items => {
    document.getElementById("question").innerText = arr[i].question;
    document.querySelector("#Correct_ans").value = arr[i].ans1
    document.querySelector(".Wrong_ans1").value = arr[i].ans2
    document.querySelector(".Wrong_ans2").value = arr[i].ans3
    document.querySelector(".Wrong_ans3").value = arr[i].ans4

})

document.getElementById("next_question").addEventListener("click", function () {
    i = i + 1;
    console.log("clicked");
    arr.map(items => {
        Array.from(document.querySelectorAll("input")).forEach(items => items.removeAttribute("disabled"))
        document.getElementById("question").innerText = arr[i].question;
        document.querySelector("#Correct_ans").value = arr[i].ans1
        document.querySelector(".Wrong_ans1").value = arr[i].ans2
        document.querySelector(".Wrong_ans2").value = arr[i].ans3
        document.querySelector(".Wrong_ans3").value = arr[i].ans4            
        document.querySelectorAll("input").forEach(item => {
            item.style.color = "white";
            item.style.backgroundColor = "darkslategrey"
        })
    })
    console.log(i)
    if (i == (arr.length-1)) {
        submitTest.style.display = "block"
        next_question.style.display = "none"
    }
    
})

document.querySelectorAll(".Wrong").forEach(items => {   
    items.addEventListener("click", function (event) {        
        items.style.color = "black";
        items.style.backgroundColor = "red";
      

    })
})

document.querySelector("#Correct_ans").addEventListener("click", function () {   
    this.style.backgroundColor = "green"
    this.style.color = "black";  
    corrctAns =corrctAns+1
    console.log(`coreadns= ${corrctAns}`)

})

submitTest.addEventListener("click", function(){
    document.querySelector(".container").style.display="none"
    document.querySelector(".result_div").classList.add("showScore")
    document.querySelector(".buttons").style.display="none"
    console.log(`coreadnsfghjk= ${corrctAns}`);
    let result = (corrctAns>=(arr.length/2+1)) ? `Great! your score is ${corrctAns}/${arr.length} ` : `Oops! your score is ${corrctAns}/${arr.length}`;            
    document.getElementById("score").insertAdjacentText("afterbegin", result);
    winner.play()
})


document.querySelectorAll("input").forEach(input => {
    input.addEventListener("click", function(){
        input.classList.add("efg");       
        Array.from(document.querySelectorAll("input")).filter(item => !item.classList.contains("efg")).forEach(items => items.setAttribute("disabled", "disabled"))  ;
        music.play()     
    })
})
 
