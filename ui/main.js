//Counter code
var button = document.getElementById('counter');
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    //Capture the resonse and sore it in variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET', 'http://divya15y.imad.hasura-app.io/counter',true);
    request.send(null);
};

var commentInput = document.getElementById('comment');
var comment = commentInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var comments = ['comment1','comment2','comment3'];
    var list ='';
    for (var i=0; i<comments.length; i++) {
        list += '<li>' + comments[i] + '</li>';
    }
    var ul = document.getElementById('commentslist');
    ul.innerHTML = list;
};