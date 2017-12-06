var na = "--";

var tickerLookup = [
    { BTC: "Bitcoin" }, { DASH: "Dash" }, { ETH: "Ethereum" }, { BCH: "Bitcoin Cash" }, { BTG: "Bitcoin Gold" }, { XRP: "Ripple" }
];

function findTickerDescription(ticker) {
    let retVal = null;
    for (var i = 0; i < tickerLookup.length; i++) {
        var nextPair = tickerLookup[i];
        if (nextPair[ticker] != null) {
            retVal = nextPair[ticker];
            break;
        }
    }
    return retVal;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}