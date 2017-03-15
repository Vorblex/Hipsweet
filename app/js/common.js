$(document).ready(function() {

    $('.bxslider').bxSlider();

    $('#phone').mask('+38(000)000-00-00');

    // Tabs
    (function() {
        var flag = true;

        $('.team__header-link').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                tab = $this.closest('.team__header-item'),
                container = $this.closest('.container'),
                contentItems = container.find('.team__items').find('.team__item-content'),
                ndx = tab.data('class'),
                activeContent = contentItems.filter('.active'),
                content = contentItems.filter('.team__item-content_' + ndx),
                duration = 200;


            if (flag) {
                flag = false;
                tab.addClass('active')
                    .siblings()
                    .removeClass('active');

                activeContent.fadeOut(duration, function() {
                    content.fadeIn(duration, function() {
                        $(this).addClass('active')
                            .siblings()
                            .removeClass('active');
                        flag = true;
                    });

                });
            }


        });

    }());

    // Accordeon
    (function() {

        $('.questions__item-link').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                container = $this.closest('.questions__list'),
                item = $this.closest('.questions__item'),
                items = container.find('.questions__item')
            content = item.find('p'),
                contentAll = container.find('p'),
                duration = 300;

            if (!item.hasClass('active')) {

                items.removeClass('active');
                item.addClass('active');

                contentAll.stop(true).slideUp(duration);
                content.stop(true).slideDown(duration);

            } else {
                content.stop(true).slideUp(duration);
                items.removeClass('active');
            };

        });
    }());

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [50.45171559, 30.51956458],
            zoom: 16,
            controls: ["zoomControl"]
        });

        var coords = [
            [50.45044019, 30.52384215],
            [50.44861903, 30.51417528],
            [50.45391253, 30.51559200]
        ];
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/map_point.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-21, -55]
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        myMap.geoObjects.add(myCollection);

        // var myPlacemark = new ymaps.Placemark(
        //     [50.45044019, 30.52384215], {
        //         hintContent: 'Киев!',
        //         balloonContent: 'Столица Украины'
        //     }, {
        //         iconLayout: 'default#image',
        //         iconImageHref: '/img/icons/map_point.png',
        //         iconImageSize: [42, 59],
        //         iconImageOffset: [-21, -55]
        //     });


        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }

});
