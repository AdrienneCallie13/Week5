var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Adrienne'
    },
    // define methods under the `methods` object
    methods: {
        greet: function(event) {
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
