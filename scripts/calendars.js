import Nylas from 'nylas';
Nylas.config({
    clientId: '56vp2wj5c23njvaxevx1y1xgg',
    clientSecret: 'aw33614s8g8pic6zgzad914ia',
});
var nylas =
    Nylas.with('9rmz9fljeoxc3ydmbf3p29tmn');
nylas.events
    .count()
    .then(count => {
        console.log(
            `You have ${count} events.`
        );
    });
