import { createStore } from 'vuex'

export default createStore({
    state: {
        recipes: [
            {
                slug: 'Katsu-carry',
                title: 'Katsu Curry',
                description: 'A delicious curry made with chicken, potatoes, and a special sauce',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 onion, chopped',
                    '2 cloves garlic, chopped',
                    '1 tablespoon curry powder',
                ],
                method: [
                    'Heat oil in a large skillset over medium heat.',
                    'Add onion and garlic and cook, stirring often, until softened, about 5 minuties.',
                    'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.'
                ]
            },
            {
                slug: 'ramen-noodle-soup',
                title: 'Ramen noodlesoup',
                description: 'A delicious curry made with chicken, potatoes, and a special sauce',
                ingredients: [
                    '1 tablespoon olive oil',
                    '1 onion, chopped',
                    '2 cloves garlic, chopped',
                    '1 tablespoon curry powder',
                ],
                method: [
                    'Heat oil in a large skillset over medium heat.',
                    'Add onion and garlic and cook, stirring often, until softened, about 5 minuties.',
                    'Add chicken and potatoes and cook, stirring, until heated through, about 5 minutes.'
                ]
            }
        ]
    },
    mutations: {
            ADD_RECIPE (state, recipe) {
                state.recipes.push(recipe)
            }
    },
    actions: {},
    modules: {}
})