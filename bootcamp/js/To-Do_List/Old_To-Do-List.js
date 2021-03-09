
//           V     V      V      V
/* CRUD => Create Read Update Delete */

class Task {
    constructor(text) {
        this.id = this.SetId();
        this.text = text;
        this.isDone = false;
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

    SetId() {
        let id = Math.floor(Math.random() * 10000) + 1;
        return (id);
    }

    Print() {
        console.log(`ID: ${this.id}, Text: ${this.text}, Status: ${this.isDone}`);
    }
}

class ToDoList {
    constructor(task) {
        this.list = [task];
    }

    CreateTask(newText) {
        let isUpdate = false;
        let isValidId = true;
        let newTask = new Task(newText);

        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].id === newTask.id) {
                isValidId = false;
            }
        }
        if (isValidId === false) {
            newTask.id = newTask.SetId();
            isUpdate = true;
        }
        this.list.push(newTask);

        return(isUpdate);
    }

    ReadTask(taskText) {

        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].text === taskText) {
                return (this.list[i]);
            }
        }
        return (false);
    }

    UpdateText(taskText, newTaskText) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].text === taskText) {
                this.list[i].text = newTaskText;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    UpdateStatusToDone(taskText) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].text === taskText) {
                this.list[i].isDone = true;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    UpdateStatusToNotDone(taskText) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].text === taskText) {
                this.list[i].isDone = false;
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    DeleteTask(taskText) {
        let isUpdate = false;
        for (let i = 0; i < this.list.length; ++i) {
            if (this.list[i].text === taskText) {
                this.list.splice(i, 1);
                isUpdate = true;
            }
        }

        return (isUpdate);
    }

    SortList() {
        this.list.sort((b, a) => {
            return (b.isDone - a.isDone);
        });
    }

    Print() {
        console.log('The List is:');
        console.log(this.list);
    }
}

let task1 = new Task('CRUD');
let task2 = new Task('Create');
let task3 = new Task('Read');
let task4 = new Task('Update');
let task5 = new Task('Delete');

task1.Print();
task2.Print();
task3.Print();

let list1 = new ToDoList(task1);
list1.CreateTask('Clean');
list1.CreateTask('Read a book');
list1.CreateTask('Exercise');
list1.Print();

console.log(list1.UpdateStatusToDone('Read a book'));

console.log(list1.ReadTask("Clean"));
console.log(list1.UpdateText('Clean', 'Clean the house!'));
list1.Print();
console.log(list1.UpdateStatusToNotDone('Read a book'));
console.log(list1.DeleteTask('Clean the house!'));
list1.Print();
list1.UpdateStatusToDone('Exercise');
list1.UpdateStatusToDone('CRUD');
list1.Print();

list1.SortList();
list1.Print();
