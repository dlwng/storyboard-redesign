function scrollToTop(){
    var topOfDiv = $("#aboutPage").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv-90}, 1300);
}
function scrollToTopTwo(){
    var topOfDiv = $("#skillsSection").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv-60}, 1500);
}
function scrollToTopThree(){
    var topOfDiv = $("#studWork").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv-50}, 1500);
}