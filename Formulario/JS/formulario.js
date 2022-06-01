function calcularTips(event){
 event.preventDefault();
 let bill = document.getElementById('bill').value;
 let servicequal = document.getElementById('servicequal').value;
 let people = document.getElementById('people').value;

 if (bill == '' |servicequal == 0)
 {
    alert("Por favor, preencha os valores");
    return;
 }
 
 if(people == ''|people <=1)
 {
     people=1;
     document.getElementById('each').style.display ="none";
 }else
{
    document.getElementById('each').style.display ="block";
}

let total =(bill*servicequal)/people;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
document.getElementById('totaltips').style.display ="block";



}
document.getElementById('totaltips').style.display ="none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calcularTips);