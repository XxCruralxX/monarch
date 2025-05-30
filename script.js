function createBubble() {
  const bubble = document.createElement("div");
  bubble.classListadd("bubble");
  const size = Math.random()*20 + 10;
  bubble.style.width = '$(size)px';
    bubble.style.height = '$(size)px';
  bubble.style.left = '$(Math.random() *window.innerWidth)px)';
  bubble.style.bottom = '-50px';
  bubble.style.animationDuration = '$(3 + Math.random()*5)s';
  document.body.appendchild(bubble);
  setTimeout(() => {
    bubble.remove();
  },8000);

}
setInterval(createBubble, 100);


// Array of ad messages
const adMessages = [

  '🚨 <strong>Watches</strong> dropping <span>June 30</span> — Don’t miss it! ⌚ <button id="toggleAdsBtn">Hide Ads</button>',
  '⚡ <strong>Stocks Are Limited!</strong> Grab Yours Before It’s Gone! 🔥 <button id="toggleAdsBtn">Hide Ads</button>',
  '🎯 <strong>Unleash Your Style</strong> with Our New Collection! 💫 <button id="toggleAdsBtn">Hide Ads</button>'
];

let currentAdIndex = 0;

function showAd() {
  const ad = document.getElementById('adBanner');
  const progressBar = ad.querySelector('.progress-bar');
  const adMessage = ad.querySelector('.ad-message');

  // Update ad message
  adMessage.innerHTML = adMessages[currentAdIndex];

  // Reset progress bar animation
  progressBar.style.animation = 'none';
  progressBar.offsetHeight; // Trigger reflow
  progressBar.style.animation = null;

  // Show ad
  ad.classList.add('show');

  // Hide ad after 8 seconds
  setTimeout(() => {
    ad.classList.remove('show');
  }, 8000);

  // Move to next ad message
  currentAdIndex = (currentAdIndex + 1) % adMessages.length;
}

// Initial ad display
showAd();
// Repeat ad every 15 seconds
setInterval(showAd, 15000);

const toggleAdsBtn = document.getElementById('toggleAdsBtn');
let adsVisible = true;

toggleAdsBtn.addEventListener('click', () => {
  adsVisible = !adsVisible;
  if (!adsVisible) {
    document.getElementById('adBanner').style.display = 'none';
    toggleAdsBtn.textContent = 'Show Ads';
  } else {
    document.getElementById('adBanner').style.display = 'block';
    toggleAdsBtn.textContent = 'Hide Ads';
  }
});
document.getElementById('scrollBtn').addEventListener('click', () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
});

