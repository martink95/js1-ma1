// question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

// question 2
const heading = document.querySelector("h3");

// question 3
heading.style.fontSize = "2em";

// question 4
heading.classList.add("subheading");

// question 5
const paragraphs = document.querySelectorAll("p");

// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function loopThroughArray(arrayInput) {
    for(let i = 0; i < arrayInput.length; i++) {
        if(arrayInput[i].hasOwnProperty("name")){
            console.log(arrayInput[i].name);
        }
    }
}

// question 8
function addPropertyToArray(arrayInput) {
    let name;
    let returnValue;
    for(let i = 0; i < arrayInput.length; i++) {
        name = arrayInput[i].name;
        if(returnValue == null) {
            returnValue = `<h5>${name}</h5>\n`
        } else {
            returnValue = returnValue += `<h5>${name}</h5>\n`; 
        }   
    }
    return returnValue;
}

// question 9
resultsContainer.innerHTML = addPropertyToArray(cats);

// question 10

function addPropertiesToArray(arrayInput) {
    let name;
    let age;
    let returnValue
    for(let i = 0; i < arrayInput.length; i++) {
        name = arrayInput[i].name;
        if(arrayInput[i].age == null) {
            age = "Age unknown";
        } else {
            age = arrayInput[i].age;
        }
            if(returnValue == null) {
                returnValue = `<div>\n    <h5>${name}</h5>\n    <p>${age}</p>\n</div>\n`
            } else {
                returnValue = returnValue += `<div>\n    <h5>${name}</h5>\n    <p>${age}</p>\n</div>\n`; 
            }   
    }
    return returnValue;
}

console.log(addPropertiesToArray(cats));
