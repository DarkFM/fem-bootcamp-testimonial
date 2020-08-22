function main() {
    const cards$ = document.querySelectorAll(".card"); // array of cards
    const leftArrows$ = document.querySelectorAll('.left-btn');
    const rightArrows$ = document.querySelectorAll('.right-btn');

    const craousel = new CarouselSlider(0, cards$);

    leftArrows$.forEach(a => a.onclick = () => craousel.moveLeft())
    rightArrows$.forEach(a => a.onclick = () => craousel.moveRight())
}

class CarouselSlider {

    constructor(startIdx, carouselItems) {
        this.currentPosition = startIdx
        this.carouselItems = carouselItems;
        this.numItems = carouselItems.length;
    }

    /**
     * @param {number} value
     */
    set position(value) {
        this.currentPosition = Math.abs(value % this.numItems)
    }

    get position() {
        return this.currentPosition;
    }

    moveRight() {
        this.position += 1;
        const item$ = this.carouselItems[this.position];
        this.carouselItems.forEach(i => i.classList.remove("active"));
        item$.classList.add('active');
    }

    moveLeft() {
        this.position -= 1;
        const item$ = this.carouselItems[this.position];
        this.carouselItems.forEach(i => i.classList.remove("active"));
        item$.classList.add('active');
    }
}


document.addEventListener("DOMContentLoaded", main);