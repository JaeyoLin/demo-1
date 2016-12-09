
var isToggle = false;
var isEspCardOpen = [false, false, false, false, false];

$(document).ready(function () {
  for (let i = 1; i <= 5; i++) {
    $("#espCard" + i).click(function () {
      var frontdiv = document.getElementById('espCard' + i + 'Front');
      var backdiv = document.getElementById('espCard' + i + 'Back');
      if (isEspCardOpen[i - 1]) {
        closeCard(frontdiv, backdiv);
      } else {
        openCard(frontdiv, backdiv);
      }
      isEspCardOpen[i - 1] = !isEspCardOpen[i - 1];
    });
  }
});

$('#btnShuffle').click(function () {
  if (isToggle) {
    $(".card").each(function (e) {

      for (var i = 1; i <= 5; i++) {
        var frontdiv = document.getElementById('espCard' + i + 'Front');
        var backdiv = document.getElementById('espCard' + i + 'Back');
        closeCard(frontdiv, backdiv);
      }

      setTimeout(function () {
        $(".card").eq(e).attr("class", "col-xs-2 col-sm-2 col-md-2 col card");
      }, e * 150)

    });
  } else {
    $(".card").each(function (e) {

      setTimeout(function () {
        $(".card").eq(e).attr("class", "col-xs-2 col-sm-2 col-md-2 col card ani" + e);
      }, e * 150)

    });
  }
  isToggle = !isToggle;
});

function openCard(frontdiv, backdiv) {
  frontdiv.style.WebkitTransform = "perspective(700) rotateY(0deg)";
  backdiv.style.WebkitTransform = "perspective(700) rotateY(180deg)";
  frontdiv.style.MozTransform = "perspective(700) rotateY(0deg)";
  backdiv.style.MozTransform = "perspective(700) rotateY(180deg)";
}

function closeCard(frontdiv, backdiv) {
  frontdiv.style.WebkitTransform = "perspective(700) rotateY(-180deg)";
  backdiv.style.WebkitTransform = "perspective(700) rotateY(-0deg)";
  frontdiv.style.MozTransform = "perspective(700) rotateY(-180deg)";
  backdiv.style.MozTransform = "perspective(700) rotateY(-0deg)";
}