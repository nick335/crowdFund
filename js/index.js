let btnBookmark=document.getElementById('btn-bookmark')
const divBtn=document.querySelector('.div-btn')
const popupBackground=document.querySelector('.popup-background')
// circleEl=outer circle for BSP! circleEl2=outer circle for BESP
const circleEl=document.querySelector('#circle-el')
const circleEl2=document.querySelector('#circle-el2')
const innercircleEl=document.querySelector('#inner-circle')
const innercircleEl2=document.querySelector('#inner-circle2')
const borderTopEl=document.querySelector('#border-top')
const borderTopEl2=document.querySelector('#border-top2')
const continueEl=document.querySelector('#continue')
const continueEl2=document.querySelector('#continue2')
const progressBar=document.querySelector('#progress-bar')
const totalSum=document.querySelector('#total-sum')
const totalBackers=document.querySelector('#total-number')
const boxborderEL=document.querySelector('#box-border')
const boxborderEL2=document.querySelector('#box-border2')
let selectReward=document.querySelector('#Select-reward')
//BSP = bamboo stand price, bsl=bamboo stand left
//bslV=bamboo stand left value //bslD= bamboo stand left display
const bsl = document.querySelector('#BSL')
const bslMain=document.querySelector('#BSL-main')
const bambooStandPrice=25
//BESP = black edition stand price, besl=black edition stand left
//beslV=black edition stand left value //beslD= black edition stand left display
const besl = document.querySelector('#BESL')
const beslMain=document.querySelector('#BESL-main')
const blackEditionStandPrice=75


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
circleEl.addEventListener('click', function(){
	//body...
	toggleIsactive(innercircleEl, borderTopEl, boxborderEL)
})
circleEl2.addEventListener('click', function(){
	toggleIsactive(innercircleEl2, borderTopEl2, boxborderEL2)
})
continueEl.addEventListener('click', function(){
	//body...
	let bslV = parseInt(bsl.textContent)
	let totalBackersV = parseFloat(totalBackers.textContent.replace(/\$|,/g, ''))
	toggleIsactive(innercircleEl, borderTopEl, boxborderEL)
	let bslD = bslV - 1
	let totalBackersD=totalBackersV + 1 
	let progressValue = progressBar.value + bambooStandPrice; 
	progressBar.value=progressValue
	render(bsl, totalSum, totalBackers, bslD, progressValue, totalBackersD, bslMain)

})
continueEl2.addEventListener('click', function(){
	//body...
	let beslV = parseInt(besl.textContent)
	// console.log(beslV);
	let totalBackersV = parseFloat(totalBackers.textContent.replace(/\$|,/g, ''))
	toggleIsactive(innercircleEl2, borderTopEl2, boxborderEL2)
	let beslD=beslV - 1;
	let totalBackersD= totalBackersV + 1
	let  progressValue = progressBar.value + blackEditionStandPrice
	render(besl, totalSum, totalBackers, beslD, progressValue, totalBackersD, beslMain)
})
function popup() {
	// body...
	popupBackground.classList.toggle('display')
	document.body.scrollTop = document.documentElement.scrollTop = 0

}
function toggleIsactive(x, y, z) {
	// body...
	x.classList.toggle('is-active')
	y.classList.toggle('is-active')
	z.classList.toggle('is-active')
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function render(a,b,c,d,e,f,g) {
	a.textContent=d;
	b.textContent=`$${numberWithCommas(e)}`
	c.textContent=f;
	g.textContent=d;
}