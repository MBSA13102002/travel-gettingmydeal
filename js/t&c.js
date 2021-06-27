let SticyCallButton = firebase.database().ref("Visibility_Section").child("Sticky-Call-Button");
SticyCallButton.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == "true") {
        if (screen.width < "900") {
            document.getElementById("enquiry").style.display = "block"
        }
    }
    else {
        document.getElementById("enquiry").style.display = "none";
    }
});