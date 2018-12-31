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
                    obj.type.name = obj.type.name.charAt(0).toUpperCase() + obj.type.name.slice(1)
                    return obj.type.name
                })
            }
            if(input==="ability"){
                var data = pokemon.abilities.map(obj => {
                    obj.ability.name = obj.ability.name.charAt(0).toUpperCase() + obj.ability.name.slice(1)
                    return obj.ability.name
                })
                }
            if(input==="sprite"){
                var data = pokemon.sprites.front_shiny
                console.log(data, 'data')
            }

            this.controller.set('display', data)
        }
    }
});

