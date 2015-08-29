


Meteor wrapper for jquery.matchHeight.js
-------------------------------------------------

> matchHeight makes the height of all selected elements exactly equal.
It handles many edge cases that cause similar plugins to fail.

All thanks goes to [Liam](https://github.com/liabru) :D


----------


**Installation:**
-----------------
    meteor add dougthwaites:jquery-equal-height

----------

**Usage:**
----------

Add the data attribute data-mH with a group name to all elements you would like to be the same height.

Add the data attribute data-mH-options to any of the elements in the group to pass in the original plugins options.

    <div data-mH="groupName" data-mH-option='{"byRow":false}'></div>
    <div data-mH="groupName"></div>
    <div data-mH="groupName"></div>


----------

*This is my first Meteor package so please feel free to leave any comments good or bad ;)*

*I will submit this as a PR to the original author to add Meteor support but I would like to wait until I am more familiar with Meteors package system and also I didnt find anything similar so I hope I am not poluting the Meteor package eco-system.*

*Please let me know if you are aware of a better package or one maintained by an original author and I will gladly remove this one.*

*Cheers ;)*

***DougT***

> Written with [StackEdit](https://stackedit.io/).
