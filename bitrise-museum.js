var main = document.querySelector('main');
var template = '<a href="#url#" target="_blank" title="#url#"><img src="#url#" alt="#url#"></a>';

var images = [
    "images/1-continuous.svg",
    "images/2-code.svg",
    "images/3-hosted.svg",
    "images/4-open.svg",
    "images/5-customizable.svg",
    "images/6-support.svg",
    "images/bitbot-sad.svg",
    "images/bitrise-referral-image.svg",
    "images/deploy-app-to-real-device.svg",
    "images/guide-01.svg",
    "images/guide-02.svg",
    "images/guide-03.svg",
    "images/logo_xmas.svg",
    'images/mini-bot-purple.svg',
    "images/promotion-cathead.png",
    "images/promotion-t-shirt.png",
    "images/public-page-logo.svg",
    "images/space-with-items.svg",
    "images/support_staff_badge.svg",
    'images/support-bitbot-purple.svg',
    'images/support-purr-request.svg',
    'images/welcome_bot.svg',
];

var html = '';
images.forEach((url) => {
    html += template.replace(/#url#/g, url);
});
main.innerHTML = html;