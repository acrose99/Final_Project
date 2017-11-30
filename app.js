// var commiteeID = $("#candiateForm").val(); // move to other event
//function getCandiatesAjax() {
 $(document).ready(function(){
  $('.js-goToCandiates').click(function(event) {
  event.preventDefault();
  var candiateID = $(".js-candiatesId").val();
  console.log("clicked");
  console.log(candiateID);
  $(".js-resultsCandiates").empty();
  $.ajax({
    url: "https://api.propublica.org/campaign-finance/v1/2016/candidates/" + candiateID + ".json",
        //url: "https://api.propublica.org/campaign-finance/v1/2016/candidates/P60005915.json",
        type: "GET",
        dataType: 'json',
        headers: {'X-API-Key': '5CCv5jRicKiqliU12jkshzwDABsqxbNDOfDHtcsk'},
        success: function(data) {
          console.log(data); 
　　　　　　　 $(data).each(function(index, item) {
        console.log(item.results); // this one is correct
        console.log(item.results[0].id);
        $(".js-resultsCandiates").append("<p> Total From SuperPacs: $" + item.results[0].total_from_pacs + "</p>");
                $(".js-resultsCandiates").append("<p> Total Individual Donations: $" + item.results[0].total_contributions + "</p>");
                var commiteeIdfromcandiate = item.results[0].committee; 
                $(".js-resultsCandiates").append("<p> Total Disbursements: $" +item.results[0].total_disbursements + "</p>");
                $(".js-resultsCandiates").append("<p> Committee ID:" + commiteeIdfromcandiate.substring(12, 21) + "</p>");
          })
        }
      })
  })
 });         
//}                                
//function getCommiteesAjax() {
 $(document).ready(function(){
  $('.js-goToCommitees').click(function(event) {
   event.preventDefault();
   var commiteeID = $(".js-commmiteeId").val(); 
   console.log("clicked");
   console.log(commiteeID);
   $(".js-resultsCommitees").empty();
   $.ajax({
         url: "https://api.propublica.org/campaign-finance/v1/2016/committees/"+commiteeID+".json",
         //url: "https://api.propublica.org/campaign-finance/v1/2016/committees/C00553560.json",
         type: "GET",
         dataType: 'json',
         headers: {'X-API-Key': '5CCv5jRicKiqliU12jkshzwDABsqxbNDOfDHtcsk'},
         success: function(data) {
          console.log(data); 
　　　　　　　 $(data).each(function(index, item) {
        console.log(item.results); // this one is correct
        console.log(item.results[0].id);
                $(".js-resultsCommitees").append("<p> Total From SuperPacs: $" + item.results[0].total_from_pacs + "</p>");
                $(".js-resultsCommitees").append("<p> Total Individual Donations: $" + item.results[0].total_contributions + "</p>");
                var candiateIDfromcandiate = item.results[0].candidate; 
                $(".js-resultsCommitees").append("<p> Total Disbursements: $" +item.results[0].total_disbursements + "</p>");
                $(".js-resultsCommitees").append("<p> Candiate ID:" + candiateIDfromcandiate.substring(12, 21) + "</p>");
         })
        }
      })
     })
   });         
  //}                    
//getCandiatesAjax();
//getCommiteesAjax();