Week 5 reflection: 

Learning reflection: During this week, my focus is to decide what final Vue concepts and components that I want to include on my travel website. Before I implement it into my final project, I understand the concept and definition beforehand. After that I implement my understanding into VS code to see the result. 

Next week, I expected:

•	To implement 2 or more vue components on the same page.

• Implement this week learning on my final project. 

• In-depth understanding of User Inputs, Form Input Bindings, and their components.


Task 1: 

Component in Vue may be specified in 2 ways (globally and locally). A component that may be used everywhere in an application, even within other components, is known as a global component. A local component, on the other hand, is one that is not registered globally and may thus only be used on components where it is registered.

In JavaScript, import the Vue web component file I generated and register it as a global component. Lastly, nest the component (fruit.vue) in the parent component (App.vue).

Next task is creating a local Vue web component. We don't need to go to the main.js file to register the Vue web component once we've generated it since we don't register it globally.

In JavaScript file, import the Vue web component file. Then, inside Export default object, use the use components {} option to register the Vue web component as locally. Finally, I utilise it or nest it in the component where it was locally registered.

Task 2:

By creating a simple to do list with the core directive v-for to render a list of elements in Vue.


<img width="1000" alt="Screen Shot 2021-09-08 at 12 07 17 am" src="https://user-images.githubusercontent.com/87454125/132358970-73c65b7f-c937-426f-8756-d708b050312e.png"> List rendering outcome.

<img width="1420" alt="Screen Shot 2021-09-08 at 12 08 42 am" src="https://user-images.githubusercontent.com/87454125/132359171-6138ad35-d774-4de3-9ae4-697f1397113c.png"> Event Handlers output.

Task 3 

Understanding handling user input by creating a sign up and sign in form using v-bind, v-if, and v-model. When the user clicks the button, the function updates the content of our app, and Vue Native dynamically communicates with React Native to change the UI Elements.

<img width="1420" alt="Screen Shot 2021-09-08 at 12 14 35 am" src="https://user-images.githubusercontent.com/87454125/132360051-4b62bb23-8abb-4d67-b7dd-bc9f17e2e97b.png"> Handling user input Vue Output. 

Task 4:

The last task of this week activity is in-depth understanding of the Vue component. I have decided some components to use for my website, which are Custom Events, Filters, Enter/Leave list transitions. Below I will list down the detail how I going to implement them in my project:

•	Custom Events: to pass data from child component to a parent component in reaction to an event (I’m going to implement click event on my website)

•	Filters: Create a filter for a specific search term under my ‘experience’ page. 

•	Enter/Leave list transitions: use Vue transition component to add enter and leave classes to the elements. This transition may be applied on ‘documentation’ page (which is a photo library page). 

