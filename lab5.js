function submitSurvey() {
    if(document.getElementById("fullName").value == "") {
        alert("Please enter your name.");
        return;
    }
    if(document.getElementById("a1").value == "" ||
      document.getElementById("a2").value == "" ||
      document.getElementById("a3").value == "" ||
      document.getElementById("a4").value == "" ||
      document.getElementById("a5").value == "" ||
      document.getElementById("a7").value == "") {
        alert("Please answer all questions before submitting.");
    } else {
        sessionStorage.setItem("fullName", document.getElementById("fullName").value);
        sessionStorage.setItem("a1", document.getElementById("a1").value);
        sessionStorage.setItem("a2", document.getElementById("a2").value);
        sessionStorage.setItem("a3", document.getElementById("a3").value);
        sessionStorage.setItem("a4", document.getElementById("a4").value);
        sessionStorage.setItem("a5", document.getElementById("a5").value);
        sessionStorage.setItem("a6", arrayToString(document.getElementsByName("feature")));
        sessionStorage.setItem("a7", document.getElementById("a7").value);

        open("lab5_summary.html");
    }
}
function arrayToString(x) {
    var features = "";
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].checked == true) {
            features += x[i].value + ", ";
        }
    }
    features = features.slice(0,features.lastIndexOf(",")); 
    return features;
}

function showResults() {
    document.getElementById("h1").innerHTML = "Your Answers";
    document.getElementById("q1").innerHTML = "How you found us:";
    document.getElementById("a1").innerHTML = sessionStorage.getItem("a1");
    
    document.getElementById("q2").innerHTML = "Did associate answer your questions thoroughly:";
    document.getElementById("a2").innerHTML = sessionStorage.getItem("a2");
    
    document.getElementById("q3").innerHTML = "Did associate provide helpful driving solutions:";
    document.getElementById("a3").innerHTML = sessionStorage.getItem("a3");
    
    document.getElementById("q4").innerHTML = "Did your associate offer helpful pricing options:";
    document.getElementById("a4").innerHTML = sessionStorage.getItem("a4");
    
    document.getElementById("q5").innerHTML = "Knowledge rating of your associate:";
    document.getElementById("a5").innerHTML = sessionStorage.getItem("a5");
    
    document.getElementById("q6").innerHTML = "Features important to you:";
    document.getElementById("a6").innerHTML = sessionStorage.getItem("a6");
    
    document.getElementById("q7").innerHTML = "Additional feedback about your visit:";
    if(sessionStorage.getItem("a7") == "Yes") {
        document.getElementById("a7").innerHTML = sessionStorage.getItem("a7") + ".\nThank you for the feedback. " + 
            "Your suggestions will be reviewed by our store manager.";
    } else {
        document.getElementById("a7").innerHTML = "Nothing to add."
    }
    
    document.getElementById("h2").innerHTML = "Overall Rating:";
    document.getElementById("rating").innerHTML = getRating();
    
    function getRating() {
        var rate = 0;
        if(sessionStorage.getItem("a2") == "Yes") {
            rate += 1
        }
        if(sessionStorage.getItem("a3") == "Yes") {
            rate += 1
        }
        if(sessionStorage.getItem("a4") == "Yes") {
            rate += 1
        }
        if(sessionStorage.getItem("a5") != "Unsatisfactory") {
            rate += 1
        }
        rate = (rate/2)*5;
        
        return rate;
    }
    
}
