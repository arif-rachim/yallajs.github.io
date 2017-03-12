var icon = $inject('components/ui-icon');
function $render() {
    return ['div', {
        style: {
            fontSize : '32px',
        }
    },
        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(false)
        }, [icon,{icon : 'work',size : '80px'}]], ['div', {
            style: contentStyle(true)
        }, ['div', 'Framework yallaJS very light and is equipped with all the necessities to build large and scalable applications. Yallajs is equipped with a management module, and routing management']]],

        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(true)
        }, ['div', 'Easy to learn, because yallajs is using the concept of stateless functional component combined with unidirectional flow state container.Stateless functional components (SFC) have very attractive features, its easy to understand because its just a pure function that can accept input and provide output based on the input without mutating the data or causing side effect. SFC is generally only used for rendering dumb components such as a container.However if an SFC given a state container that can manage data in a unidirectional flow, it can be turned into a smart components without losing the beauty of a stateless components.']],
            ['div', {
                style: contentStyle(false)
            }, [icon,{icon : 'school',size : '120px'}]]],

        ['div', {
            style: containerStyle('row')
        }, ['div', {
            style: contentStyle(false)
        }, [icon,{icon : 'check_circle',size : '80px'}]], ['div', {
            style: contentStyle(true)
        }, ['div', 'Easy to test because each component built on yallajs, can be called directly without the need for parent component. Making it easier to do the testing on each individual component']]],

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
        margin : 'auto',
        padding : '1em',
        maxWidth : '800px'
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
        'margin' : '1em'
    }
};