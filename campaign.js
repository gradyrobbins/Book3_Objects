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
        Taxes: "Taxman",
        Jobs: "Jobbie Job Job",
        Infrastructure: "Bridges and stuff",
        Healthcare: "drink water",
        Crime_and_enforcement: "only Judy can Judge me!",
    };
    
    let outDiv = document.querySelector("#platformlistitem");
    
    for(key in platform){
        x = platform[key];
        console.log(key, " : ", platform[key]);
        
        outDiv.innerHTML += 
        `<li>  ${key} : ${platform[key]} </li> `;
    }

    
// URL for donation form- can change the href dynamically via JS below:
document.getElementById("donate_link").href = "https://www.nashville.gov/Election-Commission.aspx";

// Calendar of events
let calendarEl = document.getElementById("calendar");
calendarEl.textContent += "Free beer tomorrow";

// Volunteer information
const volunteer = {
    Name: [],
    Address:[],
    Email: [],
    Phone_number: [],
    Availability: []
    // What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
}
    

// Biography
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
// Mission statement
// URL for registering to vote 