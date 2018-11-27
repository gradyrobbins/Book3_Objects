console.log("Hello world, it's me, Grady/main.js");

const myPetDog = {
    name: "Murphy",
    nicknames: ["Bubba", "Bubby", "Murph"],
    age: "1",
    sex: "Male",
    birthday: "Feb 2017",
    species: "Dog",
    breed: "Bulldog 37.5%, Australian Sheperd 25%, Miniature American Shepard 25%, American Staffordshire 12.5%",
    profilePic: ":dog pic goes here:",
};
// injecting myPetDog properties into the DOM
let bloop = document.getElementById("bloop");
bloop.textContent = myPetDog.name;
bloop.textContent += myPetDog.age;

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// grabbing a reference on the DOM to inject Beatles object properties on the DOM
let bleep = document.getElementById("bleep");

// Output the following value to the console.
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

bleep.textContent += ` ${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He contributed heavily to the ${beatles.albums[3]} Album.
`


