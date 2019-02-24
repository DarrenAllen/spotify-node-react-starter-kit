const { gql } = require('apollo-server-koa');

module.exports = gql`
    type Album {
        id: String
        href: String
        name: String
        images: [Image]
    }
    type Image {
        height: Int
        url: String
        width: Int
    }
    type Artist {
        name: String
        genres: [String]
        id: String
        images: [Image]
    }
    type Track {
        name: String
        album: Album
        artists: [Artist]
        id: String
    }
    type ArchivedTop {
        user: String
        time_range: String
        createdAt: String
        artists: [Artist]
        tracks: [Track]
    }
    union Result = Track | Artist
    type Query {
        getArchivedTops(time_range: String, user: String!): [ArchivedTop]
        getTopArtists(time_range: String, user: String!): [Artist]
        getTopTracks(time_range: String, user: String!): [Track]
        getRecommendations(user: String!, seed_artists: String, seed_genres: String, seed_tracks: String): [Track]
        getGenres: [String]
        search(user: String!, q: String!, type: String!): [Result]
    }
`;

