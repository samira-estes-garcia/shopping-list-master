'use strict';


function addItems() 
{
    //selector 
    //append click event
    //prevent default
    $('button[type = "submit"]').on('click',(event) => {
        event.preventDefault()
        //get values from input (get the selector and the values)
        let listEntry = $('#shopping-list-entry').val();
        //append new div (create a new div, target the shopping-list container and make a new li with the input)
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${listEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `);
    });
}

$(addItems);

function deleteItems() 
{
    //selector and append click event, $(listEntry) needs to be deleteable too, body always exists so select body and include shopping-item-delete
    $('body').on('click', '.shopping-item-delete', (event) => {
        //remove item from list and html 
        console.log($(event.target));
        $(event.target).parent().parent().parent().remove();
    });
}

$(deleteItems);

function checkItems() 
{
    //selector and append click event
    $('body').on('click', '.shopping-item-toggle', (event) => {
        console.log("check");
        //add class and remove class with toggle shopping-item__checked
        $(event.target).parent().parent().prev().toggleClass('shopping-item__checked');
    })

}

$(checkItems);