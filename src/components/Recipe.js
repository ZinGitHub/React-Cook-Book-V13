// Importing the React component
import React, { Component } from 'react';
// Importing the PropTypes
import PropTypes from 'prop-types';

// Establishing a recipe class that extends to React component
class Recipe extends Component {
  // Render the React element into DOM in the container
  // Render to the webpage.
  render() {
    // Define ingredients as a constant with the map method which will create a new array from the results of the called function
    const ingredients = this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    // Define steps as a constant with the map methos which will create a new array from the results of the called function
    const steps = this.props.steps.map((step, i) => <li key={i}>{step}</li>);
    // Return method will recall what to output
    return (
      // HTML div tag (container) for className Recipe
      // h2 tag for className Recipe_title...
      // h3 tag for className Recipe_sub-title which will be displayed as the word INGREDIENTS
      // An unordered list for className Recipe_ingredients which will display the actual ingredients
      // h3 tag for className Recipe_sub-title which will be displayed as the word STEPS
      // An ordered list for the className Recipe_steps which will display the actual steps
      <div className="Recipe">
        <h2 className="Recipe__title">{this.props.title}</h2>
        <h3 className="Recipe__sub-title">Ingredients</h3>
        <ul className="Recipe__ingredients">
          {ingredients}
        </ul>
        <h3 className="Recipe__sub-title">Steps</h3>
        <ol className="Recipe__steps">
          {steps}
        </ol>
      </div>
    );
  }
}
// Recipe class with prop-types to document and check properties passed to components
Recipe.propTypes = {
  // Ingrideints has prop-tpyes to define that an array is required
  ingredients: PropTypes.array.isRequired,
  // Steps has prop-types to define that an array is required
  steps: PropTypes.array.isRequired,
  // Title has prop-types to define that a string is required
  title: PropTypes.string.isRequired,
  // Id has prop-types to define that string is required
  id: PropTypes.string.isRequired,
};

// Exporting the Recipe module/Recipe.js
export default Recipe;