var icon = $inject('components/ui-icon');
var browserSize = $inject('layout/browser-size');
function $render() {
    debugger;
    var videoWidth = browserSize.width() * 0.8;
    videoWidth = videoWidth > 800 ? 800 : videoWidth;
    var videoHeight = (videoWidth / 560 ) * 315;
    return ['div', {
        style: {
            fontSize: '26px',
        }
    },
        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(true)
        }, ['div', 'Yallajs is a javascript framework for building scalable HTML 5 application. ' +
        'Yallajs uses the concept of stateless component combined with a unidirectional state container to aim scalable javascript application. ' +
        'Yallajs equipped with module management and routing management out of the box. By using Incremental ' +
        'DOM instead of Virtual DOM, yallajs left small memory footprint and still achieve good performance.']]],

        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(false)
        }, [icon, {icon: 'work', size: '80px'}]], ['div', {
            style: contentStyle(true)
        }, ['div', 'Framework yallaJS very light and is equipped with all the necessities to build large and scalable applications.']]],
        ['div', {
            style: {
                textAlign: 'center'
            }
        }, ['iframe', {
            width: videoWidth,
            height: videoHeight,
            src: 'https://www.youtube.com/embed/Ab6_tfH283c',
            frameborder: '0',
            allowfullscreen: true
        }]],
        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(true)
        }, ['div', 'Easy to learn, yallajs is using the concept of stateless functional component combined with unidirectional flow state container.']],
            ['div', {
                style: contentStyle(false)
            }, [icon, {icon: 'school', size: '120px'}]]],
        ['div', {
            style : {
                textAlign : 'center'
            }
        },
            ['iframe', {
                width: videoWidth,
                height: videoHeight,
                src: 'https://www.youtube.com/embed/aXBFOM89xVI',
                frameborder: '0',
                allowfullscreen: true
            }]
        ],
        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(false)
        }, [icon, {icon: 'check_circle', size: '80px'}]], ['div', {
            style: contentStyle(true)
        }, ['div', 'Easy to test. Each component built on yallajs, can be called directly without the need for parent component. Making it easier to do the testing on each individual component']]],

    ];
}


var containerStyle = function (direction) {
    return {
        'display': '-ms-flexbox',
        'display': '-webkit-flex',
        'display': 'flex',
        '-webkit-flex-direction': direction,
        '-ms-flex-direction': direction,
        'flex-direction': direction,
        '-webkit-flex-wrap': 'nowrap',
        '-ms-flex-wrap': 'nowrap',
        'flex-wrap': 'nowrap',
        '-webkit-justify-content': 'flex-start',
        '-ms-flex-pack': 'start',
        'justify-content': 'flex-start',
        '-webkit-align-content': 'stretch',
        '-ms-flex-line-pack': 'stretch',
        'align-content': 'stretch',
        '-webkit-align-items': 'flex-start',
        '-ms-flex-align': 'start',
        'align-items': 'flex-start',
        margin: 'auto',
        padding: '1em',
        maxWidth: '800px'
    }
};

var contentStyle = function (grow) {
    return {
        '-webkit-order': '0',
        '-ms-flex-order': '0',
        'order': '0',
        '-webkit-flex': grow ? '1 1 auto' : '0 1 auto',
        '-ms-flex': grow ? '1 1 auto' : '0 1 auto',
        'flex': grow ? '1 1 auto' : '0 1 auto',
        '-webkit-align-self': 'stretch',
        '-ms-flex-item-align': 'stretch',
        'align-self': 'stretch',
        'margin': '1em'
    }
};