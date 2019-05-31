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
        $('input').val('');
    });
};

function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        // Not sure what the most efficient way to assign this variable is, but it worked
        const checkedItem = $(this).closest('li').find('.shopping-item');
        checkedItem.toggleClass('shopping-item__checked');
    });
};

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        //I based this off one of the examples. When is 'this' in $() and when is it not?
        $(this).closest('li').remove();
    });
};

$(newItem);
$(checkItem);
$(deleteItem);