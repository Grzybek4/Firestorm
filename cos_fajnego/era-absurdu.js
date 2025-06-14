const fonts = [
  'Courier New', 'Comic Sans MS', 'Impact', 'Georgia', 'Arial', 'Times New Roman',
  'Lucida Console', 'Papyrus', 'Verdana', 'Trebuchet MS'
];

const weirdChars = [
  '你', 'م', 'ر', 'ح', 'ب', 'а', 'ب', 'в','☞','🖐︎','✌︎', '✦', '中', '文', 'ك', 'ш', 'ж', '٣', '漢', '字', '𓂀'
];

const containers = document.querySelectorAll('.absurdText');

containers.forEach(container => {
  const text = container.textContent;
  container.textContent = '';

  const originalChars = [];
  const wordBoundaries = [];

  let currentWord = [];

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.classList.add('chaotic-char');
    span.textContent = char;

    container.appendChild(span);
    originalChars.push(char);

    if (/\s|[.,!?;:]/.test(char)) {
      wordBoundaries.push(currentWord);
      currentWord = [];
    } else {
      currentWord.push(index);
    }

    if (index === text.length - 1) {
      wordBoundaries.push(currentWord);
    }
  });

  function replaceRandomLettersInWord(wordIndices) {
    if (wordIndices.length <= 1) return;

    let N = wordIndices.length > 3 ? 1 : 0;

    const shuffled = [...wordIndices].sort(() => Math.random() - 0.5);
    const toWeird = shuffled.slice(0, N);

    wordIndices.forEach(idx => {
      const span = container.children[idx];
      const original = originalChars[idx];

      span.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
      span.style.fontSize = `${Math.floor(Math.random() * 24 + 24)}px`;

      if (toWeird.includes(idx)) {
        span.textContent = weirdChars[Math.floor(Math.random() * weirdChars.length)];
      } else {
        span.textContent = original;
      }
    });
  }

  function cycleAbsurdText() {
    wordBoundaries.forEach(word => {
      replaceRandomLettersInWord(word);
    });
  }

  cycleAbsurdText();
  setInterval(cycleAbsurdText, 1000);
});



const layoutContainer = document.getElementById('layoutContainer');
  const sections = Array.from(layoutContainer.children);

  function shuffle(array) {
    let currentIndex = array.length, temp, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  function applyAbsurdLayout() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const placedRects = [];

  layoutContainer.innerHTML = '';
  shuffle(sections);

  sections.forEach(section => {
    layoutContainer.appendChild(section)
    section.style.position = 'absolute';
    section.style.transform = 'none';

    const width = section.offsetWidth;
    const height = section.offsetHeight;

    let left, top, tries = 0;
    let placed = false;

    while (!placed && tries < 100) {
      left = Math.floor(Math.random() * (containerWidth - width));
      top = Math.floor(Math.random() * (containerHeight - height));

      const newRect = { left, top, right: left + width, bottom: top + height };

      const collision = placedRects.some(r =>
        !(newRect.right < r.left || newRect.left > r.right || newRect.bottom < r.top || newRect.top > r.bottom)
      );

      if (!collision) {
        placedRects.push(newRect);
        placed = true;
      }

      tries++;
    }

    const rotation = (Math.random() * 20 - 10).toFixed(2);

    section.style.left = `${left}px`;
    section.style.top = `${top}px`;
    section.style.transform = `rotate(${rotation}deg)`;
  });
}

  applyAbsurdLayout();
