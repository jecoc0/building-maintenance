const {gql} = require('apollo-server-express');
const { modelName } = require('../models/Facility');

const typeDefs = gql`
    type Facility {
        _id: ID
        facilityName: String
        address: String
        photoName: String
        issues: [String]
    }

    type Query {
        facilities: [Facility]
    }

    type Mutation {
        addFacility(facilityName: String) : Facility
        addIssue(_id : ID, issueType: String) : Facility
    }
`

module.exports = typeDefs;