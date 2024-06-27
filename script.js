 // Array of recipes with their instruction
 const recipes = [
    {
        title: "Chicken Curry",
        instructions: "1. Heat oil in a pan.2. Add onions and sauté until golden brown. 3. Add chicken pieces and cook until browned. 4. Add spices and cook for another 2 minutes. 5. Add tomatoes and cook until soft. 6. Add water and simmer until chicken is cooked through."
         
    },
    {
        title: "Vegetable Salad",
        instructions: "1. Chop all vegetables. 2. Mix in a bowl. 3. Add salt, pepper, and dressing. 4. Toss well and serve chilled."
    },
    {
        title: "Chocolate Cake",
        instructions: "1. Preheat oven to 350°F. 2. Mix flour, cocoa powder, and baking powder. 3. In another bowl, beat sugar and eggs. 4. Combine dry and wet ingredients. 5. Pour batter into a baking pan. 6. Bake for 30-35 minutes."
    },
    {
        title: "Mutton Biryani",
        instructions: "1. Marinate mutton with spices and yogurt. 2. Cook rice with whole spices. 3. Layer rice and mutton in a pot. 4. Cook on low heat for 30 minutes. 5. Serve hot."
    },
{
    title:"Pizza",
    instructions:"1.153 grams 00 flour (1 cup plus 1 tablespoon). 2.153 grams all-purpose flour (1 cup plus 1 tablespoon and 2 teaspoons). 3.8 grams fine sea salt (1 teaspoon). 4.2 grams active dry yeast (3/4 teaspoon),5.4grams extra-virgin olive oil (1 teaspoon)"
},
{
    title:"Barfi /Kajukatli",
    instructions:"1 cup cashews (kaju),2.Grind the kaju to a smooth powder,3. Combine ½ cup sugar and 5 tablespoons water in a thick bottomed pan (or kadai or a non-stick pan).4. Keep on low flame and let the sugar dissolve in the water.5. When the sugar completely dissolves in the water, add the cashew powder.7. The mixture will thicken and start coming together to form a very soft dough.8. Put the entire cashew dough on a work surface.9. Knead the dough lightly, flatten it and place it on a greased plate or tray.10. You can also place it on a large piece of parchment or butter paper.11. To smoothen the cracks, place parchment paper on top and roll more.13. Once cooled completely, cut the cashew dough into squares or diamond shapes. Scrape off the uneven edges and enjoy as a little snack as you work."
},
{
    title:"Sandwich",
    instructions:"1.Choose your bread (and if you want it toasted).2.Spread condiments like mayo, ketchup, or mustard.3.Layer meats, like ham, roast beef, or turkey on the bottom slice.4.Add slices of cheese, like Cheddar, Provolone, or Swiss.5.Top your sandwich with fresh veggies, like lettuce, onion, and tomato.6.Finish your sandwich with salt, pepper, or oregano."
},
{
    title:"Fish",
    instructions:"1.1 tbsp (15 mL) vegetable oil, such as canola, coconut, or olive oil2.1 medium-sized onion, peeled and chopped,3.1 clove of garlic, peeled and minced,4.1 to 2 tbsp (15 to 30g) of curry paste,5.One 14 oz (400 g) can of diced tomatoes,6.7  fl oz (210 mL) of vegetable broth,8.12 oz (340 g) of white fish, such as haddock, flounder, or cod"
}
,
{
    title:"Pasta",
    instructions:"1)10 oz. spiral pasta we used tri-colour pasta like this 300g,2)4 cups water 1 liter,3)¼ cup defrosted spinach tightly packed OR 2 cups fresh baby spinach leaves,4)Zest of ½ lemon,5)1 garlic clove finely chopped,6)1 teaspoon salt,7)5 cherry tomatoes cut into quarters"
    
},
{
    title:"Paneer",
    instructions:"1. 1 to 1¼pounds paneer, cut into 1-inch cubes (2 to 3 packages, depending on size)2. 5 to 6tablespoons plain whole-milk Greek yogurt,3. 3tablespoons ghee or unsalted butter, melted,4. Kosher salt (such as Diamond Crystal) and freshly ground black pepper,5. 2tablespoons neutral oil, such as vegetable, safflower or grapeseed oil,6. 1teaspoon cumin seeds,7. ½teaspoon fenugreek seeds (optional),8. 2cardamom pods, cracked,9. 1cinnamon stick,10. 1medium yellow onion, finely chopped,11. 3garlic cloves, minced or finely grated,12. 2teaspoons finely grated fresh ginger (from about ¾-inch piece),13. 2teaspoons garam masala,14. ¼teaspoon ground turmeric,15. Pinch of ground cayenne or red-pepper flakes,16. 1(15-ounce) can whole plum tomatoes,17. ½cup coarsely chopped cilantro leaves and tender stems, plus more for garnish",
},
{
    title:"Breadomlet",
    instructions:"1. 2 Bread slices,2. 2 Eggs,3. 1/2 Onion, chopped,4. 1/4 Red bell pepper, chopped,5. 1/4 Green bell pepper, chopped."
},
{
    title:"Puffs",
    instructions:"1. 1 Puff Pastry Sheet,2. 3 Large Eggs,3. 2 tsp Oil,4. 1 Medium Onion, finely chopped,5. 1 tablespoon Tomato paste (optional),6. ½ teaspoon Red Chili powder7. ½ teaspoon Garam Masala,8. To taste Salt",
},
{
    title:"Snacks",
    instructions:""
},
{
    title:"VegBiryani",
    instructions:"1. 2cups basmati rice,2. ¼cup ghee or any neutral oil,3. 1dried bay leaf,4. 2whole star anise (optional),5. 4whole cloves,6. 4cardamom pods,7. 4fresh Thai green chiles or green finger chiles, stems removed,8. 1medium red onion, finely chopped,9. 1tablespoon ginger paste or freshly grated ginger,10. 1tablespoon garlic paste or freshly grated garlic,11. ½teaspoon turmeric powder,12. 2teaspoons Kashmiri red chile powder or other ground red chile,13. 1plum tomato, finely chopped,14. ½cup chopped cilantro leaves,15. ½cup chopped mint leaves,16. 1medium carrot, peeled and thinly sliced,17. 1small potato, peeled and finely diced,18. 1cup small cauliflower florets,19. ½cup frozen green peas, thawed,20. ½cup cut green beans (fresh or frozen),21. ½cup full-fat Greek yogurt,22. 2tablespoons fine sea salt,23. 2½cups unsalted vegetable stock or water,24. 1teaspoon garam masala,25. 1tablespoon fresh lemon juice, plus 3 lemon slices,26. ½cup fresh pomegranate seeds (optional),27.¼cup toasted or fried cashews, halved (optional)",
},
{
    title:"Paneer TIkka Masala",
    instructions:"1. 1 Puff Pastry Sheet2. 3 Large Eggs,3. 2 tsp Oil,4. 1 Medium Onion, finely chopped,5. 1 tablespoon Tomato paste (optional),6. ½ teaspoon Red Chili powder,7. ½ teaspoon Garam Masala,8. To taste Salt",
}
];

// Function to search recipes and show instructions in a popover
function searchRecipes() {
    const searchQuery = document.getElementById('sbar').value.toLowerCase();
    const recipe = recipes.find(r => r.title.toLowerCase().includes(searchQuery));

    if (recipe) {
        document.getElementById('recipeTitle').innerText = recipe.title;
        document.getElementById('recipeInstructions').innerText = recipe.instructions;
        document.getElementById('popover').style.display = 'block';
    } else {
        alert('Recipe not found');
    }
    return false; // Prevent form submission
}

// Function to close the popover
function closePopover() {
    document.getElementById('popover').style.display = 'none';
}

