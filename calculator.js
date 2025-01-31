
onload = alert("WELCOME TO CHANDA'S BASIC MINI CALCULATOR!")

 add = () => {

 var a,b,c,d,operator;
 a = document.getElementById("first").value;
 b = document.getElementById("second").value;
 d = document.getElementById("result");
 
 
 operator = document.getElementById("operator").value;

 if(isNaN(a) || isNaN(b)){
   d.innerHTML = "Please Enter Numbers";
 }

 else if(document.getElementById("first").value == "" && document.getElementById("second").value == ""){
   alert("Please Input Your First And Second Number For Evaluation!!");
 }

 else if(operator === "add"){
   c = Number(a) + Number(b);
   d.innerHTML = "The result is "+ c;
   d.style.borderBottomStyle = "groove";
 }

 else if(operator === "sub"){
   c = Number(a) - Number(b);
   d.innerHTML = "The result is "+ c;
   d.style.borderBottomStyle = "groove";
 }

 else if(operator === "mul"){
   c = Number(a) * Number(b);
   d.innerHTML = "The result is "+ c;
   d.style.borderBottomStyle = "groove";
 }

 else if(operator === "div"){
   c = Number(a) / Number(b);
   d.innerHTML = "The result is "+ c;
   d.style.borderBottomStyle = "groove";
 }

 else if(operator === "sqrt"){
   c = Number(a) * Number(a)
   d.innerHTML = "The result is "+ c;
   d.style.borderBottomStyle = "groove";
 }
}

 reset = () => {
 document.getElementById("first").value = "";
 document.getElementById("second").value = "";
 document.getElementById("result").innerHTML = "";
 document.getElementById("result").style.borderBottomStyle = "none";
 document.getElementById("operator").value  = "";

}



