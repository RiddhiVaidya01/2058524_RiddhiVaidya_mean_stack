var arr = new Array();
function addData() {
    getData();
    arr.push({
        cn:document.getElementById("cn").value,
        pn:document.getElementById("pn").value,
        b:document.getElementById("b").value                
    });

    localStorage.setItem("localData", JSON.stringify(arr) );
    showData();

}


function goBack() {
  window.history.back();
}

function showData() {
    getData();
    var tbl = document.getElementById("myTable");
    for(i=0;i<arr.length;i++){
        var r= tbl.insertRow();
        var cell1=r.insertCell();
        var cell2=r.insertCell();
        var cell3=r.insertCell();

        cell1.innerHTML=arr[i].cn
        cell2.innerHTML=arr[i].pn
        cell3.innerHTML=arr[i].b
    }

}
function getData() {
    var str = localStorage.getItem("localData");
    if(str !=null)
      arr =JSON.parse(str);

}   
