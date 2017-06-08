function scrollToTop(){
    var topOfDiv = $("#aboutPage").offset().top;
    console.log(topOfDiv);
    $('body').animate({scrollTop: topOfDiv}, 1000);
}