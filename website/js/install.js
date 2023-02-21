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

document.getElementById('firefox').addEventListener('click', () => {
	document.getElementById('dialog-title').innerText = "Mozilla Firefox";
	document.getElementById('dialog-text').innerHTML = `
	<ul class='list-decimal'>
		<li>Click the menu button.</li>
		<li>Select <b>Settings</b>.</li>
		<li>In the General menu, scroll down to access <b>Network Settings</b>.</li>
		<li>Click on the <b>Settings button</b>.</li>
		<li>Click <b>Enable DNS-over-HTTPS</b>. Choose <b>Custom</b>.</li>
		<li>Type <b>https://security.rabbitdns.org/dns-query</b></li>
		<li>Press <b>OK</b> to apply.</li>
	</ul>
	<br/>
	You may also type <b>about:preferences#general</b> as url to open the security options
	`;
	show('dialog');
});

document.getElementById('opera').addEventListener('click', () => {
	document.getElementById('dialog-title').innerText = "Opera";
	document.getElementById('dialog-text').innerHTML = `
	<ul class='list-decimal'>
		<li>Click on the Opera icon to open the browser's menu.</li>
		<li>Pick <b>Settings</b> from the menu.</li>
		<li>In Settings, type <b>dns</b> on top search bar.</li>
		<li>Make sure to enable <b>Use DNS-over-HTTPS instead of the system's DNS settings</b></li>
		<li>Type <b>https://security.rabbitdns.org/dns-query</b></li>
	</ul>
	<br/>
	`;
	show('dialog');
});