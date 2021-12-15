/*function foo(){
        let res1=document.getElementById("first").value;
    let res2=document.getElementById("middle").value;
    let res3=document.getElementById("last").value;
    let res4=document.getElementById("email").value;
    let res5=document.getElementById("file").value;
console.log(res1,res2,res3,res4,res5);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

}*/
//first name
var form=document.createElement("div");
var lable1=document.createElement("lable");
lable1.setAttribute("for","first");
lable1.innerText="FirstName";
form.append(lable1);

var input1=document.createElement("input");
input1.setAttribute("class","first");
input1.setAttribute("id","first");
input1.setAttribute("type","text");
input1.setAttribute("name","first");
form.append(input1);
var br = document.createElement("br");
form.appendChild(br);
//middelname
var lable2=document.createElement("lable");
lable2.setAttribute("for","middle");
lable2.innerText="MiddleName";
form.append(lable2);
var input2=document.createElement("input");
input2.setAttribute("class","middle");
input2.setAttribute("id","middle");
input2.setAttribute("type","text");
input2.setAttribute("name","middle");
form.append(input2);
//lastname
var br = document.createElement("br");
form.appendChild(br);
var lable3=document.createElement("lable");
lable3.setAttribute("for","last");
lable3.innerText="LastName";
form.append(lable3);
var input3=document.createElement("input");
input3.setAttribute("class","last");
input3.setAttribute("id","last");
input3.setAttribute("type","text");
input3.setAttribute("name","last");
form.append(input3);
//email
var br = document.createElement("br");
form.appendChild(br);
var lable4=document.createElement("lable");
lable4.setAttribute("for","email");
lable4.innerText="Email-Id";
form.append(lable4);
var input4=document.createElement("input");
input4.setAttribute("class","email");
input4.setAttribute("id","email");
input4.setAttribute("type","email");
input4.setAttribute("name","email");
form.append(input4);
var br = document.createElement("br");
form.appendChild(br);
var sub=document.createElement("input");
sub.setAttribute("type","submit");
sub.setAttribute("name","submit");
sub.setAttribute("value","submit");
form.append(sub);

console.log(form);
document.body.append(form);

sub.onclick=function foo(){
    let res1=document.getElementById("first").value;
    console.log(res1);
    let res2=document.getElementById("middle").value;
    console.log(res2);
    let res3=document.getElementById("last").value;
    console.log(res3);
    let res4=document.getElementById("email").value;
    console.log(res4);
}
