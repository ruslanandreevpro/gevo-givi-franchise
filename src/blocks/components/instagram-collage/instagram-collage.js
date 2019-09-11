let Instafeed = require("instafeed.js");

let feed = new Instafeed({
    clientId: "2907a0a7e09546a7a95973c9c22d2cd0",
    accessToken: "8607492670.1677ed0.f1107d1ceaaa4ebf81252998bb7a592e",
    get: "user",
    userId: "8607492670",
    limit: 9,
    resolution: "low_resolution",
    template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}"><div class="overlay"><span><img src="./img/icon-like.png">&#160;{{likes}}&#160;&#160;&#160;<img src="./img/icon-comments.png">&#160;{{comments}}</span></div></a></li>'
});
feed.run();