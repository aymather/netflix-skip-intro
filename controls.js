console.log('Controls');
// document.querySelectorAll('.skip-credits')[0].children[0].click();

document.addEventListener("DOMNodeInserted", e => {

    var skipper = e.relatedNode.querySelector('[aria-label="Skip Intro"]');
    if(skipper) {
        console.log('Found it');
        console.log(skipper);
        setTimeout(() => {
            console.log('Clicking');
            skipper.click();
        }, 10);
    }    
}, false);