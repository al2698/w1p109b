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
3.新增Timer
```js
var _TIMER = setInterval(myTimer, 1000);
	var d = 1, t = 0;
	function myTimer() {
		t += d;
	}
```
