const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=vitas 2002&type=track', {
    headers: {
    'Authorization': 'Bearer BQBy2oX92EH0rAySf39UMOTrSx_iS0zVqkIk85eVNx4BUtPrEkPrbxAGKvQ9yHFcEHjAyrcvJ0ac71pSmf435TtwppVpsJV5niyd-xhnglrIPx1BHM7rkNioQla1dqlAUxqhaQeMEliOrDEv-e-CVfEwWEnKZ4pDS0SC-PxXYwEITq_gqAKWFQB9rGBjkwQcaUu4zskUp1Ue-xdA-2Q'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})

