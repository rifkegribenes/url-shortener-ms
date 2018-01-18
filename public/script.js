// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const setLink = () => {
    const Root_Url = window.location.href;
    const urlToShorten = document.getElementById('urlInput').value;
    const shortenerLink = `${Root_Url}${urlToShorten}`;
    document.getElementById("shortenerLink").href = shortenerLink;
  };
  document.getElementById('urlInput').addEventListener("keyup", setLink);
});
