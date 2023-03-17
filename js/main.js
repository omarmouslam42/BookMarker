
var sn = document.getElementById("sn"); 
var su = document.getElementById("su");

    var sites = [] ;
   if ( localStorage.getItem("allsites") !=null) {  
    sites = JSON.parse(localStorage.getItem("allsites"));
    displaysite();
   }

function addSites() {
    
   var site = {
        name : sn.value,
        url : su.value
    }
    sites.push(site);
    displaysite()
    localStorage.setItem("allsites",JSON.stringify(sites))
    clear()
}

document.querySelector(".btn1").addEventListener("click",addSites)

function displaysite(){
    var sitesbox ="";
    for(var i=0 ; i < sites.length ; i++ ){

        sitesbox += ` <tr class=" py-5 w-100">
       <div class=" w-50 ">
        <td><h4 class="py-4 fw-bold">${sites[i].name}</h4></td>
        <td> <a href="https://www.${sites[i].url}.com" target="_blank" class=" text-decoration-none"> <button  onclick="visit(${i})" class=" my-4 btn btn-info  text-white btn2"> visit </button> </a>
        <button onclick="deleted(${i})" class="ms-2 my-4 btn btn-danger btn3"> Delete </button></td>
       </div>
        
    </tr>`
    }

    document.querySelector("#tbody").innerHTML = sitesbox;
}

function clear() {
    sn.value ="";
    su.value = "";
    displaysite()
}

function deleted(index) {
    sites.splice(index , 1)
    displaysite()
    localStorage.setItem("allsites",JSON.stringify(sites))
}

function visit(index) {
  
    
    document.querySelector("a").getAttribute("href")
}


document.addEventListener("keyup",function (e) {
   
    if ( e.code=="Enter") {
        addSites()
    }
})
