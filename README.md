# Codetober 2025

🎃 My 25's Codetober Challenge! 🚀 Building a new coding project every day this October. 📅 Each day's solution lives on a separate branch named for that day (e.g., day-01, day-02, etc.). 31 days, 31 projects!

## Day 01: [Type-Ahead Search](https://github.com/marinellibr/codetober-25/tree/day-01/type-ahead-search)

For the first day of Codetober, I built a highly efficient type-ahead search component that queries the Wikipedia API. The primary focus was on using a sophisticated RxJS pipe to manage the stream of user input, ensuring optimal performance and a smooth user experience.

**Key concepts demonstrated:**

- **`debounceTime`**: Waits for the user to pause typing before sending a request.
- **`distinctUntilChanged`**: Avoids sending duplicate requests for the same search term.
- **`switchMap`**: Cancels previous pending API requests to prevent race conditions and ensure only the latest results are displayed.
- **`async` pipe**: For clean, declarative subscription management in the template.

## Day 02: [Draggable Kanban Board](https://github.com/marinellibr/codetober-25/tree/day-02/kanban-board)

For the second day of Codetober, I built a fully interactive Kanban board from scratch. This project demonstrates the implementation of a complex, stateful UI featuring drag-and-drop functionality for tasks both within and between columns, as well as the ability to dynamically create and delete columns. The primary focus was on leveraging the Angular CDK's powerful Drag & Drop module to create a seamless and intuitive user experience.

**Key concepts demonstrated:**

- **Angular CDK Drag & Drop Module**: Utilizing this advanced toolkit to create a rich, interactive user interface for complex data manipulation.
- **`cdkDropListGroup`**: Connecting multiple drop zones (the columns) to enable the seamless transfer of items from one list to another.
- **`CdkDragDrop` Event Handling**: Implementing the core logic that responds to drop events, differentiating between reordering with `moveItemInArray` and transferring with `transferArrayItem`.
- **Dynamic State & Template Synchronization**: Managing the component's state (the array of columns and tasks) to dynamically add, remove, and reorder elements, with the UI reactively updating in response to these data changes.

---

### A Note on the Development Process

Given the one-day time constraint for each challenge, the initial focus is purely on **developing the core functionality**.

After the Codetober challenge is complete, I will perform a refinement pass on every project. This second phase will include implementing comprehensive **unit tests** and adding **in-depth code comments** to explain my architectural choices and thought process.
