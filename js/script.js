/* #6 start the #external #action and say hello */
console.log("App is alive");

//getting current channel
// var currentChannelName = $('#channels .selected').html().split('\n');
// currentChannelName = currentChannelName[1].split('#');
// var currentChannel = eval(currentChannelName[1] + 'Ch');

//current channel
var currentChannel;
console.log(currentChannel);

//adding current location
var currentLocation = {longitude: '11°34\'31.2"', latitude: '48°09\'20.4"', what3words: 'steaming.munched.leafing'};

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelObj Object which is changed
 */
function switchChannel(channelObj) {
    //Log the channel switch
    console.log("Tuning in to channel ", channelObj.name);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelObj.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/' + channelObj.createdBy + '" target="_blank"><strong>' + channelObj.createdBy + '</strong></a>';

    /* sets the star in the app bar accordingly to the object */
    (channelObj.starred) ? (star(true)):(star(false));

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelObj.name + ')').addClass('selected');

    // update currentChannel
    currentChannel = channelObj;
}

/* star/unstar function */
function star(status) {
    var channelName =  $('#channel-name').html().split('#');
    console.log(channelName[1]);
    channelObj = eval(channelName[1] + 'Ch');
    if (status === true) { //starred
        $('#channel-star').removeClass('far');
        $('#channel-star').addClass('fas');
        console.log(channelObj);
    } else if (status === false) { //not starred
        $('#channel-star').removeClass('fas');
        $('#channel-star').addClass('far');
        console.log(channelObj);
    } else { //toggle function for the onclick listener
        $('#channel-star').toggleClass('fas');
        $('#channel-star').toggleClass('far');
        channelObj.starred = (channelObj.starred) ? (false):(true);
        $('#channels li:contains(' + channelObj.name + ')').find('i:first').toggleClass('fas');
        $('#channels li:contains(' + channelObj.name + ')').find('i:first').toggleClass('far');
        console.log(channelObj);
    }
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
