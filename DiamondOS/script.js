var fakeWindows = document.querySelectorAll(".fakeWindow");

// Function to toggle a specific fake window visibility
function toggleFakeWindow(windowId) {
  var fakeWindow = document.getElementById(windowId);
  if (fakeWindow.style.display === "none") {
    fakeWindow.style.display = "block";
  } else {
    fakeWindow.style.display = "none";
  }
}

// Function to toggle fullscreen mode for a specific window
function toggleFullScreen(windowId) {
  var fakeWindow = document.getElementById(windowId);
  if (!fakeWindow.classList.contains('fullscreen')) {
    fakeWindow.classList.add('fullscreen');
    document.body.style.overflow = "hidden";
  } else {
    fakeWindow.classList.remove('fullscreen');
    document.body.style.overflow = "auto";
  }
}



// Function to close a specific fake window
function closeFakeWindow(windowId) {
  var fakeWindow = document.getElementById(windowId);
  fakeWindow.style.display = "none";
  // Add any additional cleanup code here
}


function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function setTime() {
  var today = new Date();
  var hour = today.getHours() % 12  || 12;
  var minute = today.getMinutes();
  var period = today.toLocaleString([], { hour12: true});
  period = period.split(" ")[2];
  if (hour < 10) {hour = "0" + hour}
  if (minute < 10) {minute = "0" + minute}
  document.getElementById("navtime").innerText = hour + ":" + minute + " " + period
  setTimeout(setTime, 1000);
}

window.onload = function() {
setTime()
}

function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  var date = now.toLocaleDateString();
  document.getElementById("time").innerHTML = time;
  document.getElementById("date").innerHTML = date;
}

setInterval(updateTime, 1000);

var volumeIcon = document.getElementById('volume-icon');

function updateVolumeIcon(volumeLevel) {
  if (volumeLevel == 0) {
    volumeIcon.style.backgroundImage = "url('volume-mute.png')";
  } else if (volumeLevel < 50) {
    volumeIcon.style.backgroundImage = "url('volume-low.png')";
  } else {
    volumeIcon.style.backgroundImage = "url('volume-high.png')";
  }
};

function changeBodyBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  document.body.style.backgroundImage = "none";
}

function handleImageUpload(event) {
  const file = event.target.files[0];

  // Check if the selected file is an image
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imageDataURL = e.target.result;
      adjustBackgroundImage(imageDataURL);
    }

    reader.readAsDataURL(file);
  } else {
    // Display an error message or perform appropriate actions
    alert('Please select a valid image file.');
  }
}
function changeBodyBackgroundImage(url) {
  adjustBackgroundImage(url);
  document.body.style.backgroundColor = "transparent";
}

function adjustBackgroundImage(imageURL) {
  const img = new Image();
  img.src = imageURL;

  img.onload = function() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imageAspectRatio = img.width / img.height;
    const windowAspectRatio = windowWidth / windowHeight;

    let newWidth, newHeight;
    if (windowAspectRatio > imageAspectRatio) {
      newHeight = windowHeight;
      newWidth = windowHeight * imageAspectRatio;
    } else {
      newWidth = windowWidth;
      newHeight = windowWidth / imageAspectRatio;
    }

    document.body.style.backgroundImage = `url('${imageURL}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundColor = "transparent";
  }

  img.onerror = function() {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = imageURL;
  }
}

function resetBackground() {
  document.body.style.backgroundColor = "lightcyan";
  document.body.style.backgroundImage = "none";
}

function locwarn(){
  alert("This site isn't using the offical site for this game, but the source code to prevent this from being blocked.\n Diamond is a branch of TIW. \n You can go their by going to https://startiw.org/beta")

}

