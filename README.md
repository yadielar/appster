# Appster

Appster is a mobile web app whose main goal is to promote discovery of mobile games in Latin America. This is my take on the design and architecture of this project.


## Design

In terms of the user interface, I designed a completely custom theme that adheres to Appster's youthful brand identity. For a more intuitive user experience, I use some of the design patterns with which users are most familiarized in native mobile apps. This is not an easy task in mobile web app development, since there's a wide range of devices with different capabilities and limitations. I explain how I dealt with these issues in the technical section.

The app’s current home page is the “Apps de la Semana” section, which features a list of promoted apps for the user to download. The user can scroll through the list of apps, select one, and view more details which include screenshots and a complete description from the developer. In this page, the user can download the app or share it in exchange for points through the Funnke Offerwall by tapping the corresponding orange buttons. This is where the Funnke Offerwall overlay would come in if the app had access to the service. There’s also an option in the menu to share Appster with friends, which should also make use of the Funnke Offerwall if available. Furthermore, the app list page includes a space for displaying ad units.

Everything scrolls and moves as fluidly as in a native app using the best web technologies. The app also shows off a responsive design that looks good on tablets and desktop devices.


## Technical

Following is a list of some of the technologies and software patterns used to build Appster:

* Uses Angular.js for maximum extensibility and reliability. Makes use of Angular’s best features, such as its module architecture and dependency injection for a better separation of concerns and testability, two way data binding, directives and more.
* Uses Twitter Bootstrap as it’s primary ui system for more flexible theming coupled with solid responsive design capabilities.
* Uses npm, bower, and gulp.js for dependencies and builds.
* The layout and interface elements are specifically optimized for mobile devices and touch interactions using a progressive enhancement approach.
* Uses SVG’s and @2x images whenever posible for better image quality on high density displays.
* Uses performance enhancement techniques such as: minimizing and concatenating files for fewer http requests, image optimization, faster touch events using fatsclick.js, more reliable overflows using overthrow.js, etc.
* Makes use of advanced CSS3 features such as media queries, box shadows and transitions for more flexible components and smoother animations.
* Parses playmarketdata.json file to generate app content via ajax using http communication methods.
