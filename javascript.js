const navbuttons = document.getElementById('nav-btn');
const navlinks = document.getElementById('nav-links');

navbuttons.addEventListener('click', () => {
    navlinks.classList.toggle('show');
});


function myFunction(event){
    alert("Feedback Recieved!");
}
