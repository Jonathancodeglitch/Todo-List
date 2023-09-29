/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//my todos are going to be an object that would be dynamically created (we can use a class or factory module for this)

//my tods properties should have title ,desscription ,due Date ,piority (optional note and checkList);

//your todo list should have a project or seperate list of todos

//When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

//You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules

//your todo app should be able to do the following
//view all projects
//view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
//expand a single todo to see/edit its details
//delete a todo

//date-fns  library for date and time

// use localStorage for storage

console.log('let us get started!!!!!!!!');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vbXkgdG9kb3MgYXJlIGdvaW5nIHRvIGJlIGFuIG9iamVjdCB0aGF0IHdvdWxkIGJlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgKHdlIGNhbiB1c2UgYSBjbGFzcyBvciBmYWN0b3J5IG1vZHVsZSBmb3IgdGhpcylcclxuXHJcbi8vbXkgdG9kcyBwcm9wZXJ0aWVzIHNob3VsZCBoYXZlIHRpdGxlICxkZXNzY3JpcHRpb24gLGR1ZSBEYXRlICxwaW9yaXR5IChvcHRpb25hbCBub3RlIGFuZCBjaGVja0xpc3QpO1xyXG5cclxuLy95b3VyIHRvZG8gbGlzdCBzaG91bGQgaGF2ZSBhIHByb2plY3Qgb3Igc2VwZXJhdGUgbGlzdCBvZiB0b2Rvc1xyXG5cclxuLy9XaGVuIGEgdXNlciBmaXJzdCBvcGVucyB0aGUgYXBwLCB0aGVyZSBzaG91bGQgYmUgc29tZSBzb3J0IG9mIOKAmGRlZmF1bHTigJkgcHJvamVjdCB0byB3aGljaCBhbGwgb2YgdGhlaXIgdG9kb3MgYXJlIHB1dC4gVXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gY3JlYXRlIG5ldyBwcm9qZWN0cyBhbmQgY2hvb3NlIHdoaWNoIHByb2plY3QgdGhlaXIgdG9kb3MgZ28gaW50by5cclxuXHJcbi8vWW91IHNob3VsZCBzZXBhcmF0ZSB5b3VyIGFwcGxpY2F0aW9uIGxvZ2ljIChpLmUuIGNyZWF0aW5nIG5ldyB0b2Rvcywgc2V0dGluZyB0b2RvcyBhcyBjb21wbGV0ZSwgY2hhbmdpbmcgdG9kbyBwcmlvcml0eSBldGMuKSBmcm9tIHRoZSBET00tcmVsYXRlZCBzdHVmZiwgc28ga2VlcCBhbGwgb2YgdGhvc2UgdGhpbmdzIGluIHNlcGFyYXRlIG1vZHVsZXNcclxuXHJcbi8veW91ciB0b2RvIGFwcCBzaG91bGQgYmUgYWJsZSB0byBkbyB0aGUgZm9sbG93aW5nXHJcbi8vdmlldyBhbGwgcHJvamVjdHNcclxuLy92aWV3IGFsbCB0b2RvcyBpbiBlYWNoIHByb2plY3QgKHByb2JhYmx5IGp1c3QgdGhlIHRpdGxlIGFuZCBkdWVkYXRl4oCmIHBlcmhhcHMgY2hhbmdpbmcgY29sb3IgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzKVxyXG4vL2V4cGFuZCBhIHNpbmdsZSB0b2RvIHRvIHNlZS9lZGl0IGl0cyBkZXRhaWxzXHJcbi8vZGVsZXRlIGEgdG9kb1xyXG5cclxuLy9kYXRlLWZucyAgbGlicmFyeSBmb3IgZGF0ZSBhbmQgdGltZVxyXG5cclxuLy8gdXNlIGxvY2FsU3RvcmFnZSBmb3Igc3RvcmFnZVxyXG5cclxuY29uc29sZS5sb2coJ2xldCB1cyBnZXQgc3RhcnRlZCEhISEhISEhJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==