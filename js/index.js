let btnBookmark=document.getElementById('btn-bookmark')
const divBtn=document.querySelector('.div-btn')
//Bookmark click event!!
btnBookmark.addEventListener('click', function () {
	// body...
	let btntext= btnBookmark.textContent;
	btnBookmark.classList.toggle('active')
	divBtn.classList.toggle('active')
	if (btntext === "Bookmark") {
		btnBookmark.textContent="Bookmarked"
	} else {
		btnBookmark.textContent="Bookmark"
	}
})