const hamburgerMenu = document.getElementById('hamburger-menu');
        const navbar = document.getElementById('navbar');
        const overlay = document.createElement('div'); 
        overlay.classList.add('overlay');
        document.body.appendChild(overlay); 

        
        function toggleNavbar() {
            navbar.classList.toggle('active');  
            overlay.classList.toggle('active');  
        }

        hamburgerMenu.addEventListener('click', toggleNavbar);

        overlay.addEventListener('click', function () {
            if (navbar.classList.contains('active')) {
                toggleNavbar();  
            }
        });




        const images = [
            "./assets/images/1-800-baskets-com-logo-CAD30601E4-seeklogo.com_.png.png",
            "./assets/images/download-81.png.png",
            "./assets/images/1800Flowers.png.png",
            "./assets/images/Amazon.com-Logo.svg_-1.png.png",
            "./assets/images/download-84.png.png",
            "./assets/images/Amc_theatres_logo.svg_.png.png",
            "./assets/images/eagle-made-in-usa-united-states-america-logo-vector-28869212.jpg.png",
            "./assets/images/American-Eagle-Logo-1985.jpg.png"
        ];
        
        let cardsAdded = false;
        
        function loadMoreCards() {
            if (cardsAdded) return; 
        
            let extendedImages = [...images, ...images]; 
            let shuffledImages = extendedImages.slice(); 
            shuffledImages.sort(() => 0.5 - Math.random()); 
        
            let uniqueImages = shuffledImages.slice(0, 16);
        
            let newCardsHTML = '';
            uniqueImages.forEach((image) => {
                newCardsHTML += `
                    <div class="gift-card-wrapper">
                        <span> <button class="gift-top-btnn">Gift Card</button></span>
                        <span><img src="${image}" alt="Unique Gift Card"></span>
                    </div>`;
            });
        
            document.querySelector('.gift-cards').insertAdjacentHTML('beforeend', newCardsHTML);
        
            document.getElementById('sr-message').textContent = '16 unique cards have been added. Total cards: 16.';
        
            cardsAdded = true; 
        }
        