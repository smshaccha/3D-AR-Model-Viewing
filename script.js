// product data
const products = {
    1: {
        title: 'Product 1',
        specs: 'Specs: bla bla bla',
        modelUrl: 'models/product1.glb' 
    },
    2: {
        title: 'Product 2',
        specs: 'Specs: bla bla bla',
        modelUrl: 'models/product2.glb'
    },
    3: {
        title: 'Product 3',
        specs: 'Specs: bla bla bla',
        modelUrl: 'models/product3.glb'
    },
    // r o product entry ekhane hobe
};


const productCards = document.querySelectorAll('.product-card');
const detailsSection = document.getElementById('product-details');
const productTitle = document.getElementById('product-title');
const productSpecs = document.getElementById('product-specs');
const view3DButton = document.getElementById('view-3d-button');
const modal = document.getElementById('3d-modal');
const modelViewer = document.getElementById('model-viewer');
const closeModal = document.querySelector('.close');


productCards.forEach(card => {
    card.addEventListener('click', () => {
        let productId = card.dataset.productId;
        productId = parseInt(productId, 10);
        if (isNaN(productId) || productId <= 0 || !products.hasOwnProperty(productId)) { 
            console.error('Invalid product ID');
            detailsSection.style.display = 'none';
            return;
        }
        try {
            const productId = card.dataset.productId;
            const product = products[productId];
            
            if (product) {
                productTitle.textContent = product.title;
                productSpecs.textContent = product.specs;
                detailsSection.style.display = 'block';


                view3DButton.onclick = () => {
                    const url = product.modelUrl;
                        if (!url.startsWith('models/') || !url.endsWith('.glb')) {
                            console.error('Invalid model URL');
                            return;
                        }
                    modelViewer.src = product.modelUrl; 
                    modal.style.display = 'flex';
                };
            }
        } catch (error) {
            console.error('An error occurred while loading product details');
            detailsSection.style.display = 'none';    
        }});
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modelViewer.src = '';
    modal.setAttribute('aria-hidden', 'true'); 
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modelViewer.src = '';
    }
});