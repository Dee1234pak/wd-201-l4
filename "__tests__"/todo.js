/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
const todoList = require('../todo');

const { all, marksAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
    test("should add new todo", () => {
        expect(all.length).toBe(0);
        add(
            {
             title: "Test todo",
             completed: false,
             dueDate: new Date().toLocaleDateString("en-CA"),
            },
        );
        expect(all.length).toBe(1);
    });
    test("shouldmark as todo complete", () => {
        except(all[0].complete).toBe(false);
        markAsComplete(0);
        except(all[0].completed).toBe(true);
    });
});
