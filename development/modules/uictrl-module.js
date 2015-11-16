"use strict";var//jshint ignore:line
/*
 * CORE MODULE
 * Entry point of the application
 * */
UIController = { //jshint ignore:line
    attachDragToBase: function () {
        // Attaches drag event
        Visualization.$base.draggable({
            containment: Visualization.containment,
            cursor: "move"
        });
    },

    attachOnClickBtnEvent: function () {
        $("." + BUTTON_CLASS).mousedown(function () {
                var $this = $(this);

                $this.addClass(CLICKED_CLASS);

                setTimeout(function () {
                    $this.removeClass(CLICKED_CLASS);
                }, 500);
            })
            .mouseup(function () {
                $(this).removeClass(CLICKED_CLASS);
            });
    },

    load: function () {
        this.attachDragToBase();
        this.attachOnClickBtnEvent();
    }
};