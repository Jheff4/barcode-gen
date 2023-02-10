const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;
  const spinner = document.getElementById('spin')

  if (url === '') {
    alert('Please, enter a URL');
  } else {
    showSpinner();
  }
  // console.log(url, size);
};

const showSpinner = () => {
  const spin = document.createElement('div')
  spin.classList.add('spinner')
  
  .style.display = "block";
}

const hideSpinner = () => {
  document.getElementById('spinner').style.display = "none";
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);

