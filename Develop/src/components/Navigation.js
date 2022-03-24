import React, { useState } from 'react';

function Navigation() {
    const [navigation, setNavigation] = useState('Alyssa Cuson');

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">Alyssa Cuson</a>
            <div>
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#anchor-about">About Me
                          <span class="visually-hidden">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#anchor-work">Work</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#anchor-contact">Contact</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./assets/resume.pdf" download="resume">Resume</a>
                      </li>
                </ul>
            </div>
        </div>   
    </nav>
    );
};

export default Navigation;

