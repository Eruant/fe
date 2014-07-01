var templates = require('./templates'),
  domify = require('domify'),
  domready = require('domready');

module.exports = {

  boot: function () {
    window.app = this;

    this.layout = 'layout_default';
    this.site = {
      title: 'Site title'
    };

    var options = {
      page: {
        title: 'Template test',
        content: 'ANOTHER TEMPLATE GOES HERE'
      }
    };

    this.renderTemplate(this.layout, options);
    this.updateDOM();
  },

  renderTemplate: function (template, cfg) {

    if (!template) {
      throw new Error('Template string no defined');
    }

    var markup = templates[template](cfg);
    this.el = domify(markup);
  },

  updateDOM: function () {

    var self = this;

    domready(function () {
      var body = window.document.getElementsByTagName('body')[0];
      body.appendChild(self.el);
    });
  }

};

module.exports.boot();
