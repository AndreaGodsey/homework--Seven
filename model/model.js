var LISTS = [
    {
    name: "Games to Buy",
    listItems:[
        {
            name:"Super Mario Brothers",
            checked: false,
            rating: "E",
            },
        {
            name:"Luigi's Mansion 3",
            checked: false,
            rating: "E",
        },
        {
            name:"Splatoon 3",
            checked: false,
            rating: "E",
        },
        {
            name:"Legend Of Zelda",
            checked: false,
            rating: "E",
        },
    ],
},
{
    name: "Consoles to Buy",
    listItems:[
        {
            name:"Nintendo Switch",
            checked: false,
            rating: "E",
        },
        {
            name:"GameCube",
            checked: false,
            rating: "",
        },
        {
            name:"NES",
            checked: false,
            rating: "",
        },
        {
            name:"Nintendo 64",
            checked: false,
            rating: "",
        },
    ],
},
];



export function loadListItems(itemIndex){
    let listString = "<ul>";
    $.each(LISTS[itemIndex].listItems, function(idx, listItems) {
        listString += `<li id="${idx}">${listItems.name}</li`;
    });
    listString = "<ul>";
    $("#app").html(listString);
}

export function loadLists(){
    let listString = "<ul>";
    $.each(LISTS, function(idx,list) {
    listString += `<li class="mainListItem" id="${idx}"load="loadListItems(${idx})">${list.name}</li>`;
    });
    listString += "<ul>";
    $("#app").html(listString);
}