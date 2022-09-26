export function setBodySize(width: number, height: number) {
	const tag: any = document.createElement('style');
	tag.innerHTML = `body{padding:0;margin:0;width:${width}px!important; height:${height}px!important;outline:1px dotted   #00FF00;position:absolute;}`;
	document.documentElement.firstElementChild?.appendChild(tag);
}

export function refreshScale(width: number, height: number) {
	const designWidth: number = width;
	const designHeight: number = height;
	const docWidth: number = window.innerWidth;
	const docHeight: number = window.innerHeight;
	const widthRatio: number = docWidth / designWidth; // 宽度占比
	const heightRatio: number = docHeight / designHeight;
	let tw = 0;
	let th = 0;

	if ((docWidth / docHeight) >= (designWidth / designHeight)) { /* Scale以高为准，高为屏幕高度 */
		// heightRatio = docHeight / designHeight
		tw = ((designWidth - (heightRatio * docWidth)) / 2) - ((docWidth - (heightRatio * docWidth)) / 2);
		th = (designHeight - docHeight) / 2;
		document.body.style.transform
          = `translate( -${tw}px, -${th}px) scale(${heightRatio},${heightRatio})`;
	} else { /* Scale以宽为准，宽为屏幕宽 */
		// widthRatio = docWidth / designWidth
		tw = (designWidth - docWidth) / 2;
		th = ((designHeight - (widthRatio * docHeight)) / 2) - ((docHeight - (widthRatio * docHeight)) / 2);
		// 先translate 再scale放大
		document.body.style.transform
          = ` translate( -${tw}px, -${th}px) scale(${widthRatio},${widthRatio})`;
	}
}

export function getRemFontSize(width: number, height: number) {
	const pxUnit = 100;
	const designHeight: number = height || 1080;
	const designWidth: number = width || 1920;
	const winWidth: number = window.innerWidth;
	const winHeight: number = window.innerHeight;
	let ratio = winWidth / designWidth;

	if ((winWidth / winHeight) > (designWidth / designHeight)) { // Console.log('h')
		ratio = winHeight / designHeight;
	}

	return ratio * pxUnit;
}
