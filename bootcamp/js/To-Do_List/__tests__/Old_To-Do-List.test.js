const ToDoList = require('../src/Old_To-Do-List');

console.log(ToDoList)


let list2 = new ToDoList;
console.log(list2.CreateTask('read'));
console.log(list2.CreateTask('sleep'));
console.log(list2.CreateTask('eat'));
console.log(list2.CreateTask('code'));
console.log(list2.GetList());

test(`Check Task creation`, () => {
    let variable1 = 3;
    let variable2 = 'aa';
    let variable3 = undefined;

    expect(list2.CreateTask(variable1)).toBe(false);
    expect(list2.CreateTask(variable2)).toBe(true);
    expect(list2.CreateTask(variable3)).toBe(false);

});

test(`Check ReadTask method`, () => {
    let id1 = 3;
    let id2 = 101;
    let id3 = 'aa';

    expect(list2.ReadTask(id1)).toBe(false);
    expect(list2.ReadTask(id2)).not.toBe(true);
    expect(list2.ReadTask(id3)).toBe(false);
});

// test(`C to kelvin test`, () => {
//     //arrange
//     let tempC = 0;
//     let tempK = 273.15;

//     //act + assert
//     expect(f1(tempC)).toBe(tempK);
// });
