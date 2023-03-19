const keys = document.querySelector('.buttonsSec');
var calc = [];

keys.addEventListener('click', (e)=>{
	var action = e.target.getAttribute('value');

	if (action == 'DEL') {

		calc.pop()
		document.querySelector('.resultDisplay').innerHTML = calc.join('');

	} else if (action == 'RESET') {

		calc = [];
		document.querySelector('.resultDisplay').innerHTML = calc.join('');

	} else if (action == '=') {

		var op = calc.join('');
		var result = eval(op);
		calc = [];
		calc.push(result);
		document.querySelector('.resultDisplay').innerHTML = calc;

	} else {

		calc.push(action);
		document.querySelector('.resultDisplay').innerHTML = calc.join('');

	}
});

function changeTheme(value) {
	var background = document.querySelector('body').style;
	var title = document.querySelector('.appTitle').style;
	var themeAreaP = document.querySelector('.themeArea p').style;
	var radioInputLabel = document.querySelectorAll('.numberTheme');
	var backgroundToggle = document.querySelector('.inputs').style;
	var inputButton = document.querySelectorAll('input[name=theme]');
	var backgroundDisplay = document.querySelector('.displaySec').style;
	var resultColor = document.querySelector('.resultDisplay').style;
	var backgroundAreaKeys = document.querySelector('.buttonsSec').style;
	var CommomKeys = document.querySelectorAll('.commomBtn');
	var Reset_Del_Keys = document.querySelectorAll('.reset_del_Btn');
	var EqualKey = document.querySelectorAll('.equalBtn');

	switch (value) {
		case "1":
			background.background = 'hsl(222, 26%, 31%)';
			title.color = 'hsl(0, 0%, 100%)';
			themeAreaP.color = 'hsl(0, 0%, 100%)';
			backgroundToggle.background = 'hsl(223, 31%, 20%)';
			backgroundDisplay.background = 'hsl(224, 36%, 15%)';
			resultColor.color = 'hsl(0, 0%, 100%)';
			backgroundAreaKeys.background = 'hsl(223, 31%, 20%)';

			radioInputLabel.forEach(el=>{
				el.style.color = 'hsl(0, 0%, 100%)';
			});

			Reset_Del_Keys.forEach(el=>{
			el.style.background = 'hsl(225, 21%, 49%)';
			el.style.color = 'hsl(0, 0%, 100%)';
			el.style.borderBottom = '4px solid hsl(224, 28%, 35%)';
			});
			
			EqualKey.forEach(el=>{
			el.style.background = 'hsl(6, 63%, 50%)';
			el.style.color = 'hsl(0, 0%, 100%)';
			el.style.borderBottom = '4px solid hsl(6, 70%, 34%)';
			});

			CommomKeys.forEach(el=>{
			el.style.background = 'hsl(30, 25%, 89%)';
			el.style.color = 'hsl(221, 14%, 31%)';
			el.style.borderBottom = '4px solid hsl(28, 16%, 65%)';
			});

			inputButton.forEach(el=>{
			el.classList.add('inputStyle1');
			el.classList.remove('inputStyle2', 'inputStyle3');
			});
		break;

		case "2":
			background.background = 'hsl(0, 0%, 90%)';
			title.color = 'hsl(60, 10%, 19%)';
			themeAreaP.color = 'hsl(60, 10%, 19%)';
			backgroundToggle.background = 'hsl(0, 5%, 81%)';
			backgroundDisplay.background = 'hsl(0, 0%, 93%)';
			resultColor.color = 'hsl(60, 10%, 19%)';
			backgroundAreaKeys.background = 'hsl(0, 5%, 81%)';

			radioInputLabel.forEach(el=>{
				el.style.color = 'hsl(60, 10%, 19%)';
			});

			Reset_Del_Keys.forEach(el=>{
			el.style.background = 'hsl(185, 42%, 37%)';
			el.style.color = 'hsl(0, 0%, 100%)';
			el.style.borderBottom = '4px solid hsl(185, 58%, 25%)';
			});
			
			EqualKey.forEach(el=>{
			el.style.background = 'hsl(25, 98%, 40%)';
			el.style.color = 'hsl(0, 0%, 100%)';
			el.style.borderBottom = '4px solid hsl(25, 99%, 27%)';
			});

			CommomKeys.forEach(el=>{
			el.style.background = 'hsl(45, 7%, 89%)';
			el.style.color = 'hsl(221, 14%, 31%)';
			el.style.borderBottom = '4px solid hsl(35, 11%, 61%)';
			});

			inputButton.forEach(el=>{
			el.classList.add('inputStyle2');
			el.classList.remove('inputStyle1', 'inputStyle3');
			});
		break;

		case "3":
			background.background = 'hsl(268, 75%, 9%)';
			title.color = 'hsl(52, 100%, 62%)';
			themeAreaP.color = 'hsl(52, 100%, 62%)';
			backgroundToggle.background = 'hsl(268, 71%, 12%)';
			backgroundDisplay.background = 'hsl(268, 71%, 12%)';
			resultColor.color = 'hsl(52, 100%, 62%)';
			backgroundAreaKeys.background = 'hsl(268, 71%, 12%)';

			radioInputLabel.forEach(el=>{
				el.style.color = 'hsl(52, 100%, 62%)';
			});

			Reset_Del_Keys.forEach(el=>{
			el.style.background = 'hsl(281, 89%, 26%)';
			el.style.color = 'hsl(0, 0%, 100%)';
			el.style.borderBottom = '4px solid hsl(285, 91%, 52%)';
			});
			
			EqualKey.forEach(el=>{
			el.style.background = 'hsl(176, 100%, 44%)';
			el.style.color = 'hsl(198, 20%, 13%)';
			el.style.borderBottom = '4px solid hsl(177, 92%, 70%)';
			});

			CommomKeys.forEach(el=>{
			el.style.background = 'hsl(268, 47%, 21%)';
			el.style.color = 'hsl(52, 100%, 62%)';
			el.style.borderBottom = '4px solid hsl(290, 70%, 36%)';
			});

			inputButton.forEach(el=>{
			el.classList.add('inputStyle3');
			el.classList.remove('inputStyle1', 'inputStyle2');
			});
		break;
	}
}