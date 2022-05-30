const themeConfig = (varName) => {
	return ({ opValue }) => {
		if (opValue !== undefined) {
			return `rdba(var(${varName}), ${opValue})`;
		}
		return `rgb(var(${varName}))`;
	};
};

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				skin: {
					primary: themeConfig("--primary"),
					"primary-light": themeConfig("--primary-light"),
					"primary-dark": themeConfig("--primary-dark"),
					"dark-main": themeConfig("--dark-main"),
					"dark-acent": themeConfig("--dark-acent"),
					"light-main": themeConfig("--light-main"),
					"light-acent": themeConfig("--light-acent"),
				},
			},
		},
		container: {
			center: true,
		},
	},
	plugins: [],
};
