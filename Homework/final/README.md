# 小精靈
## 來源
本程式修改自 w3cschool.cn 的官方範例，網址如下：
https://7npmedia.w3cschool.cn/4-pac-man.zip

---
Original BGM: たぬきちの冒険   
作曲: MAKOOTO (The composer for the original BGM)  
HP:  
You can find the original BGM here as well:
https://dova-s.jp/bgm/play10441.html

---
## 功能
包含
* 新增網址列小圖示ICON
* 新增網站background
* 新增網站背景音樂
* 按［空格］或［Enter］暫停或繼續
* 用［W］［A］［S］［D］操縱方向
* 新增Timer
* 將所有物件吃完為勝利條件
* 吃能量豆改變小精靈速度
* 可修改NPC數量，方便增加遊戲難度系統
## 技術手段
1.新增網址列小圖示ICON
```html
<html>
<head>
	<link rel="shortcut icon" href="favicon.png">
</head>
</html>
```

2.新增background
```html
<html>
<head>
	<style>
		body {
			background-image: url('background.gif');
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: 40% 40%;
			background-position: 100% 100%;
			background-color: rgb(33, 43, 58);
		}
	</style>
</head>
</html>
```

3.新增音樂
```html
<body>
	<audio id="myAudio" controls autoplay="true" loop="true">
		<source src="BGM.mp3" type="audio/mpeg">
	</audio>
</body>	
```

4.修改按鍵設定
```js
stage.bind('keydown', function (e) {
	switch (e.keyCode) {
		case 13: //ENTER
		case 32: //空格
			this.status = this.status == 2 ? 1 : 2;
			d = !d;
			break;
		case 39://右
		case 68:
			player.control = { orientation: 0 };
			break;

		case 40: //下
		case 83:
			player.control = { orientation: 1 };
			break;
		case 37://左
		case 65:
			player.control = { orientation: 2 };
			break;
		case 38: //上
		case 87:
			player.control = { orientation: 3 };
			break;
			}
		});
```

5.新增Timer
```js
var _TIMER = setInterval(myTimer, 1000);
	var d = 1, t = 0;
	function myTimer() {
		t += d;
	}
```
Timer顯示
```js
stage.createItem({
	x: 690,
	y: 200,
	draw: function (context) {
		context.font = 'bold 28px Helvetica';
		context.textAlign = 'left';
		context.textBaseline = 'bottom';
		context.fillStyle = '#C33';
		context.fillText('Times', this.x, this.y);
		context.font = '28px Helvetica';
		context.textAlign = 'left';
		context.textBaseline = 'top';
		context.fillStyle = '#FFF';
		context.fillText(t, this.x + 12, this.y);
		}
	});
```

6.新增勝利條件
```js
var _WIN = false,
```
判斷勝利
```js
if (JSON.stringify(beans.data).indexOf(0) < 0) {	//當沒有物品的時候，進入結束畫面
	_WIN = true;
	game.nextStage();
}
```
遊戲結束畫面
```js
//結束畫面
var stage = game.createStage();
//遊戲結束
stage.createItem({
	x: game.width / 2,
	y: game.height * .35,
	draw: function (context) {
		context.fillStyle = '#FFF';
		context.font = 'bold 48px Helvetica';
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		if (_WIN)
			context.fillText('YOU WIN', this.x, this.y);
		else
			context.fillText('GAME OVER', this.x, this.y);
	}
});
```

7.新增 var _NPC

## 想改善的點
* 新增頁面，改變遊戲難度(有空再修)
* 增加遊戲音效
* 可以雙人互動
