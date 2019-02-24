let mongo =require('mongoose')
let TopModel =require('./models/tops')
mongo.connect('mongodb://localhost:27017/spotify', {useNewUrlParser: true});
const options = {
    limit: 25
};
async function getRecs(spotify, ctx){
    const seed_artists = ctx.query.seed_artists;
    const seed_tracks = ctx.query.seed_tracks;
    const seed_genres = ctx.query.seed_genres;
    const result = await spotify.getRecommendations({seed_artists, seed_genres, seed_tracks});
    return result
}

module.exports = getRecs;

