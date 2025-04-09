// document.querySelector(".btn").addEventListener("click", async () => {

//     Toastify({
//         text: "Hello Ulubekpuyicha devochka",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)"
//         },
//         onClick: function () {}
//     }).showToast();
function showNotification(type) {
    const messages = {
      success: " Success! Everything is good.",
      fail: " Error! Something went wrong.",
      warning: " Warning! Be careful."
    };

    const colors = {

    };

    Toastify({
      text: messages[type] || "Notification",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: colors[type] || "#333",
      close: true
    }).showToast();
  }