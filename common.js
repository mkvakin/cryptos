setTimeout(function () {
    document.location.reload(true);
}, 1000 * 60 * 5);


var na = "--";



function buildChartUrl(key) {
    key = key.toUpperCase() + ".X";
    if (key == "BTG.X") key += "2";
    return chartUrl = `https://tickeron.com/app/social#!/tickers/${key}/overview/day`;
}

function buildClickableTicker(key, value) {
    return "<a href='" + buildChartUrl(key) + "' target='_blank'>" + value + "</a>";
}

var tickerLookup = [
    { BTC: "Bitcoin" }, { DASH: "Dash" }, { ETH: "Ethereum" }, { BCH: "Bitcoin Cash" }, { LTC: "Litecoin" }, { XRP: "Ripple" }
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