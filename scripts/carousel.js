// food pictures carousel
$("#fbnext").click(function() {
  if ($("#fpic_1").is(':visible')){
    $("#fpic_1").addClass("hidden");
    $("#fpic_2").removeClass("hidden");

    $("#fsecond").addClass("current");
    $("#ffirst").removeClass("current");
    $("#fthird").removeClass("current");
  } else if ($("#fpic_2").is(':visible')){
    $("#fpic_2").addClass("hidden");
    $("#fpic_3").removeClass("hidden");

    $("#fthird").addClass("current");
    $("#fsecond").removeClass("current");
    $("#ffirst").removeClass("current");
  } else if ($("#fpic_3").is(':visible')){
    $("#fpic_3").addClass("hidden");
    $("#fpic_1").removeClass("hidden");

    $("#ffirst").addClass("current");
    $("#fsecond").removeClass("current");
    $("#fthird").removeClass("current");
  }
});

$("#fbprev").click(function() {
  if ($("#fpic_1").is(':visible')){
    $("#fpic_1").addClass("hidden");
    $("#fpic_3").removeClass("hidden");

    $("#fthird").addClass("current");
    $("#fsecond").removeClass("current");
    $("#ffirst").removeClass("current");
  } else if ($("#fpic_2").is(':visible')){
    $("#fpic_2").addClass("hidden");
    $("#fpic_1").removeClass("hidden");

    $("#ffirst").addClass("current");
    $("#fsecond").removeClass("current");
    $("#fthird").removeClass("current");
  } else if ($("#fpic_3").is(':visible')){
    $("#fpic_3").addClass("hidden");
    $("#fpic_2").removeClass("hidden");

    $("#fsecond").addClass("current");
    $("#ffirst").removeClass("current");
    $("#fthird").removeClass("current");
  }
});

// food picture current
$("#ffirst").click(function() {
  $("#fpic_1").removeClass("hidden");
  $("#ffirst").addClass("current");
  $("#fpic_2").addClass("hidden");
  $("#fsecond").removeClass("current");
  $("#fpic_3").addClass("hidden");
  $("#fthird").removeClass("current");
});

$("#fsecond").click(function() {
  $("#fpic_2").removeClass("hidden");
  $("#fsecond").addClass("current");
  $("#fpic_1").addClass("hidden");
  $("#ffirst").removeClass("current");
  $("#fpic_3").addClass("hidden");
  $("#fthird").removeClass("current");
});

$("#fthird").click(function() {
  $("#fpic_3").removeClass("hidden");
  $("#fthird").addClass("current");
  $("#fpic_1").addClass("hidden");
  $("#ffirst").removeClass("current");
  $("#fpic_2").addClass("hidden");
  $("#fsecond").removeClass("current");
});

//food picture hover
$("#ffirst").hover(function() {
    $("#ffirst").addClass("hover");
  }, function() {
    $("#ffirst").removeClass("hover");
});

$("#fsecond").hover(function() {
    $("#fsecond").addClass("hover");
  }, function() {
    $("#fsecond").removeClass("hover");
});

$("#fthird").hover(function() {
    $("#fthird").addClass("hover");
  }, function() {
    $("#fthird").removeClass("hover");
});

$("#fbprev").hover(function() {
    $("#fbprev").addClass("hoverarrow");
  }, function() {
    $("#fbprev").removeClass("hoverarrow");
});

$("#fbnext").hover(function() {
    $("#fbnext").addClass("hoverarrow");
  }, function() {
    $("#fbnext").removeClass("hoverarrow");
});

// drink pictures carousel
$("#dbnext").click(function() {
  if ($("#dpic_1").is(':visible')){
    $("#dpic_1").addClass("hidden");
    $("#dpic_2").removeClass("hidden");

    $("#dsecond").addClass("current");
    $("#dfirst").removeClass("current");
    $("#dthird").removeClass("current");
  } else if ($("#dpic_2").is(':visible')){
    $("#dpic_2").addClass("hidden");
    $("#dpic_3").removeClass("hidden");

    $("#dthird").addClass("current");
    $("#dfirst").removeClass("current");
    $("#dsecond").removeClass("current");
  } else if ($("#dpic_3").is(':visible')){
    $("#dpic_3").addClass("hidden");
    $("#dpic_1").removeClass("hidden");

    $("#dfirst").addClass("current");
    $("#dsecond").removeClass("current");
    $("#dthird").removeClass("current");
  }
});

$("#dbprev").click(function() {
  if ($("#dpic_1").is(':visible')){
    $("#dpic_1").addClass("hidden");
    $("#dpic_3").removeClass("hidden");

    $("#dthird").addClass("current");
    $("#dfirst").removeClass("current");
    $("#dsecond").removeClass("current");
  } else if ($("#dpic_2").is(':visible')){
    $("#dpic_2").addClass("hidden");
    $("#dpic_1").removeClass("hidden");

    $("#dfirst").addClass("current");
    $("#dthird").removeClass("current");
    $("#dsecond").removeClass("current");
  } else if ($("#dpic_3").is(':visible')){
    $("#dpic_3").addClass("hidden");
    $("#dpic_2").removeClass("hidden");

    $("#dsecond").addClass("current");
    $("#dfirst").removeClass("current");
    $("#dthird").removeClass("current");
  }
});

// drink picture current
$("#dfirst").click(function() {
  $("#dpic_1").removeClass("hidden");
  $("#dfirst").addClass("current");
  $("#dpic_2").addClass("hidden");
  $("#dsecond").removeClass("current");
  $("#dpic_3").addClass("hidden");
  $("#dthird").removeClass("current");
});

$("#dsecond").click(function() {
  $("#dpic_2").removeClass("hidden");
  $("#dsecond").addClass("current");
  $("#dpic_1").addClass("hidden");
  $("#dfirst").removeClass("current");
  $("#dpic_3").addClass("hidden");
  $("#dthird").removeClass("current");
});

$("#dthird").click(function() {
  $("#dpic_3").removeClass("hidden");
  $("#dthird").addClass("current");
  $("#dpic_1").addClass("hidden");
  $("#dfirst").removeClass("current");
  $("#dpic_2").addClass("hidden");
  $("#dsecond").removeClass("current");
});

//drinks picture hover
$("#dfirst").hover(function() {
    $("#dfirst").addClass("hover");
  }, function() {
    $("#dfirst").removeClass("hover");
});

$("#dsecond").hover(function() {
    $("#dsecond").addClass("hover");
  }, function() {
    $("#dsecond").removeClass("hover");
});

$("#dthird").hover(function() {
    $("#dthird").addClass("hover");
  }, function() {
    $("#dthird").removeClass("hover");
});

$("#dbprev").hover(function() {
    $("#dbprev").addClass("hoverarrow");
  }, function() {
    $("#dbprev").removeClass("hoverarrow");
});

$("#dbnext").hover(function() {
    $("#dbnext").addClass("hoverarrow");
  }, function() {
    $("#dbnext").removeClass("hoverarrow");
});
