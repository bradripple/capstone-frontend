# Ripple Photography

## Link to App
https://ripple-photography.herokuapp.com/



Homepage
![Imgur](https://i.imgur.com/0Mv2Nwm.png)

Sign Up 
![Imgur](https://i.imgur.com/4KGryLN.png)

About Page
![Imgur](https://i.imgur.com/1VmVnmL.png)

Gallery Page
![Imgur](https://i.imgur.com/BFGNXLC.jpg)

## Concept and User Stories

Site concept: Ripple Photography Portfolio site - stretch goals to incorporate a print store.

* User needs to be able to browse a database of my photographs. 
* User needs to be able to log in to create and view a wishlist. 
* User needs to be able to read a little about me. 
* User needs to be able to contact me through email. 

Stretch Goals

* User needs to be able to purchase prints.


## Features

* Login Authentication
* Sessions to keep user logged in between pages
* Flash messages for login/logout errors and successes
* Utilizing ReactIcons for contact icons
* Models that interact with databases using Mongoose
* Photograph wishlist page that you can view your favorite Photographs


## Models
![Imgur](https://i.imgur.com/Tf0MwoT.png)

## Sprints
#### 1st sprint: ERD, Wireframing, and Planning : Monday 

I spent the first day planning the general layout and look of the app. I also set up my wireframe and ERD.

#### 2nd sprint: Setting up models and Routes - GET, POST, PUT, DELETE : Tuesday

I was able to get the models together and the routes established for front and back end.

#### 3rd sprint: Style inspiration and Card Animation : Wednesday - Thursday

I spent possibly a little too much time looking at different examples and code snippets to find the right styling for this page. I eventually decided on a box shadow animation for the image cards and was able to implement it through out the site.

```css
.tile_img {
  border: 2px inset gray;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: auto;
  opacity: 1;
  -webkit-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-duration: 0.125s;
  transition-duration: 0.125s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  margin-top: 30px;
  margin-bottom: 35px;
}
.tile_link:hover .tile_img1 {
  box-shadow: 5px 5px rgba(244, 170, 200, 0.4),
    10px 10px rgba(244, 170, 200, 0.3), 15px 15px rgba(244, 170, 200, 0.2),
    20px 20px rgba(244, 170, 200, 0.1), 25px 25px rgba(244, 170, 200, 0.05);
}

.text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

#### 4th sprint: Final CSS, README, and final test : Friday - Monday

* I used a video background for the landing page, about page and form pages
* I implemented transform animation to animate the landing page logo and button
* Incorporated a new font
* I implemented a text-shadow animation to create a neon sign effect on the text
* Updated the color scheme and made all the buttons look uniform


## Here is the css and jsx for my animated Ripple Photography logo on the landing page
```css
.text_box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.heading_primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 60px;
}

.heading_primary_main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 45px;
  margin-bottom: 40px;
  animation-name: moveInLeft;
  animation-duration: 3s;
  animation-timing-function: ease-out;
}

.heading_primary_sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  margin-bottom: 40px;
  animation: moveInRight 3s ease-out;
}

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
```
```jsx
  <div>
      <video
        id={video.videoBG}
        autoPlay
        loop
        muted
        className={style.video}
      >
        <source src={ripple} type="video/mp4" />
      </video>
      <header className={style.header}>
        <div className={style.text_box}>
          <h1 className={`${style.heading_primary} ${style.h1}`}>
            <span className={`${style.heading_primary_main} ${style.flux}`}>Ripple</span>
            <span className={style.heading_primary_sub}>Photography</span>
          </h1>
          <Link to="/gallery" className={`${style.btn} ${style.btn_white} ${style.btn_animated}`}>Gallery</Link>
        </div>
      </header>
    </div>
```

## Conclusion
Building out this app was a lot of fun! Lots of technical and creative aspects to this project. It was a great opportunity to work on my process for solving problems and learning to ask the right questions. I learned a lot of new skills and got to incorporate some new CSS that was really exciting. 


## Ideas to Implement
* Payment portal
* Ability to order prints
* Display images by location
* Admin portal to upload and delete photographs from database
