const phases = [
  {
    title: "Expelled, restless, still performing confidence",
    range: "Pencey Prep",
    scene:
      "At the start, Holden is already isolated from school life, but he still talks with sarcasm, judgment, and swagger. He is physically worn down after the fencing trip and emotionally detached from the institution around him.",
    physical: 72,
    mental: 64,
    physicalText:
      "Tired and careless, but still mobile. He can leave, argue, pack, and move through the world on adrenaline.",
    mentalText:
      "Defensive and cynical. His loneliness is visible, but he keeps it disguised as superiority.",
    link:
      "The first step is high because he still has motion and attitude. The drop begins when escape becomes his main plan."
  },
  {
    title: "Leaving school turns freedom into drift",
    range: "Train to New York",
    scene:
      "Once he leaves Pencey early, Holden gains freedom but loses structure. His lies and invented persona on the train show how separated he is from honest contact.",
    physical: 66,
    mental: 56,
    physicalText:
      "He is moving quickly, but the movement is aimless rather than healthy.",
    mentalText:
      "He avoids direct truth, using performance to keep intimacy at a distance.",
    link:
      "The staircase connects freedom to instability: each new place gives him motion, but not relief."
  },
  {
    title: "Nightlife exposes loneliness instead of curing it",
    range: "Hotel and clubs",
    scene:
      "In New York, he searches for adult experience through hotels, bars, dancing, and strangers. The city gives him noise, but not belonging.",
    physical: 54,
    mental: 45,
    physicalText:
      "Sleep loss, cold streets, and late-night wandering start to grind him down.",
    mentalText:
      "He wants connection, then rejects or sabotages it when it appears. The gap between desire and trust widens.",
    link:
      "This step drops because entertainment fails as medicine. The more he tries to act adult, the younger and more exposed he seems."
  },
  {
    title: "Conflict and humiliation make the fall bodily",
    range: "Maurice and Sunny",
    scene:
      "The encounter with Sunny and Maurice turns his emotional confusion into physical vulnerability. He is frightened, ashamed, and then hurt.",
    physical: 36,
    mental: 34,
    physicalText:
      "The beating marks a real physical low: pain, nausea, and exhaustion replace his earlier nervous energy.",
    mentalText:
      "His fantasies of bravery collapse into self-pity and helplessness.",
    link:
      "The descent becomes visible here. Psychological fragility is no longer hidden behind jokes; it appears in the body."
  },
  {
    title: "Old attachments cannot stabilize him",
    range: "Sally and Carl",
    scene:
      "Holden reaches toward people from his past, but his conversations with Sally and Carl fall apart. He wants rescue while resisting the ordinary compromises relationships require.",
    physical: 30,
    mental: 25,
    physicalText:
      "He is cold, tired, and increasingly scattered as the city wears on him.",
    mentalText:
      "He swings between idealism, disgust, anger, and panic. His plans become less realistic.",
    link:
      "The step connects failed social contact to deeper isolation. Every attempted bridge becomes another proof, to him, that the world is false."
  },
  {
    title: "Phoebe reveals the real wound",
    range: "Home and museum",
    scene:
      "With Phoebe, Holden's protective fantasy becomes clear. He dreams of saving children from falling, which reveals his grief, fear of adulthood, and need to protect innocence.",
    physical: 24,
    mental: 20,
    physicalText:
      "He is depleted and close to collapse, sneaking around instead of functioning normally.",
    mentalText:
      "His love for Phoebe is genuine, but it also shows how desperate he is for something pure and stable.",
    link:
      "This step is low, but not empty. Phoebe becomes the handrail: she does not erase the fall, but she makes honesty possible."
  },
  {
    title: "Breakdown, surrender, and a fragile turn",
    range: "Carousel and aftermath",
    scene:
      "Near the end, Holden is physically sick and psychologically overwhelmed. Watching Phoebe on the carousel, he begins to accept that he cannot control every fall.",
    physical: 14,
    mental: 18,
    physicalText:
      "Illness and exhaustion finally catch up with him. The body records the cost of the whole journey.",
    mentalText:
      "He reaches a low point, but there is a small shift from control toward acceptance.",
    link:
      "The final stair is lowest because Holden is weakest, yet it also bends toward recovery. The descent ends with the possibility of help."
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
