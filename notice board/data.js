let dataArr = [99];

let rand;
let randViews;
let titleRand = [];


for(n=0; n<75; n++) {
    titleRand[n] = n+1 + "번째 게시글";
    console.log(titleRand[n]);
}



for (let i=0; i<75; i++) {
    rand = Math.floor(Math.random() * 14);
    randViews = Math.floor(Math.random() * 999);
    
    dataArr[i] = {
        num : i+1,
        title : titleRand[i],
        writer : "admin",
        date : "2018-10-26",
        views : randViews,
        comment : {},
    }
}
