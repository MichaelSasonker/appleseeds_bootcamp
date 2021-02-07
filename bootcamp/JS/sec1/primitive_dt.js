

function PrintDataTypes(str, num, obj, bol, empty, empty2, sym) 
{
    console.log(str, typeof(str));
    console.log(num, typeof(num));
    console.log(obj, typeof(obj));
    console.log(bol, typeof(bol));
    console.log(empty, typeof(empty));
    console.log(empty2, typeof(empty2));
    console.log(sym, typeof(sym));
}

function MainFunction ()
{
    'use-strict';

    let str = "Hello World!";
    let num = 25;
    let obj = {
        words: ['Hi', 'Hello'],
        numbers: [1, 2] };
    let bol = Boolean(true);
    let empty = null;
    let empty2 = undefined;
    let sym = Symbol('func');

    PrintDataTypes(str, num, obj, bol, empty, empty2, sym);
    

} ;  MainFunction();

