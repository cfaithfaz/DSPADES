const columnContent = [
  {
    question1: "I like to work on cars",
    question2: "I like to build things",
    imageSrc1: "assets/img/test/1.png",
    imageSrc2: "assets/img/test/2.png"
  },
  {
    question1: "I like to take care of animals",
    question2: "I like putting things together or assembling things",
    imageSrc1: "assets/img/test/3.png",
    imageSrc2: "assets/img/test/4.png"
  },
  {
    question1: "I like to cook",
    question2: "I am a practical person",
    imageSrc1: "assets/img/test/5.png",
    imageSrc2: "assets/img/test/6.png"
  },
  {
    question1: "I like working outdoors",
    question2: "I like to do puzzles",
    imageSrc1: "assets/img/test/7.png",
    imageSrc2: "assets/img/test/8.png"
  },
  // 
  {
    question1: "I like to do experiments",
    question2: "I enjoy science",
    imageSrc1: "assets/img/test/9.png",
    imageSrc2: "assets/img/test/nx10.png"
  },
  {
    question1: "I enjoy trying to figure out how things work",
    question2: "I like to analyze things (problems/situations)",
    imageSrc1: "assets/img/test/nx11.png",
    imageSrc2: "assets/img/test/nx12.png"
  },
  {
    question1: "I like working with numbers or charts",
    question2: "I’m good at math",
    imageSrc1: "assets/img/test/nx13.png",
    imageSrc2: "assets/img/test/nx14.png"
  },
  {
    question1: "I am good at working independently",
    question2: "I like to read about art and music",
    imageSrc1: "assets/img/test/nx15.png",
    imageSrc2: "assets/img/test/nx16.png"
  },
  {
    question1: "I enjoy creative writing",
    question2: "I am a creative person",
    imageSrc1: "assets/img/test/nx17.png",
    imageSrc2: "assets/img/test/nx18.png"
  },
  {
    question1: "I like to play instruments or sing",
    question2: "I like acting in plays",
    imageSrc1: "assets/img/test/nx19.png",
    imageSrc2: "assets/img/test/nx21.png"
  },
  {
    question1: "I like to draw",
    question2: "I like to work in teams.",
    imageSrc1: "assets/img/test/nx22.png",
    imageSrc2: "assets/img/test/nx23.png"
  },
  {
    question1: "I like to teach or train people",
    question2: "I like trying to help people solve their problems",
    imageSrc1: "assets/img/test/nx24.png",
    imageSrc2: "assets/img/test/nx25.png"
  },
  {
    question1: "I am interested in healing people",
    question2: "I enjoy learning about other cultures",
    imageSrc1: "assets/img/test/nx26.png",
    imageSrc2: "assets/img/test/nx27.png"
  },
  {
    question1: "I like to get into discussions about issues",
    question2: "I liked helping people ",
    imageSrc1: "assets/img/test/nx28.png",
    imageSrc2: "assets/img/test/nx29.png"
  },
  {
    question1: "I am an ambitious person,I set goals for myself",
    question2: "I like to influence or persuade people",
    imageSrc1: "assets/img/test/nx30.png",
    imageSrc2: "assets/img/test/nx31.png"
  },
  {
    question1: "I like selling things",
    question2: "I am quick to take on new responsibilities",
    imageSrc1: "assets/img/test/nx32.png",
    imageSrc2: "assets/img/test/nx33.png"
  },
  {
    question1: "I would like yo start my own business",
    question2: "I like to lead",
    imageSrc1: "assets/img/test/nx34.png",
    imageSrc2: "assets/img/test/nx35.png"
  },
  {
    question1: "I like to give speeches",
    question2: "I like to organize things",
    imageSrc1: "assets/img/test/nx36.png",
    imageSrc2: "assets/img/test/nx37.png"
  },
  {
    question1: "I like to have clear instructions to follow",
    question2: "I wouldnt mind working 8 hours per day in an office",
    imageSrc1: "assets/img/test/nx38.png",
    imageSrc2: "assets/img/test/nx39.png"
  },
  {
    question1: "I pay attention to details",
    question2: "I like todo filing or typing",
    imageSrc1: "assets/img/test/nx40.png",
    imageSrc2: "assets/img/test/nx41.png"
  },
  {
    question1: "I am good at keeping records of my work",
    question2: "I would like to work in an office",
    imageSrc1: "assets/img/test/nx42.png",
    imageSrc2: "assets/img/test/nx43.png"
  },
];

const separatedContent = columnContent.reduce((result, current) => {
  const pair1 = {
    question: current.question1,
    imageSrc: current.imageSrc1
  };
  const pair2 = {
    question: current.question2,
    imageSrc: current.imageSrc2
  };

  result.push(pair1, pair2);
  return result;
}, []);

const separatedContent2 = columnContent.flatMap(item => [
  { question: item.question1, imageSrc: item.imageSrc1 },
  { question: item.question2, imageSrc: item.imageSrc2 }
]);

console.log(separatedContent);
console.log(separatedContent2);

let currentContentIndex = 0;
let progressValue = 0;
let group1Clicked = false;
let group2Clicked = false;
let userChoices = [];

const progressBar = document.querySelector('.progress-bar');

const myCarouselElement = document.querySelector('#questionsCarousel');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  touch: false,
  wrap: false
});

const carouselInner = document.querySelector('#questionsCarouselContent');

var carouselItems = [];
for (let i = 0; i < separatedContent.length; i += 2) {
  let questionToAppend = `
  <div class="carousel-item ${i === 0 ? 'active' : ''} ">
    <div class="row rowtest">
      <div class="col-md-6 column"
        style="padding: 5px;width: 660px;">
        <h4 id="questions1" class="text-center" style="font-family: 'Noto Sans', sans-serif;font-size: 18px;">
          ${separatedContent[i].question}</h4>
        <img class="img-fluid image zoom-animation" src="${separatedContent[i].imageSrc}" style="width: 300px;height: 300px;" />
        <div id="group${i}" class="d-flex justify-content-center btn-group" role="group">
          <label id="loveLabel${i}" class="form-label form-label form-label btnlabel" for="loveRadio${i}">
            <input id="loveRadio${i}" class="btn-check" type="radio" autocomplete="off" name="btnradio" />
            <img id="loveImg${i}" src="assets/img/icons/LOVE.png" width="115" height="100">I love it!</img>
          </label>
          <label id="dislikeLabel${i}" class="form-label form-label form-label btnlabel" for="dislikeRadio${i}">
            <input id="dislikeRadio${i}" class="btn-check" type="radio" autocomplete="off" name="btnradio" />
            <img id="dislikeImg${i}" src="assets/img/icons/DISLIKE.png" width="115" height="100" /> Dislike </label>
        </div>
      </div>
      <div class="col-md-6 column" style="padding: 5px;width: 660px;">
        <h4 id="questions2" class="text-center" style="font-family: 'Noto Sans', sans-serif;font-size: 18px;">
          ${separatedContent[i + 1].question}</h4>
        <img class="img-fluid image zoom-animation" src="${separatedContent[i + 1].imageSrc}" style="height: 300px;width: 300px;" />
        <div id="group${i + 1}" class="d-flex justify-content-center btn-group" role="group">
          <label id="loveLabel${i + 1}" class="form-label form-label form-label btnlabel" for="loveRadio${i + 1}">
            <input id="loveRadio${i + 1}" class="btn-check" type="radio" autocomplete="off" name="btnradio" />
            <img id="loveImg${i + 1}" src="assets/img/icons/LOVE.png" width="115" height="100">I love it!</img>
          </label>
          <label id="dislikeLabel${i + 1}" class="form-label form-label form-label btnlabel" for="dislikeRadio${i + 1}">
            <input id="dislikeRadio${i + 1}" class="btn-check" type="radio" autocomplete="off" name="btnradio" />
            <img id="dislikeImg${i + 1}" src="assets/img/icons/DISLIKE.png" width="115" height="100" /> Dislike </label>
        </div>
      </div>
    </div>
  </div>
`;
  carouselItems.push(questionToAppend);
}

carouselInner.insertAdjacentHTML('afterbegin', carouselItems.join('\n'));

var elements = document.querySelectorAll('[id^="loveLabel"], [id^="dislikeLabel"]');

elements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    // Get the ID and extract the type ("love" or "dislike") and number
    var id = element.id;
    var match = id.match(/([a-zA-Z]+)(\d+)/);

    if (match) {
      var type = match[1];
      var number = match[2];

      var result = ""

         if (!userChoices[number])
        if (!group1Clicked && progressValue < 100) {
          progressValue += +((100 / separatedContent.length));
          progressValue = +(progressValue.toFixed(2))
        }

      switch (type) {
        case "loveLabel":
          result = "love";
          break;
        case "dislikeLabel":
          result = "dislike";
          break;
      }

   if (result === "love") {
        var imgToBlur = document.getElementById("dislikeImg" + number)
        imgToBlur.style.filter = 'grayscale(100%)';
        var imgToUnblur = document.getElementById("loveImg" + number)
        imgToUnblur.style.filter = 'grayscale(0%)';
      } else if (result === "dislike") {
        var imgToBlur = document.getElementById("loveImg" + number)
        imgToBlur.style.filter = 'grayscale(100%)';
        var imgToUnblur = document.getElementById("dislikeImg" + number)
        imgToUnblur.style.filter = 'grayscale(0%)';
      }

      userChoices[number] = result;

      if (progressValue > 100) {
        progressValue = 100;
      }
      if (userChoices.filter(function() { return true }).length == separatedContent.length) {
        console.log('completed')
        progressValue = 100;
      }

      updateProgressBar();
    }
  });
});


function updateContent(index) {
  // Modified the updateContent function to display all questions
  const questionElement1 = document.getElementById('questions1');
  const questionElement2 = document.getElementById('questions2');
  const imageElement1 = document.getElementById('testimages1');
  const imageElement2 = document.getElementById('testimages2');

  // Use the index to get the corresponding question set
  const currentQuestionSet = columnContent[index];

  questionElement1.innerHTML = currentQuestionSet.question1;
  questionElement2.innerHTML = currentQuestionSet.question2;
  imageElement1.src = currentQuestionSet.imageSrc1;
  imageElement2.src = currentQuestionSet.imageSrc2;

  userChoices = [];
}

function updateRadioButtons(index) {
  const radioGroup1 = document.getElementById('group1');
  const radioGroup2 = document.getElementById('group2');

  // Hide all radio button groups by default
  radioGroup1.style.display = 'none';
  radioGroup2.style.display = 'none';

  // Show radio button groups based on the current question index
  if (index < columnContent.length) {
    if (index % 2 === 0) {
      radioGroup1.style.display = 'flex';
    } else {
      radioGroup2.style.display = 'flex';
    }
  }
}


function updateProgressBar() {

  progressBar.style.width = `${Math.floor(progressValue)}%`;
  progressBar.textContent = `${Math.floor(progressValue)}%`;
  progressBar.setAttribute('aria-valuenow', Math.floor(progressValue));

  // Store the rounded progress value without decimal points
}


function resetButtonColors() {
  group1Clicked = false;
  group2Clicked = false;
  document.getElementById('group1').classList.remove('btn-primary');
  document.getElementById('group1').classList.add('btn-secondary');
  document.getElementById('group2').classList.remove('btn-primary');
  document.getElementById('group2').classList.add('btn-secondary');
}

function updateButtonColors() {
  const group1Clicked = userChoicesPerQuestion[currentContentIndex]?.group1 !== undefined;
  const group2Clicked = userChoicesPerQuestion[currentContentIndex]?.group2 !== undefined;

  if (group1Clicked) {
    document.getElementById('group1').classList.remove('btn-secondary');
    document.getElementById('group1').classList.add('btn-primary');
  } else {
    document.getElementById('group1').classList.remove('btn-primary');
    document.getElementById('group1').classList.add('btn-secondary');
  }

  if (group2Clicked) {
    document.getElementById('group2').classList.remove('btn-secondary');
    document.getElementById('group2').classList.add('btn-primary');
  } else {
    document.getElementById('group2').classList.remove('btn-primary');
    document.getElementById('group2').classList.add('btn-secondary');
  }
}

document.getElementById('nextButton').addEventListener('click', function() {
  let to_userChoicesIndex = currentContentIndex * 2;
  if (!(userChoices[to_userChoicesIndex] && userChoices[to_userChoicesIndex + 1])) {
    alert('Please select an option for both questions before proceeding.');
    return;
  }
  if (currentContentIndex < columnContent.length - 1) {
    currentContentIndex++;
    carousel.next();
  } else {
      alert('Please answer all questions before proceeding.');
  localStorage.setItem('progress', Math.floor(progressValue));

    window.location.href = 'careerpage.html';

    }
});

// Function to check if all questions are answered
function allQuestionsAnswered() {
  for (let i = 0; i < userChoices.length; i++) {
    if (!userChoices[i]) {
      return false; // If any question is unanswered, return false
    }
  }
  return true; // All questions have been answered
}


function resetUserChoices() {
  userChoices = [];
}

document.getElementById('prevButton').addEventListener('click', function() {
  if (currentContentIndex > 0) {
    currentContentIndex--;
    carousel.prev();
  } else {
    // If at the first question, redirect to guide2.html
    window.location.href = 'guide2.html';
  }
});


window.onload = () => {
  // Clear previously stored progress value
  localStorage.removeItem('progress');

  progressValue = 0;
  localStorage.setItem('progress', progressValue);

  // Initialize buttons and their functionalities
  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  // Retrieve stored progress data on page load
  const storedProgress = parseInt(localStorage.getItem('progress'));

  // Check if the stored progress is valid (between 0 and 100)
  if (!isNaN(storedProgress) && storedProgress >= 0 && storedProgress <= 100) {
    progressValue = storedProgress;
  } else {
    progressValue = 0; // Set progress to 0 if no valid progress is stored
    localStorage.setItem('progress', 0); // Update localStorage with 0% progress
  }

  // Update the progress bar to reflect the current progress
  updateProgressBar();

  resetButtonColors();
  updateButtonColors();
  updateContent(currentContentIndex);
    
};



