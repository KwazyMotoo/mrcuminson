function isRetinaDisplay() {
    if (window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return (mq && mq.matches || (window.devicePixelRatio > 1));
    }
}

$(document).ready(function () {
    if (isRetinaDisplay() == true)
        $("#logo").attr('src', '/style/logo5_x2.png');

    var returnObj = JSON.parse(localStorage.getItem("myVotes"));
    var checkVote = $.inArray(window.location.pathname, returnObj);
    var gameUri = window.location.pathname;

    $(".my-rating").starRating({
        starSize: 25,
        useFullStars: true,
        callback: function(currentRating, $el){
            if (returnObj == null) {
                var obj = [gameUri];
                var serialObj = JSON.stringify(obj);
                localStorage.setItem("myVotes", serialObj);
                addVote(gameUri, currentRating);
            } else {
                returnObj.push(gameUri);
                var serialObj = JSON.stringify(returnObj);
                localStorage.setItem("myVotes", serialObj);
                addVote(gameUri, currentRating);
            }

        }
    });

    if (checkVote != -1) {
        $(".my-rating").starRating('setReadOnly', true);
    }


    var returnLikes = JSON.parse(localStorage.getItem("myLikes"));
    var checkLike = $.inArray(window.location.pathname, returnLikes);

    $('[aria-label="like"]').click(function () {
        var type = $(this).data('type');

        if (returnLikes == null) {
            var obj = [gameUri];
            var serialLikes = JSON.stringify(obj);
            localStorage.setItem("myLikes", serialLikes);
            addLike(gameUri, type);
            disabledLike();
        } else {
            returnLikes.push(gameUri);
            var serialLikes = JSON.stringify(returnLikes);
            localStorage.setItem("myLikes", serialLikes);
            addLike(gameUri, type);
            disabledLike();
        }

    });

    if (checkLike != -1) {
        disabledLike();
    }


});

function addVote(uri, currentRating) {
    $.ajax({
        method: 'POST',
        url: '/addvote',
        data: {
            'uri': uri,
            'rate': currentRating
        },
        success: function (res) {
            $('#numVotes').text(res);
        }
    });
}

function addLike(uri, type) {
    $.ajax({
        method: 'POST',
        url: '/addlike',
        data: {
            'uri': uri,
            'type': type
        },
        success: function (res) {
            $('#' + type).text(res);
        }
    });
}

function disabledLike() {
    $('[aria-label="like"]').addClass('disabled').attr('disabled', true);
}
