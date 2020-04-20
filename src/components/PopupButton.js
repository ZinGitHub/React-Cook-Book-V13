// Importing the React component
import React, { Component } from 'react';
// Importing the Popup.js file
import Popup from './Popup';


// Establishing a PopupButton class that extends to React component
class PopupButton extends Component {
  // contruction method to create an object from the class
  constructor(props){
  // Needed to make sure that this.props is defined in the constructor
  super(props);
  // Only show popup when button is clicked
  this.state = { showPopup: false };
  }

  // Event handler in which it will display popup onc button is clicked
  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // Return method will recall what to output
    return (
      // Compound everything in a <div> tag
      // <div align="center"> to center the location of the button
      // Button is labeled as Click For Safety Information
      // Button is connected to toogle Popup event handler
      // Once popup is displayed the major line of text which will act as a title for the popup will be Cooking Food Safety Precautions
      // When the user clicks the button labeled Click To Close it will close the popup
      <div>
       <div align="center">
        <button onClick={this.togglePopup.bind(this)}> Click For Safety Information</button>
       </div>

       {this.state.showPopup ?
         <Popup
          text='Cooking Food Safety Precautions'
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div>

    );
  }
}

export default PopupButton;