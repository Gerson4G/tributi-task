export const data = [
    {
        page: 0,
        title: "Personal Info",
        fields: [
            {type: "text", name: "First Name", label: "First Name", id: "first-name-input"},
            {type: "text", name: "Last Name", label: "Last Name", id: "last-name-input"},
            {type: "number", name: "Age", label: "Age", id: "age-input"},
        ],
        validationMessage: "All fields must be filled"
    },
    {
        page: 1,
        title: "Programming Languages",
        fields: [
            {type: "switch", name: "Python", label: "Python", id: "python-input"},
            {type: "switch", name: "Java", label: "Java", id: "java-input"},
            {type: "switch", name: "Javascript", label: "Javascript", id: "javascript-input"},
            {type: "switch", name: "Go", label: "Go", id: "go-input"},
        ],
        validationMessage: "At least 1 language must be selected"
    },
    {
        page: 2,
        title: "Favorite things of person",
        fields: [
            {type: "text", name: "Favorite Movie", label: "Favorite Movie", id: "movie-input"},
            {type: "text", name: "Favorite Car", label: "Favorite Car", id: "car-input"},
            {type: "text", name: "Favorite Animal", label: "Favorite Animal", id: "animal-input"},
        ],
        validationMessage: "All fields must be filled"
    },
];
