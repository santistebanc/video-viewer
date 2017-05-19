(function (window, document, d, e, o) {
  window['vdo'] = window['vdo'] || {}; 
  window['vdo'].add = window['vdo'].add || function V(a) { 
    (window['vdo'].d = window['vdo'].d || []).push(a); 
  };
  if (!window['vdo'].l) {
    window['vdo'].l = 1 * new Date(); 
    a = document.createElement('script'), 
    m = document.getElementsByTagName('script')[0];
    a.async = 1; 
    a.src = '//de122v0opjemw.cloudfront.net/vdo.js',; 
    m.parentNode.insertBefore(a, m);
  }
})(window, document, 'script', '//de122v0opjemw.cloudfront.net/vdo.js', 'vdo');
vdo.add({
  o: "${otp}",
});