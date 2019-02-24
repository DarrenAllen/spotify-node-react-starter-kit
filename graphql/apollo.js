const { ApolloServer} = require('apollo-server-koa');
const types = require("./types")
const TopModel = require('./models/tops');
const genres = require("./resolvers/genres")
const tops = require('./resolvers/tops');
const recommendations = require('./resolvers/recommendations');
const {search} = require('./resolvers/search');

const resolvers = {
    Result: {
        __resolveType(obj, context, info){
            if(obj.album){
                return 'Track';
            }
            return 'Artist';
        },
    },
    Query: {
        async getArchivedTops(parent, args, context, info){
            return TopModel.find({user:args.user, time_range:args.time_range}).exec();
        },
        async getTop(parent, args, context, info){
            return await tops(parent, args, context, info)
        },
        async getRecommendations(parent, args, context, info){
            return await recommendations(parent, args, context, info)
        },
        async search(parent, args, context, info){
            return await search(parent, args, context, info);
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