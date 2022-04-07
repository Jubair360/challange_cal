//Js//

function DeleteMe(){
    document.getElementById('calc').value =""
}
function calculator(newValue){
    document.getElementById("calc").value += newValue;
}
function answer(){
    var pappu = document.getElementById('calc').value;
    var torChallangeNilam = eval(pappu);
    document.getElementById('calc').value = torChallangeNilam;
}

