export const data = [
    {
        page: 0,
        title: "Personal Info",
        fields: [
            {type: "text", name: "First Name", label: "First Name", id: "first-name-input"},
            {type: "text", name: "Last Name", label: "Last Name", id: "last-name-input"}
        ],
        validationMessage: "All fields must be filled"
    },
    {
        page: 1,
        title: "Person Favorites",
        fields: [
            {type: "text", name: "Favorite Movie", label: "Favorite Movie", id: "movie-input"},
            {type: "text", name: "Favorite Car", label: "Favorite Car", id: "car-input"}
        ],
        validationMessage: "All fields must be filled"
    },
    {
        page: 2,
        title: "Programming Languages",
        fields: [
            {type: "switch", name: "Python", label: "python", id: "python-input"}
        ],
        validationMessage: "At least 1 language must be selected"
    }
];
