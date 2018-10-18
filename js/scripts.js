var determineLargest = function(scores) {
  var highest = 0;
  for (i=1; i< scores.length; i++) {
    if (scores[i] > scores[highest]) {
      highest = i;
    }
  }
  return highest;
};

$(document).ready(function() {
  $("form#nameField").submit(function(event) {
    event.preventDefault();
    var inputName = $("#getName").val();
    if(inputName === "") {
      $(".userName").text("No name given");
    } else {
      $(".userName").text(inputName);
    }
    $("#quizBody").show();
    $("#intro").hide();
  });
  $("form#quizForm").submit(function(event) {
    event.preventDefault();
    var charScores = [0, 0, 0, 0, 0];
    var question1Answer = parseInt($("input:radio[name=question1]:checked").val());
    var question2Answer = parseInt($("input:radio[name=question2]:checked").val());
    var question3Answer = parseInt($("input:radio[name=question3]:checked").val());
    var question4Answer = parseInt($("input:radio[name=question4]:checked").val());
    var question5Answer = parseInt($("input:radio[name=question5]:checked").val());
    var question6Answer = parseInt($("input:radio[name=question6]:checked").val());
    var question7Answer = parseInt($("input:radio[name=question7]:checked").val());
    var question8Answer = parseInt($("input:radio[name=question8]:checked").val());
    var question9Answer = parseInt($("input:radio[name=question9]:checked").val());
    var question10Answer = parseInt($("input:radio[name=question10]:checked").val());

    charScores[question1Answer]++;
    charScores[question2Answer]++;
    charScores[question3Answer]++;
    charScores[question4Answer]++;
    charScores[question5Answer]++;
    charScores[question6Answer]++;
    charScores[question7Answer]++;
    charScores[question8Answer]++;
    charScores[question9Answer]++;
    charScores[question10Answer]++;

    var highest = determineLargest(charScores);

    if (highest === 0) {
      $("#quizBody").hide();
      $("#quiz").hide();
      $("#harry").show();
      $("#backButton").show();
    } else if (highest === 1) {
      $("#quizBody").hide();
      $("#quiz").hide();
      $("#ron").show();
      $("#backButton").show();
    } else if (highest === 2) {
      $("#quizBody").hide();
      $("#quiz").hide();
      $("#hermione").show();
      $("#backButton").show();
    } else if (highest === 3) {
      $("#quizBody").hide();
      $("#quiz").hide();
      $("#dumbledore").show();
      $("#backButton").show();
    } else {
      $("#quizBody").hide();
      $("#quiz").hide();
      $("#snape").show();
      $("#backButton").show();
    }
  });
  $("form#goBack").submit(function(event) {});
});
