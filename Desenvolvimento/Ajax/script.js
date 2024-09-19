document.getElementById('loadDataBtn').addEventListener('click', loadData);
function loadData() {
var xhr = new XMLHttpRequest();
var documento;
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true);
xhr.onload = function() {
if (this.status == 200){
    documento = JSON.parse(this.responseText);
     var output = <li>xhr.responseText </li>
}
}
}