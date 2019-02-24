const request = require('request-promise-native');

async function searchArtists(parent, args, context, info){
  console.info("Search artists!", args)

  const options = {
    uri: "http://localhost:8818/search",
    json: true,
    qs: {
      user: args.user,
      types: "artist",
      q: args.q
    }
  };
  const recs = await request(options);

  return recs.body.artists.items;
}
async function searchTracks(parent, args, context, info){
  console.info("Search tracks!", args)

  const options = {
    uri: "http://localhost:8818/search",
    json: true,
    qs: {
      user: args.user,
      types: "track",
      q: args.q
    }
  };
  const recs = await request(options);

  return recs.body.tracks.items;
}
module.exports = {
  searchArtists,
  searchTracks
}