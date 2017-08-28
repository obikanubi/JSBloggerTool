var theme = document.getElementById("css");
var change = document.getElementById("change");
var themeValue = document.getElementById("theme");
var themeArray = ["https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css",
                  "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css",
                  "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cyborg/bootstrap.min.css",
                  "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css"];

change.onclick = function(){
  var themeIndex = themeValue.options[themeValue.selectedIndex].value;
  theme.href = themeArray[themeIndex]
}
var checkLength = document.getElementById("checkLength")

post.onkeypress = function(){
  var posts = document.getElementById("post").value.length
  var postLength = document.getElementById("postLength").innerHTML = posts
}

var wordcount = document.getElementById("wordcount");

wordcount.onclick = function(){
  document.getElementById("count").innerHTML = document.getElementById("post").value.split(" ").length
}
