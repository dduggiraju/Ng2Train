export class Model {
    user;
    toDoItems;
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

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}