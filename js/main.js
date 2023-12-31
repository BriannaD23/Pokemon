const pokeShow = document.getElementById('pokeshow');
const generateButton = document.getElementById('generateButton');
const generateButton2 = document.getElementById('generateButton2');
const searchInput = document.getElementById('pokeInput');
const searchButton  = document.getElementById('check-btn');

let currentPage = 1;

const pageSize = 1; // Set the number of Pokémon to fetch per page

const fetchPokemon = (page) => {
    // Calculate the range of Pokémon to fetch based on the page
    const start = (page - 1) * pageSize + 1;
    const end = start + pageSize ;    

    // Start off with an empty array of promises
    const promises = [];
    for (let i = start; i < end; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }

    /* Let all individual asynchronous calls run in parallel, and when they are done, 
       trigger a .then to get access to all the results */
    Promise.all(promises)
        .then((results) => {
            console.log('fetchPokemon', results);

            const pokemon = results.map((data) => ({
                
                hp: data.stats[0].base_stat,
                name: data.name,
                id: data.id,
                image: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
                type: data.types[0].type.name,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                specialAttack: data.stats[3].base_stat
            }));

            // Display fetched Pokémon data
            displayPokemon(pokemon);
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });
};



// Function to display Pokémon
const displayPokemon = (pokemon) => {
    // Clear the existing content in the pokeshow element

        

    pokeShow.innerHTML = '';
    

    // Create Pokémon cards
    pokemon.forEach((pokeData) => {
        const pokeCard = document.createElement('div');
        pokeCard.classList.add('pokemon-card');

    

        const type = pokeData.type.toLowerCase(); 

        console.log('Type:', type);

        let imageContainerGradient = '';

        if(type === 'water'){//blue
            imageContainerGradient = 'linear-gradient(to left, #007acc, #00559b)';
        }else if (type === 'fire'){//orange
            imageContainerGradient = 'linear-gradient(90deg, rgba(180,58,66,1) 1%, rgba(253,97,29,1) 63%, rgba(252,176,69,1) 100%)';
        }else if(type === 'grass'){//green
            imageContainerGradient =  'linear-gradient(to left, rgb(65, 170, 70), rgb(160, 227, 160))';
        }else if(type === 'electric'){//yellow
            imageContainerGradient = 'linear-gradient(to right, yellow, black)' ;
        }else if(type === 'normal'){//grey
            imageContainerGradient = ' linear-gradient(to left, darkgrey, grey, lightgrey)';
        }else if(type === 'poison'){//purple
            imageContainerGradient = 'linear-gradient(to right, #B19CD9, #48288A)' ;
        }else if(type === 'ground'){
            imageContainerGradient = 'linear-gradient(to left, #8B4513, #A0522D, #D2B48C)';
        }else if( type === 'bug'){
            imageContainerGradient = 'linear-gradient(to left, #004d00, #1a8c1a);'
        }else if( type === 'fairy'){
            imageContainerGradient = 'linear-gradient(to left, #ff1493, #ffc0cb)';
        }else if( type === 'fighting'){
            imageContainerGradient = 'linear-gradient(to left, #8B0000, #FF1A1A)';
        }else if (type === 'rock'){
            imageContainerGradient = 'linear-gradient(to bottom, #333333, #808080, #080808)';
        }else if (type === 'dragon'){
            imageContainerGradient = 'linear-gradient(to bottom, #000000, #4B0082)';
        }else if (type === 'psychic'){
            imageContainerGradient =  'radial-gradient(circle, black 20%, white 20%, white 40%, black 40%, black 60%, white 60%, white 80%, black 80%)' ;
        }else if (type === 'ice'){
            imageContainerGradient = 'linear-gradient(to left, rgb(0, 88, 123), rgba(255, 255, 255, 0.1))';
        }else if (type === 'ghost') {
            imageContainerGradient =  'linear-gradient(to bottom, #1B1B1B, #0D0D0D, #1B1B1B)';
        }
        ;


        // Separate linear gradients for text-container
        let textContainerGradient = '';

        if (type === 'water') {//blue
            textContainerGradient = '#6EB5FF';
        } else if (type === 'fire') {//orange
            textContainerGradient = '#f7c592';
        } else if (type === 'grass') {//green
            textContainerGradient = '#a9d6a7';
        }else if(type === 'electric'){//yellow
            textContainerGradient ='#FFFFB3';
        }else if(type === 'normal'){//grey
            textContainerGradient ='#bebbbf'; //'#b1adb3' ;
        }else if(type === 'poison'){//purple
            textContainerGradient = '#d6b1e3';
        }else if( type === 'ground'){//brown
            textContainerGradient = '#D2B48C';
        }else if( type === 'bug'){//bug
            textContainerGradient = '#99FF99';
        }else if ( type === 'fairy'){//pink
            textContainerGradient = '#ffc0cb';
        }else if(type === 'fighting'){//'#FF5733'
            textContainerGradient = '#ed7777';
        }else if(type === 'rock'){
            textContainerGradient = '#C0C0C0';
        }else if( type === 'dragon'){
            textContainerGradient = '#6B5B95';
        }else if( type === 'psychic'){
            textContainerGradient = '#F0F0F0; ';
        }else if( type === 'ice'){
            textContainerGradient = '#8dc5e8';
        }else if (type === 'ghost') {
            textContainerGradient = '#666';
        }
        ;

        

        let accentColor = '';

        if (type === 'water') {
            accentColor = '#2172C1'; // Blue
        } else if (type === 'fire') {
            accentColor = '#C84434'; // Orange
        } else if (type === 'grass') {
            accentColor = '#23530F'; // Green
        } else if (type === 'electric') {//yellow
            accentColor = '#FAF850';
        } else if (type === 'normal') {
            accentColor = '#3B3B3B'; // Grey
        } else if (type === 'poison') {
            accentColor = '#563395'; // Purple
        } else if (type === 'ground') {
            accentColor = '#91491F'; // Brown
        } else if (type === 'bug') {
            accentColor = '#23530F'; // Bug
        } else if (type === 'fairy') {
            accentColor = '#EC4497'; // Pink
        }else if( type === 'rock'){
            accentColor = '#252525';
        }else if( type === 'dragon') {
            accentColor = '#301452';
        }else if(type === 'fighting'){
            accentColor = '#9C221E';
        }else if ( type === 'ice'){
            accentColor === '#2A6685';        
        }else if (type === 'ghost') {
            accentColor = '#111111';
        }else if (type === 'psychic'){
            accentColor = '#111111';
        }else{
            accentColor = '#3B3B3B'; // Grey
        };



        pokeCard.innerHTML = `
            <div class="image-container" style= "background : ${imageContainerGradient};">
                <div class= "move-hp">
                <p class= "hp">
                    <span> HP </span>
                    ${pokeData.hp}
                </p>
                </div>
                <img src="${pokeData.image}">
            </div>
            <div class="text-container" style="background: ${textContainerGradient};">
                <h2 class="capitalize">${pokeData.name}</h2>
                <div class= type-border>
                    <p class= "type capitalize" > ${pokeData.type}</p>
                </div>
                <div class="stats">
                    <div class="stat">
                        <p class="stat-label">Attack:</p>
                        <progress id='prog' max="100" value = "${pokeData.attack}" style="accent-color: ${accentColor};" ></progress>
                        <p class="stat-value">${pokeData.attack}</p>
                    </div>

                    <div class="stat">
                        <p class="stat-label">Defense:</p>
                        <progress id='prog' max="100" value = "${pokeData.defense}" style="accent-color: ${accentColor};"></progress>
                        <p class="stat-value">${pokeData.defense}</p>
                    </div>

                    <div class="stat">
                        <p class="stat-label">Speed:</p>
                        <progress id='prog'  max="100" value= "${pokeData.speed}" style="accent-color: ${accentColor};" ></progress>
                        <p class="stat-value">${pokeData.speed}</p>
                    </div

     
                </div>
            </div>
        `
        ;

        pokeShow.appendChild(pokeCard);
    });

    
};

const cards = document.querySelectorAll(".pokemon-card");

function updateCardVisibility() {
    cards.forEach((card, index) => {
        if (window.innerWidth <= 768) {
            if (index === 0) {
                card.classList.remove("hidden-on-mobile"); // Show the first card on smaller screens
            } else {
                card.classList.add("hidden-on-mobile"); // Add a class to hide the other cards on smaller screens
            }
        } else {
            card.classList.remove("hidden-on-mobile"); // Remove the class to show all cards on larger screens
        }
    });
}

// Add an event listener for the resize event to update card visibility
window.addEventListener("resize", updateCardVisibility);

// Initial visibility update
updateCardVisibility();


// Initial fetch and display of Pokémon for the first page
fetchPokemon(currentPage);


const filterPokemon = (query) => {
    // Clear the existing content in the pokeshow element
    pokeShow.innerHTML = '';

    // Check if the query is empty
    if (query.trim() === '') {
        // If the query is empty, fetch the first Pokémon on the current page
        fetchPokemon(currentPage);
        return;
    }

    // Fetch the Pokémon by name using the search query
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const pokemon = [
                {
                    hp: data.stats[0].base_stat,
                    name: data.name,
                    id: data.id,
                    image: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
                    type: data.types[0].type.name,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                },
            ];

            // Display the fetched Pokémon data
            displayPokemon(pokemon);
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });
};

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    filterPokemon(searchQuery);
});




// Event listener for the "Generate More Pokémon" button
generateButton.addEventListener('click', () => {
    currentPage++; // Increment the current page
    fetchPokemon(currentPage); // Fetch Pokémon for the next page
});







