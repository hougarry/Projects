#build

## create a Portfolio directory
mkdir Portfolio
create  README.md index.html and a foloder called styles, with styles.scss, 
install extension "Live Sass Compiler","html css support " and "Live Server" in VS Code
when finished run sass --watch styles:css

then create a folder called img and put all the images in it.

open google fonts and choose a font and copy the link and paste it in the head of the html file. then copy the font-family to styles.scss

go to https://www.colorspire.com/ to select a color scheme and copy the colors to styles.scss

go to https://cdnjs.com/libraries/font-awesome to select font awesome icons and copy the link and paste it in the head of the html file. then copy the icons to styles.scss
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

go to fontawesome.com and copy the icons you want and paste them in the html file
(iconscout.com is also a good website to find icons)


go to w3schools.com to copy the code of the nav bar and paste it in the html file
hsl colors are more easy to use than rgb colors, so I use hsl colors in the nav bar
https://www.w3schools.com/colors/colors_hsl.asp

**Rember to watch sass and run live server when you modify**

###  why use scss? 
scss can nest the css, so it is more clear to read and write.


## create a app.js
be careful with ; and , and "" and '' and ``!!!
```
            e.target.classList.add('active') 
/* I add ; here so it doesn't work
```

#### Mistake: use wrong 

it should be allSections = document.querySelector, but I use allSections = document.querySelectorAll, that spend nearly half hour to find out.

```
const allSections = document.querySelector('.main-content');
const sections = document.querySelectorAll('.section');
```

### Pagetransitions
```
function PageTransitions(){
    // Iterating through each button (control) element in the sectBtn NodeList.
    for(let i = 0; i < sectBtn.length; i++){
        
        // Adding a click event listener to each button (control) element.
        sectBtn[i].addEventListener('click', function() {
            
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
```

#### Generate clip path
https://bennettfeely.com/clippy/, open this, and copy path to styles.

#### Mistake: add wrong ;

I add wrong ; behind scaleY(1)
```
    @keyframes sclaleAnim{
        0%{
            transform: translateY(-100%) scaleY(0)
        }
        100%{
            transform: translateY(-100%) scaleY(1)
        }
    }
```

#### Mistake: wrong active setting
@keyframes part not put in .active

```
.active {
    display: block;
    animation: appear 1s ease-in-out;
    transform: translateY(0) scaleY(1);
  }
  @keyframes appear {
    0% {
      transform: translateY(-100%) scaleY(0);
    }
    100% {
      transform: translateY(0) scaleY(1);
    }
  }
```

#### Mistake :forget to add pointer-events: none; to .control

I forget to add pointer-events: none; to .control
```
        i{
            font-size: 1.5rem;
            color: var(--color-gray-1);
            pointer-events: none;
            
        }
```
#### Mistake: Put the div part outside the section
the h-shapre and image part should nest inside the left-header div , it spend me a lot of time to find out.
```
            <div class="left-header"></div>
                <div class="h-shape"></div>
                <div class="image">
                    <img src="img/avatar.png" alt="" class="avatar" width="200">
                </div>
```
### Mistake:

I use wrong hover scale, translateY(-4px) is right, but I use (-4rem), it's huge.
```
            &:hover{
                transform: translateY(-4px);
``` 

#### Mistake: copy timeline cause error

I should copy the timeline-item part, but I copy the timeline part, it cause error.
```
            <div class="timeline">
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2010 - present</p>
                    <h5>Web Developer<span> - Vircrosoft</span></h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                    </p>
                </div>
                <div class="timeline-item">
```

#### Mistake: Name error,

this code shows that I 'm using two same name " projects" with two different class, it cause error.

```
<section class="section sec3 projects" id="projects">
    ...
    <div class="projects">
        <div class="projects-item">
            ...
        </div>
    </div>
</section>

```

#### Mistake: using wrong buttong



```
                            <div class="submit-btn">
                                <a href="" class="main-btn">
                                    <span class="btn-text">Submit</span>
                                    <span class="btn-icon"><i class="fa-regular fa-paper-plane"></i></span>
                                </a>
                            </div>

```

 the issue might be related to the way the "Submit" button is implemented in my HTML. I'm using an <a> (anchor) tag, which is typically used for links, not form submission. When a user clicks on it, it behaves like a link and could navigate away based on the href attribute.





 ```
 <div class="submit-btn">
    <button type="submit" class="main-btn">
        <span class="btn-text">Submit</span>
        <span class="btn-icon"><i class="fa-regular fa-paper-plane"></i></span>
    </button>
</div>

 ```





 #### Mistake: wrong tag
wrong part:
```html
                 <div class="social-icons">
                        <div class="social-icon">
                            <a href="https://github.com/hougarry" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://t.me/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                                <a href="https://www.facebook.com" target="_blank">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>  
```
I use two </a> tag, it cause error. and the last one miss </a> tag. because I use ctrl+x to cut the code to adjust the location, it cause this error.

                         <div class="social-icons">
                            <a href="https://github.com/hougarry" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://t.me/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                            <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                        </div>  



#### Mistake: wrong path to put the image

Relative Path: In your HTML code, you are using an absolute path for the image source (/img/projects/frontend/project-showcase.png). When deploying your project on GitHub Pages, try using a relative path instead. Assuming your HTML file is in the root directory of your repository, you can change the image source to "img/projects/frontend/project-showcase.png" without the leading /. This relative path should work both locally and on GitHub Pages.

wrong part:
```html
                            <div class="project-image">
                                <img src="/img/projects/frontend/project-showcase.png" alt="" >
                            </div>
```
