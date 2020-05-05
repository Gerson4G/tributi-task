export const data = [
    {
        page: 0,
        title: "Personal Info",
        fields: [
            {type: "text", name: "First Name", label: "First Name", id: "first-name-input"},
            {type: "text", name: "Last Name", label: "Last Name", id: "last-name-input"}
        ],
        validation: (fieldsFilled) => { return fieldsFilled !== data[0].fields.length }
    },
    {
        page: 1,
        title: "Person Favorites",
        fields: [
            {type: "text", name: "Favorite Movie", label: "Favorite Movie", id: "movie-input"}
        ]
    },
    {
        page: 2,
        title: "Programming Languages",
        fields: [
            {type: "text", name: "Favorite Movie", label: "Favorite Movie", id: "movie-input"}
        ]
    }

];
