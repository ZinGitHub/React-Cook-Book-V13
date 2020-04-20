// Importing React
import React from 'react';


// Establishing the Popup class which extends to the React component
class Popup extends React.Component {
  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // Return method will recall what to output
    return (
      // Div class to return the properties/attributes of popup
      // Div class to return the properties/attributes of popup_inner
      // <h1> tag for the prop text Cooking Food Safety Precautions
      // a line of text in bold and underline stating Follow these safety precautions in order from preventing getting ill.
      // An ordered list for all the major points when it comes to food safety
      // An unordered list that is attached to the list item Wash your hands for 20 seconds
      // <div align="center:> to center button text Click to close 
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <p><b><u>Prevent yourself from getting ill.</u></b></p>
          <ol>
            <li>Wash your hands for 20 seconds</li>
            <li>Clean and disinfect kitchen surfaces.</li>
            <li>Clean and disinfect cutting boards.</li>
            <li>Don't cross contaminate.</li>
            <li>Cook to proper tempertures.</li>
            <li>Refrigerate properly.</li>
          </ol>
          <div align="center">
          <button onClick={this.props.closePopup}>Click To Close</button>
          </div>
        </div>
      </div>
    );
  }
}

// Exporting the Popup
export default Popup;