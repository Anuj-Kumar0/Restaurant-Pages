"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutAdded: () => (/* binding */ aboutAdded),
/* harmony export */   showAbout: () => (/* binding */ showAbout)
/* harmony export */ });
const aboutContent = document.querySelector("#aboutContent");

let aboutAdded = false;
const nav = document.querySelector("nav");
console.log("everything fine");

const showAbout = () => {
  if (!aboutAdded) {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutDiv");
    aboutContent.appendChild(aboutDiv);

    const aboutTransparent = document.createElement("div");
    aboutTransparent.classList.add("transparent");
    aboutDiv.appendChild(aboutTransparent);
    aboutAdded = true;
  }
  nav.classList.add("button-top");
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRDb250ZW50XCIpO1xuXG5sZXQgYWJvdXRBZGRlZCA9IGZhbHNlO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbmNvbnNvbGUubG9nKFwiZXZlcnl0aGluZyBmaW5lXCIpO1xuXG5jb25zdCBzaG93QWJvdXQgPSAoKSA9PiB7XG4gIGlmICghYWJvdXRBZGRlZCkge1xuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXREaXZcIik7XG4gICAgYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICAgIGNvbnN0IGFib3V0VHJhbnNwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0VHJhbnNwYXJlbnQuY2xhc3NMaXN0LmFkZChcInRyYW5zcGFyZW50XCIpO1xuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0VHJhbnNwYXJlbnQpO1xuICAgIGFib3V0QWRkZWQgPSB0cnVlO1xuICB9XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLXRvcFwiKTtcbn07XG5cbmV4cG9ydCB7IHNob3dBYm91dCwgYWJvdXRBZGRlZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9