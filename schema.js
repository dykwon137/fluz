const graphql = require('graphql');
const _ = require('lodash');

//need to define here to use the datatype
const {GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList} = graphql;

users = [ { username: 'User5',
rank: '1',
relationship: '2nd',
daily_cal_intake: '2000',
daily_cal_spend: '1800' },
{ username: 'User3',
rank: '4',
relationship: '3rd',
daily_cal_intake: '2300',
daily_cal_spend: '1750' },
{ username: 'User1',
rank: '2',
relationship: null,
daily_cal_intake: '1800',
daily_cal_spend: '1500' },
{ username: 'User2',
rank: '3',
relationship: '1st',
daily_cal_intake: '2200',
daily_cal_spend: '1700' },
{ username: 'User4',
rank: '5',
relationship: null,
daily_cal_intake: '1800',
daily_cal_spend: '500' } ];

friendlists = [
 {listname: 'mylist', friendname: 'User1'}
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
     username: {type: GraphQLID},
     relationship: {type: GraphQLString},
     rank: {type: GraphQLInt},
     daily_cal_intake: {type: GraphQLInt},
     daily_cal_spend: {type: GraphQLInt}
  })
});

const FriendlistType = new GraphQLObjectType({
    name: 'Friendlist',
    fields: () => ({
        listname: {type: GraphQLID},
        friends:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return _.filter(users, {username: parent.friendname});
            }
        }
    })
  });
  
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        user:{
            type: UserType,
            args:{username: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db/other source
                return _.find(users,{username: args.username});
            }
        },
        friendlist:{
            type: FriendlistType,
            args:{listname: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db/other source
                return _.find(friendlists,{listname: args.listname});
            }
        },
        //return all users
        users:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users;
            }
        }
    }
});

//define how we initially jump into the graph
module.exports = new GraphQLSchema({
    query: RootQuery
});