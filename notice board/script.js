let post;
let exit_btn;
let title_btn;

post = document.getElementById("post");

exit_btn = document.getElementById("post_exit");
exit_btn.onclick = function() {
    console.log('hi');
    post.style.display = "none";
};


function func (nn) {
    
    for (let i=15*nn+1; i<15*(nn+1)+1; i++) {
        let val = 15;
        let j = i-1;
        console.log(i);

        
        let n = i%val;
        if (i%15 == 0) {
            n = i/i+14;
        }
        

        let td_num = document.createElement("td");
        let num_ = document.createTextNode(dataArr[j].num);
        let num_id = document.getElementById("line_" + n);
        td_num.appendChild(num_);
        num_id.appendChild(td_num);
        td_num.classList.add("post_num");

        let td_title = document.createElement("td");
        let title_ = document.createTextNode(dataArr[j].title);
        let title_id = document.getElementById("line_" + n);
        td_title.appendChild(title_);
        title_id.appendChild(td_title);
        td_title.classList.add("post_title");
        td_title.id = "post_btn"+i;

        let td_writer = document.createElement("td");
        let writer_ = document.createTextNode(dataArr[j].writer);
        let writer_id = document.getElementById("line_" + n);
        td_writer.appendChild(writer_);
        writer_id.appendChild(td_writer);
        td_writer.classList.add("post_writer");

        let td_date = document.createElement("td");
        let date_ = document.createTextNode(dataArr[j].date);
        let date_id = document.getElementById("line_" + n);
        td_date.appendChild(date_);
        date_id.appendChild(td_date);
        td_date.classList.add("post_date");

        let td_views = document.createElement("td");
        let views_ = document.createTextNode(dataArr[j].views);
        let views_id = document.getElementById("line_" + n);
        td_views.appendChild(views_);
        views_id.appendChild(td_views);
        td_views.classList.add("post_views");
        
        let td_comment = document.createElement("td");
        let comment_ = document.createTextNode("0");
        let comment_id = document.getElementById("line_" + n);
        td_comment.appendChild(comment_);
        comment_id.appendChild(td_comment);
        td_comment.classList.add("post_comment");


        title_btn = document.querySelector("#post_btn"+i);
        title_btn.onclick = function() {
            post.style.display = "inline";
        }
    }
};
