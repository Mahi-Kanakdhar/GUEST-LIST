var Name_Of_The_Guest_Array = [];
function Submit() {
   var Guest_name = document.getElementById("Enter_name").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("Display_names").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function Show_list() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Show_names").innerHTML = i.toString();
}
function sorting() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search() {
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}