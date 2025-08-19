// створюємо масив зі 100 об'єктів
const data = [];
for (let i = 1; i <= 100; i++) {
    data.push({id: i, value: `Item ${i}`});
}

const container = document.getElementById('container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 0; // сторінка (0 - це перші 10)
const itemsPerPage = 10;

function renderPage(page) {
    container.innerHTML = ''; // очищаємо
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = data.slice(start, end);

    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerText = item.value;
        container.appendChild(div);
    });

    // блокуємо кнопки, якщо виходимо за межі
    prevBtn.disabled = page === 0;
    nextBtn.disabled = end >= data.length;
}

prevBtn.onclick = () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage);
    }
};

nextBtn.onclick = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
        currentPage++;
        renderPage(currentPage);
    }
};

// показуємо першу сторінку при завантаженні
renderPage(currentPage);