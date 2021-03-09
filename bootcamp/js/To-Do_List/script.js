
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
            if (this.list[i].taskId === taskId) {
                this.list.splice(i, 1);
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    SortList() {
        this.list.sort((b, a) => (b.isDone - a.isDone));
    }

    Print() {
        console.log('The List is:');
        console.log(this.list);
    }
}



// let listInfo = JSON.parse(localStorage.getItem("listInfo"));

let nameCounter = 1;
function SubmitFunction() {
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
        console.log(list1);
        localStorage.setItem("listInfo", JSON.stringify(list1));
         
        // let nextCounter = ++nameCounter + 1;
        // let taskNote = document.createElement()
        listCont.innerHTML += `
            <div class="task-cont">
                <input type="checkbox" class="chck-box" name="#${nameCounter}">
                <label class="checkbox-label" for="${nameCounter}"> TODO: ${inputText.value}, ${inputImportance.value}</label>
                <button type="submit" class="btn-edit"> </button>
                <button type="submit" class="btn-remove"> </button>
            </div>
            <hr style="color: #fff">
        `;




    }




    
}
submitBtn.addEventListener('click', SubmitFunction);



let list1 = new ToDoList();
function MainFunction() {

    // let task1 = new Task('CRUD');
    // let task2 = new Task('Create');
    // let task3 = new Task('Read');

    // // task1.Print();
    // // task2.Print();
    // // task3.Print();

    // // let list1 = new ToDoList();
    // list1.CreateTask('Clean');
    // list1.CreateTask('Read a book');
    // list1.CreateTask('Exercise');
    // list1.Print();

    // console.log(list1.UpdateStatusToDone(100));

    // console.log(list1.ReadTask(104));
    // console.log(list1.UpdateText(105, 'Clean the house!'));
    // list1.Print();

    // console.log(list1.UpdateStatusToNotDone(100));
    // console.log(list1.DeleteTask(100));
    // list1.Print();

    // list1.UpdateStatusToDone(105);
    // list1.UpdateStatusToDone(104);
    // list1.Print();

    // list1.SortList();
    // list1.Print();

    // localStorage.setItem(  'test', JSON.stringify(list1));
}; MainFunction();