function main() {
    const cards$ = document.querySelectorAll(".card");
    const leftArrows$ = document.querySelectorAll('.left-btn');
    const rightArrows$ = document.querySelectorAll('.right-btn');

    const wrapper$ = document.querySelector(".wrapper");

    const carousel = new CarouselSlider(0, cards$, true);

    leftArrows$.forEach(a => a.onclick = () => carousel.moveLeft());
    rightArrows$.forEach(a => a.onclick = () => carousel.moveRight());

    wrapper$.addEventListener('mouseover', (ev) => carousel.stopSlideShow());
    wrapper$.addEventListener('mouseleave', (ev) => carousel.playSlideShow());
}

class CarouselSlider {

    constructor(startIdx, carouselItems, autoPlay) {
        this.currentPosition = startIdx;
        this.carouselItems = carouselItems;
        this.numItems = carouselItems.length;

        if (autoPlay)
            this.playSlideShow();
    }

    /**
     * @param {number} value
     */
    set position(value) {
        this.currentPosition = Math.abs(value % this.numItems);
    }

    get position() {
        return this.currentPosition;
    }

    playSlideShow() {
        this.slideShowTimer = setInterval(_ => this.moveRight(), 5000);
    }

    stopSlideShow() {
        clearInterval(this.slideShowTimer);
    }

    setActiveItem(item$, direction) {
        this.stopSlideShow();
        this.carouselItems.forEach(i => i.classList.remove("active", "fromRight", "fromLeft"));
        if (direction == 'left')
            item$.classList.add("active", "fromRight");
        else
            item$.classList.add("active", "fromLeft");
        this.playSlideShow();
    }

    moveRight() {
        this.position += 1;
        const item$ = this.carouselItems[this.position];
        this.setActiveItem(item$, 'right');
    }

    moveLeft() {
        this.position -= 1;
        const item$ = this.carouselItems[this.position];
        this.setActiveItem(item$, 'left');
    }
}


document.addEventListener("DOMContentLoaded", main);