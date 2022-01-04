/*global $ */
let textDate = "";


$(document).ready(function(){
  $(".zero").click(function() {
        $(".textDate").text(textDate + "0");
        textDate=textDate+"0"
  });
  
  $(".zerozero").click(function() {
    if (textDate != ""){
        $(".textDate").text(textDate + "00");
        textDate=textDate+"00"
    }
  });
  
  $(".point").click(function() {
    let dontDuplicatePoint= textDate.match(/\./);
    if (textDate != "" && dontDuplicatePoint== null){
        $(".textDate").text(textDate + ".");
        textDate=textDate+"."
    }
    
  });
 
  $(".one").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "1");
      textDate=textDate+"1"
    }
  });
  
  $(".two").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "2");
      textDate=textDate+"2"
    }
  });
  
  $(".three").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "3");
      textDate=textDate+"3"
    }
  });
  
  $(".four").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "4");
      textDate=textDate+"4"
    }
  });
  
  $(".five").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "5");
      textDate=textDate+"5"
    }
  });
  
  $(".six").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "6");
      textDate=textDate+"6"
    }
  });
  
  $(".seven").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "7");
      textDate=textDate+"9"
    }
  });
  
  $(".eight").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "8");
      textDate=textDate+"8"
    }
  });
  
  $(".nine").click(function() {
    if (textDate != "0"){
      $(".textDate").text(textDate + "9");
      textDate=textDate+"9"
    }
  });
  
  $(".allclear").click(function() {
    $(".textDate").text("0");
    textDate=""
  });
  
  $(".plus").click(function() {
    let dontDuplicatePlus= textDate.match(/\+$/);
    let dontDuplicateMinus= textDate.match(/\-$/);
    let dontDuplicateTimes= textDate.match(/\*$/);
    let dontDuplicateDivided= textDate.match(/\/$/);
    if (textDate != "" && dontDuplicatePlus== null && dontDuplicateMinus == null && dontDuplicateTimes== null && dontDuplicateDivided== null){
        $(".textDate").text(textDate + "+");
        textDate=textDate+"+"
    }
  });
  
  $(".minus").click(function() {
    let dontDuplicatePlus= textDate.match(/\+$/);
    let dontDuplicateMinus= textDate.match(/\-$/);
    let dontDuplicateTimes= textDate.match(/\*$/);
    let dontDuplicateDivided= textDate.match(/\/$/);
    if (textDate != "" && dontDuplicatePlus== null && dontDuplicateMinus == null && dontDuplicateTimes== null && dontDuplicateDivided== null){
        $(".textDate").text(textDate + "-");
        textDate=textDate+"-"
    }
  });
  
  $(".times").click(function() {
    let dontDuplicatePlus= textDate.match(/\+$/);
    let dontDuplicateMinus= textDate.match(/\-$/);
    let dontDuplicateTimes= textDate.match(/\*$/);
    let dontDuplicateDivided= textDate.match(/\/$/);
    if (textDate != "" && dontDuplicatePlus== null && dontDuplicateMinus == null && dontDuplicateTimes== null && dontDuplicateDivided== null){
        $(".textDate").text(textDate + "*");
        textDate=textDate+"*"
    }
  });
  
  $(".divided").click(function() {
    let dontDuplicatePlus= textDate.match(/\+$/);
    let dontDuplicateMinus= textDate.match(/\-$/);
    let dontDuplicateTimes= textDate.match(/\*$/);
    let dontDuplicateDivided= textDate.match(/\/$/);
    if (textDate != "" && dontDuplicatePlus== null && dontDuplicateMinus == null && dontDuplicateTimes== null && dontDuplicateDivided== null){
        $(".textDate").text(textDate + "/");
        textDate=textDate+"/"
    }
  });
  
  $(".equal").click(function() {
    textDate=(eval(textDate));
    $(".textDate").text(eval(textDate));
  });
  
});