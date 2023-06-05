// Get the loc count element, bonus key element, upgrades button, upgrades container, holding key element, level indicator, xp count element, golden keys element, and level up button
const locCountElement = document.getElementById('locCount');
const bonusKeyElement = document.getElementById('bonusKey');
const upgradesButton = document.getElementById('upgradesButton');
const upgradesContainer = document.getElementById('upgradesContainer');
const holdingKeyElement = document.getElementById('holdingKey');
const levelIndicator = document.getElementById('levelIndicator');
const xpCountElement = document.getElementById('xpCount');
const goldenKeysElement = document.getElementById('goldenkeys');
const levelUpButton = document.getElementById('levelUpButton');
const panel = document.getElementById('panel');
const toggleButton = document.getElementById('toggleButton');

// Initialize the loc count, xp count, level, golden keys, click properties from local storage
let locCount = parseInt(localStorage.getItem('locCount')) || 0;
let xpCount = parseInt(localStorage.getItem('xpCount')) || 0;
let level = parseInt(localStorage.getItem('level')) || 1;
let goldenKeys = parseInt(localStorage.getItem('goldenKeys')) || 0;
let click = parseFloat(localStorage.getItem('click')) || 0.25;
let autoclick = parseFloat(localStorage.getItem('autoclick')) || 0;
let bonusKeyActive = false;
let canClick = true;
let isHoldingKey = false;
let noNoTimeout;
let holdTimeout;

  //stop highlighting code mf
 // Make it so that if the LOC count, or the xp, or the goldenkey amount increases by 999999 all of the sudden , it subtracts 999999 from what increased make it subtract the WHOLE value, and then displays a message reading, "exploiters ruin the game, find something else to do, we are going to catch you EACH AND EVERY time. Better luck next time. Actually have fun and play the game, maybe youll learn to have fun. And actually get cook at something for once in your shitty life."
function dontdevtest() {
  const input = prompt("Enter the desired LOC count:");
  const newLocCount = parseInt(input);
  
  if (!isNaN(newLocCount)) {
    locCount = newLocCount;
    updateLocCount();
    alert(`LOC count set to ${newLocCount}`);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

function dontdevtestclick2() {
  const input = prompt("Enter the desired Click Amount");
  const newclickCount = parseInt(input);
  
  if (!isNaN(newclickCount)) {
    click = newclickCount;
    updateClick();
    alert(`Click Value set to ${newclickCount}`);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}
function goldhack(){
  goldenKeys = 99;
  updateGoldenKeys();
}

function amazonkindle() {
  if (goldenKeys >= 50) {
    goldenKeys -= 50;
    autoclick += 0.75;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Amazon Kindle for 50 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

function windowsphone() {
  if (goldenKeys >= 10) {
    goldenKeys -= 10;
    autoclick += 0.5;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Windows Phone for 10 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

function nokia() {
  if (goldenKeys >= 75) {
    goldenKeys -= 75;
    autoclick += 2;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Nokia for 75 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

function powerbook100() {
  if (goldenKeys >= 125) {
    goldenKeys -= 125;
    autoclick += 4.5;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Powerbook 100 for 125 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}


function offbrandwindowsxp() {
  if (goldenKeys >= 300) {
    goldenKeys -= 300;
    autoclick += 7;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Offbrand WindowsXP for 300 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}


function windowsxp() {
  if (goldenKeys >= 500) {
    goldenKeys -= 500;
    autoclick += 9;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased WindowsXP for 500 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

function archlinux() {
  if (goldenKeys >= 5000000) {
    goldenKeys -= 5000000;
    autoclick += 100;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick();
    // Save updated autoclick value
    alert("Congratulations! You have purchased Arch Linux for 500000 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

let autoclickInterval; // Variable to store the interval

function startAutoclick() {
  autoclickInterval = setInterval(() => {
    locCount += autoclick;
    updateLocCount();
  }, 1000);
}
startAutoclick();

function updateAutoclick() {
  localStorage.setItem('autoclick', autoclick);
}

function updateClick() {
  localStorage.setItem('click', click);
}

function upgradeLoc5() {
  if (locCount >= 350) {
    click += 0.5;
    locCount -= 350;
    updateLocCount();
    updateClick(); // Save updated click value
  }
}

function upgradeLoc1() {
  if (locCount >= 550) {
    click += 1;
    locCount -= 550;
    updateLocCount();
    updateClick(); // Save updated click value
  }
}

function upgradeLoc2() {
  if (locCount >= 10000) {
    click += 0.25;
    locCount -= 10000;
    updateLocCount();
    updateClick(); // Save updated click value
  }
}

function upgradeLoc10() {
  if (locCount >= 2249) {
    click += 10;
    locCount -= 22;
    updateLocCount();
    updateClick(); // Save updated click value
  }
}

function windowsphone() {
  if (goldenKeys >= 10) {
    goldenKeys -= 10;
    autoclick += 0.5;
    updateGoldenKeys(); // Update golden keys count in the UI
    updateAutoclick(); // Save updated autoclick value
    alert("Congratulations! You have purchased Windows Phone for 10 golden key(s).");
  } else {
    alert("Insufficient golden keys!");
  }
}

// Function to update loc count in local storage
function updateLocCount() {
  locCountElement.textContent = `LOC: ${locCount}`;
  localStorage.setItem('locCount', locCount);
}

// Function to update xp count in local storage
function updateXPCount() {
  xpCountElement.textContent = `XP: ${xpCount}`;
  localStorage.setItem('xpCount', xpCount);
}

// Function to update level indicator in local storage
function updateLevelIndicator() {
  const xpRequired = Math.floor(100 * Math.pow(1.5, level - 1));
  const remainingXP = xpRequired - xpCount;
  levelIndicator.textContent = `Level ${level} (${remainingXP} XP to Level Up)`;
  localStorage.setItem('level', level);
}

// Function to update golden keys count in local storage
function updateGoldenKeys() {
  goldenKeysElement.textContent = `Golden Keys: ${goldenKeys}`;
  localStorage.setItem('goldenKeys', goldenKeys);
}

// Function to update click value in local storage
function updateClick() {
  localStorage.setItem('click', click);
  document.getElementById('clickValue').textContent = `Click Value: ${click}`;
}


// Function to calculate and update XP required for level up
function updateXPRequired() {
  const xpRequired = Math.floor(100 * Math.pow(1.5, level - 1));
  const remainingXP = xpRequired - xpCount;
  levelIndicator.textContent = `Level ${level} (${remainingXP} XP to Level Up)`;
}

// Event listener for key down
function handleKeyDown(event) {
  if (!canClick || event.repeat) {
    if (!isHoldingKey) {
      isHoldingKey = true;
      holdingKeyElement.style.display = 'block';
      clearTimeout(noNoTimeout);
      holdTimeout = setTimeout(() => {
        displayNoNoMessage();
      }, 500);
    }
    return;
  }

  if (event.key === bonusKeyElement.textContent && bonusKeyActive) {
    locCount += bonusKeyActive ? locCount : click * 2;
    bonusKeyActive = false;
    bonusKeyElement.textContent = '';
  } else {
    locCount += click;
  }

  updateLocCount();
}

// Event listener for key up
function handleKeyUp() {
  clearTimeout(holdTimeout);
  if (isHoldingKey) {
    isHoldingKey = false;
    holdingKeyElement.style.display = 'none';
    displayNoNoMessage();
  }
}

// Function to display "no no" message
function displayNoNoMessage() {
  clearTimeout(noNoTimeout);
  clearTimeout(holdTimeout);
  if (isHoldingKey) {
    alert("That's a no no!");
    holdingKeyElement.style.display = 'block';
    noNoTimeout = setTimeout(() => {
      holdingKeyElement.style.display = 'none';
    }, 2000);
  }
}

// Function to generate bonus key
function generateBonusKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * characters.length);
  const bonusKey = characters[randomIndex];

  bonusKeyActive = true;
  bonusKeyElement.textContent = bonusKey;

  setTimeout(() => {
    bonusKeyActive = false;
    bonusKeyElement.textContent = '';
  }, 3500);
}

// Function to toggle upgrades container
function toggleUpgradesContainer() {
  upgradesContainer.classList.toggle('active');
}

function osshop(){
  if (level >= 5) {
    window.location.href="os.html"
  } else {
    alert("You must be level 5 to get access to this.");
  }
}

// Function to trade loc for xp
function tradeLocForXP() {
  if (locCount >= 100) {
    locCount -= 100;
    xpCount += 1;
    updateLocCount();
    updateXPCount();
    checkLevelUp();
    updateLevelIndicator();
  }
}

// Function to check level up
function checkLevelUp() {
  const xpRequired = Math.floor(100 * Math.pow(1.5, level - 1));
  if (xpCount >= xpRequired) {
    levelUpButton.style.display = 'inline-block';
  }
}

// Function to level up
function levelUp() {
  const xpRequired = Math.floor(100 * Math.pow(1.5, level - 1));
  if (xpCount >= xpRequired) {
    const confirmLevelUp = confirm(`Do you want to continue to level ${level + 1} and convert every 150K LOC to 1 Golden Key?`);
    if (confirmLevelUp) {
      goldenKeys += Math.floor(locCount / 150000);
      locCount %= 150000; // Update remaining locCount
      updateGoldenKeys();
    }
    level++;
    updateLevelIndicator();
    levelUpButton.style.display = 'none';
  }
}

// Event listener for key events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Event listener for trade button
tradeButton.addEventListener('click', tradeLocForXP);
// Event listener for upgrades button
upgradesButton.addEventListener('click', toggleUpgradesContainer);
// Event listener for level up button
levelUpButton.addEventListener('click', levelUp);

// Generate initial bonus key
generateBonusKey();
setInterval(generateBonusKey, 30000);

// Update initial values in the UI
updateLocCount();
updateXPCount();
updateLevelIndicator();
updateGoldenKeys();
checkLevelUp();
updateClick(); // Save initial click value in local storage
updateXPRequired(); // Update initial XP required for level up

const upgradeButton = document.getElementById('osButton');
const upgradeMenu = document.getElementById('osMenu');



upgradeButton.addEventListener('click', function() {
  if (level >= 5) {
    upgradeMenu.classList.toggle('hidden');
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    alert("You must be level 5 or above to gain access to this feature");
  }
});
