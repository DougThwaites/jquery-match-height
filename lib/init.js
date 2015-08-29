Template.onRendered(function () {

  var matchHeightGroups = {};

  $('[data-mh]').each(function(index, element){

    var equalHeightMatcher = $(element).attr('data-mh');

    matchHeightGroups[equalHeightMatcher];

    //Set options if any
    if($(element).attr('data-mH-options'))
    {
      console.log('Setting options: '+$(element).attr('data-mH-options') + ' on: '+equalHeightMatcher);
      matchHeightGroups[equalHeightMatcher] = JSON.parse($(element).attr('data-mH-options'));
    }

  });

  $.each(matchHeightGroups, function(mhGroup, mhOptions){

console.log(mhOptions);
    $('[data-mH="' + mhGroup + '"]').matchHeight(mhOptions);

  });

  console.log(matchHeightGroups);
});
