# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Azwad Shameem

Time spent: 1 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

<img src='The_Pattern_Game' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I did not use any outside resources, the only resource I used was the guide from the prework website from CodePath.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
My first challenge was getting used to HTML / CSS / JavaScript, although I have used them in the past, I needed to get used to them again because I haven't used them since
high school. It took awhile but after testing out buttons with classes and ids I quickly got readjusted into using HTML / CSS / JavaScript.
Another challenge, I encountered during this submission is that when we were asked to create the game logic I struggled to figure out what I was supposed to do.
I believe this was because I was following the instructions from the guide but not actually thinking of what I'm supposed to do myself. So I pretty much had to reread the guide
and read and try to comprehend the code. As I was reading the code and trying to gain an understanding of what the goal of the game was it became pretty simple of what I had to do
to complete the assignment. From there I understood that the game logic would be a function that keeps progression of the game and checks if the current choice is the correct or not, 
if it is correct progress the game progress the game, otherwise tell the user they lost. Also at the last step if guess is right, check if progress equals the size of the pattern 
array minus one then the user has won the game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I remember using bootstrap and various other APIs and tools with JavaScript in high school. I'm assuming we will be utilizing various tools and dependencies to increase the 
functionality of the websites, so what tools should I research to prepare myself? In addition, are there any data structures or algorithms that are especially used in 
web development that I should practice on? Also most of the issues I've faced with web development before where only with JavaScript, so are there any problems that
may arise from the HTML or CSS side of things? Lastly as a web developer what are some of the web practices that are used when engineering a website idea or developing a website from scratch?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time working on this project I would add animations and more pictures to the website to increase the user experience when interacting with the website. For example, instead of being colors
the buttons could show changing images instead to increase the difficulty of figuring out the pattern. In addition I would also add different levels for the repeating pattern and as you go up
the levels the speed of the pattern being shown would increase drastically. Talking about different levels, I would add a level where the buttons are shown then shuffled around which would definitely
increase the difficulty of the game by a lot.



## License

    Copyright Azwad Shameem

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
