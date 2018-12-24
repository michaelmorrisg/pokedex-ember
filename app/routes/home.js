import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller){
        this._super(...arguments)
    },
    actions: {
        getPokemon(num){
            return $.get(`https://pokeapi.co/api/v2/pokemon/${num}/`).then(pokemon => {
            console.log(pokemon)
            this.controller.set('pokemon', pokemon)
            this.controller.set('display', null)  
            return pokemon
            })
        },
        changeComponent(input,pokemon){
            if(input==="type"){
                var data = pokemon.types.map(obj => {
                    return obj.type.name
                })
            }
            this.controller.set('display', data)
        }
    }
});

