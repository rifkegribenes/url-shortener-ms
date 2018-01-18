// client-side js

document.addEventListener("DOMContentLoaded", () => {
  const Root_Url = window.location.href;
	const naturalLink = `<div class="card__url">${Root_Url}December 15, 2015</div><a target="_blank" href="${Root_Url}December 15, 2015" class="card__action">Try Natural Date</a>`;
	const unixLink = `<div class="card__url">${Root_Url}1450137600</div><a target="_blank" href="${Root_Url}1450137600" class="card__action">Try Unix Timestamp</a>`;
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const now = new Date();
  const dd = now.getDate();
  const month = months[now.getMonth()];
  const yyyy = now.getFullYear();
  const formattedToday = `${month} ${dd}, ${yyyy}`;
  const today = `<div class="card__url">${Root_Url}${formattedToday}</div><a target="_blank" href="${Root_Url}${formattedToday}}" class="card__action">Try Today's Date</a>`;
	document.getElementById("natural-link").innerHTML = naturalLink;
	document.getElementById("unix-link").innerHTML = unixLink;
  document.getElementById("today").innerHTML = today;
});

