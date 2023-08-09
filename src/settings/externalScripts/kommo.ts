export const SCRIPT_BUTTON_CONTACTS_KOMMO = `
(function (a, m, o, c, r, m) {
  a[m] = {
    id: '650424',
    hash: '3edc7ed2a2be43bd7bd98cf2079f7c45103841a795c6289ad399ea0d72238e93',
    locale: 'pt',
    inline: false,
    setMeta: function (p) {
      this.params = (this.params || []).concat([p]);
    }
  };
  a[o] =
    a[o] ||
    function () {
      (a[o].q = a[o].q || []).push(arguments);
    };
  var d = a.document,
    s = d.createElement('script');
  s.async = true;
  s.id = m + '_script';
  s.src = 'https://gso.kommo.com/js/button.js?1688142305';
  d.head && d.head.appendChild(s);
})(window, 0, 'crmPlugin', 0, 0, 'crm_plugin');
`;
