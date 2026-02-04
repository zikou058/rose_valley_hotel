const init = function() {
    // booknew btn :  
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("booknew").addEventListener("click", () => {
            booknew();
        });
    });
    // viewrooms btn : 
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("viewrooms").addEventListener("click", () => {
            viewrooms();
        });
    });

    // booknewsetbar btn :
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("booknewsetbar").addEventListener("click", () => {
            booknewsetbar();
        });
    });
    // checkavailability btn : 
    const checkavailability = document.getElementById("checkavailability");
        checkavailability.addEventListener("click", () => {
        checkavailability()
    });
//page2 :
    // booknewrooms btn : 
    const booknewrooms = document.querySelectorAll('.booknewrooms');
    checkavailability.addEventListener("click", () => {
        booknewrooms()
    });
    // booknewsetbar1 btn 
    const booknewsetbar1 = document.getElementById("checkavailability");
    booknewsetbar1.addEventListener("click", () => {
    booknewsetbar1()
    });
}
init();
// fnt booknew btn : 
const booknew  = () => {
    window.location.href = "contact_us.html";
} 
// fnt viewrooms btn :
const viewrooms  = () => {
    window.location.href = "contact_us.html";
}
// fnt booknewsetbar : 
const booknewsetbar  = () => {
    window.location.href = "contact_us.html";
}
// fnt checkavailability : 
const checkavailability = () => {
    window.location.href = "roms_prices1.html#checkavailability1";
}
//page2
// fnt booknewrooms btn :
const booknewrooms = () => {
    window.location.href = "contact_us.html";
}
// fnt booknewsetbar btn :
const booknewsetbar1= () => {
    window.location.href = "contact_us.html";
}
