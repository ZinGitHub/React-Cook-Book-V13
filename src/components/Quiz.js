// Importing React
import React from 'react';


// Establishing a Quiz class that extends to React component.
class Quiz extends React.Component {
  // Construction method to create an object from the class
  constructor(props) {
    // Needed to make sure that this.props is defined in the constructor.
    super(props)

    // The answers act as an array meaning the first option on the top is equal to zero.
    // answer: [
    // "option 1", = correct: 0
    // "option 2", = correct: 1
    // "option 3", = correct: 2
    // "option 4" = correct: 3

    // The variable that is essentially holding all the data concerning the questions, answers, and the correct answer.
    var dataSet = [
      {
        // First question asking about the beef stew
        question: "Question 1: How many chopped onions do you need for the beef stew?",
        // All available answers for question 1
        answers: [
          "2",
          "1",
          "4",
          "3"
        ],
        // Correct answer is the second option
        correct: 1
      },
      {
        // Second question asking about the homemade pizza
        question: "Question 2: How many cups of all-purpose flour do you need for the homemade pizza?",
        // All available answers for question 2
        answers: [
          "2",
          "4",
          "5",
          "3"
        ],
        // Correct answer is the third option
        correct: 3
      },
      {
        // Third question about the cheese grits
        question: "Question 3: How many cups of water do you need for the cheese grits?",
        // All available answers for question 3
        answers: [
          "2.5",
          "1",
          "3",
          "2"
        ],
        // Correct answer is the fourth option
        correct: 3
      },
      {
        // Fourth question about the beef stroganoff
        question: "Question 4: How many tablespoons of vegatable oil do you need for the beef stroganoff?",
        // All available answers for question 4
        answers: [
          "3",
          "1.5",
          "1",
          "2.5"
        ],
        // Correct answer is the third option
        correct: 2
      },
      {
        // Fifth question about the smothered pork chops
        question: "Question 5: How many teaspoons of garlic powder do you need for the smothered pork chops?",
        // All available answers for question 5
        answers: [
          "2",
          "3",
          "1",
          "10"
        ],
        // Correct answer is the first option
        correct: 0
      },
      {
        // Sixth question about the french onion soup
        question: "Question 6: Which of these are a ingredient for the french onion soup?",
        // All available answers for question 6
        answers: [
          "Freshly ground black pepper",
          "Carrots",
          "Ground beef",
          "Baguette slices"
        ],
        // Correct answer is the fourth option
        correct: 3
      },
      {
        // Seventh question about the turkey tetrazzini
        question: "Question 7: Which of these are a ingredient for the turkey tetrazzini?",
        // All available answers for question 7
        answers: [
          "Fresh basil leaves",
          "Extra-virgin olive oil",
          "All-purpose flour",
          "Granulated sugar",
          "Shredded white cheddar *"
        ],
        // Correct answer is the fifth option
        correct: 4
      },
      {
        // Eighth question about the baffalo mac & cheese
        question: "Question 8: Which of these are a ingredient for the Buffalo Mac & Cheese?",
        // All available answers for question 8
        answers: [
          "Milk",
          "Freshly ground black pepper",
          "Corn grits"
        ],
        // Correct answer is the firsr option
        correct: 0
      },
      {
        // 9th questions about the pot chicken noodle soup
        question: "Question 9: Which of these are a ingredient for the pot chicken noodle soup?",
        // All available answers for question 9
        answers: [
          "Egg noodles",
          "Kosher salt",
          "Freshly ground black pepper",
          "All of the above"
        ],
        // Correct answer is the fourth option
        correct: 3
      },
      {
        // 10th question about the chicken, spinach & artichoke lasagna
        question: "Question 10: Which of these are a ingredient for the chicken, spinach & artichoke lasagna?",
        // All available answers for question 10
        answers: [
          "Heavy cream",
          "No correct ingredient is listed in this question",
          "Chili powder",
          "Garlic powder"
        ],
        // Correct answer is the second option
        correct: 1
      },
      {
        // 11th question about the pot beef chili
        question: "Question 11: How many cups of brown rice do you need for pot beef chili?",
        // All available answers for question 11
        answers: [
          "1",
          "3/4",
          "1/2",
          "1/4"
        ],
        // Correct answer is the fourth option
        correct: 3
      },
      {
        //12th question about the cheese manicotti
        question: "Question 12: How many tablespoons of tomato paste do you need for the cheese manicotti?",
        // All available answers for question 12
        answers: [
          "0",
          "1",
          "2",
          "1/2"
        ],
        correct: 2
      },
      {
        // 13th question about the fried lasagna
        question: "Question 13: How many cups of shredded mozzarella do you need for the fried lasagna?",
        // All available answers for question 13
        answers: [
          "5",
          "1",
          "10",
          "100000"
        ],
        // Correct answer is the second option
        correct: 1
      },
      {
        // 14th question about the pizza pot pie
        question: "Question 14: Which of these are NOT a ingredient for pizza pot pie?",
        // All available answers for question 14
        answers: [
          "Frozen peas",
          "Dried oregano",
          "Bell peppers",
          "Sliced mushrooms"
        ],
        // Correct answer is the first option
        correct: 0
      },
      {
        // 15th and final question about the shrimp fettuccine alfredo
        question: "Question 15 (FINAL QUESTION): Which of these are NOT a ingredient for shrimp fettuccine alfredo?",
        // All available answers for question 15
        answers: [
          "All-purpose flour",
          "Whole milk",
          "Egg yolk",
          "Vegtable oil"
        ],
        // Correct answer is the fourth option
        correct: 3
      },
    ];

    // When the quiz page is opened up the quiz will start off
    // Zero questions answered
    // The dataset of the quiz initiated
    // Number of correct questions = 0
    // Number of incorrect questions = 0
    this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 }

    // This assures that the quiz works by answering through clicking the options
    this.handleClick = this.handleClick.bind(this)

  } // end of the constructor

  // Event handler for when user clicks on the correct option or incorrect option
  handleClick(choice) {
    // If the user clicks the correct option then the correct score will increment by 1
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 })
    }
    // Else if the user clicks the incorrect option then the incorrect score is incremented by 1
    else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }

    // When the user answers the 15th question it will reset the quiz
    if (this.state.current == 14) {
      // Reset the question # to question 1
      this.setState({ current: 0 })
      // Reset the incorrect score to 0
      this.setState({ incorrect: 0 })
      // Reset the correct score to 0
      this.setState({ correct: 0 })
    } else {
      // If the user has still not answered the 15th question continue on to the next question number
      this.setState({ current: this.state.current + 1 })
    }
  }

  // Render the React element into DOM in the container
  // Render to the webpage
  render() {
    // Return method will recall what to output
    // Will display the quiz with the essential components of the quiz such as...
    // The score of incorrect and correct questions
    // The currenct question the user is on and the whole 15 questions.
    return (
      <div>
        <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </div>
    )
  }
}

// Adding style modications to the question
function Question(props) {
  // Variable containg the style modifications
  var style = {
    // The text of the question will be shown in red
    color: "red",
  }
  // Return method will recall what to output
  return (
    // Output the question in red text
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

// Adding style  modifications to the answer options
function Answer(props) {
  // Variable containg the style modifications
  var style = {
    // Expand the width of the answer options to 100%
    width: "100%",
    // Height of the answer options
    height: 50,
    // Color of the text will be blue
    color: "blue",
    // Add a margin of 10px to seperate the options
    margin: "10px",
  }
  // Return method will recall what to output
  return (
    // Output the answer options with all styles within var style
    // Make the answer options buttons
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

// Function in control of answer list ans answer options as the user continues to more questions
function AnswerList(props) {
  // Varaible of the answers is set to an array
  var answers = []
  // For loop that will keep providing the answer list option to their related questions
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  // Return method will recall what to output
  return (
    <div>
      {answers}
    </div>
  )
}

// Adding style modifications to the questions and answer options
function QuizArea(props) {
  // variable containing the style modifications
  var style = {
    // Set width to 100%
    width: "100%",
    // Set display to block
    display: "block",
    // Set text alignment to be centered
    textAlign: "center",
    // Set a border box
    boxSizing: "border-box",
    // Set a padding to 0 2em
    padding: "0 2em"
  }
  // Return method will recall what to output
  return (
    // Display the questions and the answer options
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}

// Adding style modifications to the word Correct:
function TotalCorrect(props) {
  // variable containing the style modifications
  var style = {
    // Set display to inline-block
    display: "inline-block",
    // Set a padding to 1em
    padding: "1em",
    // Set the background color to #eee
    // This will be the color of the rectangle that sourounds the word Correct:
    background: "#eee",
  }
  // Return method will recall what to output
  return (
    // Center the word Correct
    // Display the word Correct with the style modifications implemented in var style
    <div align="center">
      <h2 style={style}>Correct: {props.correct}</h2>
    </div>
  )
}

// Adding style modifications to the word Incorrect:
function TotalIncorrect(props) {
  // variable containing the style modifications
  var style = {
    // Set display to inline-block
    display: "inline-block",
    // Set a padding to 1em
    padding: "1em",
    // Set the background color to #eee
    // This will be the color of the rectangle that surrounds the word Correct:
    background: "#eee",
  }
  // Return method will recall what to output
  return (
    // Center the word Incorrect
    // Display the word Incorrect with the style modifications implemented in var style
    <div align="center">
      <h2 style={style}>Incorrect: {props.incorrect}</h2>
    </div>
  )
}

// Adding style modifications to the scoreboard
function ScoreArea(props) {
  // variable containing the style modifications
  var style = {
    // Set width to 100%
    width: "100%",
    // Create a rectangle that surrounds the words Correct and Incorrect
    display: "block",
    // Align the text to the left
    textAlign: "left",
    // Set a padding to 2em
    padding: "2em"
  }
  // Return method will recall what to output
  return (
    // Display the scoredboard of number of questions user got correct and number of questions user got incorrect
    <div style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  )
}

// Exporting the Quiz module/Quiz.js
export default Quiz;