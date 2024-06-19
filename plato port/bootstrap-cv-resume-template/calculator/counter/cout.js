let count = 0;

function updateCount() {
    document.getElementById('count').innerText = count;
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    count--;
    updateCount();
}