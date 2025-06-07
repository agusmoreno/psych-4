document.addEventListener('click', function(event) {
  if (event.target.classList.contains('copy-button')) {
    const targetId = event.target.getAttribute('data-target');
    const textElement = document.getElementById(targetId);
    const textToCopy = textElement.value || textElement.textContent;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }
});