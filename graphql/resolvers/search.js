const request = require('request-promise-native');
async function search(parent, args, context, info){
  console.info("Search!", args)
  const type = args.type;
  const options = {
    uri: "http://localhost:8818/search",
    json: true,
    qs: {
      user: args.user,
      types: type,
      q: args.q
    }
  };
  const recs = await request(options);
  if(type === "track"){
    return recs.body.tracks.items;
  }
  return recs.body.artists.items;
}
module.exports = {
  search
}