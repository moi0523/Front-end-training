(function func () {
    for (let i=1; i<16; i++) {
        let j = i-1;
        console.log(i);
    
        let td_num = document.createElement("td");
        let num_ = document.createTextNode(dataArr[j].num);
        let num_id = document.getElementById("line_" + i);
        td_num.appendChild(num_);
        num_id.appendChild(td_num);
        td_num.classList.add("post_num");

        let td_title = document.createElement("td");
        let title_ = document.createTextNode(dataArr[j].title);
        let title_id = document.getElementById("line_" + i);
        td_title.appendChild(title_);
        title_id.appendChild(td_title);
        td_title.classList.add("post_title");

        let td_writer = document.createElement("td");
        let writer_ = document.createTextNode(dataArr[j].writer);
        let writer_id = document.getElementById("line_" + i);
        td_writer.appendChild(writer_);
        writer_id.appendChild(td_writer);
        td_writer.classList.add("post_writer");

        let td_date = document.createElement("td");
        let date_ = document.createTextNode(dataArr[j].date);
        let date_id = document.getElementById("line_" + i);
        td_date.appendChild(date_);
        date_id.appendChild(td_date);
        td_date.classList.add("post_date");

        let td_views = document.createElement("td");
        let views_ = document.createTextNode(dataArr[j].views);
        let views_id = document.getElementById("line_" + i);
        td_views.appendChild(views_);
        views_id.appendChild(td_views);
        td_views.classList.add("post_views");

        
        let td_comment = document.createElement("td");
        let comment_ = document.createTextNode("0");
        let comment_id = document.getElementById("line_" + i);
        td_comment.appendChild(comment_);
        comment_id.appendChild(td_comment);
        td_comment.classList.add("post_comment");
        
    }
})();
