https://api.nytimes.com/svc/topstories/v2/magazine.json?api_key=9dozM3sCFfo81atbAnkykjb9CMRFlJA7


today = new Date();

switch (today.getHours()) {
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      $(function(){
        $("#includedContent").load("webscraper/Psalm-Morning.html");
      });
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
      $(function(){
        $("#includedContent").load("webscraper/Reading-Gospel.html");
      });
        break;
    case 15:
    case 16:
    case 17:
    case 18:
      $(function(){
        $("#includedContent").load("webscraper/Reading-First.html");
      });
        break;
    case 19:
    case 20:
      $(function(){
        $("#includedContent").load("webscraper/Reading-Second.html");
      });
        break;
    case 21:
    case 22:
    case 23:
      $(function(){
        $("#includedContent").load("webscraper/Psalm-Evening.html");
      });
        break;
}
