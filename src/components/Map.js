// Importing the React component
import React, { Component } from 'react';
// Importing the Google Map API with the actual map, marker, and info window
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

// Defining mapStyles as a constant and will hold the values of the dimensions of the map
const mapStyles = {
  width: '100%',
  height: '100%',
};

// Exporting the class that basically contains all the Google map code and extend it to React component
export class MapContainer extends Component {
  // The property state of the MapContainer
  state = {
    //Hides or the shows the infoWindow
    // When map loads up the info window will initially hidden until clicked
    // info window = 'University of Advancing Technology (UAT)'
    showingInfoWindow: false,  
    // When map loads up a red marker will appear 
    activeMarker: {},          
    // //Shows the infoWindow to the selected place upon a marker
    selectedPlace: {}          
  };

  // An event handler for when the marker is clicked
  onMarkerClick = (props, marker, e) =>
    // Add changes to the component satete and re-render with the updated state
    this.setState({
      // //Shows the infoWindow to the selected place upon a marker
      selectedPlace: props,
      // Apply the default Google Map marker
      activeMarker: marker,
      // Display the window with the name of location once marker is clicked
      showingInfoWindow: true
    });
  
  // An event handler for when marker has not been clicked or if user clicks of info window
  onClose = props => {
    // If the infor window is already displayed then process the code block within the if statment
    if (this.state.showingInfoWindow) {
      // Add changes to the component satete and re-render with the updated state
      this.setState({
        // Do not display the info window
        showingInfoWindow: false,
        // The property of the marker will be set to null
        activeMarker: null
      });
    }
  };
  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // Return method will recall what to output
    return (
      // Google Map component handler
      <Map
        // Set the property to Google Maps
        google={this.props.google}
        // When map intially loads set the zoom to 15
        // The higher the number the more zoomed in when the map is loaded
        // The lower the number the less zoomed in when the map is loaded
        zoom={15}
        // Set the style of the map equal to the data that the mapStyles is holding
        style={mapStyles}
        // The coordinates to UAT
        initialCenter={{
          // Latitude
          lat: 33.377380,
          // Longitude
          lng: -111.976200
        }}
      >
        <Marker // Place a marker on the map
          // When the marker is clicked recall to onMarkerClock event handler
          onClick={this.onMarkerClick}
          // The name of the marker which will be displayed in the info window is 'University of Advancing Technology (UAT)'
          name={'University of Advancing Technology (UAT)'}
        />
        <InfoWindow // Place a info window
          // Info window will only be activated once the marker is activated via being clicked
          marker={this.state.activeMarker}
          // The info window is controlled by a visible prop which is a boolean value dtermining wether to display info window
          visible={this.state.showingInfoWindow}
          // onClose event is activated when the info window is closed
          onClose={this.onClose}
          // These are the comments for the code below because I couldn't put them their
          // The 'University of Advancing Technology (UAT)' will be displayed under header 4 text
          // </InfoWindow> is the closing tage for the info window
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4> 
          </div>
        </InfoWindow>
      </Map> // Closing tag for map
    );
  }
}

// Export the GoogleAPIWrapper witht the MapContainer class
export default GoogleApiWrapper({
  // The API key needed to enable the Google Maps API
  apiKey: 'AIzaSyBXC3IVGBuoet1VI38FX5HUpCMR6SHA9MI'
})(MapContainer);