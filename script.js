// alert("laoding");

function addNewWEField (){
    // console.log("working properly");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",3);

    let weOb=document.getElementById("we");

    let weAddButtonOb =document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
   
}
function addAqField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",3);

    let aqOb=document.getElementById("aq");

    let aqAddButtonOb =document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
}


 // image 

 function mg(){

    var image=document.getElementById("output");
    image.src =URL.createObjectURL(event.target.files[0] );
    };


 



// Generating Resume 

function generateresume(){
    // name 
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField; 

    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML=nameField;

   

  






    // contact 

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    // Address 

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // Links

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;


    // objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;


    // work experience 

    let wes =document.getElementsByClassName("weField");
    let str= "";
    for(let e of wes){
        str= str + `<li> ${e.value} </li>` ;
    }

    document.getElementById("weT").innerHTML= str;


    // Academic Qualification 

    let aqs =document.getElementsByClassName("eqField");
    let str1= "";
    for(let e of aqs){
        str1= str1 + `<li> ${e.value} </li>` ;
    }

    document.getElementById("aqT").innerHTML= str1;


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";



}

// print Resume

function printresume(){
    window.print();
}