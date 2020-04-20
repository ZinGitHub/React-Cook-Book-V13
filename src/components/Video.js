// Importing React
import React from "react"
// Importing ReactPlayer from react-player library/package
import ReactPlayer from "react-player"

// Function for YouTube video
function Video() {
    // Return method will recall what to output
    return (
        // Center align the YouTube video
        // React Player component handler
        // url leads to Gordon Ramsey 10 tips in cooking
        <div align="center">
            <div>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=wHRXUeVsAQQ"
                />
            </div>
        </div>
    )
}

// Exporting the Video module/Video.js
export default Video