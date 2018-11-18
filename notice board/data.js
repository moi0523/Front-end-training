let dataArr = [99];
let randViews;
let titleText = [];
let page_content = [];


for(n=1; n<76; n++) {
    titleText[n] = n + "번째 게시글";
    page_content[n] = "content " + n;
}

for (let i=1; i<76; i++) {
    randViews = Math.floor(Math.random() * 999);
    
    dataArr[i] = {
        num : i,
        title : titleText[i],
        writer : "admin",
        date : "2018-10-26",
        views : randViews,
        comment : {},
        content : page_content[i],
    }
}
