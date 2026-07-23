"use strict";

const PASSAGES = [
  {
    name: "Reading 1 · Hidden People in Sports",
    key: "r1",
    sentences: [
      {
        en: "In sports, only the players get a trophy or medal, but they don't win on their own.",
        audio: "./audio/r1-01.wav",
        chunks: ["스포츠에서,", "오직", "선수들만", "트로피나 메달을", "받지만,", "그들은", "그들 스스로", "이기지 않는다"],
      },
      {
        en: "There are people who help the players.",
        audio: "./audio/r1-02.wav",
        chunks: ["그 선수들을", "돕는", "사람들이", "있다"],
      },
      {
        en: "These people are often hidden and don't get attention.",
        audio: "./audio/r1-03.wav",
        chunks: ["이 사람들은", "종종", "숨겨져 있고", "주목을", "받지 않는다"],
      },
      {
        en: "However, they are as important as the players. Here are some examples.",
        audio: "./audio/r1-04.wav",
        chunks: ["하지만,", "그들은", "선수들만큼", "중요하다.", "여기", "몇 개의 예시들이", "있다"],
      },
      {
        title: "Pacers in a Marathon · 마라톤에서의 페이서",
        en: "Pacers run with other runners and lead them in a marathon.",
        audio: "./audio/r1-05.wav",
        chunks: ["페이서들은", "다른 달리기 선수들과 함께", "달리고,", "마라톤에서", "그들을", "이끈다"],
      },
      {
        en: "Pacers are experienced runners, and their job is to help other runners manage their race better.",
        audio: "./audio/r1-06.wav",
        chunks: ["페이서들은", "경험이 많은", "달리기 선수들이고,", "그들의 역할은", "다른 선수들이", "그들의 경기를", "더 잘 운영하도록", "돕는 것이다"],
      },
      {
        en: "There can be several pacers in a race.",
        audio: "./audio/r1-07.wav",
        chunks: ["한 경기에", "여러 명의", "페이서들이", "있을 수 있다"],
      },
      {
        en: "Each pacer runs at different speeds and finishes the race in different times.",
        audio: "./audio/r1-08.wav",
        chunks: ["각각의 페이서는", "다른 속도로", "달리고,", "다른 시간대에", "경기를", "완주한다"],
      },
      {
        en: "Pacers usually have flags or balloons showing their finish time.",
        audio: "./audio/r1-09.wav",
        chunks: ["페이서들은", "주로", "그들의 완주 시간을", "보여주는", "깃발이나 풍선들을", "가지고 있다"],
      },
      {
        en: "Runners can choose a pacer depending on their target finish time.",
        audio: "./audio/r1-10.wav",
        chunks: ["달리기 선수들은", "그들의 목표 완주 시간에 따라", "페이서를", "선택할 수 있다"],
      },
      {
        en: "For example, if a runner wants to finish the race in four hours, the runner will follow the four-hour pacer.",
        audio: "./audio/r1-11.wav",
        chunks: ["예를 들어,", "만약 한 선수가", "경기를", "4시간 안에", "완주하고 싶으면,", "그 선수는", "4시간 페이서를", "따라갈 것이다"],
      },
      {
        en: "Since the pacer keeps track of the time, the runner can achieve his or her goal of finishing the marathon in a particular time more easily.",
        audio: "./audio/r1-12.wav",
        chunks: ["페이서가", "시간을", "파악하기 때문에,", "선수는", "특정한 시간 안에", "마라톤을 완주하려는", "자신의 목표를", "더 쉽게", "달성할 수 있다"],
      },
      {
        en: "In short, pacers run but they don't run to win. They run for others.",
        audio: "./audio/r1-13.wav",
        chunks: ["요약하면,", "페이서들은", "달리지만", "그들은", "이기기 위해서", "달리지 않는다.", "그들은", "다른 사람들을 위해", "달린다"],
      },
    ],
  },
  {
    name: "Reading 2 · Pit Crews / Sherpas",
    key: "r2",
    sentences: [
      {
        title: "Pit Crews in Car Racing · 자동차 경주에서의 피트 크루",
        en: "You may only see the car and the driver during most car races, but there is a team behind the driver.",
        audio: "./audio/r2-01.wav",
        chunks: ["여러분은", "대부분의 자동차 경주에서", "자동차와 운전자만", "볼지도 모르지만,", "그 레이서 뒤에는", "팀이 있다"],
      },
      {
        en: "This team is called a pit crew.",
        audio: "./audio/r2-02.wav",
        chunks: ["이 팀은", "피트 크루라고", "불린다"],
      },
      {
        en: "A pit is a place on the side of the race track, and drivers stop there several times during a race.",
        audio: "./audio/r2-03.wav",
        chunks: ["피트란", "경주 트랙의 옆쪽에 있는", "공간으로,", "운전자들은", "경주 도중에", "그곳에서", "여러 번", "정지한다"],
      },
      {
        en: "The main job of the pit crew is to check the car and change the tires.",
        audio: "./audio/r2-04.wav",
        chunks: ["피트 크루의", "주요 역할은", "자동차를 점검하고", "타이어를 교체하는 것이다"],
      },
      {
        en: "Changing the tires is especially important because the tires wear out easily in a high speed race.",
        audio: "./audio/r2-05.wav",
        chunks: ["타이어를 교체하는 것은", "특히 중요하다", "왜냐하면", "타이어들은", "빠른 속도의 경주에서", "쉽게", "닳기 때문이다"],
      },
      {
        en: "A pit stop can be as short as 2 seconds, and there are as many as 20 members on a crew.",
        audio: "./audio/r2-06.wav",
        chunks: ["피트에서의 정지는", "2초만큼", "짧을 수 있고,", "한 팀에는", "20명만큼 많은", "구성원들이 있다"],
      },
      {
        en: "Therefore, the pit crew has to work in perfect harmony.",
        audio: "./audio/r2-07.wav",
        chunks: ["따라서,", "피트 크루는", "완벽한 조화로", "일해야 한다"],
      },
      {
        en: "The driver may get all the attention, but as people say, \"Races are won in the pits.\"",
        audio: "./audio/r2-08.wav",
        chunks: ["운전자가", "모든 주목을", "받을지도 모르지만,", "사람들이 이야기하듯,", "“우승은", "피트에서", "이루어진다.”"],
      },
      {
        title: "Sherpas in Mountain Climbing · 등반에서의 세르파",
        en: "The word Sherpa comes from the Sherpa tribe, which lives in the eastern part of Nepal.",
        audio: "./audio/r2-09.wav",
        chunks: ["세르파라는 단어는", "세르파족에서", "유래되었고,", "그들은", "네팔의 동쪽 지역에", "산다"],
      },
      {
        en: "Sherpas have good climbing skills and know their way around the mountains well.",
        audio: "./audio/r2-10.wav",
        chunks: ["세르파들은", "훌륭한 등반 능력을", "가지고 있고,", "산의 지리를", "잘 안다"],
      },
      {
        en: "They also have little difficulty breathing high up in the mountains.",
        audio: "./audio/r2-11.wav",
        chunks: ["그들은 또한", "산 높은 곳에서", "숨 쉬는데", "어려움이", "거의 없다"],
      },
      {
        en: "Therefore, mountain climbers started to hire Sherpas to help them climb Mount Everest.",
        audio: "./audio/r2-12.wav",
        chunks: ["따라서,", "등반가들은", "그들이 에베레스트산을", "오르는 것을 돕기 위해", "세르파를", "고용하기 시작했다"],
      },
      {
        en: "Sherpas lead mountain climbers to the top of the mountain.",
        audio: "./audio/r2-13.wav",
        chunks: ["세르파들은", "등반가들을", "산 정상으로", "이끈다"],
      },
      {
        en: "They support climbers in many ways. For example, they put up tents and carry climbers' bags.",
        audio: "./audio/r2-14.wav",
        chunks: ["그들은", "등반가들을", "다양한 방법으로", "지원한다.", "예를 들어,", "그들은", "텐트를 치고", "등반가들의 가방을", "들어준다"],
      },
      {
        en: "Sherpas are often called the invisible people of Mount Everest because people often see a picture of only the climbers at the top of the mountain.",
        audio: "./audio/r2-15.wav",
        chunks: ["세르파들은", "종종", "에베레스트산의 보이지 않는 사람들이라고", "불린다", "왜냐하면", "사람들이", "산 정상에서", "등반가들만 있는 사진을", "자주 보기 때문이다"],
      },
    ],
  },
];

const elements = {
  home: document.getElementById("home"),
  lesson: document.getElementById("lesson"),
  lessonBody: document.getElementById("lesson-body"),
  result: document.getElementById("result"),
  quit: document.getElementById("quit"),
  progress: document.getElementById("progress"),
  progressBar: document.getElementById("progress-bar"),
  scoreChip: document.getElementById("score-chip"),
  scoreValue: document.getElementById("score-value"),
  combo: document.getElementById("combo"),
  sectionTitle: document.getElementById("section-title"),
  prompt: document.getElementById("prompt"),
  english: document.getElementById("english"),
  answer: document.getElementById("answer"),
  wordBank: document.getElementById("word-bank"),
  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedback-title"),
  feedbackAnswer: document.getElementById("feedback-answer"),
  feedbackPoints: document.getElementById("feedback-points"),
  audioStatus: document.getElementById("audio-status"),
  play: document.getElementById("play"),
  playSlow: document.getElementById("play-slow"),
  action: document.getElementById("action"),
  audio: document.getElementById("sentence-audio"),
  resultStars: document.getElementById("result-stars"),
  resultTitle: document.getElementById("result-title"),
  resultGrade: document.getElementById("result-grade"),
  resultScore: document.getElementById("result-score"),
  resultAccuracy: document.getElementById("result-accuracy"),
  resultCorrect: document.getElementById("result-correct"),
  newBest: document.getElementById("new-best"),
  again: document.getElementById("again"),
  homeButton: document.getElementById("home-button"),
};

const state = {
  passageIndex: 0,
  sentenceIndex: 0,
  score: 0,
  streak: 0,
  firstCorrect: 0,
  wrongThisSentence: false,
  placed: [],
  bankOrder: [],
  checked: false,
};

const bestScores = loadBestScores();

function currentPassage() {
  return PASSAGES[state.passageIndex];
}

function currentSentence() {
  return currentPassage().sentences[state.sentenceIndex];
}

function shuffle(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function loadBestScores() {
  try {
    const saved = JSON.parse(localStorage.getItem("lesson5-best-scores") || "{}");
    return typeof saved === "object" && saved !== null ? saved : {};
  } catch {
    return {};
  }
}

function saveBestScores() {
  try {
    localStorage.setItem("lesson5-best-scores", JSON.stringify(bestScores));
  } catch {
    // The app remains fully usable when private browsing blocks storage.
  }
}

function setScreen(active) {
  for (const [name, element] of [["home", elements.home], ["lesson", elements.lesson], ["result", elements.result]]) {
    element.classList.toggle("is-hidden", name !== active);
  }
}

function startPassage(passageIndex) {
  state.passageIndex = passageIndex;
  state.sentenceIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.firstCorrect = 0;
  setScreen("lesson");
  renderSentence(true);
}

function goHome() {
  stopAudio();
  setScreen("home");
  refreshBestScores();
  document.getElementById("home-title").focus();
}

function resetSentenceState() {
  state.checked = false;
  state.wrongThisSentence = false;
  state.placed = [];
}

function renderSentence(autoplay) {
  stopAudio();
  resetSentenceState();
  elements.lessonBody.scrollTop = 0;

  const sentence = currentSentence();
  const total = currentPassage().sentences.length;
  const progress = Math.round(((state.sentenceIndex + 1) / total) * 100);

  elements.progressBar.style.width = `${progress}%`;
  elements.progress.setAttribute("aria-valuenow", String(progress));
  elements.scoreValue.textContent = String(state.score);
  elements.combo.textContent = state.streak >= 2 ? `${state.streak}연속` : "";

  if (sentence.title) {
    elements.sectionTitle.textContent = sentence.title.replace("피트 크루", "피트\u00a0크루");
    elements.sectionTitle.classList.remove("is-hidden");
  } else {
    elements.sectionTitle.classList.add("is-hidden");
  }

  elements.prompt.textContent = `${state.sentenceIndex + 1} / ${total} · 음성을 듣고 해석을 완성하세요`;
  elements.english.textContent = sentence.en;
  state.bankOrder = shuffle(sentence.chunks.map((chunk, bankIndex) => ({ chunk, bankIndex })));

  renderAnswer();
  renderWordBank();
  hideFeedback();
  elements.audioStatus.textContent = "";
  configureAction("check");
  elements.prompt.focus();

  if (autoplay) {
    playAudio(1);
  }
}

function createWordTile(text, options = {}) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "word-tile";
  if (options.placeholder) {
    tile.classList.add("word-tile--placeholder");
  }
  tile.textContent = text;
  tile.disabled = Boolean(options.disabled);
  if (options.label) {
    tile.setAttribute("aria-label", options.label);
  }
  if (options.hidden) {
    tile.setAttribute("aria-hidden", "true");
  }
  if (options.bankIndex != null) {
    tile.dataset.bankIndex = String(options.bankIndex);
  }
  if (options.onClick) {
    tile.addEventListener("click", options.onClick);
  }
  return tile;
}

function renderAnswer() {
  elements.answer.replaceChildren();
  state.placed.forEach((placedItem, placedIndex) => {
    const tile = createWordTile(placedItem.chunk, {
      disabled: state.checked,
      bankIndex: placedItem.bankIndex,
      label: state.checked ? placedItem.chunk : `선택 취소: ${placedItem.chunk}`,
      onClick: state.checked
        ? null
        : () => {
            const returnIndex = placedItem.bankIndex;
            state.placed.splice(placedIndex, 1);
            renderAnswer();
            renderWordBank();
            updateActionAvailability();
            elements.wordBank.querySelector(`[data-bank-index="${returnIndex}"]`)?.focus();
          },
    });
    elements.answer.append(tile);
  });
}

function renderWordBank() {
  elements.wordBank.replaceChildren();
  state.bankOrder.forEach((bankItem) => {
    const used = state.placed.some((placedItem) => placedItem.bankIndex === bankItem.bankIndex);
    const tile = createWordTile(bankItem.chunk, {
      disabled: used || state.checked,
      bankIndex: bankItem.bankIndex,
      hidden: used,
      placeholder: used,
      label: `선택: ${bankItem.chunk}`,
      onClick: used || state.checked
        ? null
        : () => {
            state.placed.push(bankItem);
            renderAnswer();
            renderWordBank();
            updateActionAvailability();
            const nextChoice = elements.wordBank.querySelector("button:not(:disabled)");
            const selectedChoice = elements.answer.querySelector(`[data-bank-index="${bankItem.bankIndex}"]`);
            (nextChoice || selectedChoice)?.focus();
          },
    });
    elements.wordBank.append(tile);
  });
}

function updateActionAvailability() {
  elements.action.disabled = state.placed.length === 0;
}

function configureAction(mode) {
  elements.action.className = "action-button";
  elements.action.disabled = false;

  if (mode === "check") {
    elements.action.textContent = "정답 확인";
    elements.action.disabled = true;
    elements.action.onclick = checkAnswer;
  } else if (mode === "next") {
    const isLast = state.sentenceIndex >= currentPassage().sentences.length - 1;
    elements.action.textContent = isLast ? "결과 보기" : "다음 문장";
    elements.action.onclick = nextSentence;
  } else if (mode === "retry") {
    elements.action.textContent = "다시 풀기";
    elements.action.classList.add("action-button--retry");
    elements.action.onclick = retrySentence;
  }
}

function checkAnswer() {
  const sentence = currentSentence();
  const correct = state.placed.map((item) => item.chunk).join(" ") === sentence.chunks.join(" ");
  state.checked = true;
  let gained = 0;

  if (correct) {
    if (!state.wrongThisSentence) {
      state.firstCorrect += 1;
      state.streak += 1;
      gained = 100 + Math.min(state.streak - 1, 5) * 10;
    } else {
      state.streak = 0;
      gained = 40;
    }
    state.score += gained;
  } else {
    state.wrongThisSentence = true;
    state.streak = 0;
  }

  elements.scoreValue.textContent = String(state.score);
  elements.combo.textContent = state.streak >= 2 ? `${state.streak}연속` : "";
  if (gained > 0) {
    elements.scoreChip.classList.remove("is-popping");
    void elements.scoreChip.offsetWidth;
    elements.scoreChip.classList.add("is-popping");
  }

  showFeedback(correct, gained);
  configureAction(correct ? "next" : "retry");
  renderAnswer();
  renderWordBank();
}

function showFeedback(correct, gained) {
  const sentence = currentSentence();
  elements.feedback.className = `feedback ${correct ? "feedback--success" : "feedback--error"}`;
  elements.feedbackTitle.textContent = correct ? "정답이에요!" : "다시 확인해 봐요";
  elements.feedbackAnswer.replaceChildren();
  elements.feedbackAnswer.append("정답: ");
  const answer = document.createElement("strong");
  sentence.chunks.forEach((chunk) => {
    const chunkElement = document.createElement("span");
    chunkElement.className = "feedback-chunk";
    chunkElement.textContent = chunk;
    answer.append(chunkElement);
  });
  elements.feedbackAnswer.append(answer);
  elements.feedbackPoints.textContent = correct
    ? `+${gained}점${state.streak >= 2 ? ` · ${state.streak}연속 정답` : ""}`
    : "";
}

function hideFeedback() {
  elements.feedback.className = "feedback is-hidden";
  elements.feedbackTitle.textContent = "";
  elements.feedbackAnswer.replaceChildren();
  elements.feedbackPoints.textContent = "";
}

function retrySentence() {
  state.placed = [];
  state.checked = false;
  state.bankOrder = shuffle(currentSentence().chunks.map((chunk, bankIndex) => ({ chunk, bankIndex })));
  hideFeedback();
  renderAnswer();
  renderWordBank();
  configureAction("check");
}

function nextSentence() {
  if (state.sentenceIndex >= currentPassage().sentences.length - 1) {
    finishPassage();
    return;
  }
  state.sentenceIndex += 1;
  renderSentence(true);
}

function finishPassage() {
  stopAudio();
  setScreen("result");

  const passage = currentPassage();
  const total = passage.sentences.length;
  const accuracy = Math.round((state.firstCorrect / total) * 100);
  const earnedStars = accuracy === 100 ? 3 : accuracy >= 80 ? 2 : accuracy >= 60 ? 1 : 0;
  const grade = accuracy === 100
    ? "완벽해요! S등급"
    : accuracy >= 80
      ? "훌륭해요! A등급"
      : accuracy >= 60
        ? "잘했어요! B등급"
        : "조금 더 연습해요! C등급";

  elements.resultTitle.textContent = passage.name;
  elements.resultGrade.textContent = grade;
  elements.resultScore.textContent = String(state.score);
  elements.resultAccuracy.textContent = `${accuracy}%`;
  elements.resultCorrect.textContent = `${state.firstCorrect} / ${total}`;
  renderStars(earnedStars);

  const isBest = bestScores[passage.key] == null || state.score > bestScores[passage.key];
  if (isBest) {
    bestScores[passage.key] = state.score;
    saveBestScores();
  }
  elements.newBest.classList.toggle("is-hidden", !isBest);
  elements.resultTitle.focus();
}

function renderStars(earnedStars) {
  elements.resultStars.replaceChildren();
  elements.resultStars.setAttribute("aria-label", `별 ${earnedStars}개 획득`);
  for (let index = 0; index < 3; index += 1) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute("viewBox", "0 0 24 24");
    star.setAttribute("aria-hidden", "true");
    star.classList.add("icon");
    if (index < earnedStars) {
      star.classList.add("is-earned");
    }
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m12 2 3 6 7 .9-5 4.8 1.2 6.8L12 17.3 5.8 20.5 7 13.7 2 8.9 9 8z");
    star.append(path);
    elements.resultStars.append(star);
  }
}

function restartPassage() {
  state.sentenceIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.firstCorrect = 0;
  setScreen("lesson");
  renderSentence(true);
}

function stopAudio() {
  elements.audio.pause();
  setAudioLoading(false);
  try {
    elements.audio.currentTime = 0;
  } catch {
    // The source may not have loaded yet.
  }
}

function setAudioLoading(loading) {
  for (const button of [elements.play, elements.playSlow]) {
    button.classList.toggle("is-loading", loading);
    if (loading) {
      button.setAttribute("aria-busy", "true");
    } else {
      button.removeAttribute("aria-busy");
    }
  }
}

function playAudio(rate) {
  const sentence = currentSentence();
  const absoluteSource = new URL(sentence.audio, document.baseURI).href;
  elements.audioStatus.textContent = "";
  setAudioLoading(true);

  if (elements.audio.src !== absoluteSource) {
    elements.audio.src = sentence.audio;
    elements.audio.load();
  } else {
    stopAudio();
  }

  elements.audio.playbackRate = rate;
  const playPromise = elements.audio.play();
  if (playPromise) {
    playPromise.catch(() => {
      elements.audioStatus.textContent = "음성을 재생하지 못했습니다. 듣기 버튼을 다시\u00a0눌러\u00a0주세요.";
      setAudioLoading(false);
    });
  }
}

function refreshBestScores() {
  PASSAGES.forEach((passage, index) => {
    const target = document.getElementById(`best-${index}`);
    target.textContent = bestScores[passage.key] == null ? "" : `최고 ${bestScores[passage.key]}점`;
  });
}

document.querySelectorAll("[data-passage]").forEach((button) => {
  button.addEventListener("click", () => startPassage(Number(button.dataset.passage)));
});

elements.quit.addEventListener("click", goHome);
elements.play.addEventListener("click", () => playAudio(1));
elements.playSlow.addEventListener("click", () => playAudio(0.7));
elements.again.addEventListener("click", restartPassage);
elements.homeButton.addEventListener("click", goHome);

elements.audio.addEventListener("canplay", () => {
  setAudioLoading(false);
});

elements.audio.addEventListener("error", () => {
  elements.audioStatus.textContent = "포함된 음성 파일을 불러오지 못했습니다.";
  setAudioLoading(false);
});

refreshBestScores();
