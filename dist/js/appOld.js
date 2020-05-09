// window.onload = function () {
//   show(0);
// };

// // Questions

// let questions = [
//   {
//     id: 1,
//     question:
//       "Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS)?",
//     answer: "True",
//     options: ["True", "False", "undecided", "None of the above"],
//   },
//   {
//     id: 2,
//     question: "Can coronaviruses be transmitted from person to person?",
//     answer: "True",
//     options: ["True", "False", "undecided", "None of the above"],
//   },
//   {
//     id: 3,
//     question: "Is there a vaccine for a novel coronavirus?",
//     answer: "False",
//     options: ["True", "False", "undecided", "None of the above"],
//   },
//   {
//     id: 4,
//     question:
//       "People can catch COVID-19 from others who have the virus.The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks?",
//     answer: "True",
//     options: ["True", "False", "undecided", "None of the above"],
//   },
//   {
//     id: 5,
//     question: "Can covid-19 be passed through breastfeeding?",
//     answer: "False",
//     options: ["True", "False", "undecided", "None of the above"],
//   },
// ];

// function submitForm(e) {
//   e.preventDefault();
//   let name = document.forms["welcome_form"]["name"].value;

//   // store name
//   sessionStorage.setItem("name", name);

//   location.href = "quiz.html";
// }

// let question_count = 0;
// let point = 0;

// function next() {
//   //let user_answer = document.querySelector("li.option.active").innerHTML;
//   let user_answer = sessionStorage.getItem("user_answer");
//   console.log(user_answer, questions[question_count].answer)
//   // check answer by user
//   if (user_answer == questions[question_count].answer) {
//     point += 10;
//     sessionStorage.setItem("points", point);
//   }

//   if (question_count == questions.length - 1) {
//     sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
//     clearInterval(mytime);
//     location.href = "end.html";
//     return;
//   }

//   // check if answer is correct
//   question_count++;
//   show(question_count);
// }

// function show(count) {
//   let question = document.getElementById("questions");

//   // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
//   question.innerHTML = `<h2>Q${question_count + 1}. ${
//     questions[count].question
//   }</h2>
//       <ul class="option_group">
//               <li class="option">${questions[count].options[0]}</li>
//               <li class="option">${questions[count].options[1]}</li>
//               <li class="option">${questions[count].options[2]}</li>
//               <li class="option">${questions[count].options[3]}</li>
//       </ul>     
//   `;
//   toggleActive();
// }
// // function toggleActive() {
// //   let option = document.querySelectorAll("li.option");

// //   for (let i = 0; i < option.length; i++) {
// //     option[i].onclick = function () {
// //       for (let j = 0; j < option.length; j++) {
// //         if (option[j].classList.contains("active")) {
// //           option[j].classList.remove("active");
// //         }
// //       }
// //       option[i].classList.add("active");
// //     };
// //   }
// // }


// function toggleActive() {
//   let option = document.querySelectorAll("li.option");
//   let correctAnswer = [];
//   for (let i = 0; i < option.length; i++) {
//     option[i].onclick = function () {
//       for (let j = 0; j < option.length + 1; j++) {
//       // console.log(option[i], option[i].innerHTML, option[j], option[j].innerHTML)
//       //correctAnswer = option[i].innerHTML === questions[question_count].answer ? i : null

//         if(option[i].innerHTML !== questions[question_count].answer){
//           // console.log(correctAnswer);
//           option[j].innerHTML === questions[question_count].answer && correctAnswer.push({
//             correctAnswer: j,
//             userAnswer: i
//           });          
//           // console.log(option[j].innerHTML === questions[question_count].answer ? j : null)


//           option[i].classList.add("wrong");
//           option[j].classList.remove("wrong");
//           option[j].classList.remove("active");
//           getCorrectAns(correctAnswer[0])
//           // console.log(correctAnswer[0])
//         } else {
//           option[i].classList.add("active");
//           option[j].classList.remove("wrong");
//         }
//       }
//     };
//   }
// }

// const getCorrectAns = (value) => {
//   console.log(value)
//   let option = document.querySelectorAll("li.option");
//   option[value.correctAnswer].classList.add('active')
//   sessionStorage.setItem("user_answer", option[value.userAnswer].innerHTML);
// }
