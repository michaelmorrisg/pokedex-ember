import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        $.get(`https://pokeapi.co/api/v2/pokemon/1/`).then(result => {
            console.log(result)
            return result
        })
    }
});
