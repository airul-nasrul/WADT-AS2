if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/WADT-AS2/ayam", {scope: "./"})
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}