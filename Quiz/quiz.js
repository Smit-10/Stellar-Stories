// --- QUIZ DATA ---
const quizData = [
  // 🌞 CME & Solar Flares
  {
    question: "What is a Coronal Mass Ejection (CME)?",
    options: ["A burst of solar particles", "A moon explosion", "A comet tail", "A meteor impact"],
    answer: "A burst of solar particles"
  },
  {
    question: "What causes a CME to occur?",
    options: ["Sun's magnetic field twists", "Earthquake", "Comet passing by", "Black hole nearby"],
    answer: "Sun's magnetic field twists"
  },
  {
    question: "What happens when a CME hits Earth?",
    options: ["Auroras appear", "Moon explodes", "Oceans boil", "Mountains collapse"],
    answer: "Auroras appear"
  },
  {
    question: "What can a CME disrupt on Earth?",
    options: ["Power grids", "Tree growth", "Ocean tides", "Volcanoes"],
    answer: "Power grids"
  },
  {
    question: "How far away is the Sun from Earth?",
    options: ["93 million miles", "1 million miles", "500,000 miles", "10 million miles"],
    answer: "93 million miles"
  },
  {
    question: "What does Earth's magnetic field act like?",
    options: ["A shield", "A telescope", "A mirror", "A spotlight"],
    answer: "A shield"
  },
  {
    question: "What beautiful sky effect can CMEs create?",
    options: ["Auroras", "Rainbows", "Lightning", "Tornadoes"],
    answer: "Auroras"
  },
  {
    question: "What everyday system can be affected by CME power surges?",
    options: ["Electric grids", "Car engines", "Water pipes", "Bridges"],
    answer: "Electric grids"
  },
  {
    question: "What is another name for the Sun’s ‘giant sneeze’?",
    options: ["CME", "Black hole", "Supernova", "Eclipse"],
    answer: "CME"
  },
  {
    question: "What particles travel during a CME?",
    options: ["Charged particles", "Water droplets", "Moon rocks", "Dust storms"],
    answer: "Charged particles"
  },

  // 🌞 Solar Flares
  {
    question: "What is a Solar Flare?",
    options: ["A burst of light and energy", "A star explosion", "A meteor shower", "A comet glow"],
    answer: "A burst of light and energy"
  },
  {
    question: "What triggers a solar flare?",
    options: ["Magnetic fields snapping", "Earth’s orbit", "Moon phases", "Asteroid collision"],
    answer: "Magnetic fields snapping"
  },
  {
    question: "What do solar flares release?",
    options: ["X-rays and energy", "Rainwater", "Moon dust", "Volcanic ash"],
    answer: "X-rays and energy"
  },
  {
    question: "How fast can solar flare energy reach Earth?",
    options: ["Minutes", "Years", "Days", "Centuries"],
    answer: "Minutes"
  },
  {
    question: "What signals can solar flares disrupt?",
    options: ["Radio", "Tree roots", "Earthquakes", "Ocean waves"],
    answer: "Radio"
  },
  {
    question: "Where do solar flares occur?",
    options: ["On the Sun's surface", "Inside Earth", "On the Moon", "In black holes"],
    answer: "On the Sun's surface"
  },
  {
    question: "What do sunspots often lead to?",
    options: ["Solar flares", "Earthquakes", "Rainbows", "Meteor showers"],
    answer: "Solar flares"
  },
  {
    question: "What are solar flares compared to in the story?",
    options: ["A sneeze", "A waterfall", "A race car", "A snowball"],
    answer: "A sneeze"
  },
  {
    question: "What protects Earth from solar flare energy?",
    options: ["Atmosphere and magnetic field", "Mountains", "Oceans", "Clouds"],
    answer: "Atmosphere and magnetic field"
  },
  {
    question: "What happens after a solar flare eruption?",
    options: ["The Sun calms down", "Earth spins faster", "The Moon glows red", "The stars disappear"],
    answer: "The Sun calms down"
  },

  // 🌍 Geomagnetic Storms
  {
    question: "What causes a geomagnetic storm?",
    options: ["CME hitting Earth's magnetic field", "Moon eclipse", "Asteroid impact", "Volcano eruption"],
    answer: "CME hitting Earth's magnetic field"
  },
  {
    question: "What does Earth’s magnetic field act like during a storm?",
    options: ["A wobbly shield", "A sponge", "A mirror", "A rope"],
    answer: "A wobbly shield"
  },
  {
    question: "What visible effect can geomagnetic storms create?",
    options: ["Brighter auroras", "Rainbows", "Earthquakes", "Tsunamis"],
    answer: "Brighter auroras"
  },
  {
    question: "What can geomagnetic storms disrupt?",
    options: ["Satellites", "Rivers", "Mountains", "Forests"],
    answer: "Satellites"
  },
  {
    question: "What can strong geomagnetic storms affect on Earth?",
    options: ["Power lines", "Rainfall", "Earth’s spin", "Volcanoes"],
    answer: "Power lines"
  },
  {
    question: "What do scientists use to detect geomagnetic storms?",
    options: ["Telescopes", "Submarines", "Thermometers", "Radars"],
    answer: "Telescopes"
  },
  {
    question: "Where do auroras usually appear?",
    options: ["Near the poles", "Near deserts", "On mountains", "In oceans"],
    answer: "Near the poles"
  },
  {
    question: "What is Earth’s magnetic field also called?",
    options: ["Magnetosphere", "Astrosphere", "Sunshield", "Gravisphere"],
    answer: "Magnetosphere"
  },
  {
    question: "What is a geomagnetic storm compared to in the story?",
    options: ["A tickle", "A roar", "A waterfall", "A drumbeat"],
    answer: "A tickle"
  },
  {
    question: "What protects Earth from solar particles?",
    options: ["Magnetic field", "Clouds", "Rain", "Mountains"],
    answer: "Magnetic field"
  },

  // 💥 Supernova
  {
    question: "What is a supernova?",
    options: ["Explosion of a massive star", "Birth of a galaxy", "Asteroid crash", "Sun heating up"],
    answer: "Explosion of a massive star"
  },
  {
    question: "What elements are created in a supernova?",
    options: ["Gold and iron", "Plastic and glass", "Wood and stone", "Water and air"],
    answer: "Gold and iron"
  },
  {
    question: "What happens when a star runs out of fuel?",
    options: ["It explodes", "It freezes", "It becomes a comet", "It vanishes instantly"],
    answer: "It explodes"
  },
  {
    question: "What is the cloud left after a supernova called?",
    options: ["Nebula", "Comet", "Asteroid", "Galaxy"],
    answer: "Nebula"
  },
  {
    question: "What can a supernova outshine?",
    options: ["An entire galaxy", "The Moon", "A rainbow", "The clouds"],
    answer: "An entire galaxy"
  },
  {
    question: "What color can stars turn before exploding?",
    options: ["Red", "Green", "Blue", "Black"],
    answer: "Red"
  },
  {
    question: "What builds new stars after a supernova?",
    options: ["Stardust", "Rainwater", "Volcanoes", "Comets"],
    answer: "Stardust"
  },
  {
    question: "What does the calcium in our bones come from?",
    options: ["Stars", "Oceans", "Mountains", "Plants"],
    answer: "Stars"
  },
  {
    question: "What is a supergiant star compared to?",
    options: ["A bonfire", "A candle", "A lightbulb", "A matchstick"],
    answer: "A bonfire"
  },
  {
    question: "What is the final gift of a massive star?",
    options: ["Stardust", "Rain", "Oxygen bubbles", "Sunlight"],
    answer: "Stardust"
  },

  // ☄️ Meteor Showers
  {
    question: "What causes meteor showers?",
    options: ["Earth passing comet dust trails", "Volcano eruptions", "Lightning storms", "Black holes"],
    answer: "Earth passing comet dust trails"
  },
  {
    question: "What are meteoroids made of?",
    options: ["Dust and rock", "Gas and fire", "Water and ice", "Light and shadow"],
    answer: "Dust and rock"
  },
  {
    question: "What happens when meteoroids hit Earth’s atmosphere?",
    options: ["They burn up", "They freeze", "They bounce back", "They grow larger"],
    answer: "They burn up"
  },
  {
    question: "What do we call a meteoroid burning in the atmosphere?",
    options: ["Shooting star", "Comet", "Asteroid", "Sunspot"],
    answer: "Shooting star"
  },
  {
    question: "What leaves trails that cause meteor showers?",
    options: ["Comets", "Volcanoes", "Moons", "Satellites"],
    answer: "Comets"
  },
  {
    question: "What are meteor showers compared to in the story?",
    options: ["Sprinkling diamonds", "Falling rain", "Snowstorm", "Rainbow"],
    answer: "Sprinkling diamonds"
  },
  {
    question: "What protects us when meteoroids burn?",
    options: ["Atmosphere", "Clouds", "Forests", "Oceans"],
    answer: "Atmosphere"
  },
  {
    question: "What size are most meteoroids?",
    options: ["Grain of sand", "Mountain", "Car", "Ocean"],
    answer: "Grain of sand"
  },
  {
    question: "What special wish do people make during meteor showers?",
    options: ["Wishing on shooting stars", "Wishing on comets", "Wishing on rainbows", "Wishing on clouds"],
    answer: "Wishing on shooting stars"
  },
  {
    question: "What burns to make the streaks of light?",
    options: ["Space dust", "Raindrops", "Sunlight", "Electric sparks"],
    answer: "Space dust"
  },

  // 🌈 Auroras
  {
    question: "What are auroras also called?",
    options: ["Northern Lights", "Desert Lights", "Fireflies", "Rainbow glow"],
    answer: "Northern Lights"
  },
  {
    question: "What causes auroras?",
    options: ["Charged solar particles hitting atmosphere", "Moon reflection", "Rainbows", "Volcano eruptions"],
    answer: "Charged solar particles hitting atmosphere"
  },
  {
    question: "Where are auroras most common?",
    options: ["Near the poles", "In deserts", "In jungles", "Near oceans"],
    answer: "Near the poles"
  },
  {
    question: "What gas makes green auroras?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
    answer: "Oxygen"
  },
  {
    question: "What gas makes purple auroras?",
    options: ["Nitrogen", "Oxygen", "Helium", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "What is Earth’s magnetic field compared to?",
    options: ["A hug", "A wall", "A window", "A bridge"],
    answer: "A hug"
  },
  {
    question: "What color appears when oxygen is hit high up?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Red"
  },
  {
    question: "What do auroras look like?",
    options: ["Dancing ribbons of light", "Fire", "Waterfalls", "Clouds"],
    answer: "Dancing ribbons of light"
  },
  {
    question: "What are solar particles compared to?",
    options: ["Race cars", "Raindrops", "Birds", "Snowflakes"],
    answer: "Race cars"
  },
  {
    question: "What do auroras show us?",
    options: ["Connection of Sun and Earth", "Moonlight", "Earthquakes", "Ocean waves"],
    answer: "Connection of Sun and Earth"
  },
    {
    question: "What does the expansion of space cause galaxies to do?",
    options: ["Stay fixed", "Move closer", "Drift apart", "Disappear"],
    answer: "Drift apart"
  },
  {
    question: "What happens when a massive star runs out of fuel?",
    options: ["It turns into a planet", "It cools slowly", "It explodes as a supernova", "It becomes a comet"],
    answer: "It explodes as a supernova"
  },
  {
    question: "Which cosmic phenomenon bends light due to its strong gravity?",
    options: ["Asteroid belt", "Wormhole", "Black hole", "Supernova remnant"],
    answer: "Black hole"
  },
  {
    question: "What is the cosmic background radiation a remnant of?",
    options: ["Solar winds", "The Big Bang", "Star formation", "Meteor impacts"],
    answer: "The Big Bang"
  },
  {
    question: "Which type of galaxy is shaped like a flattened disk with spiral arms?",
    options: ["Elliptical galaxy", "Spiral galaxy", "Irregular galaxy", "Cluster galaxy"],
    answer: "Spiral galaxy"
  },
  {
    question: "What does a redshift in light from galaxies indicate?",
    options: ["They are moving toward us", "They are heating up", "They are moving away", "They are rotating faster"],
    answer: "They are moving away"
  },
  {
    question: "Which cosmic event can trigger the birth of new stars?",
    options: ["Supernova explosion", "Comet collision", "Asteroid impact", "Solar eclipse"],
    answer: "Supernova explosion"
  },
  {
    question: "What are giant clouds of gas and dust in space called?",
    options: ["Asteroids", "Nebulae", "Comets", "Meteoroids"],
    answer: "Nebulae"
  },
  {
    question: "What forms when gas and dust collapse under gravity in a nebula?",
    options: ["Planet", "Black hole", "Star", "Comet"],
    answer: "Star"
  },
  {
    question: "Which part of a galaxy contains most of its stars and black hole?",
    options: ["Outer halo", "Spiral arms", "Galactic center", "Dust clouds"],
    answer: "Galactic center"
  },
  {
    question: "What is the fate of smaller stars like our Sun after their fuel runs out?",
    options: ["They become neutron stars", "They turn into white dwarfs", "They explode violently", "They vanish instantly"],
    answer: "They turn into white dwarfs"
  },
  {
    question: "Which galaxy is on a collision course with the Milky Way?",
    options: ["Triangulum Galaxy", "Whirlpool Galaxy", "Andromeda Galaxy", "Sombrero Galaxy"],
    answer: "Andromeda Galaxy"
  },
  {
    question: "What cosmic structure holds together billions of galaxies?",
    options: ["Solar system", "Star cluster", "Supercluster", "Meteor field"],
    answer: "Supercluster"
  },
  {
    question: "What kind of star is at the final stage of a massive star’s life?",
    options: ["White dwarf", "Neutron star", "Protostar", "Brown dwarf"],
    answer: "Neutron star"
  },
  {
    question: "Which phenomenon allows scientists to detect exoplanets?",
    options: ["Planet glow", "Starlight dimming", "Comet trails", "Supernova flash"],
    answer: "Starlight dimming"
  },
  {
    question: "What happens to light when it passes near a black hole?",
    options: ["It bends", "It brightens", "It splits", "It vanishes instantly"],
    answer: "It bends"
  },
  {
    question: "What is dark matter responsible for in the universe?",
    options: ["Creating comets", "Holding galaxies together", "Causing eclipses", "Shaping asteroids"],
    answer: "Holding galaxies together"
  },
  {
    question: "What do scientists believe dark energy causes?",
    options: ["Stars to explode", "Galaxies to collide", "Universe to expand faster", "Planets to vanish"],
    answer: "Universe to expand faster"
  },
  {
    question: "What is left behind when a star like the Sun dies?",
    options: ["A pulsar", "A nebula", "A white dwarf", "A supernova"],
    answer: "A white dwarf"
  },
  {
    question: "What is the name of the first element formed in the early universe?",
    options: ["Oxygen", "Hydrogen", "Carbon", "Iron"],
    answer: "Hydrogen"
  },
  {
    question: "What happens during a lunar eclipse?",
    options: ["Moon hides behind Earth’s shadow", "Moon disappears", "Sun is blocked", "Stars vanish"],
    answer: "Moon hides behind Earth’s shadow"
  },
  {
    question: "What is the most common type of galaxy in the universe?",
    options: ["Spiral", "Elliptical", "Irregular", "Ring-shaped"],
    answer: "Elliptical"
  },
  {
    question: "Which cosmic event releases the most energy in a short time?",
    options: ["Solar flare", "Supernova", "Comet strike", "Nebula expansion"],
    answer: "Supernova"
  },
  {
    question: "What does a black hole’s event horizon represent?",
    options: ["Point of explosion", "Edge of the universe", "Point of no return", "Center of a galaxy"],
    answer: "Point of no return"
  },
  {
    question: "What is created when neutron stars collide?",
    options: ["Black hole", "White dwarf", "Gas cloud", "Spiral galaxy"],
    answer: "Black hole"
  },
  {
    question: "What do comets mostly consist of?",
    options: ["Metal and rock", "Ice and dust", "Gas and plasma", "Pure light"],
    answer: "Ice and dust"
  },
  {
    question: "What makes up most of the universe’s mass-energy content?",
    options: ["Stars", "Planets", "Dark energy", "Asteroids"],
    answer: "Dark energy"
  },
  {
    question: "What is the explosive birth of a star called?",
    options: ["Ignition", "Big Bang", "Fusion start", "Stellar ignition"],
    answer: "Stellar ignition"
  },
  {
    question: "Which galaxy do we live in?",
    options: ["Andromeda", "Whirlpool", "Milky Way", "Sombrero"],
    answer: "Milky Way"
  },
  {
    question: "What protects Earth from harmful solar radiation?",
    options: ["Ozone layer", "Atmosphere", "Magnetic field", "Clouds"],
    answer: "Magnetic field"
  },
  {
    question: "What happens when gravity balances the outward pressure in a star?",
    options: ["Star collapses", "Star stabilizes", "Star explodes", "Star fades"],
    answer: "Star stabilizes"
  },
  {
    question: "What kind of orbit do most planets in our solar system follow?",
    options: ["Circular", "Elliptical", "Straight line", "Random"],
    answer: "Elliptical"
  },
  {
    question: "What is a rapidly spinning neutron star called?",
    options: ["Comet", "Quasar", "Pulsar", "Asteroid"],
    answer: "Pulsar"
  },
  {
    question: "What does the Hubble Telescope mainly observe?",
    options: ["Earthquakes", "Ocean currents", "Space objects", "Weather"],
    answer: "Space objects"
  },
  {
    question: "What cosmic phenomenon can be described as ‘ripples in space-time’?",
    options: ["Gamma rays", "Gravitational waves", "Magnetic storms", "Solar winds"],
    answer: "Gravitational waves"
  },
  {
    question: "Which planet is known as the 'Gas Giant'?",
    options: ["Mars", "Earth", "Jupiter", "Mercury"],
    answer: "Jupiter"
  },
  {
    question: "Which layer of the Sun releases light we see from Earth?",
    options: ["Core", "Corona", "Photosphere", "Chromosphere"],
    answer: "Photosphere"
  },
  {
    question: "What does the term 'light-year' measure?",
    options: ["Brightness", "Speed", "Distance", "Age"],
    answer: "Distance"
  },
  {
    question: "What is the region beyond Neptune filled with icy bodies called?",
    options: ["Asteroid belt", "Kuiper Belt", "Oort Cloud", "Dark Zone"],
    answer: "Kuiper Belt"
  }

];

// --- DOM ELEMENTS ---
// --- QUIZ DATA ---
// (Use your existing quizData array as above)

// --- DOM ELEMENTS ---
// quiz.js
// --- QUIZ DATA ---
// (Paste your full quizData array of 100 questions here OR import it from another file)
// For brevity, assume quizData is already defined globally (as in your HTML snippet).
// If not, paste the full const quizData = [ ... ] above this script.


// --- DOM ELEMENTS ---
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const quitBtn = document.getElementById("quit-btn");

const questionNumberEl = document.getElementById("question-number");
const scoreEl = document.getElementById("score");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const finalScoreEl = document.getElementById("final-score");

// --- STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
const QUESTIONS_PER_ROUND = 10; // change if you want more/less per quiz

// --- EVENT LISTENERS ---
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);
quitBtn.addEventListener("click", () => {
  // If you want to navigate away:
  window.location.href = "/index.html";
});

// --- HELPER: Fisher-Yates shuffle ---
function shuffleArray(array) {
  const arr = array.slice(); // shallow copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// --- HELPER: Pick `count` unique questions and shuffle each question's options ---
function pickQuestions(quizData, count = QUESTIONS_PER_ROUND) {
  if (!Array.isArray(quizData) || quizData.length === 0) {
    return [];
  }

  const maxCount = Math.min(count, quizData.length);
  const shuffledQuestions = shuffleArray(quizData).slice(0, maxCount);

  // Deep-ish copy each question and shuffle its options
  const selected = shuffledQuestions.map(q => {
    // copy question object (shallow) and shuffle options (new array)
    const copy = { ...q, options: shuffleArray(q.options) };
    return copy;
  });

  return selected;
}

// --- START QUIZ ---
function startQuiz() {
  // reset
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = score;

  // pick questions
  selectedQuestions = pickQuestions(quizData, QUESTIONS_PER_ROUND);

  // UI toggles
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  nextBtn.classList.add("hidden");

  // show first question
  showQuestion();
}

// --- SHOW QUESTION ---
function showQuestion() {
  optionsContainer.innerHTML = "";
  nextBtn.classList.add("hidden");

  if (!selectedQuestions || selectedQuestions.length === 0) {
    // fallback: no questions - show result quickly
    showScore();
    return;
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
  questionTextEl.textContent = currentQuestion.question;

  // create option buttons (options are already shuffled by pickQuestions)
  currentQuestion.options.forEach(optionText => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = optionText;
    button.className = "option-btn";
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    optionsContainer.appendChild(button);
  });
}

// --- SELECT ANSWER ---
function selectAnswer(selectedButton, correctAnswer) {
  // prevent double click or selecting after disabled
  if (selectedButton.disabled) return;

  const selectedAnswer = selectedButton.textContent;
  const isCorrect = selectedAnswer === correctAnswer;

  // update score if correct
  if (isCorrect) {
    score++;
    scoreEl.textContent = score;
  }

  // disable all options and style correct/incorrect
  const allOptions = optionsContainer.querySelectorAll(".option-btn");
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct-answer");
    } else if (btn === selectedButton && !isCorrect) {
      btn.classList.add("incorrect-answer");
    }
  });

  // show next button (or finish text)
  nextBtn.classList.remove("hidden");
  // optionally change next button text on last question
  if (currentQuestionIndex === selectedQuestions.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }
}

// --- NEXT QUESTION ---
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// --- SHOW SCORE ---
function showScore() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `${score} / ${selectedQuestions.length}`;
}

// --- OPTIONAL: Keyboard support (Enter to select Next when visible) ---
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // If quiz screen active and next button visible, press it
    if (!quizScreen.classList.contains("hidden") && !nextBtn.classList.contains("hidden")) {
      nextBtn.click();
    }
    // If start screen visible, start quiz
    if (!startScreen.classList.contains("hidden") && quizScreen.classList.contains("hidden")) {
      startBtn.click();
    }
  }
});

// --- On page load, you may want to ensure score is displayed correctly ---
scoreEl.textContent = score;