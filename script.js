const stops = [
  {
    kind: "physical",
    label: "Physical Point 1",
    title: "Pencey Prep: the polished school that feels hollow",
    place: "Agerstown, Pennsylvania - Thomsen Hill, Spencer's house, and the dorm",
    people: "Holden, Mr. Spencer, Ackley, Stradlater, Jane Gallagher in Holden's mind",
    quote: '"Since 1888 we have been molding boys into splendid, clear-thinking young men."',
    scene:
      "Holden begins after being expelled from Pencey. He watches the big football game from far away, says goodbye to Spencer, returns to the dorm, clashes with Stradlater, and finally leaves before vacation officially starts.",
    analysis:
      "I chose Pencey as the opening physical point because it begins the novel's satire of upper-class school culture. Pencey sells an image of polished success, but Holden sees theft, status anxiety, fake school spirit, and boys who are not truly splendid at all. His sarcastic language is funny, but it also shows how he protects himself from shame and loneliness.",
    physical: 18,
    despair: 28,
    x: 8,
    y: 15,
    themes: ["class satire", "school image", "phoniness", "outsider position"],
    spiral:
      "The descent starts before New York. Holden is already separated from the crowd, the school's values, and the adult future Pencey claims to prepare him for."
  },
  {
    kind: "emotional",
    label: "Emotional Point 1",
    title: "Spencer's sickroom: life as a rigged game",
    place: "Mr. Spencer's house - the first adult lecture",
    people: "Holden, Mr. Spencer, Dr. Thurmer indirectly",
    quote: '"Life is a game, boy. Life is a game that one plays according to the rules."',
    scene:
      "Spencer repeats the adult idea that life is a game played by rules. Holden agrees out loud, but internally he rejects the metaphor because he believes the game only works if someone is already on the winning side.",
    analysis:
      "This emotional point matters because Holden's despair is not just laziness or rebellion. He sees class, popularity, and adult approval as rules made by hot-shots for other hot-shots. Instead of arguing honestly, he performs respect, lies about needing to leave, and escapes the room.",
    physical: 24,
    despair: 38,
    x: 20,
    y: 27,
    themes: ["rigged rules", "adult hypocrisy", "hidden anger", "social class"],
    spiral:
      "Holden's first response to adult pressure is withdrawal. The more adults lecture him, the more he hides behind politeness, sarcasm, and escape."
  },
  {
    kind: "physical",
    label: "Physical Point 2",
    title: "Train to New York: escape becomes performance",
    place: "Night train from Pencey toward New York City",
    people: "Holden, Mrs. Morrow, Ernest Morrow indirectly",
    quote: '"I\'m the most terrific liar you ever saw in your life."',
    scene:
      "On the train, Holden meets Ernest Morrow's mother, gives himself a fake name, and invents flattering stories about her son. Physically he is leaving Pencey, but mentally he is still trapped in performance.",
    analysis:
      "The train should be freedom, but Holden turns a simple conversation into an elaborate act. This is a small social task, but he turns it into a complicated performance because direct honesty feels impossible. The lie is clever, but it also makes him more isolated.",
    physical: 40,
    despair: 46,
    x: 32,
    y: 36,
    themes: ["lying as performance", "wit over industry", "escape", "false identity"],
    spiral:
      "He leaves the school but brings the false self with him. The farther he travels, the harder it becomes to speak plainly."
  },
  {
    kind: "emotional",
    label: "Emotional Point 2",
    title: "Jane and Stradlater: panic under sarcasm",
    place: "Pencey memory that follows Holden into New York",
    people: "Holden, Stradlater, Ackley, Jane Gallagher",
    quote: '"Every time I thought about it, I felt like jumping out the window."',
    scene:
      "Holden cannot stop imagining Jane with Stradlater. His protective feeling toward Jane turns into panic, rage, and finally a physical fight that he loses.",
    analysis:
      "Jane represents memory, vulnerability, and childhood innocence. Holden's reaction is not just jealousy; it is fear that someone gentle is being pulled into the adult sexual world he distrusts. His unfiltered expression becomes violent and self-destructive because he cannot actually protect her.",
    physical: 44,
    despair: 58,
    x: 43,
    y: 45,
    themes: ["lost innocence", "uncontrolled expression", "sexual anxiety", "failed protection"],
    spiral:
      "This is where private grief leaks into action. He cannot protect Jane, cannot defeat Stradlater, and cannot calm his imagination."
  },
  {
    kind: "physical",
    label: "Physical Point 3",
    title: "Edmont Hotel and Ernie's: crowds without connection",
    place: "New York City - Edmont Hotel, Lavender Room, taxis, and Ernie's nightclub",
    people: "Holden, Maurice, Sunny, three tourists, Ernie, Lillian Simmons, Horwitz",
    quote: '"New York\'s terrible when somebody laughs on the street very late at night."',
    scene:
      "Holden checks into the Edmont, watches strangers through hotel windows, dances with tourists, goes to Ernie's, and rides in cabs where he asks about the ducks in Central Park.",
    analysis:
      "This physical section is crowded, but almost every setting makes Holden lonelier. The hotel, nightclub, and taxis are public spaces built for entertainment or service, yet he mostly sees snobbery, sexual performance, and empty class behavior. New York becomes a map of failed connection.",
    physical: 62,
    despair: 67,
    x: 53,
    y: 55,
    themes: ["urban loneliness", "phoniness", "class performance", "failed communication"],
    spiral:
      "Each new place promises contact but gives him another reason to feel separate. Noise replaces friendship."
  },
  {
    kind: "emotional",
    label: "Emotional Point 3",
    title: "Sunny and Maurice: fantasy becomes humiliation",
    place: "Edmont Hotel room",
    people: "Holden, Sunny, Maurice",
    quote: '"God, my old heart was damn near beating me out of the room."',
    scene:
      "Holden hires Sunny but cannot go through with it. Later Maurice and Sunny return, demand more money, and Maurice hits him.",
    analysis:
      "This is a major emotional drop because Holden's invented toughness collapses. He wants to act older and more worldly, but the encounter shows that he is frightened, lonely, and inexperienced. Movie-style fantasy turns into real vulnerability and physical pain.",
    physical: 68,
    despair: 82,
    x: 62,
    y: 68,
    themes: ["humiliation", "sexual confusion", "fear", "collapse of fantasy"],
    spiral:
      "After this stop, the journey is not only psychological. His body is hurt, his pride is broken, and his thoughts become more openly self-destructive."
  },
  {
    kind: "physical",
    label: "Physical Point 4",
    title: "Sally, Radio City, and Carl Luce: public life feels fake",
    place: "Biltmore clock, Broadway theater, Radio City skating rink, Wicker Bar",
    people: "Holden, Sally Hayes, Carl Luce, theater crowds, Radio City audience",
    quote: '"I don\'t get hardly anything out of anything. I\'m in bad shape. I\'m in lousy shape."',
    scene:
      "Holden meets Sally, watches a show, goes skating, proposes an impossible escape to New England, ruins the date, then later tries and fails to have an adult conversation with Carl Luce.",
    analysis:
      "This physical point shows Holden surrounded by manners, entertainment, and social polish. He attacks cars, schools, theater people, and rich social rituals because they feel empty to him. His desire to run away is sincere, but it is also impulsive and unworkable.",
    physical: 78,
    despair: 80,
    x: 73,
    y: 76,
    themes: ["dating as performance", "class manners", "phoniness", "failed escape plan"],
    spiral:
      "The more badly he wants someone to understand him, the more his intensity destroys the conversation."
  },
  {
    kind: "emotional",
    label: "Emotional Point 4",
    title: "Central Park: the broken record and the missing ducks",
    place: "Central Park lagoon and the dark streets near it",
    people: "Holden, Phoebe indirectly through the record, Allie in memory",
    quote: '"I just felt blue as hell."',
    scene:
      "After drinking and wandering, Holden breaks Phoebe's record, searches for the ducks, cannot find them, and begins imagining death and his own funeral.",
    analysis:
      "The broken record is a symbol of failed protection: he buys something innocent for Phoebe, but it breaks in his hands. The ducks are connected to his fear of disappearance. He wants proof that vulnerable beings survive winter, change, and abandonment.",
    physical: 84,
    despair: 91,
    x: 81,
    y: 84,
    themes: ["symbolism", "innocence damaged", "death imagery", "childhood memory"],
    spiral:
      "At this point, physical wandering and mental wandering almost become the same thing. He does not know where to sleep, where to go, or how to be safe."
  },
  {
    kind: "emotional",
    label: "Emotional Point 5",
    title: "Phoebe and the carousel: the bottom loop",
    place: "Caulfield family apartment, Central Park, and the carousel",
    people: "Holden, Phoebe, Allie in memory, Mr. Antolini indirectly",
    quote: '"That\'s all I\'d do all day. I\'d just be the catcher in the rye and all."',
    scene:
      "Holden sneaks home and talks with Phoebe. Later, at the carousel, he watches her reach for the gold ring and does not stop her.",
    analysis:
      "This is the emotional center of the map. Phoebe makes Holden speak honestly, and the carousel gives him a small pause at the bottom of the fall. He is not cured, but he briefly stops trying to control childhood completely.",
    physical: 92,
    despair: 88,
    x: 72,
    y: 88,
    themes: ["innocence", "grief", "protective fantasy", "ambiguous relief"],
    spiral:
      "The line becomes a loop here instead of rising. Holden has a moment of relief, but he is still circling the same fear of children falling."
  },
  {
    kind: "frame",
    label: "California Narration Frame",
    title: "California frame: telling the story afterward",
    place: "A later recovery setting near Hollywood/California",
    people: "Holden, D.B. indirectly, doctors/psychoanalyst indirectly",
    quote: '"Don\'t ever tell anybody anything. If you do, you start missing everybody."',
    scene:
      "After the three-day journey, the novel is being told from a later frame where Holden has been sick and is talking about what happened. This is outside the physical trip itself.",
    analysis:
      "This ending matters because it keeps the conclusion ambiguous. Holden can narrate the breakdown, but that does not mean he has fully recovered. The frame shows distance from the events, not a simple upward cure.",
    physical: 100,
    despair: 78,
    x: 91,
    y: 25,
    themes: ["narration frame", "ambiguous ending", "missing people", "not fully cured"],
    spiral:
      "The dashed connector shows this is not another travel stop. It is Holden looking back from outside the spiral and still missing everybody."
  }
];

let currentIndex = 0;

const map = document.getElementById("subwayMap");
const stopType = document.getElementById("stopType");
const stopNumber = document.getElementById("stopNumber");
const stopTitle = document.getElementById("stopTitle");
const stopPlace = document.getElementById("stopPlace");
const stopPeople = document.getElementById("stopPeople");
const stopQuote = document.getElementById("stopQuote");
const stopScene = document.getElementById("stopScene");
const stopAnalysis = document.getElementById("stopAnalysis");
const physicalScore = document.getElementById("physicalScore");
const despairScore = document.getElementById("despairScore");
const physicalBar = document.getElementById("physicalBar");
const despairBar = document.getElementById("despairBar");
const themes = document.getElementById("themes");
const spiralNote = document.getElementById("spiralNote");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

function createStations() {
  stops.forEach((stop, index) => {
    const button = document.createElement("button");
    button.className = `station ${stop.kind}`;
    button.type = "button";
    button.style.left = `${stop.x}%`;
    button.style.top = `${stop.y}%`;
    button.setAttribute("aria-label", `${stop.label}: ${stop.title}`);
    button.innerHTML = `
      <span class="station-dot">${index + 1}</span>
      <span class="station-name">${stop.label}</span>
    `;
    button.addEventListener("click", () => setStop(index));
    map.appendChild(button);
  });
}

function setStop(index) {
  currentIndex = (index + stops.length) % stops.length;
  const stop = stops[currentIndex];

  document.querySelectorAll(".station").forEach((station, stationIndex) => {
    station.classList.toggle("active", stationIndex === currentIndex);
  });

  stopType.textContent = stop.label;
  stopNumber.textContent = `${currentIndex + 1} / ${stops.length}`;
  stopTitle.textContent = stop.title;
  stopPlace.textContent = stop.place;
  stopPeople.textContent = `People involved: ${stop.people}`;
  stopQuote.textContent = stop.quote;
  stopScene.textContent = stop.scene;
  stopAnalysis.textContent = stop.analysis;

  physicalScore.textContent = `${stop.physical}%`;
  despairScore.textContent = `${stop.despair}%`;
  physicalBar.style.width = `${stop.physical}%`;
  despairBar.style.width = `${stop.despair}%`;

  themes.innerHTML = "";
  stop.themes.forEach((theme) => {
    const tag = document.createElement("span");
    tag.textContent = theme;
    themes.appendChild(tag);
  });

  spiralNote.textContent = stop.spiral;
}

previous.addEventListener("click", () => setStop(currentIndex - 1));
next.addEventListener("click", () => setStop(currentIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") setStop(currentIndex - 1);
  if (event.key === "ArrowRight") setStop(currentIndex + 1);
});

createStations();
setStop(0);
