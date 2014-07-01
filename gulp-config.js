var cfg = {};

cfg.src = {};
cfg.dest = {};

cfg.src.root = 'src';
cfg.dest.root = 'bin';

cfg.src.templates = cfg.src.root + '/templates';
cfg.dest.templates = cfg.src.root + '/templates.js';

cfg.src.browserify = cfg.src.root + '/boot.js';
cfg.dest.browserify = cfg.dest.root;

module.exports = cfg;
