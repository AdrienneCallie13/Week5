//  globally component example

let fruitComponent = Vue.extend({
    data() {
        return {
            fruits: ["Apple", "Orange", "Avocado", "Coconut", "Kiwi", "Mango"]
        };
    },
    template: `
    <ul>
    <li v-for="fruit in fruits">{{ fruit }}</li>
    </ul> 
    `
});

// register global component
Vue.component('fruits', fruitComponent);

// create a root instances 
let app = new Vue({
    el: '#vue-app'
});


//  local component example

const fruity = {
    data() {
        return {
            fruits: ["Apple", "Orange", "Avocado", "Coconut", "Kiwi", "Mango"]
        };
    },
    template: `
    <ul>
    <li v-for="fruit in fruits">{{ fruit }}</li>
    </ul> 
    `
};


// root instance and the local component  
let app = new Vue({
    el: '#vue-app',
    components: {
        fruity
    }
});
