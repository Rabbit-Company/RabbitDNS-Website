document.getElementById('dialog-button').addEventListener('click', () => hide('dialog'));

document.getElementById('chrome').addEventListener('click', () => {
	document.getElementById('dialog-title').innerText = "Google Chrome";
	document.getElementById('dialog-text').innerHTML = `
	<ul class='list-decimal'>
		<li>Click on the three-dot menu at in the top-right corner of your chrome window.</li>
		<li>Click <b>Settings</b>.</li>
		<li>Navigate to <b>Privacy and security > Security</b>.</li>
		<li>Enable the <b>Use secure DNS</b> switch.</li>
		<li>Select <b>with Custom</b> from drop-down menu.</li>
		<li>Type <b>https://security.rabbitdns.org/dns-query</b></li>
	</ul>
	<br/>
	You may also type <b>chrome://settings/security</b> as url to open the security options
	`;
	show('dialog');
});