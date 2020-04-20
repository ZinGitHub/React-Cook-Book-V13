// Importing the React component
import React, { Component } from 'react';
// Importing from the Recipe.js file
import Recipe from './Recipe';
// Importing from the Navigation.js file
import Navigation from './Navigation';



// Establishing a app class that extends to React component
class App extends Component {
  // contruction method to create an object from the class
  constructor(props) {
    // Needed to make sure that this.props is defined in the constructor
    super(props);
    // // The changeRecipe function is connected to a bind() method which will create the function to change food dish
    this.selectNewRecipe = this.selectNewRecipe.bind(this);
    //
    this.state = {
      // Setting the initial state of the components
      recipes: [
        {
          // Food dish name: Beef Stew
          title: 'Beef Stew',
          // Ingredients for beef stew
          ingredients: [
            '1 tbsp. vegetable oil',
            '2 lb. beef chuck stew meat, cubed into 1 inch pieces',
            '1 tbsp. extra-virgin olive oil',
            '1 onion, chopped',
            '2 carrots, peeled and cut into rounds',
            '2 stalks celery, chopped',
            'Kosher salt',
            'Freshly ground black pepper',
            '3 cloves garlic, minced',
            '1/4 cup. tomato paste',
            '6 cups. low-sodium beef broth',
            '1 cup. red wine',
            '1 tbsp. Worcestershire sauce',
            '1 tsp. dried thyme',
            '2 bay leaves',
            '1 lb. baby potatoes, halved',
            '1 cup. frozen peas',
            '1/4 cup. freshly chopped parsley, for garnish',
            // Image of beef stew with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food1.jpg"></img>
            </div>
          ],
          // Instructions to cook beef stew
          steps: [
            'In a large dutch oven (or pot), over medium heat, heat oil. Add beef and cook on all sides until seared, 10 minutes, working in batches if necessary. Transfer beef to a plate. ',
            'In the same pot, cook onion, carrots, and celery until soft, 5 minutes. Season with salt and pepper. Add garlic and tomato paste and cook until garlic is fragrant and tomato paste has darkened, 2 minutes.',
            'Add beef back to dutch oven then add broth, wine, Worcestershire sauce, thyme, and bay leaves. ',
            'Bring to a boil then reduce heat to a simmer. Season with salt and pepper. Cover and let simmer until beef is tender, 30 minutes.',
            'Add potatoes and simmer, covered, until potatoes are tender, 15 minutes. ',
            'Remove bay leaves. Stir in peas and cook until warmed through, 2 minutes. Garnish with parsley befor serving.',
            'Enjoy your beef stew!',
          ],
          // ID of the food dish: Beef Stew
          id: 'Beef Stew'
        },
        {
          // Food dish name: Homemade Pizza
          title: 'Homemade Pizza',
          // Ingredients for homemade pizza
          ingredients: [
            'FOR THE DOUGH:',
            'Cooking spray',
            '1 1/4 cups. lukewarm water',
            '1 tbsp. granulated sugar',
            '1 (1/4-oz.) packet active dry yeast (2¼ tsp.) ',
            '3 cups. all-purpose flour',
            '2 tsp. kosher salt',
            '1/4 cup. extra-virgin olive oil',
            'FOR THE PIZZA:',
            'Extra-virgin olive oil, as needed',
            '1/4 cup. cornmeal, divided ',
            '1 c. marinara, divided ',
            '16 oz. fresh mozzarella, thinly sliced, divided',
            'Fresh basil leaves',
            'Pinch red pepper flakes',
            // Image of homemade pizza with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food2.png"></img>
            </div>
          ],
          // Instructions to cook homemade pizza
          steps: [
            'Grease a large bowl with cooking spray. In a small bowl add water and sugar and stir to dissolve, then sprinkle over yeast and let sit until frothy, about 8 minutes.',
            'In another large bowl, add flour, salt, and oil. Pour in yeast mixture, then mix with a wooden spoon until everything is combined and a shaggy dough begins to form. Knead against sides of bowl until dough starts to come together, then turn onto your work surface and knead, adding a pinch of flour if needed, until it feels elastic and only slightly tacky, 5 minutes. Form into a tight ball, place into prepared bowl, and cover with a clean dish towel. Let rise in a warm spot in your kitchen until doubled in size, about 1 hour and 30 minutes.',
            'Gently punch down dough, then divide in 2, and roll into balls. At this point, you can freeze one, or make two pizzas. Let dough balls rest as you preheat oven to 500° and grease a large baking sheet with olive oil. Sprinkle all over with 2 tablespoons cornmeal. ',
            'On your work surface, gently flatten one ball of dough and roll with a rolling pin (or stretch with your hands) until about 12” in diameter (as thin as you can). Carefully transfer to prepared baking sheet and brush dough all over with oil. Then, add your 1/2 cup sauce to middle of dough and spread outwards with a spoon or ladle, leaving about 1” for the crust. Top with half the slices of mozzarella. Bake until crust is golden and cheese is melty, about 15 minutes. ',
            'Top with fresh basil leaves, a drizzle of olive oil, and red pepper flakes. ',
            'Repeat with remaining dough and toppings for second pizza. ',
            'Enjoy your homemade pizza!'
          ],
          // ID of the food dish: Homemade Pizza
          id: 'Homemade Pizza'
        },
        {
          // Food dish name: Cheese Grits
          title: 'Cheese Grits',
          // Ingredients for cheese grits
          ingredients: [
            '2 cups. low-sodium chicken broth ',
            '2 cups. water',
            'Kosher salt',
            '1 cup. corn grits',
            '4 tbsp. butter, divided',
            '1 cup. shredded cheddar',
            '1/4 cup. freshly grated Parmesan',
            'Freshly ground black pepper',
            // Image of cheese grits with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food3.png"></img>
            </div>
          ],
          // Instructions to cook cheese grits
          steps: [
            'In a medium saucepan, bring chicken broth and water to a boil and season generously with salt. Reduce heat so mixture is at a simmer, then whisk in grits. Simmer, stirring often, until grits have absorbed liquid and are very tender, 10 minutes.',
            'Stir in butter and cheeses, then season with salt and pepper.',
            'Enjoy your cheese grits!'
          ],
          // Id of the food dish: Cheese Grits
          id: 'Cheese Grits'
        },
        {
          // Food dish name: Beef Stroganoff
          title: 'Beef Stroganoff',
          // Ingredients for beef stroganoff
          ingredients: [
            '1 (12-oz.) package egg noodles',
            '2 tbsp. butter',
            '1 tbsp. vegetable oil',
            '1 lb. beef chuck roast, cut into 1" pieces',
            'Kosher salt',
            'Freshly ground black pepper',
            '2 tbsp. extra-virgin olive oil, divided',
            '1 lb. baby Bella mushrooms, thinly sliced',
            '1/2 large onion, chopped',
            '2 cloves garlic, minced',
            '2 tsp. fresh thyme leaves',
            '1 tbsp. tomato paste',
            '4 cups. low-sodium beef or chicken broth',
            '2 tsp. dijon mustard',
            '1 tsp. Worcestershire sauce',
            '2 tbsp. cornstarch',
            '2 tbsp. sour cream, plus more for serving',
            '2 tbsp. freshly chopped parsley',
            // Image of beef stroganoff with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food4.jpg"></img>
            </div>
          ],
          // Instructions to cook beef stroganoff
          steps: [
            'Prepare egg noodles according to package instructions and toss with butter while still hot.',
            'In a large skillet over medium-high heat, heat vegetable oil. Add beef and sear 8 to 10 minutes, until golden on all sides, and season with salt and pepper. Work in batches if needed. Remove beef and place in a large bowl.',
            'Lower heat to medium and add one tablespoon olive oil. Add mushrooms and cook until golden and tender, 8 to 10 minutes. Remove from skillet and place in bowl with beef.',
            'Add remaining olive oil and add onion. Cook until tender, 6 minutes. Add garlic, thyme, and tomato paste and cook until fragrant, 2 minutes more. Stir in broth, mustard, and Worcestershire sauce and bring to a simmer. ',
            'In a small bowl, whisk some of the hot broth into your cornstarch. Stir into broth along with reserved beef and mushrooms and continue to simmer until thickened by about half, 10 to 12 minutes. Remove from heat and stir in sour cream. Season with salt and pepper.',
            'Spoon beef mixture over prepared egg noodles and garnish with a dollop of sour cream and parsley.',
            'Enjoy your beef stroganoff!'
          ],
          // ID of the food dish: Beef Stroganoff
          id: 'Beef Stroganoff'
        },
        {
          // Food dish name: Smothered Pork chops
          title: 'Smothered Pork Chops',
          // Ingredients for pork chops
          ingredients: [
            '4 thick, bone-in pork chops',
            'Kosher salt',
            'Freshly ground pepper',
            '1 cup. all-purpose flour',
            '2 tsp. garlic powder',
            '1/4 tsp. chili powder',
            '1/4 cup. plus 3 tablespoons vegetable or canola oil, divided',
            '2 medium yellow onions, thinly sliced',
            '2 tbsp. butter',
            '1 1/2 cups. low-sodium chicken broth',
            '1/4 cup. heavy cream',
            'Chopped fresh parsley, for garnish',
            // Image of smothered pork chops with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food5.jpg"></img>
            </div>
          ],
          // Instructions to cook pork chops
          steps: [
            'Season pork chops all over with salt and pepper.',
            'In a shallow dish, mix together flour with garlic powder and chili powder. Coat pork chops in flour, shaking off excess. Reserve 2 tablespoons seasoned flour.',
            'In a large, heavy skillet over medium heat, heat 1/4 cup oil until shimmering. In batches, cook pork chops until golden, 4-5 minutes per side. Transfer to plate. Wipe out skillet.',
            'Reduce heat to medium low, pour in remaining oil, and add onions. Season with more salt and pepper and cook until very soft and slightly caramelized, 15-20 minutes. Add butter and let melt, then sprinkle in reserved flour. Cook until flour is no longer raw, about a minute. Stir in chicken broth and heavy cream and bring to a simmer, until sauce begins to thicken, about 5 minutes.',
            'Return pork chops to skillet and cook until pork is cooked through, about 10 minutes more. ',
            'Garnish with parsley and serve immediately.',
            'Enjoy your smothered pork chops!'
          ],
          // ID of the food dish: Smothered Pork Chops
          id: 'Smothered Pork Chops'
        },
        {
          // Food dish name: French Onion Soup
          title: 'French Onion Soup',
          ingredients: [
            // Ingredients for french onion soup
            '4 tbsp.  butter',
            '3 large white onions, thinly sliced into half moons',
            '2 tbsp. all-purpose flour',
            'Kosher salt',
            'Freshly ground black pepper',
            '1/2 cup white wine',
            '2 cups low-sodium chicken stock',
            '4 cups low-sodium beef stock',
            '8 sprigs fresh thyme, plus more for garnish',
            '8 baguette slices',
            '1 cup grated Gruyère',
            // Image of french onion soup with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food6.jpg"></img>
            </div>
          ],
          // Instructions to cook french onion soup
          steps: [
            'In a large pot over medium-high heat, melt butter. Add onions and cook, stirring occasionally, until deeply golden, 25 minutes. Add flour and cook 1 minute until no longer raw. Season with salt and pepper, then add white wine and let simmer until evaporated, 3 minutes. Add chicken and beef stocks and thyme and bring to a boil. Reduce heat to medium and simmer 15 minutes. Season with salt and pepper and remove thyme.',
            'Preheat broiler to high. Place 2 baguette slices on a large baking sheet and top each slice with 2 tablespoons cheese. Place under broiler until cheese is bubbling and golden brown, 1 minute.',
            'Serve soup in bowls or large mugs with baguette slice on top. Garnish with a thyme spring.',
            'Enjoy your french onion soup!'
          ],
          // ID of the food dish: French Onion Soup
          id: 'French Onion Soup'
        },
        {
          // Food dish name: Turkey Tetrazzini
          title: 'Turkey Tetrazzini',
          // Ingredients for turkey tetrazzini
          ingredients: [
            'Cooking spray',
            '1 lb. spaghetti',
            '6 tbsp. butter, divided',
            '2 cloves garlic, minced',
            '1 lb. sliced baby bella mushrooms',
            '1/2 cup white wine',
            '1/4 cup all-purpose flour',
            '2 1/2 cups low-sodium chicken broth',
            '1 cup heavy cream',
            'Kosher salt',
            'Freshly ground black pepper',
            '2 lb. leftover roast turkey, chopped (about 3 cups)',
            '1 cup shredded white cheddar',
            '1 cup frozen peas',
            '1 tsp. dried oregano',
            '1 cup panko',
            '1/2 cup freshly grated Parmesan',
            // Image of turkey tetrazzini with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food7.jpg"></img>
            </div>
          ],
          // Instructions to cook turkey tetrazzini
          steps: [
            'Preheat oven to 350° and grease a 9”-x-13” baking dish with cooking spray. In a large pot of boiling salted water cook spaghetti according to package directions. Drain.',
            'In a large skillet over medium heat, melt 2 tablespoons butter. Add garlic and cook until fragrant, 1 minute. Add mushrooms and wine and cook until most of wine is absorbed and mushrooms are soft, 5 minutes.',
            'Add remaining 4 tablespoons butter to skillet, then whisk in flour and cook until golden, 3 minutes. Slowly add broth and cream and whisk until no lumps remain. Simmer until thickened, 5 minutes. Season with salt and pepper.',
            'Add turkey, cheese, peas, and oregano and toss until combined. Add cooked spaghetti and toss to coat. Season with salt and pepper.',
            'Transfer mixture to prepared dish and top with panko and Parmesan. Bake until top is golden and cheese is melty, 25 minutes. Let cool 10 minutes before serving.',
            'Enjoy your turkey tetrazzini!'
          ],
          // ID of the food dish: Turkey Tetrazzini
          id: 'Turkey Tetrazzini'
        },
        {
          // Food dish name: Buffalo Mac & Cheese
          title: 'Buffalo Mac & Cheese',
          // Ingredients for buffalo mac & cheese
          ingredients: [
            '1 lb. elbow macaroni',
            '3 tbsp. butter, plus 2 tbsp. melted butter',
            '3 tbsp. all-purpose flour',
            '2 cups milk',
            '1 cup shredded cheddar',
            '1 cup shredded Monterey jack',
            '1/2 cup ranch dressing',
            '1/3 cup buffalo sauce, plus more for garnish',
            'Kosher salt',
            'Freshly ground black pepper',
            '8 slices bacon, cooked and crumbled',
            '3/4 cup panko bread crumbs',
            'Chopped chives, for garnish',
            // Image of buffalo mac & cheese with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food8.jpg"></img>
            </div>
          ],
          // Instructions to cook buffalo mac & cheese
          steps: [
            'Preheat oven to 375°. Butter a 9”-x-13” baking dish. In a large pot of boiling salted water, cook pasta according to package instructions. Drain and set aside.',
            'Melt 3 tablespoons of the butter in a medium pot over medium. Add flour and cook, stirring, 1 minute. Slowly add milk to flour mixture, while whisking constantly. Continue whisking until mixture thickens, about 5 minutes.',
            'Remove pot from heat and stir in cheeses until fully melted. Stir in ranch dressing and buffalo sauce and season with salt and pepper. Fold pasta and crumbled bacon into the cheese mixture and scrape into the prepared baking dish.',
            'Toss panko with melted butter and sprinkle on top. Bake until bubbly and golden, 25 to 30 minutes.',
            'Sprinkle with chives and more hot sauce before serving.',
            'Enjoy your buffalo mac & cheese!'
          ],
          // ID of the food dish: Buffalo Mac & Cheese
          id: 'Buffalo Mac & Cheese'
        },
        {
          // Food dish name: Pot Chicken Noodle Soup
          title: 'Pot Chicken Noodle Soup',
          // Ingredients for pot chicken noodle soup
          ingredients: [
            '2 tbsp. extra-virgin olive oil',
            '1 small yellow onion, chopped',
            '2 medium carrots, peeled and chopped',
            '2 stalks celery, chopped',
            '2 cloves garlic, minced',
            '2 tsp. fresh thyme leaves',
            '2 bay leaves (optional)',
            '2 lb. boneless skinless chicken breasts (about 4)',
            'Kosher salt',
            'Freshly ground black pepper',
            '4 cups low-sodium chicken broth',
            '4 cups cold water',
            '8 oz. egg noodles',
            'Pinch crushed red pepper flakes (optional)',
            'Juice of 1/4 lemon (optional)',
            '2 tbsp. freshly chopped parsley, for garnish',
            // Image of pot chicken noodle soup with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food9.jpg"></img>
            </div>
          ],
          // Instructions to cook pot chicken noodle soup
          steps: [
            'Turn Instant Pot to Sauté setting. Heat oil, then add onion, carrots, and celery. Cook, stirring occasionally, until vegetables are slightly tender, 6 to 8 minutes. Add garlic and thyme and cook until fragrant, 1 minute. Add bay leaves if using, then add chicken breasts and season generously with salt and pepper. Add broth and water and close lid. Set Instant Pot to Soup setting and set timer for 7 minutes.',
            'When cooking is complete and air has been naturally released from Instant Pot, carefully remove lid and use tongs to remove chicken breasts onto a plate or cutting board. Using two forks, shred chicken, then return chicken to pot. Remove bay leaves and add egg noodles. Return Instant Pot to Sauté setting and cook, uncovered, until noodles are cooked through, 4 to 6 minutes.',
            'Turn off Instant Pot and stir in pepper flakes and lemon juice if using. Ladle into bowls and top with parsley and more black pepper before serving.',
            'Enjoy your pot chicken noodle soup!'
          ],
          // ID of food dish: Pot Chicken Noodle Soup
          id: 'Pot Chicken Noodle Soup'
        },
        {
          // Food dish name: Chicken, Spinach & Artichoke Lasagna
          title: 'Chicken, Spinach & Artichoke Lasagna',
          // Ingredients for Chicken, Spinach & Artichoke Lasagna
          ingredients: [
            '1 lb. lasagna noodles',
            '3 tbsp. butter',
            '2 cloves garlic, minced',
            '3 tbsp. all-purpose flour',
            '3 cups milk (preferably whole or 2%)',
            'Kosher salt',
            'Freshly ground black pepper',
            '1 cup freshly grated Parmesan',
            '2 cups shredded rotisserie chicken',
            '1/2 lb. frozen chopped spinach, thawed and squeezed of excess liquid',
            '1 (15-oz.) can artichoke hearts, drained and chopped',
            '2 (15-oz.) containers part-skim ricotta',
            '4 cups shredded mozzarella',
            // Image of chicken, spinach & artichoke lasagna with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food10.png"></img>
            </div>
          ],
          // Instructions to cook Chicken, Spinach & Artichoke Lasagna
          steps: [
            'Preheat oven to 350°. In a large pot of salted boiling water, cook lasagna noodles according to package directions until al dente. Drain and transfer to a baking sheet to cool.',
            'Meanwhile, in a large skillet over medium heat, melt butter. Add garlic and cook until fragrant, 1 minute, then add flour and cook 1 minute more. Pour in milk and season with salt and pepper. Bring to a simmer and let thicken, 2 to 4 minutes. Add Parmesan and stir until creamy, then add chicken, spinach, and artichokes and stir until combined.',
            'Assemble lasagna: Spread a thin layer of chicken mixture in a large baking dish and top with a layer of overlapping noodles. Spread a layer of ricotta over the noodles, add a layer of chicken mixture, and sprinkle with a layer of mozzarella. Repeat for three layers total, ending with mozzarella.',
            'Tent with foil and bake for 35 minutes. Remove foil and bake until browned and bubbly, 10 minutes more.',
            'Let cool for 15 minutes before slicing and serving.',
            'Enjoy your chicken, spinach, & artichoke lasagna!'
          ],
          // ID of the food dish: Chicken, Spinach & Artichoke Lasagna
          id: 'Chicken, Spinach & Artichoke Lasagna'
        },
        {
          // Food dish name: Pot Beef Chili
          title: 'Pot Beef Chili',
          // Ingredients for pot beef chili
          ingredients: [
            '1/4 cup brown rice',
            '2 tbsp. extra-virgin olive oil',
            '6 oz. ground beef, 90% lean',
            '2 tsp. chili seasoning',
            '1 tsp. beef base (bouillon powder)',
            '1/2 cup onions, diced',
            '2 cloves garlic',
            '1 (15.5-oz.) can kidney beans, drained and rinsed',
            '1 (14.5-oz.) can diced tomatoes',
            'Lime wedges, for serving',
            '1/4 cup freshly chopped cilantro, for serving',
            // Image of pot beef chili with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food11.png"></img>
            </div>
          ],
          // Instructions to cook pot chili beef
          steps: [
            'Cook the brown rice according to package instructions.',
            'Meanwhile, turn on the Instant Pot, then choose the Sauté program and the Normal setting. Once it has come up to temperature, add oil.',
            'Add the beef and cook until golden. Add chili seasoning, beef base, onions, and garlic, and cook for 3 minutes, stirring frequently.',
            'Add the beans and the tomatoes and stir well. Close the lid and the vent. Select the Meat and Stew program and the Normal setting. Adjust the timer to 20 minutes. Quick release the pressure according to manufacturers directions.',
            'Serve with brown rice and garnish with lime wedge and cilantro.',
            'Enjoy your pot beef chili!'
          ],
          // ID of the food dish: Pot Chili Beef
          id: 'Pot Beef Chili'
        },
        {
          // Food dish name: Cheese Manicotti
          title: 'Cheese Manicotti',
          // Ingredients for cheese manicotti
          ingredients: [
            '1 (8-oz.) package manicotti',
            '1 tbsp. extra-virgin olive oil',
            '1/2 yellow onion, chopped',
            '2 cloves garlic, minced',
            '2 tbsp. tomato paste',
            '1 (28-oz.) can crushed tomatoes',
            '2 1/2 cups ricotta cheese',
            '1 cup shredded mozzarella',
            '1/2 cup freshly grated Parmesan',
            '1/4 cup freshly chopped basil, plus more for garnish',
            'Zest of 1/2 lemon',
            'Kosher salt',
            'Freshly ground black pepper',
            // Image of cheese manicotti with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food12.jpg"></img>
            </div>
          ],
          // Instructions to cook cheese manicotti
          steps: [
            'Preheat oven to 375°. In a large pot of salted boiling water, cook manicotti until al dente, 5 minutes. Drain.',
            'In a large skillet over medium heat, heat oil. Add onion and cook until soft, 6 minutes. Add garlic and tomato paste and cook 2 minutes more, until garlic is fragrant and tomato paste has darkened in color.',
            'Add crushed tomatoes (with juices) and reduce heat to medium low. Simmer 10 minutes.',
            'Meanwhile, make ricotta filling: in a large bowl, stir together ricotta, 1/2 cup mozzarella, 1/4 cup Parmesan, basil, and lemon zest. Season with salt and pepper.',
            'Into the bottom of a large baking dish, ladle a couple scoops of sauce. Smooth into an even layer. Spoon ricotta mixture into prepared manicotti and place side by side into baking dish, repeating until all ricotta mixture has been used. Top with remaining tomato sauce, mozzarella, and Parmesan. Bake until cheese is melted and bubbly, 15 to 20 minutes. Garnish with basil and serve immediately.',
            'Enjoy your cheese manicotti!'
          ],
          // ID of the food dish: Cheese Manicotti
          id: 'Cheese Manicotti'
        },
        {
          // Food dish name: Fried Lasagna
          title: 'Fried Lasagna',
          // Ingredients for fried lasagna
          ingredients: [
            'Cooking spray',
            '10 lasagna noodles, cooked according to package directions',
            '1 oz. (15-oz.) container ricotta',
            '4 large eggs, divided',
            '2 cloves garlic, minced',
            'Kosher salt',
            'Freshly ground pepper',
            '1 cup shredded mozzarella',
            '1/2 cup all-purpose flour',
            '2 cups Italian bread crumbs',
            'Vegetable oil, for frying',
            'Marinara sauce, warmed, for dipping',
            // Image of fried lasagna with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food13.jpg"></img>
            </div>
          ],
          // Instructions to cook fried lasagna
          steps: [
            'Grease a large baking sheet with cooking spray. Place cooked lasagna noodles in an even layer on top.',
            'In a medium bowl, stir together ricotta, 1 egg, and garlic and season with salt and pepper. Spread on each lasagna noodle and sprinkle with mozzarella.',
            'Fold each lasagna noodle three or four times to create a square. Freeze on prepared baking sheet until firm, 30 minutes.',
            'When ready to cook, put flour, remaining 3 eggs, and bread crumbs in three separate shallow bowls. Whisk eggs until beaten and season bread crumbs with salt and pepper. Working in batches, dredge lasagna squares in flour, then dip in eggs, and finally toss in bread crumbs to coat.',
            'In a large deep-sided skillet over medium heat, heat 1 1/2 inches oil until shimmering (about 350°). Using tongs, add 3 or 4 lasagna squares and cook until golden, 2 to 3 minutes per side. Drain lasagna squares on a paper towel–lined wire rack. Repeat with remaining lasagna squares.',
            'Serve with marinara.',
            'Enjoy your fried lasagna!'
          ],
          // ID of the food dish: Fried Lasagna
          id: 'Fried Lasagna'
        },
        {
          // Food dish name: Pizza Pot Pie
          title: 'Pizza Pot Pie',
          // Ingredients for pizza pot pie
          ingredients: [
            '2 tbsp. extra-virgin olive oil, plus more for crust',
            '2 c. broccoli florets, roughly chopped',
            '2 bell peppers, diced',
            '8 oz. sliced mushrooms',
            '1 lb. Italian sausage (sweet or spicy), casings removed',
            '1/4 cup all-purpose flour, plus more for rolling dough',
            '2 cloves garlic, minced',
            '1 tsp. dried oregano',
            'Kosher salt',
            'Freshly ground black pepper',
            '2 cups pizza sauce',
            '1/2 lb. refrigerated pizza dough',
            '2 cups shredded mozzarella',
            '1/4 cup sliced pepperoni',
            'Freshly grated Parmesan, for garnish',
            'Freshly chopped parsley, for garnish',
            // Image of pizza pot pie with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food14.jpg"></img>
            </div>
          ],
          // Instructions to cook pizza pot pie
          steps: [
            'Preheat oven to 400°. In a 10- or 12-inch oven-safe skillet over medium heat, heat oil. Add broccoli and bell peppers and cook, stirring often, until slightly soft, 5 minutes. Add mushrooms and cook, stirring, until soft, 4 minutes more.',
            'Add sausage and cook, breaking it up with a wooden spoon, until seared and no longer pink, about 4 minutes. Add flour and stir until vegetables and sausage are well coated, then add garlic and oregano and season with salt and pepper. Stir in pizza sauce and remove from heat. Let cool 10 minutes.',
            'On a lightly floured surface, roll out pizza dough into a large circle a couple inches bigger than your skillet. Top sausage mixture with mozzarella, then place dough round over skillet and carefully crimp edges. Brush with oil and top with pepperoni.',
            'Bake until crust is golden, about 40 minutes.',
            'Let cool 10 minutes, then sprinkle with Parmesan and parsley before serving.',
            'Enjoy your pizza pot pie!'
          ],
          // ID of the food dish: Pizza Pot Pie
          id: 'Pizza Pot Pie'
        },
        {
          // Food dish name: Shrimp Fettuccine Alfredo
          title: 'Shrimp Fettuccine Alfredo',
          // Ingredients for shrimp fettuccine alfredo
          ingredients: [
            '1 lb. fetuccine',
            '3 tbsp. butter, divided',
            '1 lb. shrimp, peeled and deveined, tails removed',
            'kosher salt',
            'Freshly ground black pepper',
            '2 cloves garlic, minced',
            '2 tbsp. all-purpose flour',
            '1 cup heavy cream',
            '1/2 cup whole milk',
            '1 egg yolk',
            '1 cup freshly grated Parmesan, plus more for garnish',
            '1 tbsp. Chopped parsley, for garnish',
            // Image of shrimp fettuccine alfredo with shrink hover animation
            <div class="img shrinkimage rotate">
              <img src="images/food15.jpg"></img>
            </div>
          ],
          // Instructions to cook shrimp fettuccine alfredo
          steps: [
            'Cook fettuccine according to the instructions on box, reserving a cup of pasta water to thicken the sauce, if needed.',
            'In a large skillet over medium heat, heat 1 tablespoon butter until melted. Add shrimp, season with salt and pepper and cook until pink and completely opaque, 2 to 3 minutes per side. Remove shrimp from skillet and set aside.',
            'Into the pan, add remaining 2 tablespoons butter and garlic. Cook until the garlic becomes fragrant, about 1 minute. Whisk in flour and cook until no longer raw, 2 minutes. Stir in heavy cream and milk, then whisk in egg yolk.  Bring to a low simmer and whisk in parmesan. When cheese is melted and sauce has thickened slightly, add cooked pasta and shrimp, tossing to combine. Season with salt and pepper.',
            'Garnish with more parmesan and parsley.',
            'Enjoy your shrimp fettuccine alfredo!'
          ],
          // ID of the food dish: Shrimp Fettuccine Alfredo
          id: 'Shrimp Fettuccine Alfredo'
        },
      ],
      // Setting the property of selectedRecipe as null
      selectedRecipe: null
    }
  }

  // Set selectedNewRecipe method with recipeId as parameter
  selectNewRecipe(recipeId) {
    // Change the component state
    if(recipeId) {
      this.setState({
        ...this.state,
        selectedRecipe: recipeId
      });
    }
  }
  
  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // recipeToSelect is declared as a block scope local variable
    let recipeToSelect;
    // An if statment for the selectedRecipe property/component
    if(this.state.selectedRecipe) { 
      // Define filteredRecipes as a constant with the filter method which will create a new array with all elements that is provided by the function
      const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
      // An if statement that will execute if the length of filteredRecipes is greater than 0
      if(filteredRecipes.length > 0) { 
        // If the if statement is executed then recipeToselect will equal to the filterdRecipes array = 0
        recipeToSelect = filteredRecipes[0];
      }
    }

    // Return method will recall what to output
    return (
      // Div tag (container) for className App
      // Aside tag that represents a portion of the document content that is indirectly related to the main content
      // h1 tag for the sidebar title (Recipe Book)
      // Return the Navigiation class
      // Navigation implemented to the state component of recipes
      // Navigation implemented to the state component of activeRecipe
      // Navigation implemented to the state component of recipeToSelect
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>Recipe Book</h1>
          <Navigation 
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        {
          // Return the Recipe class
          // the selected recipes will display ingredients
          // the selected recipes will display steps
          // the selected recipes will display the title
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            />
            :
            null
        }
      </div>
    );
  }

  // componentDidMount method()
  componentDidMount() {
    // Define recipeToShow as a constant with property App.state with recipes string property or null
    const recipeToShow = this.state.recipes[0].id || null;
    // Change the component state
    this.setState({
      ...this.state,
      selectedRecipe: recipeToShow
    });
  }
}

// Exporting the app module/App.js
export default App;