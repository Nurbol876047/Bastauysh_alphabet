/* ===================== DATA ===================== */
const LETTERS = [
  { l: 'А', d: 'а', t: 'v', w: [['Алма', '🍎'], ['Ана', '👩'], ['Ат', '🐎']], f: 'А — қазақ тілінде ең жиі қолданылатын дауысты дыбыс!' },
  { l: 'Ә', d: 'ә', t: 'v', w: [['Әже', '👵'], ['Әке', '👨'], ['Ән', '🎵']], f: 'Ә — тек қазақ және басқа түркі тілдерінде ғана кездеседі!' },
  { l: 'Б', d: 'б', t: 'c', w: [['Бала', '👶'], ['Бөрі', '🐺'], ['Балық', '🐟']], f: 'Б — айтқанда еріндер бір сәт жабылады.' },
  { l: 'В', d: 'в', t: 'c', w: [['Велосипед', '🚲'], ['Вагон', '🚃'], ['Ваза', '🏺']], f: 'В — негізінен басқа тілден енген сөздерде кездеседі.' },
  { l: 'Г', d: 'г', t: 'c', w: [['Гүл', '🌸'], ['Газет', '📰'], ['Гитара', '🎸']], f: 'Г — тілдің артқы жағымен жасалатын жұмсақ дыбыс.' },
  { l: 'Ғ', d: 'ғ', t: 'c', w: [['Ғарыш', '🚀'], ['Ғаламшар', '🪐'], ['Ғалым', '🔬']], f: 'Ғ — Г дыбысынан қаттырақ, тамақ түкпірінен шығады.' },
  { l: 'Д', d: 'д', t: 'c', w: [['Дос', '🤝'], ['Дәптер', '📓'], ['Дария', '🌊']], f: 'Д — тіл ұшы тіске тигенде шығатын дыбыс.' },
  { l: 'Е', d: 'е', t: 'v', w: [['Ешкі', '🐐'], ['Ел', '🏞️'], ['Ертегі', '📖']], f: 'Е — сөз басында өте жұмсақ естіледі.' },
  { l: 'Ё', d: 'ё', t: 'c', w: [['Ёлка', '🎄'], ['Ёж', '🦔'], ['Ёршик', '🧴']], f: 'Ё — қазақ тілінде өте сирек қолданылатын әріп.' },
  { l: 'Ж', d: 'ж', t: 'c', w: [['Жұлдыз', '⭐'], ['Жаз', '☀️'], ['Жол', '🛣️']], f: 'Ж — ызыңдаған дыбыс, ара ызыңдағандай!' },
  { l: 'З', d: 'з', t: 'c', w: [['Зебра', '🦓'], ['Зал', '🏛️'], ['Зат', '📦']], f: 'З — ызылдап шығатын жұмсақ дыбыс.' },
  { l: 'И', d: 'и', t: 'v', w: [['Ит', '🐕'], ['Иә', '✅'], ['Ине', '🪡']], f: 'И — қысқа және жіңішке естілетін дауысты.' },
  { l: 'Й', d: 'й', t: 'c', w: [['Йод', '💧'], ['Сарай', '🏰'], ['Тай', '🐴']], f: 'Й — көбіне сөз ортасында немесе соңында кездеседі.' },
  { l: 'К', d: 'к', t: 'c', w: [['Кітап', '📚'], ['Күн', '☀️'], ['Кеме', '🚢']], f: 'К — тіл артымен жасалатын қатты дыбыс.' },
  { l: 'Қ', d: 'қ', t: 'c', w: [['Қоян', '🐰'], ['Құс', '🐦'], ['Қалам', '✏️']], f: 'Қ — К дыбысынан қаттырақ, тамақ түкпірінен шығады.' },
  { l: 'Л', d: 'л', t: 'c', w: [['Лимон', '🍋'], ['Лента', '🎀'], ['Лампа', '💡']], f: 'Л — тіл ұшымен айтылатын жұмсақ дыбыс.' },
  { l: 'М', d: 'м', t: 'c', w: [['Мысық', '🐱'], ['Мектеп', '🏫'], ['Май', '🧈']], f: 'М — еріндер бірігіп, дыбыс мұрыннан шығады.' },
  { l: 'Н', d: 'н', t: 'c', w: [['Нан', '🍞'], ['Нөмір', '🔢'], ['Нар', '🐫']], f: 'Н — дыбыс мұрын арқылы шығады.' },
  { l: 'Ң', d: 'ң', t: 'c', w: [['Таң', '🌅'], ['Мың', '🔢'], ['Сіңлі', '👧']], f: 'Ң — сөз басында болмайды, тек ортасы мен соңында кездеседі.' },
  { l: 'О', d: 'о', t: 'v', w: [['Орындық', '🪑'], ['От', '🔥'], ['Ойын', '🎮']], f: 'О — еріндер дөңгелене бүгіліп айтылады.' },
  { l: 'Ө', d: 'ө', t: 'v', w: [['Өрік', '🍑'], ['Өзен', '🏞️'], ['Өнер', '🎨']], f: 'Ө — тек түркі тілдерінде ғана болатын ерекше дауысты!' },
  { l: 'П', d: 'п', t: 'c', w: [['Піл', '🐘'], ['Помидор', '🍅'], ['Парк', '🌳']], f: 'П — ерін бір сәт жабылып, дыбыс «жарылып» шығады.' },
  { l: 'Р', d: 'р', t: 'c', w: [['Раушан', '🌹'], ['Робот', '🤖'], ['Рахмет', '🙏']], f: 'Р — тіл дірілдеп шығатын дыбыс.' },
  { l: 'С', d: 'с', t: 'c', w: [['Су', '💧'], ['Сәлем', '👋'], ['Сурет', '🖼️']], f: 'С — жылан сызылдағандай ызылдап шығады.' },
  { l: 'Т', d: 'т', t: 'c', w: [['Түлкі', '🦊'], ['Терезе', '🪟'], ['Тауық', '🐔']], f: 'Т — тіл мен тістің бірге қимылынан шығады.' },
  { l: 'У', d: 'у', t: 'v', w: [['Ура', '🎉'], ['Уақыт', '⏰'], ['Униформа', '👔']], f: 'У — көбіне басқа дауыстылармен қосылып айтылады.' },
  { l: 'Ұ', d: 'ұ', t: 'v', w: [['Ұя', '🪺'], ['Ұн', '🌾'], ['Ұзын', '📏']], f: 'Ұ — қысқа, бірақ күшті естілетін дауысты.' },
  { l: 'Ү', d: 'ү', t: 'v', w: [['Үй', '🏠'], ['Үкі', '🦉'], ['Үзім', '🍇']], f: 'Ү — Ұ дыбысының жіңішке «бауырлас» нұсқасы.' },
  { l: 'Ф', d: 'ф', t: 'c', w: [['Футбол', '⚽'], ['Фонтан', '⛲'], ['Фермер', '👨🌾']], f: 'Ф — тіс пен ерінмен жасалады, шетел сөздерінде кездеседі.' },
  { l: 'Х', d: 'х', t: 'c', w: [['Хат', '✉️'], ['Хор', '🎶'], ['Хоккей', '🏒']], f: 'Х — тамақтан үрлеп шығарған сияқты қатты дыбыс.' },
  { l: 'Һ', d: 'һ', t: 'c', w: [['Шаһар', '🏙️'], ['Гауһар', '💎'], ['Шаһмат', '♟️']], f: 'Һ — өте сирек, негізінен араб тілінен енген сөздерде кездеседі.' },
  { l: 'Ц', d: 'ц', t: 'c', w: [['Цирк', '🎪'], ['Цифра', '🔢'], ['Циркуль', '📐']], f: 'Ц — «т» және «с» дыбыстарының бірігуінен шығады.' },
  { l: 'Ч', d: 'ч', t: 'c', w: [['Чемодан', '🧳'], ['Чай', '☕'], ['Чемпион', '🏆']], f: 'Ч — «ш» және «т» дыбыстарының қосындысы.' },
  { l: 'Ш', d: 'ш', t: 'c', w: [['Шар', '🎈'], ['Шана', '🛷'], ['Шие', '🍒']], f: 'Ш — сыбырлағандай жұмсақ дыбыс.' },
  { l: 'Щ', d: 'щ', t: 'c', w: [['Щётка', '🪥'], ['Щука', '🐠'], ['Щенок', '🐶']], f: 'Щ — Ш дыбысынан да жұмсағырақ естіледі.' },
  { l: 'Ъ', d: 'ъ', t: 'c', w: [['Қатаң белгі', '🔤'], ['Дыбысы жоқ', '🤫'], ['Сирек қолданылады', '📚']], f: 'Ъ — өз дыбысы жоқ, тек жазуда белгі ретінде қолданылады.' },
  { l: 'Ы', d: 'ы', t: 'v', w: [['Ыдыс', '🍽️'], ['Ынтымақ', '🤝'], ['Ыстық', '🥵']], f: 'Ы — қазақ сөздерінде өте жиі кездеседі.' },
  { l: 'І', d: 'і', t: 'v', w: [['Іні', '👦'], ['Ірімшік', '🧀'], ['Іс', '💼']], f: 'І — жіңішке және қысқа естілетін дауысты.' },
  { l: 'Ь', d: 'ь', t: 'c', w: [['Жұмсақ белгі', '🪶'], ['Дыбысы жоқ', '🤫'], ['Сирек қолданылады', '📚']], f: 'Ь — өз дыбысы жоқ, алдыңғы дыбысты жұмсартады.' },
  { l: 'Э', d: 'э', t: 'v', w: [['Экран', '📺'], ['Электр', '⚡'], ['Эму', '🦤']], f: 'Э — негізінен кірме сөздердің басында кездеседі.' },
  { l: 'Ю', d: 'ю', t: 'v', w: [['Юрта', '⛺'], ['Юбка', '👗'], ['Юмор', '😄']], f: 'Ю — «й» және «у» дыбыстарының қосындысынан жасалады.' },
  { l: 'Я', d: 'я', t: 'v', w: [['Январь', '📅'], ['Як', '🐃'], ['Якорь', '⚓']], f: 'Я — «й» және «а» дыбыстарының қосындысынан жасалады.' },
];
const STORAGE_KEY = 'kazakhAlphabetProgress';
const THEME_KEY = 'kazakhAlphabetTheme';

/* ===================== INIT ===================== */
const grid = document.getElementById('alphabetGrid');
const panel = document.getElementById('letterPanel');
const panelContent = document.getElementById('panelContent');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const confettiContainer = document.getElementById('confettiContainer');
const celebration = document.getElementById('celebration');
const gridContainer = document.getElementById('gridContainer');
const retinaCanvas = document.getElementById('retinaCanvas');
const ctx = retinaCanvas.getContext('2d');

let learned = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
let selectedIndex = null;

/* Hero title animation */
const heroTitle = document.getElementById('heroTitle');
const titleText = 'Қазақ Әліпбиі';
[...titleText].forEach((ch, i) => {
  const span = document.createElement('span');
  if (ch === ' ') {
    span.innerHTML = '&nbsp;';
    span.style.animationDelay = (i * 0.06) + 's';
  } else {
    span.textContent = ch;
    span.style.animationDelay = (i * 0.06) + 's';
  }
  heroTitle.appendChild(span);
});

/* Build alphabet grid */
LETTERS.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'letter-card';
  card.dataset.type = item.t === 'v' ? 'vowel' : 'consonant';
  card.dataset.index = i;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  const typeLabel = item.t === 'v' ? 'дауысты' : 'дауыссыз';
  card.setAttribute('aria-label', `${item.l}, ${typeLabel}, мысал: ${item.w[0][0]}`);

  card.innerHTML = `
    <span class="card-star" aria-hidden="true">⭐</span>
    <div class="card-letters"><span class="upper">${item.l}</span><span class="lower">${item.d}</span></div>
    <div class="card-badge ${item.t === 'v' ? 'badge-vowel' : 'badge-consonant'}">${item.t === 'v' ? 'Дауысты' : 'Дауыссыз'}</div>
    <div class="card-example"><span class="emj">${item.w[0][1]}</span><span>${item.w[0][0]}</span></div>
  `;

  card.addEventListener('click', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.resume();
    selectLetter(i, card);
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectLetter(i, card); }
  });

  grid.appendChild(card);
});

const cards = [...grid.querySelectorAll('.letter-card')];
cards.forEach(c => { if (learned.has(+c.dataset.index)) c.classList.add('learned'); });
updateProgress();

/* ===================== SELECT LETTER ===================== */
function selectLetter(index, cardEl, openPanel = true) {
  selectedIndex = index;
  const item = LETTERS[index];

  cards.forEach(c => c.classList.remove('selected'));
  if (cardEl) {
    cardEl.classList.add('selected');

    // pop animation
    cardEl.classList.remove('pop');
    void cardEl.offsetWidth;
    cardEl.classList.add('pop');
    cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // mark as learned (first time only)
  if (!learned.has(index)) {
    learned.add(index);
    if (cardEl) {
      cardEl.classList.add('learned');
      const star = cardEl.querySelector('.card-star');
      star.classList.remove('burst');
      void star.offsetWidth;
      star.classList.add('burst');
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...learned]));
    updateProgress();
    if (learned.size === LETTERS.length) celebrateAll();
  }

  if (openPanel) {
    renderPanel(item);
  } else {
    // Just speak without opening
    speakWord(item.l, item.w[0][0]);
  }
  
  drawRetinaCanvas(item);
}

function renderPanel(item) {
  const typeLabel = item.t === 'v' ? 'Дауысты' : 'Дауыссыз';
  const badgeClass = item.t === 'v' ? 'badge-vowel' : 'badge-consonant';

  // Ensure DOM is ready before trying to get speakBtn
  panelContent.innerHTML = `
    <div class="panel-letter pop-in"><span class="upper">${item.l}</span><span class="lower">${item.d}</span></div>
    <div class="panel-badge ${badgeClass}">${typeLabel}</div>
    <div class="panel-main-example">
      <span class="emj">${item.w[0][1]}</span>
      <span class="word">${item.w[0][0]}</span>
    </div>
    <div class="panel-words">
      ${item.w.map(w => `<span class="word-chip"><span>${w[1]}</span><span>${w[0]}</span></span>`).join('')}
    </div>
    <div class="panel-fact">💡 ${item.f}</div>
    <button class="btn speak-btn" id="speakBtn"><span class="wave">🔊</span> Қайта айту</button>
  `;

  document.getElementById('speakBtn').addEventListener('click', (e) => {
    if ('speechSynthesis' in window) window.speechSynthesis.resume();
    speakWord(item.l, item.w[0][0]);
    const btn = e.currentTarget;
    btn.classList.add('speaking');
    setTimeout(() => btn.classList.remove('speaking'), 1500);
  });

  panel.classList.add('open');
  speakWord(item.l, item.w[0][0]);
}

document.getElementById('panelClose').addEventListener('click', () => {
  panel.classList.remove('open');
  cards.forEach(c => c.classList.remove('selected'));
  selectedIndex = null;
});

/* ===================== RETINA CANVAS ===================== */
function drawRetinaCanvas(item) {
  const dpr = window.devicePixelRatio || 1;
  const size = 150;
  retinaCanvas.width = size * dpr;
  retinaCanvas.height = size * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, size, size);

  // Background
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--card').trim();
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, 12);
  ctx.fill();

  // Border
  ctx.lineWidth = 4;
  ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue(item.t === 'v' ? '--coral-soft' : '--sky-soft').trim();
  ctx.stroke();

  // Text
  ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--text').trim();
  ctx.font = 'bold 50px "Fredoka One", cursive';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(item.l + item.d, size / 2, size / 2 - 10);

  // Emoji
  ctx.font = '24px Arial';
  ctx.fillText(item.w[0][1], size / 2, size / 2 + 35);
}


/* ===================== DUAL-LAYER AUDIO ===================== */
function speakWord(letter, word) {
  // Ensure speech synthesis is active (for fallback)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.resume();
    window.speechSynthesis.cancel();
  }

  function fallbackSpeak(text, onEnd) {
    if (!('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.toLowerCase().includes('kk')) ||
      voices.find(v => v.lang.toLowerCase().includes('ru')) ||
      voices[0];
    if (voice) { utter.voice = voice; utter.lang = voice.lang; }
    utter.rate = 0.85;
    utter.pitch = 1.05;
    if (onEnd) utter.onend = onEnd;
    window.speechSynthesis.speak(utter);
  }

  function playAudio(url, fallbackText, onEnd) {
    const audio = new Audio(url);
    audio.playbackRate = 1.0; // Restored to 1.0 for natural clear voice
    audio.onended = () => { if (onEnd) onEnd(); };
    audio.play().catch(e => {
      console.log("Audio play failed, falling back to TTS:", e);
      fallbackSpeak(fallbackText, onEnd);
    });
  }

  const phonetics = {
    'Б': 'Бы', 'В': 'Вы', 'Г': 'Гі', 'Ғ': 'Ғы', 'Д': 'Ді', 'Ж': 'Жы', 'З': 'Зы',
    'Й': 'Йы', 'К': 'Кі', 'Қ': 'Қы', 'Л': 'Лі', 'М': 'Мы', 'Н': 'Ны', 'Ң': 'Ңы',
    'П': 'Пы', 'Р': 'Ры', 'С': 'Сы', 'Т': 'Ті', 'Ф': 'Фы', 'Х': 'Хы', 'Һ': 'Һа',
    'Ц': 'Цы', 'Ч': 'Чі', 'Ш': 'Шы', 'Щ': 'Щі', 'Ъ': 'Қатаң белгі', 'Ь': 'Жұмсақ белгі'
  };

  const letterUrl = `/audio/letter_${encodeURIComponent(letter)}.mp3?v=3`;
  const wordUrl = `/audio/word_${encodeURIComponent(word)}.mp3?v=3`;

  const fallbackLetter = phonetics[letter] || letter;

  playAudio(letterUrl, fallbackLetter, () => {
    setTimeout(() => {
      playAudio(wordUrl, word);
    }, 300);
  });
}

if ('speechSynthesis' in window) {
  // Trigger voices loading
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener('voiceschanged', () => { });
}

/* ===================== PROGRESS ===================== */
function updateProgress() {
  const count = learned.size;
  const pct = Math.round((count / LETTERS.length) * 100);
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `${LETTERS.length}-нің ${count}-і`;
  const pctEl = document.getElementById('progressPct');
  if (pctEl) pctEl.textContent = `${pct}%`;
}

const resetProgressBtn = document.getElementById('resetProgressBtn');
if (resetProgressBtn) {
  resetProgressBtn.addEventListener('click', () => {
    if (confirm('Үйренген әріптердің бәрін өшіріп, қайта бастағыңыз келе ме?')) {
      learned.clear();
      localStorage.removeItem(STORAGE_KEY);
      cards.forEach(c => {
        c.classList.remove('learned');
        const star = c.querySelector('.card-star');
        if (star) star.classList.remove('burst');
      });
      updateProgress();
    }
  });
}

/* ===================== CONFETTI & CELEBRATION ===================== */
function celebrateAll() {
  launchConfetti();
  celebration.textContent = '🎉 Тамаша! Барлық 42 әріпті үйрендің! 🌟';
  celebration.classList.add('show');
  setTimeout(() => celebration.classList.remove('show'), 4000);
}

function launchConfetti() {
  const colors = ['#FFB800', '#4FAAFF', '#FF6B6B', '#56D67F'];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random() * 100) + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.animationDuration = (2.4 + Math.random() * 1.6) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    confettiContainer.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
}

/* ===================== RANDOM LETTER ===================== */
const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', () => {
  if ('speechSynthesis' in window) window.speechSynthesis.resume();
  randomBtn.classList.remove('spin');
  void randomBtn.offsetWidth;
  randomBtn.classList.add('spin');
  const idx = Math.floor(Math.random() * LETTERS.length);
  const card = cards[idx];
  card.focus({ preventScroll: true });
  selectLetter(idx, card);
});

/* ===================== SMART VIEWPORT ZOOM ===================== */
let currentZoom = window.innerWidth < 680 ? 1.65 : 1.0;
const minZoom = 0.5;
const maxZoom = 2.6;
const zoomStep = 0.2;

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomLevelText = document.getElementById('zoomLevel');

function updateZoom(newZoom) {
  currentZoom = Math.max(minZoom, Math.min(maxZoom, newZoom));
  zoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;

  // Apply zoom
  grid.style.transform = `scale(${currentZoom})`;

  // Calculate container dimensions to allow scrolling when zoomed
  const rect = grid.getBoundingClientRect();
  const scaledHeight = grid.scrollHeight * currentZoom;
  gridContainer.style.height = `${scaledHeight + 40}px`;

  // Smart keepCenter logic: scroll to center of container
  if (currentZoom > 1.0) {
    gridContainer.scrollLeft = (gridContainer.scrollWidth - gridContainer.clientWidth) / 2;
  }
}

zoomInBtn.addEventListener('click', () => updateZoom(currentZoom + zoomStep));
zoomOutBtn.addEventListener('click', () => updateZoom(currentZoom - zoomStep));

// Initial zoom setup
updateZoom(currentZoom);


/* ===================== KEYBOARD NAVIGATION ===================== */
function getColumnsCount() {
  if (cards.length < 2) return 1;
  const firstTop = cards[0].offsetTop;
  let cols = 1;
  for (let i = 1; i < cards.length; i++) {
    if (cards[i].offsetTop === firstTop) cols++; else break;
  }
  return cols;
}
grid.addEventListener('keydown', (e) => {
  const focused = document.activeElement;
  if (!focused.classList || !focused.classList.contains('letter-card')) return;
  const idx = +focused.dataset.index;
  const cols = getColumnsCount();
  let next = null;
  switch (e.key) {
    case 'ArrowRight': next = (idx + 1) % cards.length; break;
    case 'ArrowLeft': next = (idx - 1 + cards.length) % cards.length; break;
    case 'ArrowDown': next = idx + cols < cards.length ? idx + cols : idx; break;
    case 'ArrowUp': next = idx - cols >= 0 ? idx - cols : idx; break;
    default: return;
  }
  e.preventDefault();
  cards[next].focus();
});

/* ===================== THEME TOGGLE ===================== */
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
  if (theme === 'night') {
    document.documentElement.setAttribute('data-theme', 'night');
    themeToggle.textContent = '☀️ Күндізгі режим';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Түнгі режим';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}
applyTheme(localStorage.getItem(THEME_KEY) || 'day');
themeToggle.addEventListener('click', () => {
  const isNight = document.documentElement.getAttribute('data-theme') === 'night';
  const next = isNight ? 'day' : 'night';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

/* ===================== NAV DOTS ===================== */
const navDots = [...document.querySelectorAll('.nav-dot')];
navDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.getElementById(dot.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
const sections = navDots.map(d => document.getElementById(d.dataset.target));
window.addEventListener('scroll', () => {
  let closest = 0, closestDist = Infinity;
  sections.forEach((sec, i) => {
    const dist = Math.abs(sec.getBoundingClientRect().top - 100);
    if (dist < closestDist) { closestDist = dist; closest = i; }
  });
  navDots.forEach((d, i) => d.classList.toggle('active', i === closest));
}, { passive: true });


/* ===================== TOUCHLESS INTERACTION (MediaPipe) ===================== */
const videoElement = document.querySelector('.input_video');
const gesturePointer = document.getElementById('gesturePointer');
const toggleCameraBtn = document.getElementById('toggleCameraBtn');
const pointerInner = document.querySelector('.gesture-pointer-inner');

let cameraActive = false;
let camera = null;
let hands = null;

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;

// Smoothing factor (Pointer Smoothing)
const smoothing = 0.35;

// Dwell time selection
let hoveredElement = null;
let hoverStartTime = 0;
let lastTriggeredElement = null;
const DWELL_TIME = 500; // 500ms

function initMediaPipe() {
  hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
  });
  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7
  });
  hands.onResults(onResults);

  camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 640,
    height: 480
  });
}

function onResults(results) {
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    const landmarks = results.multiHandLandmarks[0];
    // Index finger tip is landmark 8
    const indexTip = landmarks[8];

    // Map to screen coordinates (mirror X since webcam is mirrored)
    const targetX = (1 - indexTip.x) * window.innerWidth;
    const targetY = indexTip.y * window.innerHeight;

    // Linear interpolation for smoothing
    cursorX += (targetX - cursorX) * smoothing;
    cursorY += (targetY - cursorY) * smoothing;

    gesturePointer.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    checkHover(cursorX, cursorY);
  } else {
    // Reset if hand is lost
    hoveredElement = null;
    pointerInner.style.setProperty('--progress', '0%');
  }
}

function checkHover(x, y) {
  // Hide pointer to not block elementFromPoint
  gesturePointer.style.display = 'none';
  const el = document.elementFromPoint(x, y);
  gesturePointer.style.display = 'block';

  // Find if we are hovering over a letter card
  const card = el ? el.closest('.letter-card') : null;

  if (card) {
    if (card === lastTriggeredElement) {
      pointerInner.style.setProperty('--progress', '100%');
      return;
    }

    if (hoveredElement !== card) {
      hoveredElement = card;
      hoverStartTime = performance.now();
    } else {
      const timeHovered = performance.now() - hoverStartTime;
      const progress = Math.min((timeHovered / DWELL_TIME) * 100, 100);
      pointerInner.style.setProperty('--progress', `${progress}%`);

      if (timeHovered >= DWELL_TIME) {
        // Trigger Click
        const idx = +card.dataset.index;
        selectLetter(idx, card, false);

        // Mark as triggered to prevent multiple clicks
        lastTriggeredElement = card;
        hoveredElement = null;
        pointerInner.style.setProperty('--progress', '100%');
      }
    }
  } else {
    hoveredElement = null;
    lastTriggeredElement = null;
    pointerInner.style.setProperty('--progress', '0%');
  }
}

toggleCameraBtn.addEventListener('click', async () => {
  if ('speechSynthesis' in window) window.speechSynthesis.resume();
  if (!cameraActive) {
    if (!hands) initMediaPipe();
    try {
      await camera.start();
      cameraActive = true;
      toggleCameraBtn.textContent = '🛑 Камераны өшіру';
      toggleCameraBtn.classList.add('active');
      gesturePointer.classList.add('active');
    } catch (e) {
      console.error("Camera error:", e);
      alert("Камераны қосу мүмкін болмады. Рұқсат берілгенін тексеріңіз.");
    }
  } else {
    await camera.stop();
    cameraActive = false;
    toggleCameraBtn.textContent = '📷 Камераны қосу';
    toggleCameraBtn.classList.remove('active');
    gesturePointer.classList.remove('active');
  }
});
