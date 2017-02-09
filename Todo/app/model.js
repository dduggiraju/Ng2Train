"use strict";
class Model {
    constructor() {
        this.user = "Dheeraj";
        this.toDoItems = [
            new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false),
            new TodoItem("Call Joe", false)
        ];
    }
}
exports.Model = Model;
class TodoItem {
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
exports.TodoItem = TodoItem;
//# sourceMappingURL=model.js.map