const sanitizeHtml = require('sanitize-html');

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
	'h1',
	'h2',
	'h3',
	'span',
	'Image',
	'div',
	'iframe',
	'abbr',
	'kbd',
	'cite',
	'dl',
	'dt',
	'dd',
	's',
	'sub',
	'sup',
	'details',
	'summary',
]);
const allowedAttributes = {
	'*': ['id'],
	iframe: ['src', 'class', 'sandbox', 'style', 'width', 'height'],
	div: ['class', 'data-*'],
	a: ['href', 'class', 'target'],
	Image: ['src', 'alt', 'class'],
	code: ['class'],
	span: ['class'],
	abbr: ['title'],
};
// const disallowedTagsMode = 'discard';

const sanitizeHtmlOptions = { allowedTags, allowedAttributes };

module.exports = sanitizeHtmlOptions;
