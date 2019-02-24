const { ApolloServer} = require('apollo-server-koa');
const types = require("./types")
const TopModel = require('./models/tops');
const genres = require("./resolvers/genres")
const tops = require('./resolvers/tops');
const recommendations = require('./resolvers/recommendations');
const {searchArtists, searchTracks} = require('./resolvers/search');

const resolvers = {
    Query: {
        async getArchivedTops(parent, args, context, info){
            return TopModel.find({user:args.user, time_range:args.time_range}).exec();
        },
        async getTopArtists(parent, args, context, info){
            args.type = "artists";
            return await tops(parent, args, context, info)
        },
        async getTopTracks(parent, args, context, info){
            args.type = "tracks";
            return await tops(parent, args, context, info)
        },
        async getRecommendations(parent, args, context, info){
            return await recommendations(parent, args, context, info)
        },
        async searchArtists(parent, args, context, info){
            return await searchArtists(parent, args, context, info);
        },
        async searchTracks(parent, args, context, info){
            return await searchTracks(parent, args, context, info);
        },
        getGenres(){
            return genres;
        }
    }
};

module.exports = new ApolloServer({ typeDefs: types, resolvers, formatError: error => {
    console.log(error);
    return error;
  } });