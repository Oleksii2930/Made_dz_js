const recipesDiv = document.getElementById('carts');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then (recipesObject => {
        const { recipes } = recipesObject;
        console.log(recipes);
        for (const recip of recipes) {
            const div = document.createElement('div');
            div.classList.add('recipes-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
             "caloriesPerServing": ${recip.caloriesPerServing},
             "cookTimeMinutes": ${recip.cookTimeMinutes},
             "cuisine": ${recip.cuisine},
             "difficulty":${recip.difficulty},
             "id":${recip.id}        
             "image": ${recip.image},
             "mealType": ${recip.mealType},
             "name": ${recip.name},
             "prepTimeMinutes":${recip.prepTimeMinutes},
             "rating":${recip.rating}        
             "reviewCount": ${recip.reviewCount},
             "servings": ${recip.servings},
             "tags": ${recip.tags},
             "userId":${recip.userId},
             `

            const ingredientsList = document.createElement('ol');
             for (const ingredient of recip.ingredients) {
                const liIngredients = document.createElement('li');
                liIngredients.innerText = "ingredients " + ingredient;
                ingredientsList.appendChild(liIngredients);

        //         ol.appendChild(li);
            }
             const instructionsList  = document.createElement('ol');
            for (const instruction of recip.instructions) {
                const liInstructions = document.createElement('li');
                liInstructions.innerText = instruction;
                instructionsList.appendChild(liInstructions);

            }
            div.append(divWithInfo, ingredientsList, instructionsList );
            recipesDiv.appendChild(div);
        }
    })

// caloriesPerServing:300
// cookTimeMinutes:15
// cuisine:"Italian"
// difficulty:"Easy"
// id:1
// image:"https://cdn.dummyjson.com/recipe-images/1.webp"
//         ingredients:(6) ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella cheese', 'Fresh basil leaves', 'Olive oil', 'Salt and pepper to taste']
//         instructions:(6) ['Preheat the oven to 475°F (245°C).', 'Roll out the pizza dough and spread tomato sauce evenly.', 'Top with slices of fresh mozzarella and fresh basil leaves.', 'Drizzle with olive oil and season with salt and pepper.', 'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.', 'Slice and serve hot.']
// mealType:['Dinner']
// name:"Classic Margherita Pizza"
// prepTimeMinutes:20
// rating:4.6
// reviewCount:98
// servings:4
//         tags:(2) ['Pizza', 'Italian']
// userId:166