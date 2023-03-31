const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    })
})

let previous = null;

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const closes = document.querySelectorAll('.close');

closes.forEach(item => 
    item.addEventListener('click', 
    event => event.target.parentNode.classList.toggle('open'))
);

function openPopup(className) {
    document.querySelector('.' + className).classList.toggle('open');
}

function openPar(className) {
    if (previous != null) {
        previous.classList.toggle('vedi')
    }
    var current = document.querySelector('.' + className);
    current.classList.toggle('vedi');
    previous = current;
}

