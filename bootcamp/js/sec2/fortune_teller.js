

function TellFortune(job_title, location, parthner_name, number_of_children)
{
    let sentence = `\nYou will be a ${job_title} in ${location} and married to ${parthner_name} with ${number_of_children} children.\n`;

    return (sentence);
}


function MainFunction ()
{
    'use strict';
    let job_title_a = "programmer";
    let job_title_b = "engineer";
    let job_title_c = "taxi driver";

    let location_a = "Tel-Aviv";
    let location_b = "Jerusalem";
    let location_c = "Ramat-Gan";

    let parthner_name_a = "Shir";
    let parthner_name_b = "Sharon";
    let parthner_name_c = "Mali";

    let number_of_children_a = 10;
    let number_of_children_b = 4;
    let number_of_children_c = 1;

    let str_a = TellFortune(job_title_a, location_a, parthner_name_a, number_of_children_a)
    let str_b = TellFortune(job_title_b, location_b, parthner_name_b, number_of_children_b)
    let str_c = TellFortune(job_title_c, location_c, parthner_name_c, number_of_children_c)

    console.log(str_a);
    console.log(str_b);
    console.log(str_c);

}; MainFunction();