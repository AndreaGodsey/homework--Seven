import { loadListItems, loadLists } from "../model/model.js";


function initListeners() {
    $("#load").click(function (e){
        $("load").toggleClass("active");
        $("loadListItems").toggleClass("active");

        loadLists();

        $(".mainListItem").click(function (e){
            let btnID = e.currentTarget.id;
            loadListItems(btnID);
            console.log("The " +btnID+ " was clicked");
        });
    });
}


$(document).ready(function (){
    initListeners();
});