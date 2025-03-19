// Move the "No" button when hovered
document.getElementById('noBtn').addEventListener('mouseover', function() {
    let btn = document.getElementById('noBtn');
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
});

// Copy Bkash & Nagad number to clipboard
function copyNumber() {
    const number = document.getElementById('bkashNumber').innerText;
    navigator.clipboard.writeText(number)
        .then(function() {
            alert('Number copied to clipboard!');
        })
        .catch(function(err) {
            console.error('Error copying number: ', err);
        });
}

// Redirect to salami.html when the "Yes, I will" button is clicked
document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'salami.html';
});
