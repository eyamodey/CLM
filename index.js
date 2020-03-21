// Make the dropdown menu of OUR BRANCHES tab on the navbar to slide up/down on mouse hover (mouseEnter) and leave

$("li.our-branches").hover(function() { $("div.dropdown-menu").slideDown();}, function() { $("div.dropdown-menu").slideUp(); });
