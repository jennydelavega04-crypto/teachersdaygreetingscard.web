# teachersdaygreetingscard.web
designed by: Maria Jenny Lagac
Teacher's Day Flip Card 🎉

A fun and interactive Teacher's Day greeting card built with HTML, CSS, and JavaScript. It features a flip card animation with a front and back message, accompanied by animated confetti to celebrate the special day.

Perfect for sending heartfelt digital greetings to teachers or classmates.

Features

3D Flip Card Animation

Hover over the card to see it flip and reveal the back message.

Front Side

A personalized greeting with the teacher’s name and a short message.

Back Side

A detailed, heartfelt message from the student, signed at the bottom.

Confetti Animation

Colorful confetti falling across the screen to make the card more festive.

Some confetti pieces include the word "Smile" to make it playful.

Responsive Design

Works on desktop and mobile devices with dynamic resizing of confetti.

Technologies Used

HTML5 – Structure of the card and canvas.

CSS3 – Styling, gradients, 3D flip effects, and animations.

JavaScript (Vanilla) – Confetti animation and dynamic resizing.

File Structure
TeacherDayFlipCard/
├── index.html       # Main HTML file
├── style.css        # Styles for flip card and page
├── script.js        # Confetti animation script
└── README.md        # This file

How to Use

Clone or Download the Project

git clone <repository-url>


Open index.html in a browser

No additional setup or dependencies needed.

Hover over the card

Watch it flip to reveal the back side.

Enjoy the confetti animation in the background.

Customization

Change Greeting Text

Edit the content inside .card-front and .card-back in index.html.

Change Colors or Gradients

Modify the CSS for .card-front, .card-back, and body background.

Adjust Confetti

In script.js, you can:

Change the number of confetti pieces: for (let i = 0; i < 100; i++)

Change colors in the colors array.

Change the falling speed with speed: Math.random() * 3 + 2.

Notes

This project uses Google Fonts: Poppins. Make sure it is loaded in your HTML if needed.

Confetti uses the <canvas> element and dynamically resizes on window resize.

Designed to be fun and heartfelt, especially for students creating digital greetings.

Preview

License

This project is open-source and free to use for personal and educational purposes.
 https://jennydelavega04-crypto.github.io/teachersdaygreetingscard.web/
