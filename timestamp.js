const unix2Natural = (unix) => { 
  const date = new Date(unix * 1000);
	const day = date.getDate();
	const	months	=	['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const	year =	date.getFullYear();
  return `${months[date.getMonth()]} ${day}, ${year}`;
}

const natural2Unix = (natural) => new Date(natural).getTime() / 1000;

module.exports = {
  parse: (req, res) => {
    const date = req.params.query;
    const dateResult = {
        "unix": null,
        "natural": null
    }
    if (+date >= 0) {
        dateResult.unix = +date;
        dateResult.natural = unix2Natural(+date);
    }
    if (isNaN(+date)) {
        dateResult.unix = natural2Unix(date);
        dateResult.natural = date;
    }
    res.send(dateResult);
  }
}