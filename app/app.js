import { loadListItems, loadLists } from "../model/model.js";





function initListeners() {
    $("load").click(function (e){
        $("load").toggleClass("active");
        $("loadListItems").toggleClass("active");
      });
};

$(document).on("click", load, function(e){
    let btnID = e.currentTarget.id;
    loadLists (load);
    console.log("The " +btnID+ " was clicked");
});





$(document).ready(function (){
    initListeners();
});