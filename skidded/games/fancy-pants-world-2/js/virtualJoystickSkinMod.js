const isMobile = /Mobi|Android/i.test(navigator.userAgent);

(function (){
	var scope = {};

	scope.skinnerObject = null;
	scope.target = null;
	scope.frameConfig = {width:480, height:480};
	scope.portraitOffset = 0;

	scope.getPortraitOffset = function(){
		const landscape = window.innerWidth > window.innerHeight;
		const aspect = window.innerWidth/window.innerHeight;
		const isIpad = (!landscape && aspect >= 0.75) || (landscape && aspect <= 1.34);

		if(landscape){
			scope.portraitOffset = 0;
			window["setStageDimensions"](0, 0, "100%", "100%");
		}else{

			if(isIpad){
				const frameHeight = window.innerWidth;
				const gap = (window.innerHeight-frameHeight)/2;
				scope.portraitOffset = -(gap-gap*(0.5/3));
				window["setStageDimensions"](0, scope.portraitOffset, "100%", "100%");
			}else{
				const frameHeight = window.innerWidth;
				const gap = (window.innerHeight-frameHeight)/2;
				scope.portraitOffset = -(gap-gap*(2/3));
				window["setStageDimensions"](0, scope.portraitOffset, "100%", "100%");
			}
		}
	}

	scope.placeSprites = function(){

	}

	scope.resize = function(){
		const landscape = window.innerWidth > window.innerHeight;


		const aspect = window.innerWidth / window.innerHeight;

		const isIpad = (!landscape && aspect >= 0.75) || (landscape && aspect <= 1.34);
		const edgeSize = 9;
		scope.getPortraitOffset();
		const topItemsMargin = 20;

		//have to reset the bounding rect after every repositioning
		scope.target.virtualJoystick.boundingRect = null;


		if(landscape){
			const frameWidth = window.innerHeight;
			const gap = (window.innerWidth-frameWidth)/2;

			scope.skinnerObject.joystickElement.style.left = `${gap/2-edgeSize/2+60}px`;
			scope.skinnerObject.joystickElement.style.top = `unset`;
			scope.skinnerObject.joystickElement.style.bottom = `80px`;

			scope.skinnerObject.buttonsElement.style.left = `unset`;
			scope.skinnerObject.buttonsElement.style.right = `${gap/2-edgeSize/2+60}px`;
			scope.skinnerObject.buttonsElement.style.top = `unset`;
			scope.skinnerObject.buttonsElement.style.bottom = `80px`;
			scope.skinnerObject.buttonsElement.style.paddingLeft = 'unset';


		}else{
			const frameHeight = window.innerWidth;
			const gap = (window.innerHeight-frameHeight)/2;

			if(!isIpad){
				scope.skinnerObject.joystickElement.style.left = `30%`;
			}else{
				scope.skinnerObject.joystickElement.style.left = `20%`;
			}
			scope.skinnerObject.joystickElement.style.top = `unset`;
			scope.skinnerObject.joystickElement.style.bottom = `${gap/2-scope.portraitOffset/2}px`;

			if(!isIpad){
				scope.skinnerObject.buttonsElement.style.right = `26%`;
			}else{
				scope.skinnerObject.buttonsElement.style.right = `19%`;
			}
			scope.skinnerObject.buttonsElement.style.left = `unset`;
			scope.skinnerObject.buttonsElement.style.top = `unset`;
			scope.skinnerObject.buttonsElement.style.bottom = `${gap/2-scope.portraitOffset/2}px`;

		}

		if(!scope.targetButtonGrow){
			scope.targetButtonGrow = scope.skinnerObject.buttonsElement.querySelector('div').firstChild;
			scope.targetDpadGrow = scope.skinnerObject.joystickElement.querySelector('#vjs_dpad');
		}else{
			scope.targetButtonGrow.style.padding = (window.innerWidth/4-116/2)+'px';
			scope.targetDpadGrow.style.padding = (window.innerWidth/4-85/2)+'px';
		}
	}
	scope.createTile = function(src){
		const image = document.createElement('div');
		image.style.background = `url(${src})`;
		image.style.position = 'absolute';
		image.style.transform = 'translate(-50%, -50%)';
		return image;
	}
	scope.init = function(){
		document.addEventListener('tOCParsed', function(e){
			const tryToInit = ()=>{
				try{
					scope.skinnerObject = e.skinner;
					scope.target = scope.skinnerObject.target;
					scope.getPortraitOffset();
					scope.placeSprites();
					window.addEventListener('resize', scope.resize);
					scope.resize();

					if(scope.portraitOffset === 0){
						// [iOS] Fix initial resizing not going well
						setTimeout(()=>{
							window.dispatchEvent(new Event('resize'));
						},
						3000)
					}
				}catch(e){
					console.log(e, "FAILED INIT");
					setTimeout(() => {
						tryToInit()
					}, 100);
				}
			}
			tryToInit();


		})
		const searchForCanvas = ()=>{
			var canvas = null;
			if(document.body) canvas = document.body.querySelector('canvas');
			if(!canvas) setTimeout(searchForCanvas, 100);
			else{
				scope.canvas = canvas;
				if(scope.target)scope.resize();
				resizeBG();
			}
		}
		searchForCanvas();


		const resizeBG = ()=>{
			const landscape = window.innerWidth > window.innerHeight;
			if(scope.canvas){
				if(landscape){
					scope.canvas.style.borderLeft = '8px solid #726467';
					scope.canvas.style.borderRight = '8px solid #726467';
					scope.canvas.style.borderTop = 'unset';
					scope.canvas.style.borderBottom = 'unset';
				}else{
					scope.canvas.style.borderLeft = 'unset';
					scope.canvas.style.borderRight = 'unset';
					scope.canvas.style.borderTop = '8px solid #726467';
					scope.canvas.style.borderBottom = '8px solid #726467';
				}
			}

		};
		window.addEventListener('resize', resizeBG);

	}
	scope.init();
})();
