// resizing

window.addEventListener('resize' , function(e) {
    if (this.screen.width < 1440 && this.screen.width > 700) {
        let block2 = this.document.querySelector('.fday-block2');
        let width = this.screen.width;
        let trueWidth = width / 1440;
        let height = trueWidth * 4605;
        block2.style.cssText = `width: 100%; height: ${height}px; transform: scale(${trueWidth}); transform-origin: top left;`
    } else {
        let block2 = this.document.querySelector('.fday-block2');
        block2.style.cssText = ` `
    }
})

if (this.screen.width < 1440 && this.screen.width > 700) {
    let block2 = this.document.querySelector('.fday-block2');
    let width = this.screen.width;
    let trueWidth = width / 1440;
    let height = trueWidth * 4605;
    block2.style.cssText = `width: 100%; height: ${height}px; transform: scale(${trueWidth}); transform-origin: top left;`
} else {
    let block2 = this.document.querySelector('.fday-block2');
    block2.style.cssText = ` `
}

// quotes

let quoteNum = 1;

let quotefunction= function() {
    if (quoteNum === 1) {
        document.querySelector('.fday-block2-3-card-1').style.cssText = `opacity: 1`
        document.querySelector('.fday-block2-3-card-2').style.cssText = ` `
        document.querySelector('.fday-block2-3-card-3').style.cssText = ` `
        document.querySelector('.fday-block2-3-dot-1').style.cssText = `background: #000`
        document.querySelector('.fday-block2-3-dot-2').style.cssText = `background: #C4C4C4`
        document.querySelector('.fday-block2-3-dot-3').style.cssText = `background: #C4C4C4`
    } else if (quoteNum === 2) {
        document.querySelector('.fday-block2-3-card-1').style.cssText = ` `
        document.querySelector('.fday-block2-3-card-2').style.cssText = `opacity: 1`
        document.querySelector('.fday-block2-3-card-3').style.cssText = ` `
        document.querySelector('.fday-block2-3-dot-1').style.cssText = `background: #C4C4C4`
        document.querySelector('.fday-block2-3-dot-2').style.cssText = `background: #000`
        document.querySelector('.fday-block2-3-dot-3').style.cssText = `background: #C4C4C4`
    } else if (quoteNum === 3) {
        document.querySelector('.fday-block2-3-card-1').style.cssText = ` `
        document.querySelector('.fday-block2-3-card-2').style.cssText = ` `
        document.querySelector('.fday-block2-3-card-3').style.cssText = `opacity: 1`
        document.querySelector('.fday-block2-3-dot-1').style.cssText = `background: #C4C4C4`
        document.querySelector('.fday-block2-3-dot-2').style.cssText = `background: #C4C4C4`
        document.querySelector('.fday-block2-3-dot-3').style.cssText = `background: #000`
    }
}

quotefunction()

document.querySelector('.fday-block2-3-dot-1').addEventListener('click', function() {
    quoteNum = 1;
    quotefunction() ;
})

document.querySelector('.fday-block2-3-dot-2').addEventListener('click', function() {
    quoteNum = 2;
    quotefunction();
})

document.querySelector('.fday-block2-3-dot-3').addEventListener('click', function() {
    quoteNum = 3;
    quotefunction();
})

document.querySelector('.fday-block2-3-arrows-left').addEventListener('click', function() {
    if (quoteNum === 1) {
        quoteNum = 3
    } else {
        quoteNum -= 1
    }

    quotefunction()
})

document.querySelector('.fday-block2-3-arrows-right').addEventListener('click', function() {
    if (quoteNum === 3) {
        quoteNum = 1
    } else {
        quoteNum += 1
    }

    quotefunction()
})



// owl carousel

$.getScript( "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function(data, textStatus, jqxhr) {
    console.log("hi")
   
});