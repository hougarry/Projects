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

 