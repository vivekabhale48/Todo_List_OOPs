// function MyFuct(name){
//     this.name = name;
// }

// MyFuct('hennry');
// console.log(this.name);

// MyFuct.prototype.showName = function(){
//     console.log(`My name is ${this.name} from the prototype`);

// }

// let object = new MyFuct('rajesh');
// object.showName();
// console.log(object);
// console.log(object);

//Sirs code 1 :-

class Todos {
    todo = [];
    constructor() {
      this.input = document.getElementById('todoInput');
      this.addBtn = document.getElementById('button');
      this.todoList = document.getElementById('todoList');
      
      this.addEventToButton();
    }
    addEventToButton() {
      this.addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.addTodo();

      });
    }


    // showInitialValues() {
    //   console.log(this.input);
    //   console.log(this.addBtn);
    //   console.log(this.todoList);
      
    // }
    

    addTodo() {
      const typedText = this.input.value.trim();
      if (typedText === '') {
        alert('Todo should not be empty')
      } 
      else 
      {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between p-3';
        li.innerHTML = `<span>
                            <input type="checkbox" />
                            <div class="edit-input d-inline d-none">
                                <input type="text" placeholder="Updated Value">
                                <button class="btn btn-sm btn-primary">Update</button>
                                <button class="btn btn-danger btn-sm">Cancel</button>
                            </div>
                            <p class="todo-input d-inline">${typedText}</p>
                        </span>
                        <div>
                            <i class="bi bi-pencil-square"></i>
                            <i class="bi bi-trash"></i>
                        </div>`
        
        
        todoList.append(li);
        const trash = li.querySelector('div > i:last-child');
        // console.log(trash);
        // this.trashEvent();

        trash.addEventListener('click', ()=>{
          li.remove();
        })
      }
    }

    trashEvent(){
      
        // console.log(trash);
    }


    removeTodo() {
        li.remove();
    }
    editTodo() {
        
    }
  }
  const todo = new Todos();
  // todo.showInitialValues();
  