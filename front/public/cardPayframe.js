var merchantUUID = "59a287c9ceb35";
var apiKey = "ezqx1jy0";
var src = "https://base.merchantwarrior.com/payframe/";
var submitUrl = "https://base.merchantwarrior.com/payframe/";
var style = {
  backgroundColor: "#ffbfec",
  textColor: "#f963cd",
  border: "3px solid #f963cd",
  fontFamily: "Arial",
  errorTextColor: "red",
  errorBorderColor: "red",
  fontSize: "18px",
  width: "400px",
  cardTypeDisplay: "right",
  padding: "5px",
  fieldHeight: "60px"
};
var acceptedCardTypes = "Visa, Diners Club, Mastercard";
//Instantiate the payframe
//If not set, the method parameter defaults to getPayframeToken
var mwPayframe = new payframe(
  merchantUUID,
  apiKey,
  "cardFrame",
  src,
  submitUrl,
  style,
  acceptedCardTypes
);

mwPayframe.mwCallback = function(tokenStatus, payframeToken, payframeKey) {
  if (tokenStatus == "HAS_TOKEN") {
    document.getElementById("payframeToken").value = payframeToken;
    document.getElementById("payframeKey").value = payframeKey;
    //Set other fields, then submit form to server for processCard transaction
    var formData = $("#paymentForm").serialize();
    var formUrl = "base/admin/profile/payment/payframe";
    $.ajax({
      type: "POST",
      url: formUrl,
      data: formData,
      success: function(data, status, xml) {
        //Parse the response from the processCard
        var xmlDoc = $.parseXML(data);
        var responseCode = xmlDoc.getElementsByTagName("responseCode")[0]
          .childNodes[0].nodeValue;
        var responseMessage = xmlDoc.getElementsByTagName("responseMessage")[0]
          .childNodes[0].nodeValue;
        if (responseCode == 0 && responseMessage == "Transaction approved") {
          //Reset payframe to process another transaction
          mwPayframe.reset();
        } else if (responseMessage == "Transaction declined") {
          console.log("Transaction Declined - Please enter a different card");
          mwPayframe.reset();
        }
      }
    });
  } else {
    console.log("Failed to get payframeToken");
    if (mwPayframe.responseCode == -2 || mwPayframe.responseCode == -3) {
      console.log("Validation failed - " + mwPayframe.responseMessage);
    }
  }
};

//Set any additional functions
mwPayframe.loading = function() {
  //Please put any loading animations here
};
mwPayframe.loaded = function() {
  //Please stop any loading animation here
};

//Depoy the payframe
mwPayframe.deploy();

//When the client has entered their card details, call submitPayframe, which will perform the action set by the method parameter
function submitForm() {
  mwPayframe.submitPayframe();
  return false;
}
