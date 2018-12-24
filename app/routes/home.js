import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller){
        this._super(...arguments)
    },
    actions: {
        getPokemon(num){
            return $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`).then(pokemon => {
            console.log(pokemon)
            pokemon.id = pokemon.types[0]
            this.controller.set('pokemon', pokemon)
            this.controller.set('display', null)  
            return pokemon
            })
        },
        changeComponent(input){
            this.controller.set('display', input)
        }
    }
});

