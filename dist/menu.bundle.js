"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuAdded: () => (/* binding */ menuAdded),
/* harmony export */   showMenu: () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food1.jpg */ "./src/food1.jpg");
/* harmony import */ var _food2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food2.jpg */ "./src/food2.jpg");
/* harmony import */ var _food3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food3.jpg */ "./src/food3.jpg");
/* harmony import */ var _food4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food4.jpg */ "./src/food4.jpg");





const menuContent = document.querySelector("#menuContent");
console.log("everything fine");

let menuAdded = false;
const nav = document.querySelector("nav");
const showMenu = () => {
  if (!menuAdded) {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    menuContent.appendChild(menuDiv);

    const menuTransparent = document.createElement("div");
    menuTransparent.classList.add("transparent");
    menuDiv.appendChild(menuTransparent);

    const menuDivFirst = document.createElement("div");
    menuDivFirst.classList.add("menu-flex");
    menuDivFirst.id = "menuFirst";
    menuDiv.appendChild(menuDivFirst);
    const foodPictureFirst = document.createElement("div");
    foodPictureFirst.classList.add("food-picture");
    menuDivFirst.appendChild(foodPictureFirst);
    const foodNameFirst = document.createElement("div");
    foodNameFirst.classList.add("food-name");
    foodNameFirst.textContent = "STEAK";
    menuDivFirst.appendChild(foodNameFirst);
    const foodImageFirst = new Image();
    foodImageFirst.src = _food1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    foodImageFirst.classList.add("opaque-image");
    foodImageFirst.onload = () => {
      const divWidth = foodPictureFirst.clientWidth;
      const divHeight = foodPictureFirst.clientHeight;
      foodImageFirst.width = divWidth;
      foodImageFirst.height = divHeight;
      foodPictureFirst.appendChild(foodImageFirst);
    };

    const menuDivSecond = document.createElement("div");
    menuDivSecond.classList.add("menu-flex");
    menuDiv.appendChild(menuDivSecond);
    const foodPictureSecond = document.createElement("div");
    foodPictureSecond.classList.add("food-picture");
    menuDivSecond.appendChild(foodPictureSecond);
    const foodNameSecond = document.createElement("div");
    foodNameSecond.classList.add("food-name");
    foodNameSecond.textContent = "OMELETTE";
    menuDivSecond.appendChild(foodNameSecond);
    const foodImageSecond = new Image();
    foodImageSecond.src = _food2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    foodImageSecond.classList.add("opaque-image");
    foodImageSecond.onload = () => {
      const divWidth = foodPictureSecond.clientWidth;
      const divHeight = foodPictureSecond.clientHeight;
      foodImageSecond.width = divWidth;
      foodImageSecond.height = divHeight;
      foodPictureSecond.appendChild(foodImageSecond);
    };

    const menuDivThird = document.createElement("div");
    menuDivThird.classList.add("menu-flex");
    menuDiv.appendChild(menuDivThird);
    const foodPictureThird = document.createElement("div");
    foodPictureThird.classList.add("food-picture");
    menuDivThird.appendChild(foodPictureThird);
    const foodNameThird = document.createElement("div");
    foodNameThird.classList.add("food-name");
    foodNameThird.textContent = "CHICKEN";
    menuDivThird.appendChild(foodNameThird);
    const foodImageThird = new Image();
    foodImageThird.src = _food3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    foodImageThird.classList.add("opaque-image");
    foodImageThird.onload = () => {
      const divWidth = foodPictureThird.clientWidth;
      const divHeight = foodPictureThird.clientHeight;
      foodImageThird.width = divWidth;
      foodImageThird.height = divHeight;
      foodPictureThird.appendChild(foodImageThird);
    };

    const menuDivFourth = document.createElement("div");
    menuDivFourth.classList.add("menu-flex");
    menuDiv.appendChild(menuDivFourth);
    const foodPictureFourth = document.createElement("div");
    foodPictureFourth.classList.add("food-picture");
    menuDivFourth.appendChild(foodPictureFourth);
    const foodNameFourth = document.createElement("div");
    foodNameFourth.classList.add("food-name");
    foodNameFourth.textContent = "STEAK PASTA";
    menuDivFourth.appendChild(foodNameFourth);
    const foodImageFourth = new Image();
    foodImageFourth.src = _food4_jpg__WEBPACK_IMPORTED_MODULE_3__;
    foodImageFourth.classList.add("opaque-image");
    foodImageFourth.onload = () => {
      const divWidth = foodPictureFourth.clientWidth;
      const divHeight = foodPictureFourth.clientHeight;
      foodImageFourth.width = divWidth;
      foodImageFourth.height = divHeight;
      foodPictureFourth.appendChild(foodImageFourth);
    };

    menuAdded = true;
  }
  nav.classList.add("button-top");
};




/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0d04819cd742c12bff2.jpg";

/***/ }),

/***/ "./src/food2.jpg":
/*!***********************!*\
  !*** ./src/food2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f1e2ae5d7f3bd6565b8.jpg";

/***/ }),

/***/ "./src/food3.jpg":
/*!***********************!*\
  !*** ./src/food3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "551ee1564930d2edb737.jpg";

/***/ }),

/***/ "./src/food4.jpg":
/*!***********************!*\
  !*** ./src/food4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9688ec3d13e3cf1a823d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0M7QUFDRDtBQUNDOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVDQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1Q0FBUztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUNBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9vZEZpcnN0IGZyb20gXCIuL2Zvb2QxLmpwZ1wiO1xuaW1wb3J0IGZvb2RTZWNvbmQgZnJvbSBcIi4vZm9vZDIuanBnXCI7XG5pbXBvcnQgZm9vZFRoaXJkIGZyb20gXCIuL2Zvb2QzLmpwZ1wiO1xuaW1wb3J0IGZvb2RGb3VydGggZnJvbSBcIi4vZm9vZDQuanBnXCI7XG5cbmNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51Q29udGVudFwiKTtcbmNvbnNvbGUubG9nKFwiZXZlcnl0aGluZyBmaW5lXCIpO1xuXG5sZXQgbWVudUFkZGVkID0gZmFsc2U7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIGlmICghbWVudUFkZGVkKSB7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudURpdlwiKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGNvbnN0IG1lbnVUcmFuc3BhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVRyYW5zcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc3BhcmVudFwiKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVUcmFuc3BhcmVudCk7XG5cbiAgICBjb25zdCBtZW51RGl2Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXZGaXJzdC5jbGFzc0xpc3QuYWRkKFwibWVudS1mbGV4XCIpO1xuICAgIG1lbnVEaXZGaXJzdC5pZCA9IFwibWVudUZpcnN0XCI7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51RGl2Rmlyc3QpO1xuICAgIGNvbnN0IGZvb2RQaWN0dXJlRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb2RQaWN0dXJlRmlyc3QuY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgICBtZW51RGl2Rmlyc3QuYXBwZW5kQ2hpbGQoZm9vZFBpY3R1cmVGaXJzdCk7XG4gICAgY29uc3QgZm9vZE5hbWVGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZE5hbWVGaXJzdC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICAgIGZvb2ROYW1lRmlyc3QudGV4dENvbnRlbnQgPSBcIlNURUFLXCI7XG4gICAgbWVudURpdkZpcnN0LmFwcGVuZENoaWxkKGZvb2ROYW1lRmlyc3QpO1xuICAgIGNvbnN0IGZvb2RJbWFnZUZpcnN0ID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEltYWdlRmlyc3Quc3JjID0gZm9vZEZpcnN0O1xuICAgIGZvb2RJbWFnZUZpcnN0LmNsYXNzTGlzdC5hZGQoXCJvcGFxdWUtaW1hZ2VcIik7XG4gICAgZm9vZEltYWdlRmlyc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGl2V2lkdGggPSBmb29kUGljdHVyZUZpcnN0LmNsaWVudFdpZHRoO1xuICAgICAgY29uc3QgZGl2SGVpZ2h0ID0gZm9vZFBpY3R1cmVGaXJzdC5jbGllbnRIZWlnaHQ7XG4gICAgICBmb29kSW1hZ2VGaXJzdC53aWR0aCA9IGRpdldpZHRoO1xuICAgICAgZm9vZEltYWdlRmlyc3QuaGVpZ2h0ID0gZGl2SGVpZ2h0O1xuICAgICAgZm9vZFBpY3R1cmVGaXJzdC5hcHBlbmRDaGlsZChmb29kSW1hZ2VGaXJzdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1lbnVEaXZTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXZTZWNvbmQuY2xhc3NMaXN0LmFkZChcIm1lbnUtZmxleFwiKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZTZWNvbmQpO1xuICAgIGNvbnN0IGZvb2RQaWN0dXJlU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kUGljdHVyZVNlY29uZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICAgIG1lbnVEaXZTZWNvbmQuYXBwZW5kQ2hpbGQoZm9vZFBpY3R1cmVTZWNvbmQpO1xuICAgIGNvbnN0IGZvb2ROYW1lU2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kTmFtZVNlY29uZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1uYW1lXCIpO1xuICAgIGZvb2ROYW1lU2Vjb25kLnRleHRDb250ZW50ID0gXCJPTUVMRVRURVwiO1xuICAgIG1lbnVEaXZTZWNvbmQuYXBwZW5kQ2hpbGQoZm9vZE5hbWVTZWNvbmQpO1xuICAgIGNvbnN0IGZvb2RJbWFnZVNlY29uZCA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWFnZVNlY29uZC5zcmMgPSBmb29kU2Vjb25kO1xuICAgIGZvb2RJbWFnZVNlY29uZC5jbGFzc0xpc3QuYWRkKFwib3BhcXVlLWltYWdlXCIpO1xuICAgIGZvb2RJbWFnZVNlY29uZC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkaXZXaWR0aCA9IGZvb2RQaWN0dXJlU2Vjb25kLmNsaWVudFdpZHRoO1xuICAgICAgY29uc3QgZGl2SGVpZ2h0ID0gZm9vZFBpY3R1cmVTZWNvbmQuY2xpZW50SGVpZ2h0O1xuICAgICAgZm9vZEltYWdlU2Vjb25kLndpZHRoID0gZGl2V2lkdGg7XG4gICAgICBmb29kSW1hZ2VTZWNvbmQuaGVpZ2h0ID0gZGl2SGVpZ2h0O1xuICAgICAgZm9vZFBpY3R1cmVTZWNvbmQuYXBwZW5kQ2hpbGQoZm9vZEltYWdlU2Vjb25kKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbWVudURpdlRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2VGhpcmQuY2xhc3NMaXN0LmFkZChcIm1lbnUtZmxleFwiKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZUaGlyZCk7XG4gICAgY29uc3QgZm9vZFBpY3R1cmVUaGlyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZFBpY3R1cmVUaGlyZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1waWN0dXJlXCIpO1xuICAgIG1lbnVEaXZUaGlyZC5hcHBlbmRDaGlsZChmb29kUGljdHVyZVRoaXJkKTtcbiAgICBjb25zdCBmb29kTmFtZVRoaXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb29kTmFtZVRoaXJkLmNsYXNzTGlzdC5hZGQoXCJmb29kLW5hbWVcIik7XG4gICAgZm9vZE5hbWVUaGlyZC50ZXh0Q29udGVudCA9IFwiQ0hJQ0tFTlwiO1xuICAgIG1lbnVEaXZUaGlyZC5hcHBlbmRDaGlsZChmb29kTmFtZVRoaXJkKTtcbiAgICBjb25zdCBmb29kSW1hZ2VUaGlyZCA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWFnZVRoaXJkLnNyYyA9IGZvb2RUaGlyZDtcbiAgICBmb29kSW1hZ2VUaGlyZC5jbGFzc0xpc3QuYWRkKFwib3BhcXVlLWltYWdlXCIpO1xuICAgIGZvb2RJbWFnZVRoaXJkLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRpdldpZHRoID0gZm9vZFBpY3R1cmVUaGlyZC5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGRpdkhlaWdodCA9IGZvb2RQaWN0dXJlVGhpcmQuY2xpZW50SGVpZ2h0O1xuICAgICAgZm9vZEltYWdlVGhpcmQud2lkdGggPSBkaXZXaWR0aDtcbiAgICAgIGZvb2RJbWFnZVRoaXJkLmhlaWdodCA9IGRpdkhlaWdodDtcbiAgICAgIGZvb2RQaWN0dXJlVGhpcmQuYXBwZW5kQ2hpbGQoZm9vZEltYWdlVGhpcmQpO1xuICAgIH07XG5cbiAgICBjb25zdCBtZW51RGl2Rm91cnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2Rm91cnRoLmNsYXNzTGlzdC5hZGQoXCJtZW51LWZsZXhcIik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51RGl2Rm91cnRoKTtcbiAgICBjb25zdCBmb29kUGljdHVyZUZvdXJ0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZFBpY3R1cmVGb3VydGguY2xhc3NMaXN0LmFkZChcImZvb2QtcGljdHVyZVwiKTtcbiAgICBtZW51RGl2Rm91cnRoLmFwcGVuZENoaWxkKGZvb2RQaWN0dXJlRm91cnRoKTtcbiAgICBjb25zdCBmb29kTmFtZUZvdXJ0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZE5hbWVGb3VydGguY2xhc3NMaXN0LmFkZChcImZvb2QtbmFtZVwiKTtcbiAgICBmb29kTmFtZUZvdXJ0aC50ZXh0Q29udGVudCA9IFwiU1RFQUsgUEFTVEFcIjtcbiAgICBtZW51RGl2Rm91cnRoLmFwcGVuZENoaWxkKGZvb2ROYW1lRm91cnRoKTtcbiAgICBjb25zdCBmb29kSW1hZ2VGb3VydGggPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kSW1hZ2VGb3VydGguc3JjID0gZm9vZEZvdXJ0aDtcbiAgICBmb29kSW1hZ2VGb3VydGguY2xhc3NMaXN0LmFkZChcIm9wYXF1ZS1pbWFnZVwiKTtcbiAgICBmb29kSW1hZ2VGb3VydGgub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGl2V2lkdGggPSBmb29kUGljdHVyZUZvdXJ0aC5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IGRpdkhlaWdodCA9IGZvb2RQaWN0dXJlRm91cnRoLmNsaWVudEhlaWdodDtcbiAgICAgIGZvb2RJbWFnZUZvdXJ0aC53aWR0aCA9IGRpdldpZHRoO1xuICAgICAgZm9vZEltYWdlRm91cnRoLmhlaWdodCA9IGRpdkhlaWdodDtcbiAgICAgIGZvb2RQaWN0dXJlRm91cnRoLmFwcGVuZENoaWxkKGZvb2RJbWFnZUZvdXJ0aCk7XG4gICAgfTtcblxuICAgIG1lbnVBZGRlZCA9IHRydWU7XG4gIH1cbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJidXR0b24tdG9wXCIpO1xufTtcblxuZXhwb3J0IHsgc2hvd01lbnUsIG1lbnVBZGRlZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9