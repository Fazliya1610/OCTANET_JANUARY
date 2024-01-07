
  function updateProgressBar(progress) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = `${progress}%`;
    progressText.innerText = `${progress}%`;
  }

  updateProgressBar(28);


 function submitDonation() {
  const form = document.getElementById('donate');
  const userInput = {
      name: form.name.value,
      email: form.email.value,
      amount: form.amount.value,
      payment: form.payment.value,
      accountNumber: form.account_number.value
  };

  form.reset();

  form.style.display = ''; 
}


  