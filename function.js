// <!-- $.ajax({
//     url: "http://localhost/PlatformPortal/Buyers/Account/SignIn",
//     data: { signature: authHeader },
//     type: "GET",
//     beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
//     success: function() { alert('Success!' + authHeader); }
// }); -->

// <!-- old -->
// <!-- ('X-Test-Header', 'test-value'); -->

// <!-- new -->
// <!-- ("application/json", "YjMxMjE0ODItNGY0My00ZWUzLWI5YzAtYmVhNTMzMjZjMTVk", "72bc2185e6574e38b231404ccdf996ee") -->


// var requestHeader = {
//   "content-type" : "application/json",
//   "authorization" :"Basic YjMxMjE0ODItNGY0My00ZWUzLWI5YzAtYmVhNTMzMjZjMTVk",
//   "partner-token" :"72bc2185e6574e38b231404ccdf996ee"
// };

// Performing GET requests to the OMDB API and logging the responses to the console
// $.ajax({
//     url : "https://api.carmd.com/v3.0/maint?year=2010&make=honda&model=civic&mileage=20000",
//     data : { signature : requestHeader },
//     method : "GET",
//     crossDomain : true,
//     beforeSend : function(setHeader) {
//         setHeader.setRequestHeader('X-Test-Header', 'test-value');
//         },
// }).then(function(response) {
//     console.log(response);
// });

$.ajax({
    headers : {"content-type" : "application/json"},
    headers : {"authorization" :"Basic YjMxMjE0ODItNGY0My00ZWUzLWI5YzAtYmVhNTMzMjZjMTVk"},
    headers : {"partner-token" :"72bc2185e6574e38b231404ccdf996ee"}
});

$.ajax({
    url : "https://api.carmd.com/v3.0/repair?vin=1GNALDEK9FZ108495&mileage=51000&dtc=p0420",
    method : "GET",
    crossDomain : true,
}).then(function(response) {
    console.log(response);
});