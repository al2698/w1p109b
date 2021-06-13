<<<<<<< HEAD
=======
## 來源
本程式修改自 w3cschool.cn 的官方範例，網址如下：
https://7npmedia.w3cschool.cn/4-pac-man.zip
## 功能
包含
* 按［空格］或［Enter］暫停或繼續
* 用［W］［A］［S］［D］操縱方向
* 新增Timer
* 將所有物件吃完為勝利條件
* 吃能量豆改變小精靈速度
## 功能
1.修改按鍵設定
```js
stage.bind('keydown', function (e) {
			switch (e.keyCode) {
				case 13: //ENTER
				case 32: //空格
					this.status = this.status == 2 ? 1 : 2;
					d = !d;
					break;
				case 39:
				case 68:
					//case 100: //右
					player.control = { orientation: 0 };
					break;

				case 40: //下
				case 83:
					//case 115:
					player.control = { orientation: 1 };
					break;
				case 37:
				case 65:
					//case 97: //左
					player.control = { orientation: 2 };
					break;
				case 38: //上
				case 87:
					//case 119:
					player.control = { orientation: 3 };
					break;
			}
		});
```
2.新增Timer
```js
var _TIMER = setInterval(myTimer, 1000);
	var d = 1, t = 0;
	function myTimer() {
		t += d;
	}
```
```js
var _TIMER = setInterval(myTimer, 1000);
	var d = 1, t = 0;
	function myTimer() {
		t += d;
	}
```
>>>>>>> 9d4204c4f7cc533c20cbb1ceaf54e4b0ac1d4fd2
=======
## 來源
本程式修改自 w3cschool.cn 的官方範例，網址如下：
https://7npmedia.w3cschool.cn/4-pac-man.zip
## 功能
包含
* 按［空格］或［Enter］暫停或繼續
* 用［W］［A］［S］［D］操縱方向
* 新增Timer
* 將所有物件吃完為勝利條件
* 吃能量豆改變小精靈速度
## 功能
1.修改按鍵設定
```js
stage.bind('keydown', function (e) {
			switch (e.keyCode) {
				case 13: //ENTER
				case 32: //空格
					this.status = this.status == 2 ? 1 : 2;
					d = !d;
					break;
				case 39:
				case 68:
					//case 100: //右
					player.control = { orientation: 0 };
					break;

				case 40: //下
				case 83:
					//case 115:
					player.control = { orientation: 1 };
					break;
				case 37:
				case 65:
					//case 97: //左
					player.control = { orientation: 2 };
					break;
				case 38: //上
				case 87:
					//case 119:
					player.control = { orientation: 3 };
					break;
			}
		});
```
2.新增Timer
```js
var _TIMER = setInterval(myTimer, 1000);
	var d = 1, t = 0;
	function myTimer() {
		t += d;
	}
```
>>>>>>> 315ea5e86783daabc6b03141aca567d3d5e6a004
=======
## 來源
本程式修改自 w3cschool.cn 的官方範例，網址如下：
https://7npmedia.w3cschool.cn/4-pac-man.zip
## 功能
包含
* 新增網址列小圖示ICON
* 按［空格］或［Enter］暫停或繼續
* 用［W］［A］［S］［D］操縱方向
* 新增Timer
* 將所有物件吃完為勝利條件
* 吃能量豆改變小精靈速度
* 可修改NPC數量，方便增加遊戲難度系統
## 技術手段
2.修改按鍵設定
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
		//case 100: 
			player.control = { orientation: 0 };
			break;

		case 40: //下
		case 83:
		//case 115:
			player.control = { orientation: 1 };
			break;
		case 37://左
		case 65:
		//case 97: 
			player.control = { orientation: 2 };
			break;
		case 38: //上
		case 87:
		//case 119:
			player.control = { orientation: 3 };
			break;
			}
		});
```
3.新增Timer
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
4.新增勝利條件
```js
var _WIN = false,
```
判斷勝利
```js
if (JSON.stringify(beans.data).indexOf(0) < 0) {	//当没有物品的时候，进入结束画面
	_WIN = true;
	game.nextStage();
}
```
遊戲結束畫面
```js
//结束画面
var stage = game.createStage();
//游戏结束
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
>>>>>>> 2755ef04b759b89ee005a910ef3a8f73adaf8e9d
