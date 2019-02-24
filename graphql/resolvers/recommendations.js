const request = require('request-promise-native');
async function getRecommendations(parent, args, context, info){
  console.info("GETTING RECOMMENDATIONS!", args)

  const options = {
    uri: "http://localhost:8818/recommendations",
    json: true,
    qs: {
      user: args.user,
      seed_tracks: args.seed_tracks,
      seed_artists: args.seed_artists,
      seed_genres: args.seed_genres,
    }
  };
  const recs = await request(options);

  return recs.body.tracks;

}
module.exports = getRecommendations