// Importing React
import React from 'react';
// Importing ReactPlayer from react-player library/package
import ReactPlayer from "react-player"

// Function for SoundCloud soundtrack
function SoundCloud() {
    // Return method will recall what to output
    return (
        // React Player component handler
        // URL leads to a Bossa Nova (Brazilian Jazz) SoundCloud soundtrack
        <div className="App">
            <div align="center">
                <div>
                    <ReactPlayer
                        url="https://soundcloud.com/sebo_0/sol-de-bossa-bossa-nova-full-album"
                    />
                </div>
            </div>
        </div>
    );
}

// Exporting the SoundCloud module/SoundCloud.js
export default SoundCloud;
