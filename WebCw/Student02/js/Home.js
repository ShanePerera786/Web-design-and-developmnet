function validation(){
    //get the user inputs
    var verybad = document.getElementById('veryBad').checked;
    var bad = document.getElementById('bad').checked;
    var fair = document.getElementById('fair').checked;
    var good = document.getElementById('good').checked;
    var verygood = document.getElementById("veryGood").checked;
    var message = document.getElementById('msg').value;
    //validate input name
    if (document.getElementById('name').value == "") {
        alert('Empty input!!! Please enter you first name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
    //validate input email
    if (document.getElementById('email').value == "") {
        alert('Empty input!!! Please enter your email ');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
    //validate message length
    if (message.length < 10) {
        alert('Message is not valid.Please enter a valid massage');
        document.getElementById('msg').style.borderColor = "red";
        return false;
    }
    //validate user rate section
    if ((verybad == false) && (bad == false) && (fair == false) && (good == false) && (verygood == false)) {
        alert("Incomplete. Please rate our website");
        return false;
    }
    //check the user rating as input
    if (true) {
        var checkRated = document.getElementsByName("rate");
        var len = checkRated.length;
        for (var i = 0; i < len; i++) {
            if (checkRated[i].checked) {//print the feedback form
                    alert("Dear " + document.getElementById("name").value + ", Thank you very much for your feedback. You have rated our site as " + checkRated[i].value + " and your comment was " + document.getElementById("msg").value + ".")
            }
        }
    }
}
window.onscroll = function() {scrollFunction()};
//to display the scroll up button when the user scroll down page
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
function increaseFontSize(objectID) {   /*create a function to increase the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize+.1)+"em";
}
function decreaseFontSize(objectID) {    /*create a function to decrease the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize-.1)+"em";
}
