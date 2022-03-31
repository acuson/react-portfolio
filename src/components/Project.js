function Project () {
    return (<div><section class="container-fluid m-2" id="anchor-about">
    <div class="container-fluid d-flex">
        <h1 class="m-5">About Me</h1>
            <div class="card bg-light border-primary m-5">
                <div class="card-body container-fluid d-flex justify-content-between">
                    <img src={process.env.PUBLIC_URL + '/Headshot.jpg'} alt="Alyssa's headshot" class="w-25 m-2"/>
                    <p class="lead m-2">Hi, my name is Alyssa Cuson, and I am an aspiring developer. I graduated from the University of Georgia with a degree in Economics. I started my career working for Atlanta tech startups in marketing. I then transitioned into recruiting and have experience recruiting for several industries, including IT. I am a student at Georgia Tech for their coding boot camp. My goal is to use the skills from this program to transition into an exciting career in development. This has already started as I look forward to work with Search Discovery in Atlanta as an Associate Analytics Engineer in March.</p>
                     
                </div>
                <div class="card-body container-fluid d-flex justify-content-left">
                    <a href="https://linkedin.com/in/alyssacuson" class="btn btn-success m-2">LinkedIn</a><br/>
                    <a href="https://github.com/acuson" class="btn btn-success m-2">GitHub</a>
                </div>
                
            </div>
            
    </div>
    
</section>
<section class="container-fluid m-2" id="anchor-work">
    <div class="container-fluid d-flex">
        <h1 class="m-5">Work</h1>
        <div class="card-deck container-fluid d-flex">
            <div class="card bg-light border-primary m-5">
                <div class="card-body container-fluid d-flex row justify-content-center">
                    <h3 class="card-title">MeteoMelodies</h3>
                    <img src={process.env.PUBLIC_URL + '/meteo-melodies.png'} alt="Meteo Melodies landing page"/>
                    <p class="card-text m-2">A JavaScript app finding Spotify playlists based on the weather in your location.</p>
                    <a href="https://github.com/acuson/meteo-melodies" class="btn btn-success w-25 m-2">Code</a>
                    <a href="https://acuson.github.io/meteo-melodies/" class="btn btn-success w-25 m-2">App</a>
                </div>
            </div>
            <div class="card bg-light border-primary m-5">
                <div class="card-body container-fluid d-flex row justify-content-center">
                    <h3 class="card-title">Between the Covers</h3>
                    <img src={process.env.PUBLIC_URL + '/btc.png'} alt="Between the Covers landing page"/>
                    <p class="card-text m-2">A FullStack app where users can explore and create book clubs.</p>
                    <a href="https://github.com/acuson/between-the-covers" class="btn btn-success w-25 m-2">Code</a>
                    <a href="https://between-the-covers.herokuapp.com/" class="btn btn-success w-25 m-2">App</a>
                </div>
            </div>
            <div class="card bg-light border-primary m-5">
                <div class="card-body container-fluid d-flex row justify-content-center">
                    <h3 class="card-title">Work Day Scheduler</h3>
                    <img src={process.env.PUBLIC_URL + '/wds.png'} alt="Work day Scheduler landing page"/>
                    <p class="card-text m-2">A JavaScript app where a user can plan their day in a 15 hour span.</p>
                    <a href="https://github.com/acuson/work-day-scheduler" class="btn btn-success w-25 m-2">Code</a>
                    <a href="https://acuson.github.io/work-day-scheduler/" class="btn btn-success w-25 m-2">App</a>
                </div>
            </div>
        </div>
    </div>
</section>
</div>)
};

export default Project;