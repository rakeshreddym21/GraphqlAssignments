const tweets=[
    { 
        id:"tweets"+1,
        body:"tweet1",
        date:2015-03-25,
        StatsId:"stats"+11 
    },
    { 
        id:"tweets"+2,
        body:"tweet3",
        date:2019-12-30,
        StatsId:"stats"+21 
    },
    { 
        id:"tweets"+3,
        body:"tweet3",
        date:2020-08-09,
        StatsId:"stats"+31  
    }
]

const users=[
    {
        id: "users"+1,
        username: "rak-esh-123",
        first_name: "rak",
        last_name: "esh",
        full_name: "rak-esh",
        name: "rakesh",
        avatar_url: "www.google.com"
    },
    {
        id: "users"+2,
        username: "jee-van-123",
        first_name: "jee",
        last_name: "van",
        full_name: "jee-van",
        name: "jeevan",
        avatar_url: "www.google.com"
    }
]

const stats=[
    {
        id:"stats"+11,
        views: 12,
        likes: 10,
        retweets: 5,
        responses: 4
    },
    {
        id:"stats"+21,
        views: 120,
        likes: 100,
        retweets: 50,
        responses: 40
    },
    {
        id:"stats"+31,
        views: 1250,
        likes: 1050,
        retweets: 550,
        responses: 450
    }
]

const notifications=[
    {
        id:"notifs"+1,
        body:"notification1"
    },
    {
        id:"notifs"+2,
        body:"notification2"
    },
    {
        id:"notifs"+3,
        body:"notification3"
    }
]

exports.db={
    notifications,
    stats,
    users,
    tweets
}