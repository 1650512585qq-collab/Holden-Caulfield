const phases = [
  {
    title: "Kicked out, but still acting okay",
    range: "Pencey Prep",
    scene:
      "At the beginning, Holden has already been kicked out of Pencey. He talks like he does not care, but he is already tired, annoyed, and separated from everyone around him.",
    physical: 72,
    mental: 64,
    physicalText:
      "He is worn out from school and the fencing trip, but he still has enough energy to leave and keep going.",
    mentalText:
      "He acts sarcastic and judgmental, which hides how lonely he already is.",
    link:
      "This step is still high because Holden has energy and attitude. The fall starts when running away becomes his solution."
  },
  {
    title: "Leaving school makes things less stable",
    range: "Train to New York",
    scene:
      "When Holden leaves Pencey early, he is technically free, but he does not really have a plan. On the train, he lies to Mrs. Morrow instead of just being honest.",
    physical: 66,
    mental: 56,
    physicalText:
      "He is traveling and moving around, but it feels more like wandering than progress.",
    mentalText:
      "He keeps making up stories, which shows he has trouble talking to people directly.",
    link:
      "This step connects freedom with confusion. Holden gets away from school, but not from himself."
  },
  {
    title: "New York does not make him feel better",
    range: "Hotel and clubs",
    scene:
      "In New York, Holden tries hotels, clubs, dancing, and random conversations. The city is busy, but he still seems alone almost the whole time.",
    physical: 54,
    mental: 45,
    physicalText:
      "He is staying up late, walking around, and getting more tired.",
    mentalText:
      "He wants someone to talk to, but he also pushes people away or gets disappointed by them.",
    link:
      "The stair drops here because all the noise of the city does not fix his loneliness."
  },
  {
    title: "The hotel scene hits him hard",
    range: "Maurice and Sunny",
    scene:
      "The scene with Sunny and Maurice shows Holden at a much lower point. He is scared, embarrassed, and then physically hurt.",
    physical: 36,
    mental: 34,
    physicalText:
      "After Maurice hits him, his problems are not just in his head anymore. He is actually hurt and weak.",
    mentalText:
      "He imagines himself being tougher than he is, but the reality is that he feels helpless.",
    link:
      "This is where the fall becomes physical. His mental state and body both drop at the same time."
  },
  {
    title: "People from his past do not really help",
    range: "Sally and Carl",
    scene:
      "Holden tries reaching out to Sally and Carl, but both conversations go badly. He wants someone to understand him, but he also makes it hard for that to happen.",
    physical: 30,
    mental: 25,
    physicalText:
      "By this point he is cold, tired, and not taking care of himself very well.",
    mentalText:
      "His thoughts jump around. He gets angry, makes unrealistic plans, and seems more desperate.",
    link:
      "This stair drops because even when Holden talks to people he knows, he ends up feeling more alone."
  },
  {
    title: "Phoebe shows what he is really afraid of",
    range: "Home and museum",
    scene:
      "With Phoebe, Holden finally sounds more honest. His idea about catching kids before they fall shows that he is scared of growing up and scared of losing innocence.",
    physical: 24,
    mental: 20,
    physicalText:
      "He is exhausted and sneaking around instead of living normally.",
    mentalText:
      "He loves Phoebe, and she is one of the only people who makes him seem less fake.",
    link:
      "This step is low, but Phoebe gives it meaning. She helps show the real reason behind his breakdown."
  },
  {
    title: "At the end, he cannot keep pretending",
    range: "Carousel and aftermath",
    scene:
      "Near the end, Holden is sick, exhausted, and mentally overwhelmed. When he watches Phoebe on the carousel, he seems to understand that he cannot protect everyone from everything.",
    physical: 14,
    mental: 18,
    physicalText:
      "His body finally gives out after all the stress, walking, cold, and lack of rest.",
    mentalText:
      "He is at a low point, but there is also a small sign that he might accept help.",
    link:
      "The last stair is the lowest because Holden is weakest here. It is not a happy ending exactly, but it does leave room for recovery."
  }
];

const staircase = document.querySelector("#staircase");
const phaseNumber = document.querySelector("#phaseNumber");
const chapterRange = document.querySelector("#chapterRange");
const phaseTitle = document.querySelector("#phaseTitle");
const phaseScene = document.querySelector("#phaseScene");
const physicalScore = document.querySelector("#physicalScore");
const mentalScore = document.querySelector("#mentalScore");
const physicalBar = document.querySelector("#physicalBar");
const mentalBar = document.querySelector("#mentalBar");
const physicalText = document.querySelector("#physicalText");
const mentalText = document.querySelector("#mentalText");
const connectorNote = document.querySelector("#connectorNote");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let activeIndex = 0;

function positionStep(button, index) {
  const x = 4 + index * 13.7;
  const y = 6 + index * 11.8;
  button.style.left = `${x}%`;
  button.style.top = `${y}%`;
}

function renderSteps() {
  phases.forEach((phase, index) => {
    const button = document.createElement("button");
    button.className = "step";
    button.type = "button";
    button.innerHTML = `
      <strong>Step ${index + 1}</strong>
      <span>${phase.title}</span>
      <div class="drop-label">Body ${phase.physical}% / Mind ${phase.mental}%</div>
    `;
    button.addEventListener("click", () => setActive(index));
    positionStep(button, index);
    staircase.appendChild(button);
  });
}

function setActive(index) {
  activeIndex = index;
  const phase = phases[index];

  document.querySelectorAll(".step").forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === index);
    step.setAttribute("aria-current", stepIndex === index ? "step" : "false");
  });

  phaseNumber.textContent = `Phase ${index + 1}`;
  chapterRange.textContent = phase.range;
  phaseTitle.textContent = phase.title;
  phaseScene.textContent = phase.scene;
  physicalScore.textContent = `${phase.physical}%`;
  mentalScore.textContent = `${phase.mental}%`;
  physicalBar.style.width = `${phase.physical}%`;
  mentalBar.style.width = `${phase.mental}%`;
  physicalText.textContent = phase.physicalText;
  mentalText.textContent = phase.mentalText;
  connectorNote.textContent = phase.link;

  previous.disabled = index === 0;
  next.disabled = index === phases.length - 1;
}

previous.addEventListener("click", () => {
  if (activeIndex > 0) setActive(activeIndex - 1);
});

next.addEventListener("click", () => {
  if (activeIndex < phases.length - 1) setActive(activeIndex + 1);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && activeIndex > 0) setActive(activeIndex - 1);
  if (event.key === "ArrowRight" && activeIndex < phases.length - 1) setActive(activeIndex + 1);
});

renderSteps();
setActive(0);
