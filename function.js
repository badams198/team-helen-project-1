// recall info
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.carmd.com/v3.0/recall?year=2015&make=CHEVROLET&model=EQUINOX",
    headers: {
        "content-type": "application/json",
        "authorization": "Basic YjMxMjE0ODItNGY0My00ZWUzLWI5YzAtYmVhNTMzMjZjMTVk",
        "partner-token": "72bc2185e6574e38b231404ccdf996ee"
    },
    method: "GET"
}).then(function (response) {
    console.log(response);
});


// upcoming maint @ 30k miles
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/api.carmd.com/v3.0/upcoming?year=2015&make=CHEVROLET&model=EQUINOX&mileage=30000",
    headers: {
        "content-type": "application/json",
        "authorization": "Basic YjMxMjE0ODItNGY0My00ZWUzLWI5YzAtYmVhNTMzMjZjMTVk",
        "partner-token": "72bc2185e6574e38b231404ccdf996ee"
    },
    method: "GET"
}).then(function (response) {
    console.log(response);
});