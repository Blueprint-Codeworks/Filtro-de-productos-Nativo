// Elementos
const filterBtn = document.getElementById('filterBtn');
const filterMenu = document.getElementById('filterMenu');
const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product-card');
const priceRange = document.getElementById('price');
const priceValue = document.getElementById('priceValue');

// Elementos
const closeBtn = document.getElementById('closeBtn');

// Mostrar el menú de filtros al hacer clic en el botón
filterBtn.addEventListener('click', () => {
    filterMenu.classList.add('open');
});

// Cerrar el menú al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
    filterMenu.classList.remove('open');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
        filterMenu.classList.remove('open');
    }
});


// Actualizar el valor del rango de precio visualmente
priceRange.addEventListener('input', (event) => {
    priceValue.textContent = `$${event.target.value}`;
    filterProducts();
});

// Filtros
filters.forEach(filter => {
    filter.addEventListener('change', filterProducts);
});

// Función para filtrar productos
function filterProducts() {
    const category = document.getElementById('category').value;
    const price = parseInt(priceRange.value);
    const color = document.getElementById('color').value;

    products.forEach(product => {
        const productCategory = product.dataset.category;
        const productPrice = parseInt(product.dataset.price);
        const productColor = product.dataset.color;

        // Filtrar por categoría, precio y color
        if ((category === 'all' || productCategory === category) &&
            (price >= productPrice) &&
            (color === 'all' || productColor === color)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
