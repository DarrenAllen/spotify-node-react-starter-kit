let mongo =require('mongoose')
let TopModel =require('./models/tops')
mongo.connect('mongodb://localhost:27017/spotify', {useNewUrlParser: true});
const options = {
    limit: 25
};
async function search(spotify, ctx){
    const query = ctx.query.q;
    const types = ctx.query.types.split(",");
    console.info("SEARCH", query, types)
    const result = await spotify.search(query, types);
    return result;
}

module.exports = search;

