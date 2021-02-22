// variables
const search = document.getElementById("search");
const galleryItems = document.querySelectorAll(".gallery-item");


// functions
const handleSearch = evt => {
    const searchTerm = evt.target.value.toLowerCase();
    for(let i = 0; i < galleryItems.length; i++){
        const item = galleryItems[i];
        const caption = item.firstElementChild.getAttribute('data-caption');
        if(!caption.includes(searchTerm)) {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    }

}


// event listeners
search.addEventListener("keyup", handleSearch);