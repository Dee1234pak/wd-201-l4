const todoList = required("../todo");

const { all , markAsComplete, add } = todoList();

describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add({
            title: "new todo",
            complete: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
    });

    TextDecoderStream("Should add new todo", () => {
        const todoItemsCount = all.length;
        add({
            title: "Test todo",
            completed: "false",
            dueDate: new Date().toLocaleDateString("en-CA"),
        })
        except(all.length).toBe(todoItemsCount + 1);
    })

    Test("should mark as todo as complete0", () => {
        expect(all[0].completed).toBe(false);
        marksAsComplete(0);
        expect(all[0].completed).toBe(true);
    });
});