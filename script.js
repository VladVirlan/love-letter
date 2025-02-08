document.getElementById('heart').addEventListener('click', function() {
    document.querySelector('.lid.one').classList.toggle('animate');
    document.querySelector('.lid.two').classList.toggle('animate');
    document.querySelector('#letter').classList.toggle('animate');
});

document.getElementById('letter').addEventListener('click', function() {
    document.getElementById("modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener('click', function() {
    document.getElementById("modal").style.display = "none";
});

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
}