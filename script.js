// Pause other videos when one starts playing
const videos = document.querySelectorAll('.player video');
videos.forEach(v => {
  v.addEventListener('play', () => videos.forEach(o => { if (o !== v) o.pause(); }));
  // Friendly note if the MP4 hasn't been added yet
  const src = v.querySelector('source');
  src.addEventListener('error', () => {
    v.hidden = true;
    v.parentElement.querySelector('.missing').hidden = false;
  });
});

// Show a monogram if the profile photo hasn't been added yet
const photo = document.querySelector('.photo img');
if (photo) {
  photo.addEventListener('error', () => photo.closest('.photo').classList.add('no-photo'));
}

document.getElementById('year').textContent = new Date().getFullYear();
