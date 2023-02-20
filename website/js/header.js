function setup(){
	let theme = localStorage.getItem('theme');
	if(theme === null || typeof(theme) === 'undefined') localStorage.setItem('theme', 'dark');

	if(!(["dark", "tokyoNight", "monokai", "solarizedDark", "light", "blue", "nord", "dracula", "gray"].includes(theme))) localStorage.setItem('theme', 'dark');
	document.getElementById("css-theme").href = "css/themes/" + localStorage.getItem('theme') + ".css";
}

setup();