$(document).ready(function() {
  $("#add-cast-member").click(function() {
    $(".new-cast-member").append('<div class="new-cast-member">' +
                                  '<div class="form-group">' +
                                    '<label for="new-actor">Actor</label>' +
                                    '<input type="text" class="form-control new-actor">' +
                                    '<label for="new-charcter">Character</label>' +
                                    '<input type="text" class="form-control new-character">' +
                                  '</div>' +
                                  '</div>');
  });

  $("form#new-film").submit(function(event) {
    event.preventDefault();

    var inputtedTitle = $("input#new-title").val();
    var inputtedGenre = $("input#new-genre").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedDirector = $("input#new-director").val();

    var newFilm = { filmTitle: inputtedTitle,
                    genre: inputtedGenre,
                    year: inputtedYear,
                    director: inputtedDirector,
                    cast: [] };

    $(".new-cast-member").each(function() {
      var inputtedActor = $(this).find("input.new-actor").val();
      var inputtedCharacter = $(this).find("input.new-character").val();

      var newCastMember = { actor: inputtedActor,
                            character: inputtedCharacter };
      newFilm.cast.push(newCastMember);
    });


    $("ul#films").append("<li><span class='film'>" + newFilm.filmTitle + "</span></li>");

    $(".film-list").fadeIn();

    $(".film").last().click(function() {
      $("#show-film").show();

      $("#show-film h2").text(newFilm.filmTitle);
      $(".genre").text(newFilm.genre);
      $(".year").text(newFilm.year);
      $(".director").text(newFilm.director);

      $("ul#cast").text("");
      newFilm.cast.forEach(function(castMember) {
        $("ul#cast").append("<li>" + castMember.actor + ": " + castMember.character + "</li>");
      });
    });


    $("input#new-title").val("");
    $("input#new-genre").val("");
    $("input#new-year").val("");
    $("input#new-director").val("");
    $("input.new-actor").val("");
    $("input.new-character").val("");
  });
});
