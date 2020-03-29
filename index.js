// Make the dropdown menu of OUR BRANCHES tab on the navbar to slide up/down on mouse hover (mouseEnter) and leave

$("li.our-branches").hover(function() { $("div.dropdown-menu").slideDown();}, function() { $("div.dropdown-menu").slideUp(); });

// Change the text of the testifiers in home page when the view port is less than 900px ie mobile device

function changeTestifierText(screenSize){
  if (screenSize.matches){
    document.body.style.backgroundColor = "#8fdab0" ;
    document.querySelector("h4.one").innerHTML = "I used to have severe pains in my back which had defied all medical treatment. During one of our Sunday services, the servant of God Bishop Sylvanus Ofili, gave a word of knowledge on what I was passing through and declared divine healing upon my life. I believed God and He granted me healing.Hallelujah!" ;
    document.querySelector("h4.two").innerHTML = "I had invited my younger sister who had been suffering from fibroid to one of our Liberation Night programme. Unknowingly to me, she had already begun contemplating suicide as a result of depression. During the ministeration, Rev. (Mrs) Ofili called her out by word of knowledge and prayed for her. She also had a successful fibroid operation.";
    document.querySelector("h4.three").innerHTML = "One faithful day I had boarded a taxi occupied by robbers. After they dispossessed me of my money they handed me over to another group of men who dragged me into a nearby bush, stripped me naked and wanted to cut off my breasts. But God, through their leader, miraculously stopped them and eventually they let me go. Praise the Lord!";
    document.querySelector("h4.four").innerHTML = "One morning, while cooking, I had to hurriedly go out and I to forgot put to switch off my gas. I did not return home till late at night to discover that the food was bunrt black with the gas still on, but miraculously there was no fire outbreak. From the state of my kitchen I know this could only be by the finger of God. Praise the Lord!";
    document.querySelector("h4.five").innerHTML = "My daughter suffered kidney failure and was eventually taken to specialist hospital Gwalagwalada where she started undergoing dialysis. Aside the financial burden, a lot of blood was needed and even the church members were not left out both in donating blood, visitation, and prayers. Today my daughter is totally healed. Praise be the Lord!";
    document.querySelector("h4.six").innerHTML = "";
  }
}

var screenSize = window.matchMedia("(max-width: 900px)") ;
changeTestifierText(screenSize) ;
screenSize.addListener(changeTestifierText) ;
