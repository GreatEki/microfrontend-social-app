import { registerApplication, start } from 'single-spa';

registerApplication({
	name: '@impero/navbar',
	app: () => System.import('@impero/navbar'),
	activeWhen: ['/'],
});
registerApplication({
	name: '@impero/page-one',
	app: () => System.import('@impero/page-one'),
	activeWhen: ['/pageone'],
});

// registerApplication({
//   name: "@impero/navbar",
//   app: () => System.import("@impero/navbar"),
//   activeWhen: ["/"]
// });

start({
	urlRerouteOnly: true,
});
