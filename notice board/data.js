let dataArr = [99];

let rand;
let randViews;
let titleRand = [];

titleRand[0] = "안녕하세요.";
titleRand[1] = "새로운 게시글";
titleRand[2] = "제목없음";
titleRand[3] = "12345";
titleRand[4] = "67890";
titleRand[5] = "AAAAA";
titleRand[6] = "BBBBB";
titleRand[7] = "CCCCC";
titleRand[8] = "DDDDD";
titleRand[9] = "EEEEE";
titleRand[10] = "FFFFF";
titleRand[11] = "GGGGG";
titleRand[12] = "HHHHH";
titleRand[13] = "IIIII";
titleRand[14] = "JJJJJ";



for (let i=0; i<14; i++) {
    rand = Math.floor(Math.random() * 14);
    randViews = Math.floor(Math.random() * 999);

    dataArr[i] = {
        num : i+1,
        title : titleRand[rand],
        writer : "admin",
        date : "2018-10-26",
        views : randViews,
        comment : {},
    }
}
