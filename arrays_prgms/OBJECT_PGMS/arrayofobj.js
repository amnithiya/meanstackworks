var point_table=[
    {t_name:"csk",pld:10,won:8,loss:2,pts:16},
    {t_name:"dc",pld:11,won:8,loss:3,pts:16},
    {t_name:"rcb",pld:11,won:7,loss:4,pts:14},
    {t_name:"kkr",pld:11,won:5,loss:6,pts:10},
    {t_name:"mi",pld:11,won:5,loss:6,pts:10},
    {t_name:"pkb",pld:11,won:4,loss:7,pts:8},
    {t_name:"rr",pld:11,won:4,loss:7,pts:8},
    {t_name:"srh",pld:10,won:2,loss:8,pts:4}

]
//print no of team playing ipl_2k21
console.log(point_table.length);

//print team names only
point_table.forEach(team=>console.log(team.t_name));         //=>internal iteration

//print team details whose pts >10
point_table.filter(team=>team.pts>10).forEach(team=>console.log(team.t_name));

//is kkr playing ipl_2k21

var is_playing=point_table.some(team=>team.t_name=="kkr")
console.log(is_playing);

//sort team wrt loss dsc
point_table.sort((team1,team2)=>team2.loss-team1.loss)
console.log(point_table);

//print team details who have max point
var max_team=point_table.reduce((team1,team2)=>team1.pts > team2.pts ? team1 : team2)
console.log(max_team);

//map wrt won
var w_count={}
for(let team of point_table){
    if(team.won in w_count){
        w_count[team.won].push(team.t_name)
    }
    else{
        w_count[team.won]=[team.t_name]
    }
}
console.log(w_count);

//map wrt pts wise
var w_count={}
for(let team of point_table){
    if(team.pts in w_count){
    w_count[team.pts].push(team.t_name)
}
else{
    w_count[team.pts]=[team.t_name]
}
}
console.log(w_count);
