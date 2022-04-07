const {Facility} = require("../models")

const resolvers = {
    Query: {
        facilities: async () => {
            return Facility.find();
        }
    },

    Mutation: {
        addFacility: async (parent,args) => {
            const facility = await Facility.create({...args});
            return facility;
        },
        addIssue: async (parent,{_id, issueType}) => {
            console.log(_id, typeof(issueType));

             const facility = await Facility.findOneAndUpdate(
                 { _id :_id },
                 { $push: {issues : issueType } },
                 { new: true }
             );

             console.log(facility.issues);
            return facility;
        }
    }
}

module.exports = resolvers;