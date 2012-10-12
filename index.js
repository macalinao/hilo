$(function(){
    var cards = {
        "2": 1,
        "3": 1,
        "4": 1,
        "5": 1,
        "6": 1,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": -1,
        "J": -1,
        "Q": -1,
        "K": -1,
        "A": -1
    };

    var suits = ["&spades;", "&hearts;", "&clubs;", "&diams;"];

    function generateCard() {
        // Get the next card number
        var card;
        var count = 0;
        for (var c in cards) {
            if (Math.random() < 1/++count) {
               card = c;
           }
        }

        var suitid = Math.floor(Math.random() * suits.length);
        var suit = suits[suitid];

        return {
            name: card + suit,
            val: cards[card],
            color: ((suitid % 2 == 0) ? "#000000" : "#ff0000")
        };
    }

    var count = 0;
    var deals = 0;

    function space() {
        if (deals < 5) {
            var cards = $("#cards").html('');
            var table = $('<table></table>').addClass('carddisplay');
            for (var i = 0; i < 3; i++) {
                var row = $('<tr></tr>');
                for (var j = 0; j < 2; j++) {
                    var el = $('<td></td>');

                    var card = generateCard();
                    el.html(card.name).css('color', card.color);
                    count += card.val;
                    console.log(count);

                    row.append(el);
                }
                table.append(row);
            }
            cards.append(table);
            deals++;
        } else {
            var cards = $("#cards").html(
                '<p>The count is ' + count + '.</p>' +
                '<small>Were you right? If not try again.</small>'
            );
            count = 0;
            deals = 0;
        }
    }
    jwerty.key('space', space);
});
