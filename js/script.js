// Generate date formated to using in HTML

function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return {
    today,
    day: dd,
    month: mm,
    year: yyyy,
  };
}

$('.port-item').click(function () {
  $('.collapse').collapse('hide');
});

// Correct cols with high resolution > 1600px

const photo = document.querySelector('.photo');
const nameSite = document.querySelector('.name-site');
const mediaQuery = window.matchMedia('(min-width: 1800px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    nameSite.classList.remove('col-lg-9');
    nameSite.classList.add('col-lg-10');
    photo.classList.remove('col-lg-3');
    photo.classList.add('col-lg-2');
    console.log('Media Query Matched!');
    /*nameSite.className = 'name-site col-lg-10 col-md-8';
    photo.className = 'photo col-lg-2 col-md-4';
    console.log('Media Query Matched!');*/
  } else {
    nameSite.classList.remove('col-lg-10');
    nameSite.classList.add('col-lg-9');
    photo.classList.remove('col-lg-2');
    photo.classList.add('col-lg-3');
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
