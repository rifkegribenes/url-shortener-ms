// client-side js

document.addEventListener("DOMContentLoaded", () => {
  // get refs to elements
  const urlInput = document.getElementById('urlInput');
  const shortenButton = document.getElementById('shortenButton');
  const shorten_actions = document.getElementById('shorten_actions');
  let shortenerLink;

  const copy = () => {
    document.execCommand('copy');
  };

  const clearInput = () => {
    urlInput.value = '';
    urlInput.classList.remove('selected');
    shorten_actions.classList.remove('visible');
  }

  const getShortenedLink = () => {
    // get value of original link to call API
    const Root_Url = window.location.origin;
    const urlToShorten = document.getElementById('urlInput').value;
    apiLink = `${Root_Url}/new/${urlToShorten}`;

    // call API to get shortened link
    fetch(apiLink)
      .then(res => res.json())
      .then((data) => {
        const shortenedLink = `${Root_Url}${data.shorterUrl}`;
        urlInput.value = shortenedLink;
        urlInput.focus();
        urlInput.setSelectionRange(0, urlInput.value.length);
        urlInput.classList.add('selected');
        shorten_actions.classList.add('visible');
        const close = document.getElementById('clear_active_shorten');
        const copy = document.getElementById('copy_shortlink');
        close.addEventListener("click", clearInput);
        copy.addEventListener("click", copy);
        }
      )
      .catch((err) => {
          console.log(err);
      });

  }

  shortenButton.addEventListener("click", getShortenedLink);
});
