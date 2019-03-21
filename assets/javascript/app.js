// question objects

// [
//  { questionId, isCorrect}
// ]

// render questions
// create question tag (What is something?)
// render choices (data-value = true or false)

// whenver we click a choice
// set the clicked one to look different
// set all others to go back to default
// modify the question object to have value for whether they answered right or wrong

// whenever finish game button is clicked OR the timer runs out
// iterate over questions, count up isCorrect

//api: https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple




//function for trivia questions
const trivia = () => {
  fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
    .then(r => r.json())
    .then(response => {
      console.log(response)
      response.results.forEach(triviaObject => {
        let { question, correct_answer } = triviaObject
        console.log(question, correct_answer)
        document.querySelector(".trivia").innerHTML = question
        incorrect_answers.forEach(incorrectAnswer => {
          console.log(incorrectAnswer)
        })
      })

      // for (let i = 0; i < response.results.length; i++) {
      //   console.log(response.results[i].question)
      // }

      // question = response.results["0"].question
      // correct_answer = response.results["0"].correct_answer
      // incorrect_answers0 = response.results["0"].incorrect_answers[0]
      // incorrect_answers1 = response.results["0"].incorrect_answers[1]
      // incorrect_answers2 = response.results["0"].incorrect_answers[2]
      // console.log(question)
      // console.log(correct_answer)
      // console.log(incorrect_answers0)
      // console.log(incorrect_answers1)
      // console.log(incorrect_answers2)
      // document.querySelector(".questions").innerHTML = question
      // document.querySelector(".answer").innerHTML = correct_answer
      // document.querySelector(".answers0").innerHTML = incorrect_answers0
      // document.querySelector(".answers1").innerHTML = incorrect_answers1
      // document.querySelector(".answers2").innerHTML = incorrect_answers2

    })

    .catch(e => console.error(e))
}




trivia()
