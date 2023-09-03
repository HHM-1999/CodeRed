///sticky///
const stickyNav = document.getElementById("sticky-navbar");

function toggleStickyNavbar() {
    if (window.scrollY > stickyNav.offsetTop) {
        stickyNav.classList.add('sticky');

    } else {
        stickyNav.classList.remove("sticky");
    }
}
window.addEventListener('scroll', toggleStickyNavbar);


//counter//
let valueDisplay = document.querySelectorAll(".number");
let interval = 1000;


console.log(valueDisplay);

valueDisplay.forEach((valueDisplay) => {
    let startval = 0;
    let endval = parseInt(valueDisplay.getAttribute("data-val"));
    let timing = Math.floor(interval / endval);
    let counter = setInterval(() => {
        startval = startval + 1;
        valueDisplay.textContent = startval;
        if (startval == endval) {
            clearInterval(counter);
        }
    }, timing);
});



//search box//
function showSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.remove("hidden");
    console.log("hello")
}

function hideSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.add("hidden");
    console.log("close")
}

function performSearch() {
    var searchInput = document.getElementById("searchInput").value;
    // Perform your search operation using the search input value
    // Add your search logic here (e.g., making an API request, filtering data)
    console.log("Performing search: " + searchInput);

}