// set up the variables
const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); // NodeList of all buttons (controls).
const sectBtn = document.querySelectorAll('.control');  

function PageTransitions(){
    // Adding the 'active-btn' class to the first button (controls).
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {  
            let currentBtn = document.querySelectorAll('.active-btn');
            // Removing the 'active-btn' class from the currently active button.
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            // Adding the 'active-btn' class to the clicked button.
            this.className += ' active-btn';
        })
    }

    //Sections Active-event delegation(e)
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active'); 

        }

    })


    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();


// set up the variables for tabs
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");


var boxbtn1 = document.getElementById("boxbtn1");
var boxbtn2 = document.getElementById("boxbtn2");
var boxbtn3 = document.getElementById("boxbtn3");
var boxbtn4 = document.getElementById("boxbtn4");

function openFullStack() {
    content1.style.transform = "translateX(0px)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(150%)";
}

function openFrontend() {
    content1.style.transform = "translateX(150%)";
    content2.style.transform = "translateX(0px)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(150%)";
}

function openPython() {
    content1.style.transform = "translateX(150%)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(0px)";
    content4.style.transform = "translateX(150%)";
}

function openOthers() {
    content1.style.transform = "translateX(150%)";
    content2.style.transform = "translateX(150%)";
    content3.style.transform = "translateX(150%)";
    content4.style.transform = "translateX(0px)";
}







//set up tabs-project-details variables
const openDetailButtons = document.querySelectorAll('[data-detail-target]')
const closeDetailButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = document.querySelector(button.dataset.detailTarget)
        openDetail(detail)
    })
})


function openDetail(detail) {
    if (detail == null) return
    detail.classList.add('active')
    overlay.classList.add('active')
}
/*if (detail == null) return means if the detail is not there, then return.
detail.classList.add('active') means add the class active to the detail.
overlay.classList.add('active') means add the class active to the overlay.
*/

closeDetailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = button.closest('.detail')
        closeDetail(detail)
    })
})
/*button.closest('.detail') means the closest ancestor of the button element that has a class of detail.
eg, if I use button 1 to open detail 1, then the closest ancestor of button 1 that has a class of detail is detail 1.
*/
function closeDetail(detail) {
    if (detail == null) return
    detail.classList.remove('active')
    overlay.classList.remove('active')
}
overlay.addEventListener('click', () => {
    const details = document.querySelectorAll('.detail.active')
    details.forEach(detail => {
        closeDetail(detail)
    })
})
