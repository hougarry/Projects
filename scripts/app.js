// set up the variables
const sectionContainers = document.querySelectorAll('.container');
const controlsContainer = document.querySelectorAll('.controls');
const controlBtns = document.querySelectorAll('.control');  // NodeList of all buttons (controls).
const mainContent = document.querySelectorAll('.main-content');
// allsect=mainContent, sections=sectionContainers, sectbtns=controlsContainer, sectbtn=controlBtns

function PageTransitions(){
    // Iterating through each button (control) element in the controlBtns NodeList.
    for(let i = 0; i < controlBtns.length; i++){
        
        // Adding a click event listener to each button (control) element.
        controlBtns[i].addEventListener('click', function() {
            
            // Retrieving all elements with the class 'active-btn' 
            // and storing them in the currentBtn variable.
            let currentBtn = document.querySelectorAll('.active-btn');
            
            // Removing the 'active-btn' class from the first element in the currentBtn NodeList.
            // Using [0] to access the first element because querySelectorAll returns a NodeList.
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            
            // Adding the 'active-btn' class to the clicked button.
            // 'this' refers to the button element that was clicked and triggered the event listener.
            // Ensuring a space before 'active-btn' to avoid concatenating class names.
            this.className += ' active-btn';
        })
    }

    //Containers Active
    mainContent.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from other buttons
            controlBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');
            //hide other sections
            sectionContainers.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }

    })
    
}

// Invoking the PageTransitions function to apply the above logic when the script is run.
PageTransitions();

