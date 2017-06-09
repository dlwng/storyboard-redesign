function scrollToTop(){
    var topOfDiv = $("#aboutPage").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv}, 1300);
}
function scrollToTopTwo(){
    var topOfDiv = $("#skillsSection").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv}, 1500);
}
//function scrollToTopThree(){
//    var topOfDiv = $("#teachers").offset().top;
//    console.log(topOfDiv);
//    $('body').animate({scrollTop: topOfDiv}, 1500);
//}