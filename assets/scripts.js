var motd = [
	'TRON, he fights for the users!',
	'Part of the Nigel Beacham Appreciation Society',
	'Still glad I did\'t choose robotics',
	'Will the last student to graduate please turn out the light',
	'Panic mode enagaged',
	'I\'m growing my own Meston at home. You just need concrete and shattered dreams.',
	'Soon to be a UNIX system',
	'Dr, Wyner\'s office remains the single largest untapped source of geothermal energy',
	'I used a uni computer once. Once.',
	'We gun fail bad',
	'Soon to be a sixth century course',
	'Let\'s get down to business',
	'Apparently \'senpai\' isn\'t an appropriate way of addressing your lecturer',
];

document.getElementById('motd').innerHTML = motd[Math.floor(Math.random()*motd.length)];

delete motd;