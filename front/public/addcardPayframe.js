var method = "addCard";
var merchantUUID = "59a287c9ceb35";
var apiKey = "ezqx1jy0";

var style = {
  fontFamily: 'Open Sans, sans-serif',
  fontSrc: ['https://fonts.googleapis.com/css?family=Open+Sans'],
  height: '200px',
  formLayout: 1
};
var submitURL = 'https://base.merchantwarrior.com/payframe/';

var button = document.getElementById("submitButton");

var mwPayframe = new payframe(merchantUUID, apiKey, 'cardFrame', 'https://securetest.merchantwarrior.com/payframe/', submitURL, style, method);

function submitFrame() {
  console.log('submitframe')
    // Disable the button to stop double submissions
    button.setAttribute('disabled', 'disabled');
    button.innerHTML = "Please wait.."
    button.style.opacity = '0.5';
    button.filter = 'alpha(opacity=50)'; // IE8 fallback

    mwPayframe.submitPayframe(this)

}
  
mwPayframe.loading = function() {
  console.log('loading')
  var mwIframe = document.getElementById("mwIframe");
  var cardDiv = document.getElementById("cardFrame");

  // Hide the payframe during load operations
  mwIframe.style.visibility = 'hidden';

  // Assign the parent div the same dimensions as the payframe
  var height = mwIframe.height;
  var width = mwIframe.width;

  cardDiv.style.height = height;
  cardDiv.style.width = width;

  // Place a loading animation in the center of the payframe
  cardDiv.style.background = "url('https://securetest.merchantwarrior.com/inc/image/loading_gif.gif') center center no-repeat";
  
  mwIframe.style.height = '300px';
  button.style.visibility = "hidden";

};

mwPayframe.loaded = function() {
  console.log('loaded')
  var mwIframe = document.getElementById("mwIframe");
  var cardDiv = document.getElementById("cardFrame");
  // Remove the loading animation after the payframe has completed its operations and display the payframe
  cardDiv.style.background = 'none';
  if (mwIframe) {
    mwIframe.style.visibility = 'visible';
  }
  button.style.visibility = "visible";
  mwIframe.style.height = '300px';
}

mwPayframe.mwCallback = function() {
    if (mwPayframe.cardID) {
        var responseCode = mwPayframe.responseCode;
        var responseMessage = mwPayframe.responseMessage;
        // document.getElementById("cardID").innerText = mwPayframe.cardID;
        
        //     
        
        //Store the cardID, or use it for a processCard transaction
        console.log('mwpayframe', mwPayframe);
        var formData = {'cardId': mwPayframe.cardID, 'cardAlias': mwPayframe.cardBin};
        var formUrl = "https://ezyattend.com.au/api/admin/profile/payment/card/payframe";

        $.ajax({
          type: "POST",
          url: formUrl,
          data: formData,
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer ' + window.localStorage.getItem('access_token').replace('"', ''));
          },
          success: function(data, status, xml) {
            //Parse the response from the processCard
            button.innerHTML = "DONE";
            var mwIframe = document.getElementById("mwIframe");
            mwIframe.style.visibility = 'hidden';
          }
        });
    } else {
        console.log("Failed to get cardID");
    } 
}

mwPayframe.deploy();

// Define variables

button.onclick = function() {
  submitFrame();
}