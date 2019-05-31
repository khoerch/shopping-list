/*Writing three functions. 
    First to create new list items from the form.
    Second, to toggle the strickthrough style when check is clicked
    Third, to delete selected list item when delete is clicked*/

function newItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const listItem = $('input').val();
        
        //Is there a way I can do this by cloning an existing list item?
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`);
    });
};

function checkItem() {

};

function deleteItem() {

};

$(newItem);
$(checkItem);
$(deleteItem);