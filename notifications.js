document.head.innerHTML += `
  <style>
  @keyframes slideIn {
    0% {
      max-height: 0;
      transform: translateX(105%);
      padding: 0;
    }
    30% {
      max-height: 300px;
      transform: translateX(105%);
      padding: 8px;
    }
    100% {
      max-height: 300px;
      transform: translateX(-10%);
      padding: 8px;
    }
  }
  @keyframes slideOut {
    0% {
      max-height: 300px;
      transform: translateX(-10%);
      padding: 8px;
    }
    70% {
      max-height: 300px;
      transform: translateX(105%);
      padding: 8px;
    }
    100% {
      max-height: 0;
      transform: translateX(105%);
      padding: 0;
    }
    
  }
  div.notification-wrapper {
    position: fixed;
    bottom: 40px;
    right: 0;
  }
  div.notification {
    box-sizing: content-box;
    background-color: rgba(100, 100, 100, 0.5);
    max-height: 0px;
    transform: translateX(100%);
    min-width: 200px;
    border: 2px solid black;
    margin: 2px;
  }
  div.notification.error {
    background-color: rgba(100, 0, 0, 0.5);
    border-color: rgb(100, 0, 0);
  }
  div.notification.shown {
    animation: 1s slideIn;
    max-height: 300px;
    transform: translateX(-10%);
    padding: 8px;
  }
  div.notification.hidden {
    padding: 0;
    max-height: 0;
    animation: 1s slideOut;
  }
  </style>
`;
const notificationWrapper = document.createElement("div");
notificationWrapper.classList.add("notification-wrapper");
document.body.appendChild(notificationWrapper);

let counter = 0;

function showNotification(
  notificationMessage,
  isError = false,
  notificationTime = 1500
) {
  const notificationDiv = document.createElement("div");
  notificationDiv.classList.add("notification");
  notificationDiv.classList.add("shown");
  if (isError) notificationDiv.classList.add("error");

  notificationDiv.id = `${counter++}`;
  notificationDiv.innerHTML = `<p>${notificationMessage}</p>`;
  notificationWrapper.appendChild(notificationDiv);

  setTimeout(() => {
    notificationDiv.onanimationend = () => {
      console.log(notificationDiv);
      notificationDiv.remove();
    };
    notificationDiv.classList.remove("shown");
    notificationDiv.classList.add("hidden");
  }, notificationTime);
}
