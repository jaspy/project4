module.exports = {
  root: true,
  env: {
    browser: true,
	node: true,
	mocha: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { 
		"semi": true, 
		"singleQuote": true, 
		"tabWidth": 2, 
		"printWidth": 80, 
		"trailingComma": "all", 
		"useTabs": false 
	}],
	"vue/singleline-html-element-content-newline": "off",
	"vue/html-indent": "off",
	"vue/multiline-html-element-content-newline": "off",
	"vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never" ,
      "selfClosingTag": "always"
    }],
    "lines-between-class-members": ["error", "always"],
  }
}