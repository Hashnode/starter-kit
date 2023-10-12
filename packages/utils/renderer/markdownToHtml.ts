import sanitizeHtml from 'sanitize-html';
import sanitizeHtmlOptions from './sanitizeHTMLOptions';

const marked = require('./marked');
const renderer = new marked.Renderer();

// @ts-ignore
renderer.link = function (href, title, text) {
	var link = marked.Renderer.prototype.link.call(this, href, title, text);

	var linkIsUserMention =
		title &&
		title.includes('s Profile - Hashnode') &&
		href &&
		href.includes('https://hashnode.com');

	if (linkIsUserMention) {
		return link.replace('<a', "<a class='user-mention' target='_blank' rel='noopener noreferrer'");
	}

	if (href.indexOf('#') === 0) {
		return link.replace('<a', "<a class='post-section-overview'");
	}

	return link.replace('<a', "<a target='_blank' rel='noopener noreferrer' ");
};

// @ts-ignore
renderer.tablecell = function (content) {
	var chunks = content.split('&lt;br&gt;-');

	if (chunks.length === 1) {
		return '<td>' + content + '</td>';
	}

	if (chunks[0].indexOf('- ') === 0) {
		chunks[0] = chunks[0].substring(1);
	}

	var html = '';

	// @ts-ignore
	chunks.forEach(function (chunk) {
		html += '<li>' + chunk + '</li>';
	});

	return '<td><ul>' + html + '</ul></td>';
};

const markedOpts = {
	renderer: renderer,
	gfm: true,
	tables: true,
	sanitize: false,
	// @ts-ignore
	highlight: function (code, lang) {
		const highlightjs = require('./highlight');
		// Fix to prevent content-preview API from crashing on inputting long codeblocks with mixed characters without language.
		lang = lang || 'javascript';
		if (!lang) {
			return highlightjs.highlightAuto(code).value;
		}
		if (highlightjs.getLanguage(lang)) {
			return highlightjs.highlight(lang, code, true).value;
		} else {
			return highlightjs.highlightAuto(code, []).value;
		}
	},
};

export const markdownToHtml = (contentMarkdown: string) => {
	const content = sanitizeHtml(marked(contentMarkdown, markedOpts), sanitizeHtmlOptions);
	return content;
};
