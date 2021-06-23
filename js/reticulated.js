
function sai() {
    document.getElementById("block_chain").style.display = "none";
    document.getElementById("search_process").style.display = "block";
    if (process_type == "true") {
        setTimeout(function () {
            var place_from = document.getElementById("where_from").value
            document.getElementById("from").innerHTML = place_from.toUpperCase();
            var place_to = document.getElementById("where_to").value
            document.getElementById("to").innerHTML = place_to.toUpperCase();
            var check_in = document.getElementById("check_in_date").value
            document.getElementById("check_in").innerHTML = check_in;
            var check_out = document.getElementById("check_out_date").value
            document.getElementById("check_out").innerHTML = check_out;
            document.getElementById("processed_data").style.display = "block";
            document.getElementById("search_process").style.display = "none";
        }, 4000);
    }
    else {
        setTimeout(function () {
            document.getElementById("search_process").style.display = "none";
            document.getElementById("processed_splash").classList.remove("animate__zoomOutDown");
            document.getElementById('processed_splash').style.display="block";
            document.getElementById("processed_splash").style.top = (window.pageYOffset).toString() + 'px';
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    
                // if any scroll is attempted, set this to the previous value
                window.onscroll = function () {
                    window.scrollTo(scrollLeft, scrollTop);
                };
            // alert("Our Experts will get in touch with you soon!!!")
            document.getElementById("main_content").classList.add("main_imp");
            document.getElementById("block_chain").style.display = "block";
            document.getElementById("where_from").value='';
            document.getElementById("where_to").value='';
            document.getElementById("check_in_date").value='';
            document.getElementById("check_out_date").value='';
        }, 4000)

    }
}
window.confirmation = false
function Remove_Processed_Popup() {
    document.getElementById("processed_splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("processed_splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    
}
function Remove_Popup() {
    document.getElementById("splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    window.confirmation = false;
    // var Name = document.getElementById("popup_name").value
    // var Email = document.getElementById('popup_email').value
    // var Number = document.getElementById('popup_phone_number').value
    // var Choice = document.getElementById('popup_type_flats').value
    // var code_display = document.getElementById("popup_confirm_otp").style.display
    // if (code_display == 'none') {
    //     if (Name != '' || Email != '' || Number != '' || Choice != "CHOOSE YOUR REQUIREMENT") {
    //         var ref = confirm("Do you really want to exit the enquiry?")
    //         if (ref == true) {
    //             document.getElementById("splash").classList.add("animate__zoomOutDown");
    //             setTimeout(function () {
    //                 document.getElementById("main_content").classList.remove("main_imp");
    //                 document.getElementById("splash").style.display = "none";
    //             }, 1000);
    //             window.onscroll = function () { };
    //             window.confirmation = false;

    //         } else {

    //         }
    //     }
    //     else {
    //         document.getElementById("splash").classList.add("animate__zoomOutDown");
    //         setTimeout(function () {
    //             document.getElementById("main_content").classList.remove("main_imp");
    //             document.getElementById("splash").style.display = "none";
    //         }, 1000);
    //         window.onscroll = function () { };
    //     } window.confirmation = false;
    // }
    // else {
    //     alert("Verfication under process..Enter the OTP & Submit the form.")
    // }
}
function Display_Popup() {
    if (window.confirmation == false) {
        document.getElementById("splash").classList.remove("animate__zoomOutDown");
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = (window.pageYOffset - 40).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }
    else {
        document.getElementById("splash").classList.add("animate__zoomOutDown");
        setTimeout(function () {
            document.getElementById("main_content").classList.remove("main_imp");
            document.getElementById("splash").style.display = "none";
        }, 1000);
        window.onscroll = function () { };
        window.confirmation = false;
        // var Name = document.getElementById("popup_name").value
        // var Email = document.getElementById('popup_email').value
        // var Number = document.getElementById('popup_phone_number').value
        // var Choice = document.getElementById('popup_type_flats').value
        // var code_display = document.getElementById("popup_confirm_otp").style.display
        // if (code_display == 'none') {
        //     if (Name != '' || Email != '' || Number != '' || Choice != "CHOOSE YOUR REQUIREMENT") {
        //         var ref = confirm("Do you really want to exit the enquiry?")
        //         if (ref == true) {
        //             document.getElementById("splash").classList.add("animate__zoomOutDown");
        //             setTimeout(function () {
        //                 document.getElementById("main_content").classList.remove("main_imp");
        //                 document.getElementById("splash").style.display = "none";
        //             }, 1000);
        //             window.onscroll = function () { };
        //             document.getElementById("popup_name").value=""
        //             document.getElementById('popup_email').value=""
        //            document.getElementById('popup_phone_number').value=""
        //            document.getElementById('popup_type_flats').value=""
        //             window.confirmation = false;

        //         } else {

        //         }
        //     }
        //     else {
        //         document.getElementById("splash").classList.add("animate__zoomOutDown");
        //         setTimeout(function () {
        //             document.getElementById("main_content").classList.remove("main_imp");
        //             document.getElementById("splash").style.display = "none";
        //         }, 1000);
        //         window.onscroll = function () { };
        //     } window.confirmation = false;
        // }
        // else {
        //     alert("Verfication under process..Enter the OTP & Submit the form.")
        //     var Name = document.getElementById("popup_name").value
        //     var Email = document.getElementById('popup_email').value
        //     var Number = document.getElementById('popup_phone_number').value
        //     var Choice = document.getElementById('popup_type_flats').value
        //     var code_display = document.getElementById("popup_confirm_otp").style.display
        // }

    }
}
// let formMessage = firebase.database().ref("Visibility_Section").child("Popup_Visibility");
// formMessage.set({
//     display:"true"
// });
let formMessage = firebase.database().ref("Visibility_Section").child("Popup_Visibility");
formMessage.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == 'true') {
        document.getElementById("enquiry").style.display = "block"
    }
    else {
        document.getElementById("enquiry").style.display = "none"
    }
});
let formMessages = firebase.database().ref("Visibility_Section").child("Process_button_type");
formMessages.on('value', (snapshot) => {
    const data = snapshot.val();
    window.process_type = data['display'];
});
