/*****************************************************************************
* File Name: school_method.js                                                *
* Section: 9                                                                 *
* Developer: Michael Sasonker                                                *
* Date: 02/15/21 23:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
const SCHOOL = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],

    FindPerson: function (type, id) {

        let res_obj = this[type].find(obj => {
            return (obj.id === id);
        })

        if (res_obj != undefined)
        {
            return (res_obj);
        }
        return (`No such type:${type} OR id:${id}`);

    },


  /*----------------------------------------------------------------*/
    /* This function add to an array the student object if exist */
    AssignStudent: function (id, subject) {

        let student = this.FindPerson('students', id);
        
        let result = this.teachers.find((obj) => {
            return ((obj.subjects.includes(subject)) && (obj.capacityLeft > 0));
        })

        if (!result || !student) {
            return ("Sorry, no available teachers left");
        }

        result.students.push(student);
        --result.capacityLeft;

        return (result);
    },

  /*---------------------------------------------------------*/
    /* This function add to an array the subject if exist */ 
    AssignTeachersSubject: function (id, subject) {

        let result_obj = this.teachers.find(obj => {
            return (obj.id === id);
        })

        let res_str = result_obj.subjects.find(str => {
            return (str === subject)
        })

        if (res_str === undefined)
        {
            result_obj.subjects.push(subject);
            return (result_obj);
        }
        else
        {
            return ('Subject already exist!');
        }

    }
};

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    let res_find_person = SCHOOL.FindPerson('students', 14);
    console.log(res_find_person);


    let res_assign_student = SCHOOL.AssignStudent(12, 'history');
    console.log(res_assign_student);

    let res_assign_teacher_subject = SCHOOL.AssignTeachersSubject(2, 'ethics');
    console.log(res_assign_teacher_subject);

}; MainFunction();