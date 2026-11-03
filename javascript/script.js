function ragebaitPre() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("6-7").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("10").disabled = true;
    document.getElementById("11").disabled = true;
    document.getElementById("12").disabled = true;
    document.getElementById("13").disabled = true;
    document.getElementById("14").disabled = true;
    document.getElementById("15").disabled = true;
    document.getElementById("16").disabled = true;
    document.getElementById("17").disabled = true;
    document.getElementById("18").disabled = true;
    document.getElementById("19").disabled = true;
    document.getElementById("20").disabled = true;
}
function winPre(){
    document.getElementById("question1Show").src='images/Q1.png';
    document.getElementById("question1Instruction").innerHTML='What is the answer to this question?';
    document.getElementById("Q1Answer").innerHTML='Fore, you dingus.';
    document.getElementById("Q1Wrong1").innerHTML='I dunno, 676767';
    document.getElementById("Q1Wrong2").innerHTML='Me smart, itz 4!';
    document.getElementById("Q1Wrong3").innerHTML='Capital of Djibouti is Arkansas';
}
function question1(){
    let answerSelected = document.getElementById("answer").checked;
    if (answerSelected) {
        document.getElementById("question1Show").src='images/Dingus.png';
    }
    else {
        document.getElementById("idiotic").src='images/Dingus.png';
        const dumb = document.getElementById("idiotic")
        dumb.setAttribute("width", "100000px", "height", "100000px")
    }
}
