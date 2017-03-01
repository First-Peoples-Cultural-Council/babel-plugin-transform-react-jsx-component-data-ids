'use strict';

var componentNameAttr = 'data-guide-role';
var htmlTagsArray = ['doctype', 'html', 'head', 'title', 'base', 'link', 'meta', 'style', 'script', 'noscript', 'body', 'article', 'nav', 'aside', 'section', 'header', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'main', 'address', 'p', 'hr', 'pre', 'blockquote', 'ol', 'ul', 'li', 'dl', 'dt', 'dd', 'figure', 'figcaption', 'div', 'table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'col', 'colgroup', 'form', 'fieldset', 'legend', 'label', 'input', 'button', 'select', 'datalist', 'optgroup', 'option', 'textarea', 'keygen', 'output', 'progress', 'meter', 'details', 'summary', 'command', 'menu', 'del', 'ins', 'img', 'iframe', 'embed', 'object', 'param', 'video', 'audio', 'source', 'canvas', 'track', 'map', 'area', 'a', 'em', 'strong', 'i', 'b', 'u', 's', 'small', 'abbr', 'q', 'cite', 'dfn', 'sub', 'sup', 'time', 'code', 'kbd', 'samp', 'var', 'mark', 'bdi', 'bdo', 'ruby', 'rt', 'rp', 'span', 'br', 'wbr'];

module.exports = function (_ref) {
	var t = _ref.types;


	function generateName(componentName, role) {
		if (role != null) {
			return componentName + '-' + role;
		}

		return componentName;
	}

	function makeAttribute(componentName) {
		var attributeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'component-id';

		return t.jSXAttribute(t.jSXIdentifier('data-' + attributeName), t.stringLiteral('' + componentName));
	}

	return {
		visitor: {
			JSXOpeningElement: function JSXOpeningElement(path, state) {
				var _path$container$openi = path.container.openingElement,
				    attributes = _path$container$openi.attributes,
				    loc = _path$container$openi.loc,
				    name = _path$container$openi.name;


				if (!loc) {
					return;
				}

				var implicitRole = void 0,
				    componentNameAttrIndex = null;

				attributes.forEach(function (attribute, i) {
					if (attribute.hasOwnProperty('name') && attribute.name.hasOwnProperty('name') && attribute.name.name == componentNameAttr) {
						if (attribute.hasOwnProperty('value') && attribute.value.hasOwnProperty('value')) {
							implicitRole = attribute.value.value;
							componentNameAttrIndex = i;
							return;
						}
					}
				}, this);

				// Remove implicit role attribute
				if (componentNameAttrIndex != null) {
					attributes.splice(componentNameAttrIndex, 1);
				}

				if (!name.hasOwnProperty('name')) {
					return;
				}

				// Skip for HTML tags if no role attribute specified
				if (componentNameAttrIndex == null) {
					if (htmlTagsArray.indexOf(name.name) !== -1) {
						return;
					};
				}

				attributes.push(makeAttribute(generateName(name.name, implicitRole), state.opts.attributeName));
			}
		}
	};
};