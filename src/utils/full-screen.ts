export function setBodySize(width: number, height: number ) {
  let tag: any = document.createElement('style')
  tag.innerHTML = `body{padding:0;margin:0;width:${width}px!important; height:${height}px!important;outline:1px dotted   #00FF00;position:absolute;}` 
  document.documentElement.firstElementChild?.appendChild(tag)
}

export function refreshScale(width: number, height: number) {
  let designWidth: number = width,
      designHeight: number = height,
      docWidth: number = window.innerWidth,
      docHeight: number = window.innerHeight,
      widthRatio: number = docWidth / designWidth, // 宽度占比
      heightRatio: number = docHeight / designHeight,
      tw: number = 0,
      th: number = 0

  if ( (docWidth / docHeight)  >= (designWidth / designHeight) ) { /*scale以高为准，高为屏幕高度*/
      // heightRatio = docHeight / designHeight
      tw = (designWidth - heightRatio*docWidth ) / 2 - (docWidth - heightRatio*docWidth)/2
      th = (designHeight - docHeight ) / 2        
      document.body.style.transform = 
          " translate( -"+tw+"px, -"+th+"px)" + " scale(" + heightRatio + "," + heightRatio + ") "
  }else{ /*scale以宽为准，宽为屏幕宽*/ 
      // widthRatio = docWidth / designWidth
      tw = (designWidth - docWidth ) / 2
      th = (designHeight - widthRatio*docHeight ) / 2 - (docHeight - widthRatio*docHeight)/2        
      // 先translate 再scale放大
      document.body.style.transform = 
          " translate( -"+tw+"px, -"+th+"px)" + " scale(" + widthRatio + "," + widthRatio + ") "
  }
}

export function getRemFontSize(width: number, height: number) {
  let pxUnit: number = 100,
      designHeight: number = height || 1080,
      designWidth: number = width || 1920,
      winWidth: number = window.innerWidth,
      winHeight: number = window.innerHeight,
      ratio = winWidth / designWidth

  if ( (winWidth / winHeight) > (designWidth / designHeight)) { //console.log('h')
      ratio = winHeight / designHeight
  }
  return ratio * pxUnit
}