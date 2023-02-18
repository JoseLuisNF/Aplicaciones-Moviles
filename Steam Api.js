const Http= new XMLHttpRequest();
const url='https://api.steampowered.com/IClientStats_1046930/ReportEvent/v1/?key=579FF774FB8B0E7CF3C7F76AE8B2072B&steamids=76561198848612288';
$('.btn').click(function(){
    $.getJSON(Url,function(result){console.log(result)})
})

fetch(url)
.then(data=>{return data.json})
.then(result=>{
    console.log(result);
    
});

{
	"response" {
		"players" [
			{
				"steamid": 76561198848612288,
				"communityvisibilitystate": 3,
				"profilestate": 1,
				"personaname": "Ampher61",
				"lastlogoff": 1447902060,
				"commentpermission": 1,
				"profileurl": "http://steamcommunity.com/id/76561198848612288/",
				"gameextrainfo": "Dota 2",
				"gameid": 1353050
			}
		]
		
	}
}