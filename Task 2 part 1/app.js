var todoItem = {
    props: ["completed"],
    template: "<div>" +
        "<label><slot></slot></label>" +
        '<input type="checkbox" :checked="completed" />' +
        "</div>"
};

new Vue({
    el: "#app",
    components: { TodoItem: todoItem },
    data: {
        items: [
            { desc: "SIT120 lecture", completed: true },
            { desc: "Lunch with Sam", completed: false },
            { desc: "Work", completed: false },
            { desc: "Movie time", completed: false }
        ]
    }
});
