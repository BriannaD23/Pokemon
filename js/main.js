const pokeShow = document.getElementById('pokeshow');
const generateButton = document.getElementById('generateButton');
const generateButton2 = document.getElementById('generateButton2');
const searchInput = document.getElementById('pokeInput');
const searchButton  = document.getElementById('check-btn');

let currentPage = 1;

const pokemonPerPg = 1; 

const fetchPokemon = (page) => {
    const start = (page - 1) * pokemonPerPg + 1;
    const end = start + pokemonPerPg ;    

    const promises = [];
    for (let i = start; i < end; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }


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

           
            displayPokemon(pokemon);
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });
};




const displayPokemon = (pokemon) => {
  

        

    pokeShow.innerHTML = '';
    

    pokemon.forEach((pokeData) => {
        const pokeCard = document.createElement('div');
        pokeCard.classList.add('pokemon-card');

    

        const type = pokeData.type.toLowerCase(); 

        console.log('Type:', type);

        let imageContainerGradient = '';

        if(type === 'water'){
            imageContainerGradient = 'linear-gradient(to left, #007acc, #00559b)';
        }else if (type === 'fire'){
            imageContainerGradient = 'linear-gradient(90deg, rgba(180,58,66,1) 1%, rgba(253,97,29,1) 63%, rgba(252,176,69,1) 100%)';
        }else if(type === 'grass'){
            imageContainerGradient =  'linear-gradient(to left, rgb(65, 170, 70), rgb(160, 227, 160))';
        }else if(type === 'electric'){
            imageContainerGradient = 'linear-gradient(to right, yellow, black)' ;
        }else if(type === 'normal'){
            imageContainerGradient = ' linear-gradient(to left, darkgrey, grey, lightgrey)';
        }else if(type === 'poison'){
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


        let textContainerGradient = '';

        if (type === 'water') {
            textContainerGradient = '#6EB5FF';
        } else if (type === 'fire') {
            textContainerGradient = '#f7c592';
        } else if (type === 'grass') {
            textContainerGradient = '#a9d6a7';
        }else if(type === 'electric'){
            textContainerGradient ='#FFFFB3';
        }else if(type === 'normal'){
            textContainerGradient ='#bebbbf'; 
        }else if(type === 'poison'){
            textContainerGradient = '#d6b1e3';
        }else if( type === 'ground'){
            textContainerGradient = '#D2B48C';
        }else if( type === 'bug'){
            textContainerGradient = '#99FF99';
        }else if ( type === 'fairy'){
            textContainerGradient = '#ffc0cb';
        }else if(type === 'fighting'){
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
            accentColor = '#2172C1'; 
        } else if (type === 'fire') {
            accentColor = '#C84434'; 
        } else if (type === 'grass') {
            accentColor = '#23530F'; 
        } else if (type === 'electric') {
            accentColor = '#FAF850';
        } else if (type === 'normal') {
            accentColor = '#3B3B3B';
        } else if (type === 'poison') {
            accentColor = '#563395';
        } else if (type === 'ground') {
            accentColor = '#91491F'; 
        } else if (type === 'bug') {
            accentColor = '#23530F'; 
        } else if (type === 'fairy') {
            accentColor = '#EC4497'; 
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
                card.classList.remove("hidden-on-mobile"); 
            } else {
                card.classList.add("hidden-on-mobile"); 
            }
        } else {
            card.classList.remove("hidden-on-mobile"); 
        }
    });
}

window.addEventListener("resize", updateCardVisibility);

updateCardVisibility();


fetchPokemon(currentPage);


const filterPokemon = (query) => {
    pokeShow.innerHTML = '';

    if (query.trim() === '') {
        fetchPokemon(currentPage);
        return;
    }

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

            displayPokemon(pokemon);
        })
        .catch((error) => {
            console.error('Error fetching Pokémon:', error);
        });
};

searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    filterPokemon(searchQuery);
});




generateButton.addEventListener('click', () => {
    currentPage++; 
    fetchPokemon(currentPage); 
});







