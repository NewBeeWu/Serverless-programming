module.exports = async function (context, myTimer) {
    const accountSid = 'AC2e9932c5a9588c188088d243150ebc70';
    const authToken = '42b8b674655be85966d2568e8046e92b';

    const client = require('twilio')(accountSid, authToken);
    
    var timeStamp = new Date().toISOString();
    
    if (myTimer.IsPastDue)
    {
        context.log('JavaScript is running late!');
    }

    client.messages.create({
        mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
        to: '+642102408840',
        from: '+16517608318',
        body:'Hi there, it is time for lunch',
    })   
};
