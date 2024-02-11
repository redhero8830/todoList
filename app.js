const todoList = document.getElementById('todo-list');
const addTodoInput = document.getElementById('add-todo');
const deleteTodoInput = document.getElementById('delete-todo');

const storedTodo = localStorage.getItem('todoKey');
const todo = storedTodo ? JSON.parse(storedTodo) : ['(예시)'];

function displayTodos() {
    todoList.innerHTML = ''; // 리스트를 초기화

    for (let i = 0; i < todo.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `${i + 1}번째 : ${todo[i]}`;
        todoList.appendChild(li);
    }
    localStorage.setItem('todoKey', JSON.stringify(todo));
}

function addTodo() {
    const newTodo = addTodoInput.value;
    if (newTodo.trim() !== '') {
        todo.push(newTodo);
        displayTodos();
        addTodoInput.value = ''; // 입력 필드 비우기
    }
    localStorage.setItem('todoKey', JSON.stringify(todo));
}

function deleteTodo() {
    const indexToDelete = parseInt(deleteTodoInput.value) - 1;
    if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < todo.length) {
        const deletedItem = todo.splice(indexToDelete, 1);
        alert(`'${deletedItem}'가 리스트에서 삭제되었습니다!`);
        displayTodos();
        deleteTodoInput.value = ''; // 입력 필드 비우기
    } else { 
        alert('올바르지 않은 입력입니다. 다시 입력해주세요.');
    }
    localStorage.setItem('todoKey', JSON.stringify(todo));
}

displayTodos(); // 초기 화면 로드 시 목록 표시