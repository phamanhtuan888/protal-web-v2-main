import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute('page_id', 'PAGE-ID');
chatbox.setAttribute('attribution', 'biz_inbox');
window.fbAsyncInit = function() {
  FB.init({ xfbml: true, version: 'API-VERSION' });

  // FB.api(
  //   `/${publicRuntimeConfig.FACEBOOK_PAGE_ID}/chat_plugin
  //   ?welcome_screen_greeting:YOUR-WELCOME-TEXT
  //   &theme_color:553399
  //   &entry_point_icon:MESSENGER-ICON
  //   &entry_point_label:CHAT
  //   &access_token=PAGE-ACCESS-TOKEN`,
  //   function(response) {
  //     if (response && !response.error) {
  //       /* handle the result */
  //     }
  //   },
  // );

  FB.api(`/${publicRuntimeConfig.FACEBOOK_PAGE_ID}/chat_plugin`, function(response) {
    if (response && !response.error) {
      /* handle the result */
    }
  });
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
