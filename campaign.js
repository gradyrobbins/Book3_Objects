console.log("hello world campaign . js");

// grabbing a reference on the DOM to inject content 
let charlie = document.getElementById("charlie");
charlie.textContent = "Hello World!";


// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
let district = document.getElementById("district");
district.textContent = "Tennessee's 5th congressional district!";


// Her platform statements for the following issues.
    // Taxes
    // Jobs
    // Infrastructure
    // Health care
    // Crime and enforcement

    const platform = {
        Taxes: "Lorem Ipsum Tax",
        Jobs: "Lorem Ipsum Jobbie Job Job",
        Infrastructure: "Lorem Ipsum Bridges and stuff",
        Healthcare: "Lorem Ipsum drink water",
        Crime_and_enforcement: "Lorem Ipsum judge judy",
    };
    
    let outDiv = document.querySelector("#platform");
    
    for(key in platform){
        x = platform[key];
        console.log(key, " : ", platform[key]);
        
        outDiv.innerHTML += 
        `<p>  Taxes: ${x.taxes}, Jobs: ${x.Jobs}, Infrastructure: ${x.Infrastructure} 
         </p>`;
    }

    
    // let students = [
        //     {
//         name: "terrance",
//         track: "front-end", 
//         achievements: 12,
//         points: 6
//     },
//     {
//         name: "juliet", 
//         track: "back-end",
//         achievements: 14,
//         points: 7
//     },
//     {
//         name: "Miller",
//         track: "full-stack",
//         achievements: 9,
//         points: 7
//     },
//     {
//         name: "Johnson", 
//         track: "full-stack",
//         achievements: 9,
//         points: 5
//     },
//     {
//         name: "Smith",
//         track: "front-end",
//         achievements: 9,
//         points: 8
//     }
// ]
// var message = "";
// var student = "";

// let outDiv = document.querySelector("#mine");

// for(key in students){
//     student=students[key];
//     console.log(key, " : ", students[key]);
    
//     outDiv.innerHTML += 
//     `<p> ${student.name}, Track: ${student.track}, Acieviments: ${student.achievements}, Points: ${student.points} 
//      </p>`;
// }

// URL for donation form
// Calendar of events
// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
// Mission statement
// URL for registering to vote 