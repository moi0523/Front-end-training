let dataArr = [99];

let rand;
let randViews;
let titleText = [];


for(n=0; n<75; n++) {
    titleText[n] = n+1 + "번째 게시글";
    console.log(titleText[n]);
}



for (let i=0; i<75; i++) {
    rand = Math.floor(Math.random() * 14);
    randViews = Math.floor(Math.random() * 999);
    
    dataArr[i] = {
        num : i+1,
        title : titleText[i],
        writer : "admin",
        date : "2018-10-26",
        views : randViews,
        comment : {},
    }
}
