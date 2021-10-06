document.addEventListener('DOMContentLoaded', function() {
    // Code placed here will run when the DOM content has loaded.

    document.getElementById('todo-input');

    var todoList = document.getElementById('todo-list');
    var todoInput = document.getElementById('todo-input');
    var addButton = document.getElementById('add-button');
    var todoCount = 0;

    var addTodo = function() {
        // Create a div element and assign it to todoCol variable.
        var todoCol = document.createElement('div');
        // Give it a class of col-xs-12 and todo.
        todoCol.setAttribute('class', 'col-xs-12 todo');
        // Create another div element and assign it to todoRow variable.
        var todoRow = document.createElement('div');
        // Give it a class of row.
        todoRow.setAttribute('class', 'row');
        // Create an h5 element and assign it to the h5 variable.
        var h5 = document.createElement('h5');
        // Sets the class attribute of h5 to take up 8 columns.
        h5.setAttribute('class', 'col-xs-8');
        // Assign the value of todoInput, which is the text the user typed
        // into the input element, to the innerHTML property of h5.
        h5.innerHTML = todoInput.value;
        // Add h5 as the last child element to the todoRow element.
        todoRow.appendChild(h5);
        // Add todoRow as the last child element to the todoCol element.
        todoCol.appendChild(todoRow);
        // Append todoCol as the last child element to the todoList div.
        todoList.appendChild(todoCol);
      };
  });