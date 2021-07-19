const schema = {
    inputs: [
        {
            label: 'TextBox', name: 'textbox', type: "text",
            width: '3',
            validateRules: {
                required: "required",
                minlength: 8
            }
        },
        {
            label: 'Password', name: 'Password', type: "password",
            width: '3',
            validateRules: {
                required: "required",
                minlength: 8
            }
        },
        {
            label: 'Dropdown', name: 'dropdown', type: "select",
            width: '3',
            validateRules: {
                required: "required",

            }, options: [1, 2, 3]
        },
        {
            label: 'Multiselect Dropdown', name: 'multi-select', type: "multiselect",
            width: '3',
            validateRules: {
                required: "required",

            }, options: [{ label: "Grapes 🍇", value: "grapes" },
            { label: "Mango 🥭", value: "mango" },
            { label: "Strawberry 🍓", value: "strawberry", disabled: true },
            { label: "Watermelon 🍉", value: "watermelon" },
            { label: "Pear 🍐", value: "pear" },
            { label: "Apple 🍎", value: "apple" },
            { label: "Tangerine 🍊", value: "tangerine" },
            { label: "Pineapple 🍍", value: "pineapple" },
            { label: "Peach 🍑", value: "peach" }]
        },
        {
            label: 'Radio', name: 'radio', type: "radio",
            width: '3',
            validateRules: {
                required: "required",

            },
            options: [
                {
                    label: 'Out of stock',
                    value: 1
                },
                {
                    label: 'In Stock',
                    value: 2,
                },
                {
                    label: 'Available in 2 weeks',
                    value: 3
                },
                {
                    label: 'Available on order',
                    value: 4
                }
            ]
        },
        {
            label: 'Calender',
            width: '3',
            name: 'calender', type: 'calender',
            validateRules: {
                required: "required",

            }
        },

    ]
}

export default schema;