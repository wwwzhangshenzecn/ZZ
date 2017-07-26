$(document).ready(function(){
    var details = chrome.app.getDetails();

    var html = "<p><img src='"+details.browser_action.default_icon+"'></p>"+
            "<h2>"+details.name+"</h2>"+
            "<p>版本:v"+details.version+"</p>"+
            "<p>作者:oshine</p>"+
            "<p>@copyright 2016, 不可用于商业用途</p>";
    $("#about-box").html(html);
});