# Codetober 2025

🎃 My 25's Codetober Challenge! 🚀 Building a new coding project every day this October. 📅 Each day's solution lives on a separate branch named for that day (e.g., day-01, day-02, etc.). 31 days, 31 projects!

## Day 01: [Type-Ahead Search](https://github.com/marinellibr/codetober-25/tree/day-01/type-ahead-search)

For the first day of Codetober, I built a highly efficient type-ahead search component that queries the Wikipedia API. The primary focus was on using a sophisticated RxJS pipe to manage the stream of user input, ensuring optimal performance and a smooth user experience.

**Key concepts demonstrated:**

- **`debounceTime`**: Waits for the user to pause typing before sending a request.
- **`distinctUntilChanged`**: Avoids sending duplicate requests for the same search term.
- **`switchMap`**: Cancels previous pending API requests to prevent race conditions and ensure only the latest results are displayed.
- **`async` pipe**: For clean, declarative subscription management in the template.
