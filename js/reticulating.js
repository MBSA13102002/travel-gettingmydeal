if (screen.width < "900") {
    document.getElementById("Main_Image").style.width="500px"
    document.getElementById("Main_Image").style.height="150px"
}
else{
    document.getElementById("Main_Image").style.width="500px"
    document.getElementById("Main_Image").style.height="400px"
}
window.confirmation = false

function Lead_Form(){
    if (window.lead_form=='true'){
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").classList.remove("animate__zoomOutDown");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = (window.pageYOffset).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        
        
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
        window.confirmation = true;
    }
    else{
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("processed_splash").classList.remove("animate__zoomOutDown");
        document.getElementById('processed_splash').style.display = "block";
        if (screen.width < "900") {
            document.getElementById("Mobile_Number_9").style.display = "none"
            }
        document.getElementById("processed_splash").style.top = (window.pageYOffset).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }
}

function Splash() {
    setTimeout(function () {
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = (window.pageYOffset-20).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,


            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }, 3000);

}
function Nothing() {

}
function Search_Flight() {
    var Whereto = document.getElementById("where_to").value
    var Wherefrom = document.getElementById("where_from").value
    var Passengers= document.getElementById("passengers").value
    var Checkindate = document.getElementById("check_in_date").value
    var Checkoutdate = document.getElementById("check_out_date").value

    if (Whereto != '' && Wherefrom != '' && Passengers!=''&& Checkindate != '' && Checkoutdate != '') {

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
                document.getElementById("search_process").style.display = "none";
                document.getElementById("call_processed_splash").classList.remove("animate__zoomOutDown");
                document.getElementById('call_processed_splash').style.display = "block";
                if (screen.width < "900") {
                    document.getElementById("Mobile_Number_9").style.display = "none"
                }
                document.getElementById("call_processed_splash").style.top = (window.pageYOffset).toString() + 'px';
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

                    // if any scroll is attempted, set this to the previous value
                    window.onscroll = function () {
                        window.scrollTo(scrollLeft, scrollTop);
                    };
                // alert("Our Experts will get in touch with you soon!!!")
                document.getElementById("main_content").classList.add("main_imp");
                document.getElementById("block_chain").style.display = "block";
                document.getElementById("where_from").value = '';
                document.getElementById("where_to").value = '';
                document.getElementById("check_in_date").value = '';
                document.getElementById("check_out_date").value = '';
                document.getElementById("passengers").value='';
            }, 4000);
        }
        else {
            setTimeout(function () {
                document.getElementById("search_process").style.display = "none";
                document.getElementById("processed_splash").classList.remove("animate__zoomOutDown");
                document.getElementById('processed_splash').style.display = "block";
                if (screen.width < "900") {
                    document.getElementById("Mobile_Number_9").style.display = "none"
                }
               
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
                document.getElementById("where_from").value = '';
                document.getElementById("where_to").value = '';
                document.getElementById("check_in_date").value = '';
                document.getElementById("check_out_date").value = '';
                document.getElementById("passengers").value = '';
            }, 4000)

        }
    }
    else {
        alert("Fill All The Details")
    }
}
function Remove_Processed_Popup() {
    document.getElementById("processed_splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("processed_splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    if (screen.width < "900") {
        document.getElementById("enquiry").style.display = "block"
    }
    window.confirmation = false;

}
function Call_Remove_Processed_Popup() {
    document.getElementById("call_processed_splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("call_processed_splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    if (screen.width < "900") {
        document.getElementById("enquiry").style.display = "block"
    }
    window.confirmation = false;

}
function Remove_Popup() {
    document.getElementById("splash").classList.add("animate__zoomOutDown");
    setTimeout(function () {
        document.getElementById("main_content").classList.remove("main_imp");
        document.getElementById("splash").style.display = "none";
    }, 1000);
    window.onscroll = function () { };
    window.confirmation = false;
}
function Display_Popup() {
    if (window.confirmation == false) {
        document.getElementById("splash").classList.remove("animate__zoomOutDown");
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = (window.pageYOffset - 40).toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,


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
// let formMessaged = firebase.database().ref("Visibility_Section").child("Lead-form_Clickable-form");
// formMessaged.set({

//     display:"true"
// });
function Lead_Collection() {
    var Name = document.getElementById("name").value
    var Number = document.getElementById("phone_number").value
    var Email = document.getElementById("email").value
    if (Name != '' && Number != '' && Email != '') {
        document.getElementById("entries").style.display = "none";
        document.getElementById("success").style.display = "block";
        setTimeout(function () {
            document.getElementById("success").style.display = "none";
            document.getElementById("name").value = '';
            document.getElementById("phone_number").value = '';
            document.getElementById("email").value = '';
            document.getElementById("entries").style.display = "block"
        }, 1500)
    }
    else {
        alert("First fill all the details")
    }

}
function New_Lead_Collection() {
    var Name = document.getElementById("new_name").value
    var Number = document.getElementById("new_phone_number").value
    var Email = document.getElementById("new_email").value
    if (Name != '' && Number != '' && Email != '') {
        document.getElementById("new_entries").style.display = "none";
        document.getElementById("new_success").style.display = "block";
        setTimeout(function () {
            document.getElementById("new_success").style.display = "none";
            document.getElementById("new_name").value = '';
            document.getElementById("new_phone_number").value = '';
            document.getElementById("new_email").value = '';
            document.getElementById("new_entries").style.display = "block"
            Remove_Processed_Popup()
        }, 1500)
    }
    else {
        alert("First fill all the details")
    }

}
function Scroll_Win_Footer(){
    document.getElementById('Footer_View').scrollIntoView({
        behavior: 'smooth'
      });
}
function Scroll_Win_Search(){
    document.getElementById('Search').scrollIntoView({
        behavior: 'smooth'
      });
}
function Scroll_Win_Review(){
    document.getElementById('Review_View').scrollIntoView({
        behavior: 'smooth'
      });
}
function Scroll_Win_About(){
    document.getElementById('About_Us').scrollIntoView({
        behavior: 'smooth'
      });
}
function  Submit_Review(){
    var Review_Name = document.getElementById("Review_Name").value
    var Review = document.getElementById("Review").value
    if(Review!=''&& Review_Name!=''){
        document.getElementById("submit_review").style.display="block";
        document.getElementById("review_entries").style.display="none";
        setTimeout(function(){
            document.getElementById("submit_review").style.display="none";
            document.getElementById("review_entries").style.display="block";
            document.getElementById("Review_Name").value=''
            document.getElementById("Review").value=''
        },2000)
           
    }
    else{
        alert("Fill The Review & Name Properly!")
    }
}
function Call_Clicks(){
    let CallClicks_New = firebase.database().ref("Call_Clicks");
    CallClicks_New.set({
               amount:window.callclicks+1,   
});
}
// function getresolution() {
// }
// ==============================Popup Visibility function start======================================================
let formMessage = firebase.database().ref("Visibility_Section").child("Popup_Visibility");
formMessage.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == 'true') {

        document.getElementById("body_html").onload = Splash()
    }
    else {
        document.getElementById("body_html").onload = Nothing()
    }

});
// ==============================Popup Visibility function end======================================================
// ==============================Process_button_type Visibility function start======================================================
let formMessages = firebase.database().ref("Visibility_Section").child("Process_button_type");
formMessages.on('value', (snapshot) => {
    const data = snapshot.val();
    window.process_type = data['display'];
});
// ==============================Process_button_type Visibility function start======================================================
// ==============================Tagline Change function start======================================================
let formMessaging = firebase.database().ref("Content_Section").child("Tagline");
formMessaging.on('value', (snapshot) => {
    const data = snapshot.val();
    window.tagline = data['content'];
    document.getElementById("tagline").innerHTML = tagline;
    document.getElementById("tagline_new").innerHTML = tagline;
});
// ==============================Tagline Change function end======================================================
// ==============================Sticky call Button Visibility function start======================================================
let SticyCallButton = firebase.database().ref("Visibility_Section").child("Sticky-Call-Button");
SticyCallButton.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == "true") {
        if (screen.width < "900") {
            document.getElementById("Mobile_Number_9").style.display = "block"
        }
    }
    else {
        document.getElementById("Mobile_Number_9").style.display = "none";
    }
});
// ==============================Sticky call Button Visibility function end======================================================
// ==============================Lead Form (Clickable) Visibility function start======================================================
let LeadForm_Clickable = firebase.database().ref("Visibility_Section").child("Lead-form_Clickable-form");
LeadForm_Clickable.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data['display'] == "true") {
        window.lead_form = "true";
    }
    else {
        window.lead_form = "false";
    }
});
// ==============================Lead Form (Clickable) Visibility function end======================================================

// ==============================Call Clicks function start======================================================
let CallClicks = firebase.database().ref("Call_Clicks").child("amount");
CallClicks.on('value', (snapshot) => {
    const data = snapshot.val();
    window.callclicks = data;
});
// ==============================Call Cliacks function end======================================================
// ==============================Mobile Number function start======================================================
let MobileNumber = firebase.database().ref("Content_Section").child("Tagline");
MobileNumber.on('value', (snapshot) => {
    const data = snapshot.val();
    var num = data['number']
    document.getElementById("Mobile_Number").innerHTML=num;
   document.getElementById("Mobile_Number_1").href="tel:"+num;
   document.getElementById("Mobile_Number_2").href="tel:"+num;
   document.getElementById("Mobile_Number_3").href="tel:"+num;
   document.getElementById("Mobile_Number_4").href="tel:"+num;
   document.getElementById("Mobile_Number_5").href="tel:"+num;
   document.getElementById("Mobile_Number_6").href="tel:"+num;
   document.getElementById("Mobile_Number_6").href="tel:"+num;
   document.getElementById("Mobile_Number_7").href="tel:"+num;
   document.getElementById("Mobile_Number_13").href="tel:"+num;
   document.getElementById("Mobile_Number_14").href="tel:"+num;
   document.getElementById("Mobile_Number_7").innerHTML=num;
   document.getElementById("Mobile_Number_10").innerHTML=num;
   document.getElementById("Mobile_Number_11").innerHTML=num;
   document.getElementById("Mobile_Number_8").innerHTML="Call us "+num
   document.getElementById("Mobile_Number_12").innerHTML="Call us "+num
   document.getElementById("Mobile_Number_9").href="tel:"+num;
   
});
// ==============================Mobile Number function end======================================================