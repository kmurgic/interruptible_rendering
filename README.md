This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Concurrent Mode - Interruptible Rendering Demo

This project demonstrates interruptible rendering with the useDeferredValue Hook.


This code contains five examples of the same article finder to demonstrate how interruptible rendering works and how it can help make applications more responsive.

### Example 1 - Blocking Mode Article Finder
The input for the blocking mode article finder stutters as the user types.  This is because we have simulated slow to render articles and when the user types into the input the application is waiting for all of the articles to render before updating the input value.

### Example 2 - Concurrent Mode Article Finder
The input for concurrent mode does not stutter as the user types.  This is because we have passed a deferred value (using the useDeferredValue hook) to the article list.  This means the articles in the list will yield to higher priority work (like updating the input value) before rendering.

### Example 3 - Debounced Article Finder
This example demonstrates that we can also eliminate the stuttering as a user types by debouncing our input value.

### Example 4 - Debounced Article Finder (High Performance)
In this example, the simulated delay in rendering each article has been lowered. The debounced article finder will still wait for the user to finish typing before updating the list of articles, rather than updating as the user types.

### Example 5 - Concurrent Mode Finder (High Performance)
The concurrent mode article finder which uses useDeferredValue will update the list of articles immediately as the user types on a fast performing machine.  And on a slow machine, useDeferredValue will still not cause any input stuter.  This is because useDeferredValue pauses the rendering of the articles only until the input value has updated, then immediately resumes rendering.