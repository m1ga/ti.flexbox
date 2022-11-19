const pw = Ti.Platform.displayCaps.platformWidth;
const ph = Ti.Platform.displayCaps.platformHeight;
const ldi = Ti.Platform.displayCaps.logicalDensityFactor;
const WIDTH = (OS_ANDROID) ? pw / ldi : pw;
const HALF_WIDTH = WIDTH * 0.5;

const win = Ti.UI.createWindow({
	layout: "horizontal"
});
const TiFlexbox = require('ti.flexbox');

function createViews(opts) {
	var flexView = TiFlexbox.createFlexView({
		...opts,
		right: 20,
		bottom: 20,
		width: HALF_WIDTH - 20,
		height: 150,
		backgroundColor: "red"
	});

	for (var i = 0; i < 5; ++i) {
		var v = Ti.UI.createView({
			width: 50,
			height: 50,
			backgroundColor: "#00f",
			borderWidth: 2,
			borderColor: "#fff"
		});
		flexView.add(v);
	}
	win.add(flexView);
}


createViews({
	direction: "column"
});
createViews({
	direction: "row"
});
createViews({
	direction: "row",
	justifyContent: "spaceBetween",
});
createViews({
	direction: "row",
	justifyContent: "spaceAround",
});
createViews({
	direction: "row",
	justifyContent: "center"
});
createViews({
	direction: "row",
	alignItems: "center"
});
createViews({
	direction: "row",
	alignItems: "stretch"
});

win.open();
