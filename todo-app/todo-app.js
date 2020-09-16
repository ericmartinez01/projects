   
    const todoItems = {
        todos: [],
        addTodo: function(text) {
            this.todos.push({
                todo: text,
                completed: false
            })
            view.displayTodos();
        }, 
        deleteTodo: function(index) {
            this.todos.splice(index, 1);
            view.displayTodos();
        }, 
        toggleTodo: function(index) {
            var el = document.getElementById(index)
            el.classList.toggle("paragraphDone")
        }, 
        deleteAll: function () {
            this.todos = []
            view.displayTodos();
        }
    };
   
    const inputField = document.getElementById('input-field');
    const addTodoButton = document.getElementById('add-todo');
    const clearListButton = document.getElementById('clear-list');

    const createTodo = addTodoButton.addEventListener('click', function (){
        todoItems.addTodo(inputField.value);        
        inputField.value = '';
    });

    clearListButton.addEventListener('click', function() {
        todoItems.deleteAll();
    });

    const todosDiv = document.querySelector('div');
    
    const view = {
        displayTodos: function () {
            todosDiv.innerHTML = ''
            todoItems.todos.forEach(function(todo, position){
                const paragraph = document.createElement('p');
                const deleteButton = document.createElement('button');
                const doneButton = document.createElement('button');
                
                // todo text
                paragraph.innerText = todo.todo;
                paragraph.id = position;
                document.querySelector('div').appendChild(paragraph)
                
                // delete button
                deleteButton.innerText = 'X';
                deleteButton.className = 'delete-button';
                paragraph.appendChild(deleteButton);

                // done button
                doneButton.innerText = 'Done'
                doneButton.className = 'done-button';
                paragraph.appendChild(doneButton)
            })
        },
        setUpEventListeners: function() {
            todosDiv.addEventListener('click', function(e) {
                if(e.target.className === 'delete-button') {
                    todoItems.deleteTodo(e.target.parentNode.id)
                } else if(e.target.className === 'done-button') {
                    todoItems.toggleTodo(e.target.parentNode.id);
                }
            })
            
        }
    };

    view.setUpEventListeners();