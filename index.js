
var wrapper = document.getElementsByClassName("wrapper")[0];

wrapper.onclick = function (e) {
    if (e.target != this) {
        var event = e || window.event;
        var ele = event.target;
        var ig = document.getElementsByClassName("active")[0];
        if (ig) {
            if (ele == ig) {
                ig ? ig.className = "img-wrap" : "";
            } else {
                ig ? ig.className = "img-wrap" : "";
                ele.className = "img-wrap active";
                ele.className = "img-wrap active place";
            }

        } else {
            ig ? ig.className = "img-wrap" : "";
            ele.className = "img-wrap active";
            ele.className = "img-wrap active place";
        }
    }
}