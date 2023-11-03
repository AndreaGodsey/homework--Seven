import { loadListItems, loadLists } from "../model/model.js";


function initListeners() {
   

        loadLists();

        $(".mainListItem").click(function (e){
            $.get("pages/details.html", function (data){
                $('#app').html(data);
          
            let btnID = e.currentTarget.id;
            loadListItems(btnID);
            console.log("The " +btnID+ " was clicked");
            initBackButtonListeners();
        });
        });
    };


function initBackButtonListeners(){
    $("#BackButton").click (function(){
        $.get('pages/home.html', function (data) {
            $('#app').html(data);
            initListeners();
        });
    })
}


$(document).ready(function (){
    $.get('pages/home.html', function (data) {
        $('#app').html(data);
        initListeners();
    });
});