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
