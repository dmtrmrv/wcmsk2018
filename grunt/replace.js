module.exports = {
	// Add empty lines after curly braces.
	line_after_brace: {
		src: [ 'style.css', 'assets/css/editor-style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\}\n(?!\n)(?!\})|\}(?=.)/g,
			to: function() {
				return '}\n\n';
			}
		} ]
	},

	// Add empty lines after DocBlocks and comments.
	line_after_docblock: {
		src: [ 'style.css', 'assets/css/editor-style.css' ],
		overwrite: true,
		replacements: [ {
			from: /\*\/\n(?!\n)|\*\/(?=.)/g,
			to: function() {
				return '*/\n\n';
			}
		} ]
	}
	
}
