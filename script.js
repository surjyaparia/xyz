let highestZ = 1;

class Paper {

    init(paper) {
        // Use 'this' to assign properties of the class instance
        this.holdingPaper = false;

        this.prevMouseX = 0;
        this.prevMouseY = 0;

        this.mouseX = 0;
        this.mouseY = 0;

        this.velocityX = 0;
        this.velocityY = 0;

        this.currentPaperX = 0;
        this.currentPaperY = 0;

        paper.addEventListener('mousedown', (e) => {
            
            this.holdingPaper = true;

            paper.style.zIndex = highestZ;
            highestZ += 1;

            if (e.button === 0) {
                // You want to track the mouse position at the time of the click
                this.prevMouseX = e.clientX;
                this.prevMouseY = e.clientY;

                console.log(this.prevMouseX);
                console.log(this.prevMouseY);
            }
        });

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if(this.holdingPaper) {

                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translatex(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }
        });

        window.addEventListener('mouseup', (e) => {
            this.holdingPaper = false;
            console.log('mouse button is released');
        });
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
});
