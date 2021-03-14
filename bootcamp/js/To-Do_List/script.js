
const body = document.body;
const mainCont = document.querySelector('.main-cont');
const inputCont = mainCont.querySelector('.input-cont');
const inputText = inputCont.querySelector('.inpt-text');
const inputImportance = inputCont.querySelector('.inpt-importance');
const submitBtn = inputCont.querySelector('.submit-btn');
const listCont = mainCont.querySelector('.list-cont');

const resetBtn = mainCont.querySelector('.reset-btn');



class Task {
    static counter = 100;

    constructor(text, importance) {
        this.id = Task.counter++;
        this.text = text;
        this.importance = importance;
        this.isDone = false;
        this.date = `${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`;
    }

    GetId() {
        return (this.id);
    }

    GetText() {
        return (this.text);
    }

    GetStatus() {
        return (this.isDone);
    }

    GetDate() {
        return (this.date);
    }

    Print() {
        console.log(`ID: ${this.id}, Text: ${this.text}, Status: ${this.isDone}`);
    }
}

class ToDoList {
    constructor() {
        this.list = [];
    }

    CreateTask(newText, newImportance) {
        let newTask = new Task(newText, newImportance);
        this.list.push(newTask);
        return (true);
    }

    ReadTask(taskId) {
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                return (this.list[i]);
            }
        }
        return (false);
    }

    UpdateText(taskId, newTaskText) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                this.list[i].text = newTaskText;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    UpdateStatusToDone(taskId) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                this.list[i].isDone = true;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    UpdateStatusToNotDone(taskId) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                this.list[i].isDone = false;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    DeleteTask(taskId) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                this.list.splice(i, 1);
                isUpdate = true;
            }
        }

        return (isUpdate);
    }


    GetDateById(taskId) {
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === taskId) {
                return (this.list[i].date);
            }
        }
        
        return (false);
    }

    SortList() {
        this.list.sort((b, a) => (b.isDone - a.isDone));
    }

    Print() {
        console.log('The List is:');
        console.log(this.list);
    }
}


// CHECK IF LOCAL STORAGE CREATED!!!! 
// let listInfo = JSON.parse(localStorage.getItem("listInfo"));

let nameCounter = 1;
function InsertFunction() {
    ++nameCounter;
    //  null
    // check if is already created!!!
    // if (!(listInfo)) {
    //     localStorage.setItem("listInfo", JSON.stringify(list1));
    // }

    if (inputText.value !== '' 
        && inputImportance.value !== '' 
        && inputImportance.value > 0 
        && inputImportance.value < 6 ) {

        list1.CreateTask(inputText.value, inputImportance.value);
        localStorage.setItem("listInfo", JSON.stringify(list1));
         
        listCont.innerHTML += `
            <div class="task-cont" data-attr="#${nameCounter}">
                <input type="checkbox" class="chck-box" name="#${nameCounter}">
                <label class="checkbox-label" for="#${nameCounter}"> Task: ${inputText.value}, Priority: ${inputImportance.value}, Date:</label>
                <button data-attr="#${nameCounter}" type="submit" class="btn-edit"> </button>
                <button data-attr="#${nameCounter}" type="submit" class="btn-remove"> </button>
            </div>
            <hr data-attr="#${nameCounter}" style="color: #fff">
            `;
            tasksCont = document.querySelectorAll('.task-cont');
            btnsEdit =  document.querySelectorAll('.btn-edit');
            btnsRemove =  document.querySelectorAll('.btn-remove');

            btnsRemove.forEach(btn => {
                btn.addEventListener('click', RemoveTaskFunction);  
            })
    }
}
//ask about add event listener to buttons & about local storage
submitBtn.addEventListener('click', InsertFunction);
 
// define global variables

function RemoveTaskFunction(e) {
    console.log('aaa');
}
// if (listCont.innerHTML != '') {
// }    






// if (listCont.innerHTML != '') {
//     const tasksCont = document.querySelectorAll('.task-cont');
//     const btnsEdit =  document.querySelectorAll('.btn-edit');
//     const btnsRemove =  document.querySelectorAll('.btn-remove');
//     console.log(tasksCont);
//     console.log(btnsEdit);
//     console.log(btnsRemove);
// }


let list1 = new ToDoList();
function MainFunction() {

    // localStorage.setItem(  'test', JSON.stringify(list1));
}; MainFunction();