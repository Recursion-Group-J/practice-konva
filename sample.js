
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


var group = new Konva.Group({
    x: 10,
    y: 10
});

// [x,y]の座標が詰まった配列
var table = [[3,10],[5,20],[10,50],[30,60],[50,80],[80,100],[100,100],[110,120],[120,150],[150,170],[250,250]];

for (let i = 1; i < table.length; i++) {
    var prevX = table[i-1][0];
    var prevY = table[i-1][1];
    var currentX = table[i][0];
    var currentY = table[i][1];
    console.log(i, prevX, prevY, currentX, currentY);

    var line = new Konva.Line({
        points: [prevX, prevY, currentX, currentY],
        stroke: '#696969',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round',
        id: `line_${i}`  //lineごとにidをふれる
    })
    line.on('mouseup', (e) => {
        console.log(e.currentTarget.attrs.id); //クリックした時にid取得できる
    });
        group.add(line);
    }

  layer.add(group); // 最後groupをlayerにaddする
  stage.add(layer); // layerをstageにaddする
  layer.draw();     // 描画

