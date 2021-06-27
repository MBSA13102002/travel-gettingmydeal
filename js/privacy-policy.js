function Call_Clicks() {
    let CallClicks_New = firebase.database().ref("Call_Clicks_ViewInfo");
    CallClicks_New.set({
        amount: window.callclicks + 1,
    });
}
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