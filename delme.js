var critical = require('critical');

critical.generate({
    inline: true,
    base: './',
    src: 'index.html',
    target: {html: 'index-critical.html', css: 'critical.css'},
    width: 1300,
    height: 900
});