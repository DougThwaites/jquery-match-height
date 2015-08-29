Template.onRendered(function () {

  var matchHeightGroups = {};

  $('[data-mh]').each(function(index, element){

    var equalHeightMatcher = $(element).attr('data-mh');

    matchHeightGroups[equalHeightMatcher];

    //Set options if any
    if($(element).attr('data-mH-options'))
    {
      matchHeightGroups[equalHeightMatcher] = JSON.parse($(element).attr('data-mH-options'));
    }

  });

  $.each(matchHeightGroups, function(mhGroup, mhOptions){

    $('[data-mH="' + mhGroup + '"]').matchHeight(mhOptions);

  });
});
