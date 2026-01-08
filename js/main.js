// OUR IMPACT countdown ////
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    let triggered = false;

    const runCounter = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            const isPercent = counter.textContent.includes("%");
            const isPlus = counter.textContent.includes("+");
            let count = 0;
            const increment = target / 70;

            const update = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.floor(count) + (isPercent ? "%" : isPlus ? "+" : "");
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + (isPercent ? "%" : isPlus ? "+" : "");
                }
            };
            update();
        });
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !triggered) {
            runCounter();
            triggered = true;
        }
    }, { threshold: 0.4 });

    observer.observe(document.querySelector("#stats"));
});


// TESTIMONIALS //////
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const cardWidth = cards[0].offsetWidth + 30;

function moveSlider() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.onclick = () => {
    index = (index + 1) % cards.length;
    moveSlider();
};

prevBtn.onclick = () => {
    index = index === 0 ? cards.length - 1 : index - 1;
    moveSlider();
};

/* AUTO SCROLL */
setInterval(() => {
    index = (index + 1) % cards.length;
    moveSlider();
}, 5000);

// model product Flower

const productModal = document.getElementById("productModal");

productModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;

    document.getElementById("modalTitle").innerText = button.getAttribute("data-title");
    document.getElementById("modalDesc").innerText = button.getAttribute("data-desc");
    document.getElementById("modalTag").innerText = button.getAttribute("data-tag");

    document.getElementById("modalImage").style.backgroundImage =
        `url('${button.getAttribute("data-img")}')`;
});

// model product Prerolls
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('prerollModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('prerollModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('prerollModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('prerollModalTag').textContent =
            this.getAttribute('data-tag');
    });
});

// model product Concentrates
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('concentratesModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('concentratesModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('concentratesModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('concentratesModalTag').textContent =
            this.getAttribute('data-tag');
    });
});

// model product Vape
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('vapeModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('vapeModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('vapeModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('vapeModalTag').textContent =
            this.getAttribute('data-tag');
    });
});

// model product Edibles
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('ediblesModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('ediblesModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('ediblesModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('ediblesModalTag').textContent =
            this.getAttribute('data-tag');
    });
});

// model product BEVERAGES
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('beveragesModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('beveragesModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('beveragesModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('beveragesModalTag').textContent =
            this.getAttribute('data-tag');
    });
});

// model product Topicals
document.querySelectorAll('.view-product-btn').forEach(button => {
    button.addEventListener('click', function () {

        document.getElementById('topicalsModalTitle').textContent =
            this.getAttribute('data-title');

        document.getElementById('topicalsModalDesc').textContent =
            this.getAttribute('data-desc');

        document.getElementById('topicalsModalImg').src =
            this.getAttribute('data-img');

        document.getElementById('topicalsModalTag').textContent =
            this.getAttribute('data-tag');
    });
});