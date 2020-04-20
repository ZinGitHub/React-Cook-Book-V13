// Importing the React component
import React, { Component } from 'react';
// Importing the PropTypes
import PropTypes from 'prop-types';

// Estasblishing a navigation class that extends to React component
class Navigation extends Component {
  // contruction method to create an object from the class
  constructor(props) {
    // Needed to make sure that this.props is defined in the constructor
    super(props);
    // The changeRecipe function is connected to a bind() method which will create the function to change food dish
    this.changeRecipe = this.changeRecipe.bind(this);
  }

  // changeRecipe function is used to pass as a second argumet for the React event
  // Tranisiton to a different recipe
  changeRecipe(e) {
    // Define buttonId as a constant with target property of the id interface 
    const buttonId = e.target.id;
    // Define recipeId as a constant with a .split method so split strings
    const recipeId = buttonId.split('_')[0];
    // recipeToSelect has prop-types that correlates to recipeId function
    this.props.recipeToSelect(recipeId);
  }

  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // Return method will recall what to output
    return (
      // Div tag (container) for className Navigation
      // nav tag for navigation on className Navigation_nav
      // An unordered list for the className Navigation_list
      // List items which are the food dishes
      // The name of the food dish acts as a button so if the user clicks a food dish the program will tranisiton to that food dish
      <div className="Navigation">
        <nav className="Navigation__nav">
          <ul className="Navigation__list">
            {
              this.props.recipes.map((recipe) => 
                <li>
                  <button 
                    id={recipe.id + '_button'} 
                    key={recipe.id}
                    onClick={this.changeRecipe}
                    className={
                      recipe.id  === this.props.activeRecipe  ? 
                        'Navigation__button Navigation__button--active' 
                        : 
                        'Navigation__button'
                    }
                  >
                    {recipe.title}
                  </button>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    );
  }
}

// Recipe class with prop-types to document and check properties passed to components
Navigation.propTypes = {
  // activeRecipe has prop-types to define that a string is required
  activeRecipe: PropTypes.string.isRequired,
  // recipes has prop-types to define that a array is required
  recipes: PropTypes.array.isRequired,
  // recipeToSelect has prop-types to define that a function (food dish) is required 
  recipeToSelect: PropTypes.func.isRequired
};

// Exporting the Navigation module/Navigation.js
export default Navigation;