const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');
const spinner = document.querySelector('#spin')

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;


  if (url === '') {
    alert('Please, enter a URL');
  } else {
    showSpinner();
  }
  // console.log(url, size);
};

const showSpinner = () => {
  document.getElementById('spin').style.display = "block";
}

// const hideSpinner = () => {
//   document.getElementById('spin').style.display = "none";
// }

// hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
