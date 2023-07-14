setTimeout(() => {
  showNotification("This is the first message", false, 6000);
}, 500);

setTimeout(() => {
  showNotification("This is the second message", true, 2000);
}, 1500);

setTimeout(() => {
  showNotification("This is the second message", false, 1500);
}, 3000);
