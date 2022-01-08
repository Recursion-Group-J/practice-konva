
// (1) divのidを取得してstageを用意
const stage = new Konva.Stage({
  container: 'canvas-container', //親要素のdivタグのidを指定
  width: 400, //キャンバスの横幅
  height: 400 //キャンバスの高さ
});

// (2)layerを用意
const layer = new Konva.Layer();

// (3)要素を用意。まずはマップの枠(四角)を用意
const box = new Konva.Rect({
  x: 0, //配置場所
  y: 0, //配置場所
  width: 400, //横幅
  height: 400, //高さ
  fill: "#ddd", //塗り潰しの色
  stroke: "#000", //枠線の色
  strokeWidth: 1, //枠線の太さ
  opacity: 1, //透過率
  cornerRadius: [3, 3, 3, 3] //四角の角を丸める
});

layer.add(box); //作った四角をlayerにadd
stage.add(layer); //layerをstageにadd (階層の上に順番に追加していく)

layer.draw(); //これで描画

var xini = 200;
var yini = 200;

window.addEventListener("keydown",(event)=>{
  let ajstX = 0;
  let ajstY = 0;

  if (event.key === 's' ) { ajstX = 0, ajstY = 1;}
  else if (event.key === 'd') {ajstX = 0, ajstY = -1;}
  else if (event.key === 'k') {ajstX = -1, ajstY = 0;}
  else if (event.key === 'l') {ajstX = 1; ajstY = 0}

  if(xini+ajstX >= 0 && xini+ajstX <= 400 && yini+ajstY >= 0 && yini+ajstY <= 400) {
      var line = new Konva.Line({
              points: [xini, yini, xini+ajstX, yini+ajstY],
              stroke: '#696969',
              strokeWidth: 3,
              lineCap: 'round',
              lineJoin: 'round',
          })
    xini = xini + ajstX;
    yini = yini + ajstY;

    layer.add(line);
    stage.add(layer);
    layer.draw();
  }
})
