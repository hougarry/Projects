           
html file 
```html
            <div class="hero-tab">
                <div class="btn-box">
                    <button class="boxbtn1" onclick="openHTML()"><i class="fa-brands fa-html5"></i>HTML</button>
                    <button class="boxbtn2" onclick="openCSS()"><i class="fa-brands fa-css3-alt"></i>CSS</button>
                    <button class="boxbtn3" onclick="openJS()"><i class="fa-brands fa-codepen"></i>JAVASCRIPT</button>
                </div>
                <div class="content" id="content1">
                    <div class="content-box-con">
                        <div class="content-left">
                            <h1>HTML</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sdfjld 
                                sdfsdfs sdf;lsdf sd;f;s sdfl;ksdf ;sdfl 
                            </p>
                            <a href="#">Watch Video</a>
                        </div>
                        <div class="content-right">
                            <img src="./bg.jpg">
                        </div>
                    </div>
                    <div class="content-box-con">
                        <div class="content-left">
                            <h1>HTML</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sdfjld 
                                sdfsdfs sdf;lsdf sd;f;s sdfl;ksdf ;sdfl 
                            </p>
                            <a href="#">Watch Video</a>
                        </div>
                        <div class="content-right">
                            <img src="./bg.jpg">
                        </div>
                    </div>
                    <div class="content-box-con">
                        <div class="content-left">
                            <h1>HTML</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sdfjld 
                                sdfsdfs sdf;lsdf sd;f;s sdfl;ksdf ;sdfl 
                            </p>
                            <a href="#">Watch Video</a>
                        </div>
                        <div class="content-right">
                            <img src="./bg.jpg">
                        </div>
                    </div>
                </div>
                <div class="content" id="content2">
                    <div class="content-left">
                        <h1>CSS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sdfjld 
                            sdfsdfs sdf;lsdf sd;f;s sdfl;ksdf ;sdfl 
                        </p>
                        <a href="#">Watch Video</a>
                    </div>
                    <div class="content-right">
                        <img src="./bg.jpg">
                    </div>
                </div>
                <div class="content" id="content3">
                    <div class="content-left">
                        <h1>JAVASCRIPT</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. sdfjld 
                            sdfsdfs sdf;lsdf sd;f;s sdfl;ksdf ;sdfl 
                        </p>
                        <a href="#">Watch Video</a>
                    </div>
                    <div class="content-right">
                        <img src="./bg.jpg">
                    </div>
                </div>
            </div>
```




scss file
```scss

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        transform: translateX(150%);
        .card{
            color: var(--color-gray-0);
            background-size: cover;
            padding: 10rem 0 0;
            max-width: 35ch; /* 560px */
            border-radius: .5rem;
            overflow: hidden;
            transition: transform  500ms ease;
            .card:hover,
            .card:focus-within{
                transform: scale(1.05);
            }
            .card-content{
                --padding: 1.5rem;
                padding: var(--padding);
                background: linear-gradient(
                    hsl(0 0% 0% / 0), 
                    hsla(244, 82%, 42%, 0.3) 20%,
                    hsl(0 0% 0% / 1)
                );
                
            
            }
            
            .card-title{
                position: relative;
                width: max-content;
            }
            .card-title::after{
                content: "";
                height: 4px;
                position:absolute;
                bottom: -2px;
                left: calc(var(--padding) * -1);  
                width: calc(100% + var(--padding));
                background: var(--color-second);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 500ms ease;
            }
            
            .card:hover .card-title::after,
            .card:focus-within .card-title::after{
                transform: scaleX(1);
            }
            
            .card-body{
                color: rgb(255, 255, 255 , 0.85);
            }
            .card-button{
                cursor: pointer;
                display: inline;
                text-decoration: none;
                color: var(--color-white);
                background: var(--color-second);
                border-radius: .25rem;
                padding: .5rem 1.2rem;
                &:hover, &:focus{
                    background-color: var(--color-gray-5);
                }
            } 
        }       
    }  
```



html showcase
```html
            <div class="projects">
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-image">
                        <img src="/img/port-1.jpg" alt="" >
                    </div>
                    <div class="hover-items">
                        <h3>Code Source</h3>
                        <div class="icons">
                            <a  href="" class="icon" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a  href="" class="icon" target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href="https://www.freecodecamp.org/Gary_Hou" class="icon" target="_blank"><i class="fa-brands fa-free-code-camp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
```

c


c

