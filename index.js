// Make the dropdown menu of OUR BRANCHES tab on the navbar to slide up/down on mouse hover (mouseEnter) and leave

$("li.our-branches").hover(function() {
  $("div.dropdown-menu").slideDown();
}, function() {
  $("div.dropdown-menu").slideUp();
});


// Hide the testifier and Logo image when on mobile phone with screen size less than 600px

function hideTestifierAndLogoImages(screenSize) {
  if (screenSize.matches) {
    for (var i = 0; i < $(".testifier-image").length; i++) {
      $(".testifier-image")[i].classList.add('d-none');
    }

    for (var i = 0; i < $(".logo").length; i++) {
      $(".logo")[i].classList.add('d-none');
    }
  }
}

var phoneScreen = window.matchMedia("(max-width: 600px)");
hideTestifierAndLogoImages(phoneScreen);
phoneScreen.addListener(hideTestifierAndLogoImages);

// Change the text of the testifiers in home page when the view port is greater than 600px but less than 900px ie tablet device

function changeTestifierText(screenSize) {
  document.body.style.backgroundColor = "#8fdab0";
  document.querySelector(".one").innerHTML = "I used to have severe pains in my back which had defied all medical treatment. During one of our Sunday services, the servant of God Bishop Sylvanus Ofili, gave a word of knowledge on what I was passing through and declared divine healing upon my life. I believed God and He granted me healing. Hallelujah!";
  document.querySelector(".two").innerHTML = "I invited my younger sister who was suffering from fibroid to one of our Liberation Night programme. Unknowingly to me, she had already begun contemplating suicide as a result of depression. During the ministeration, Rev. (Mrs) Ofili called her out by word of knowledge and prayed for her. She also had a successful fibroid operation.";
  document.querySelector(".three").innerHTML = "One faithful day I boarded a taxi occupied by robbers. After they dispossessed me of my money they handed me over to another group of men who dragged me into a nearby bush, stripped me naked and wanted to cut off my breasts. But God, through their leader, miraculously stopped them and eventually they let me go. Praise God!";
  document.querySelector(".four").innerHTML = "One morning, while cooking, I had to hurriedly go out and I to forgot put to switch off my gas. I did not return home till late at night to discover that the food was bunrt black with the gas still on, but miraculously there was no fire outbreak. From the state of my kitchen I know this could only be by the finger of God. Praise the Lord!";
  document.querySelector(".five").innerHTML = "My daughter suffered kidney failure and was taken to specialist hospital Gwalagwalada where she started undergoing dialysis. Aside the financial burden, a lot of blood was needed and even the church members were not left out both in donating blood, visitation, and prayers. Today my daughter is totally healed. Praise Jesus!";
}

// Change the text of the testifiers in home page when the view port is less than 600px ie mobile device

function changeTestifierText2(screenSize) {
  document.body.style.backgroundColor = "#8fdab0";
  document.querySelector(".one").innerHTML = "God healed me of severe back pain through His servant, Bishop Sylvanus Ofili. Hallelujah!";
  document.querySelector(".two").innerHTML = "My younger sister was delivered from suicide spirit through the ministeration of Rev. (Mrs) Ofili.";
  document.querySelector(".three").innerHTML = "God delivered me from one-chance robbers and ritualists. Praise the name of the Lord!";
  document.querySelector(".four").innerHTML = "I want to return all glory to God for averting a domestic fire incidence at my residence. Praise the Lord!";
  document.querySelector(".five").innerHTML = "My daughter was healed of kidney failure through the financial and prayer support of the church.";
}

// On page load call this homePageCheck function that checks to see if you are on the home page or not and acts accordingly
$(document).ready(homePageCheck);

function homePageCheck() {
  var screenSize1;
  // If its on home page carry out the enclosed tasks else exit the homePageCheck function
  if ($(".one").length > 0) {
    // Assign variables to capture screen size for mobile phone (max width of 600px) AND make it listen for device screen
    screenSize1 = window.matchMedia("(max-width: 600px)");
    screenSize1.addListener(changeTestifierText2);
    if (screenSize1.matches) {
      changeTestifierText2(screenSize1);
    } else {
      // Assign variables to capture screen size for tablet phone (max width of 900px) AND make it listen for device screen
      screenSize1 = window.matchMedia("(max-width: 900px)");
      screenSize1.addListener(changeTestifierText);
      if (screenSize1.matches) {
        changeTestifierText(screenSize1);
      } else {
        // ; If screen size is neither mobile nor tablet phone then do nothing
        ;
      }
    }
  }
  // Else if its not on the home page just check check screenSize and act accordingly
  else {
    screenSize1 = window.matchMedia("(max-width: 900px)");
    if (screenSize1.matches) {
      document.body.style.backgroundColor = "#8fdab0";
    } else {
      // ; If screen size is neither mobile nor tablet phone then do nothing
      ;
    }
  }
}
