let setup = (function() {
	$(document).ready(function() {
		const smokeDiv = (parent, smokeLPos, smokeTPos) => {
			$(parent).append('<div id="newDemo"></div>');
			$('#newDemo').css({ marginTop: '50px' });
			$('#newDemo').addClass('demo');
			$('#newDemo').append(`<ul id="ulId">`);
			$('#newDemo ul').css({
				listStyleType: 'none',
				position: 'absolute',
				top: smokeTPos,
				left: smokeLPos - 30,
				transform: 'translateX(-50%)',
				margin: '0',
				padding: '0',
			});
			for (let i = 0; i < 9; i++) {
				$('#newDemo ul').append(`<li>
                    </li>`);
				$('#ulId li').css({
					position: 'absolute',
					borderRadius: '50%',
					width: '5vw',
					height: '10vh',
					background: '#262626',
					filter: 'blur(100px)',
				});

				if (i % 2 == 0) {
					$('#ulId li:eq(' + i + ')').css({
						animation: 'animEven 2.8s linear infinite',
						animationDelay: i * 0.4 + 's',
					});
				} else {
					$('#ulId li:eq(' + i + ')').css({
						animation: 'animOdd 2.8s linear infinite',
						animationDelay: i * 0.4 + 's',
					});
				}
			}
		};

		let windowWidth = $('main').width();
		let windowHeight = $('main').height();

		// rotateWheel addclass replaced with below code;
		// $('#bwheel').velocity({ transform: ['rotate(360deg)', 'rotate(0deg)'] },
		// {duration:"fast",repeat:true, easing:'linear'});

				let fWheelWidth,
					bikeImgWidth,
					bikeImgHeight,
					bikeIntialOffset = 0;

				if (windowHeight / windowWidth > 1.5) {
					fWheelWidth = (windowWidth * 95) / 1368 + 20;
					bikeImgWidth = (windowWidth * 180) / 700;
					bikeImgHeight = (windowHeight * 158) / 1400;
					bikeIntialOffset = 50;
				} else if (windowHeight / windowWidth < 1.5 && windowHeight / windowWidth > 1.2) {
					fWheelWidth = (windowWidth * 100) / 1368;
					bikeImgWidth = (windowWidth * 180) / 1100;
					bikeImgHeight = (windowHeight * 158) / 1400;
					bikeIntialOffset = 20;
				} else {
					bikeIntialOffset = 200;

					fWheelWidth = (windowWidth * 85) / 1368;
					bikeImgWidth = (windowWidth * 180) / 1368;
					bikeImgHeight = (windowHeight * 158) / 720;
				}

				$('#bikeImg').css({
					width: bikeImgWidth,
					height: bikeImgHeight,
				});
				$('#fwheel').css({
					width: fWheelWidth,
					height: fWheelWidth,
				});
				$('#bwheel').css({
					width: fWheelWidth,
					height: fWheelWidth,
				});

				let WheelW = $('#fwheel').width();
				let WheelH = $('#fwheel').height();
				let WheelTPos = -(WheelW / 2);
				let bikeImgInitLPos = WheelW / 2;
				smokeDiv(
					'#scenery',
					bikeImgInitLPos + bikeIntialOffset,
					$('#scenery').height() - WheelH
				);

				$('#bwheel').css({
					left: bikeIntialOffset,
					top: WheelTPos,
				});
				$('#bikeImg').css({
					left: bikeImgInitLPos + bikeIntialOffset,
					bottom: 0,
				});
				$('#fwheel').css({
					left: bikeImgWidth + bikeIntialOffset,
					top: WheelTPos,
				});

		



		$('main').waitForImages({
			finished: function() {
				console.log('LOADED ALL IMAGES. STARTING ANIMATION NOW');
				let fwheelStopPos = $('#landingPage').width() - $('#landingPage').width() / 20;

				const finishLineSetup = () => {
					let polePos = {
						Pole1: fwheelStopPos - fwheelStopPos / 15,
						Pole2: fwheelStopPos - fwheelStopPos / 25,
					};

					let poleHt = $('#road').height() * 2 + 'px';

					// #KEYWORDS:-[adding an image dynamically in jquery with source attr]

					$('<img />', {
						id: 'banner',
					})
						.css({
							left: polePos.Pole1,
							transform: 'skewY(30deg)',
							bottom: '15vh',
							position: 'absolute',
							width: poleHt,
							height: '80vh',
						})
						.appendTo('#road');
				};

				finishLineSetup();

					$('#bwheel').velocity(
						{ rotateZ: '360deg' },
						{
							duration: 'fast',
							loop: 10,
							complete: function() {
								$('li').removeClass('smokeli');
								$('ul').removeClass('smokeul');

								$('#landingPage').velocity(
									{ translateX: '-450vw' },
									{ duration: 5500 }
								);

								$('#bwheel').css({ left: 0, top: WheelTPos });
								$('#bikeImg').css({ left: bikeImgInitLPos, bottom: 0 });
								$('#fwheel').css({
									left: bikeImgWidth,
									top: WheelTPos,
								});

								console.log(windowWidth + ':' + fwheelStopPos);
								console.log($('#fwheel').position().left);
								let bwheelStopPos =
									fwheelStopPos -
									($('#fwheel').position().left -
										$('#bwheel').position().left);
								let bikeImgStopPos =
									fwheelStopPos -
									($('#fwheel').position().left -
										$('#fwheel').width() / 2) -
									5;

								//        console.log(`FOR ${windowWidth}X${windowHeight} the Bike-Wheel dimensions
								//             are ${WheelW}X${WheelH} AND THE BIKE SIZE IS ${bikeImgWidth}X${bikeImgHeight}. THE BIKE STOPPING POSITION
								// 			ARE FWHEEL:- ${fwheelStopPos}, BIKEIMG:- ${bikeImgStopPos}, BWHEEL:- ${bwheelStopPos}  `);

								$('#bwheel').velocity(
									{
										rotateZ: '360deg',
										left: bwheelStopPos,
									},
									{
										duration: '5500',
									}
								);

								$('#bikeImg').append(
									'<audio autoplay> <source src="../sounds/biker.mp3"></audio>'
								);

								$('#fwheel').velocity(
									{
										rotateZ: '360deg',
										left: fwheelStopPos,
									},
									{
										duration: '5500',
									}
								);

								$('#bikeImg').velocity(
									{
										left: bikeImgStopPos,
									},
									{
										duration: '5500',

										complete: function() {
											$('#bwheel').velocity(
												{ left: '0vh' },
												{
													duration: '8500',
												}
											);

											$('#fwheel').velocity(
												{ left: '-100vh' },
												{
													duration: '8500',
												}
											);

											$('#bikeImg').velocity(
												{ top: '-50vh' },
												{
													duration: '1500',
													complete: function() {
														$('#landingPage').velocity(
															{
																right: '100vw',
															},
															{
																duration: 1000,
															}
														);

														$('#resume').velocity(
															{
																right: '100vw',
															},
															{
																duration: 1000,
																complete: function() {
																	$(
																		'#smoke'
																	).remove();
																	$(
																		'.smokeCl0'
																	).remove();
																	$('audio').remove();
																	$(
																		'#banner'
																	).remove();
																},
															}
														);

														let fwdworkExAnim = 0;

														$('#Next > button').click(
															() => {
																$(
																	'#Prev > button'
																).attr(
																	'disabled',
																	false
																);
																$(
																	'#Next > button'
																).attr(
																	'disabled',
																	true
																);

																if (
																	$(
																		'#weContent'
																	).width() -
																		-$(
																			'#weContent'
																		).position()
																			.left >
																	$(
																		'#weContent'
																	).width() /
																		8
																) {
																	fwdworkExAnim =
																		-$(
																			'#weContent'
																		).position()
																			.left +
																		$(
																			'#weContent'
																		).width() /
																			8 +
																		13;
																	console.log(
																		$(
																			'#weContent'
																		).width() -
																			-$(
																				'#weContent'
																			).position()
																				.left +
																			':' +
																			':' +
																			$(
																				'#weContent'
																			).width() /
																				8 +
																			':' +
																			fwdworkExAnim
																	);

																	$(
																		'#weContent'
																	).velocity(
																		{
																			left: -fwdworkExAnim,
																		},
																		function() {
																			$(
																				'#Next > button'
																			).attr(
																				'disabled',
																				false
																			);
																		}
																	);
																} else {
																	$(
																		'#Next > button'
																	).attr(
																		'disabled',
																		true
																	);
																}
															}
														);

														$('#Prev > button').click(
															() => {
																$(
																	'#Next > button'
																).attr(
																	'disabled',
																	false
																);
																$(
																	'#Prev > button'
																).attr(
																	'disabled',
																	true
																);

																if (
																	$(
																		'#weContent'
																	).position().left <
																	-1
																) {
																	fwdworkExAnim =
																		-$(
																			'#weContent'
																		).position()
																			.left -
																		$(
																			'#weContent'
																		).width() /
																			8 -
																		13;
																	console.log(
																		$(
																			'#weContent'
																		).width() -
																			$(
																				'#weContent'
																			).position()
																				.left +
																			':' +
																			':' +
																			$(
																				'#weContent'
																			).width() /
																				8 +
																			':' +
																			fwdworkExAnim
																	);

																	$(
																		'#weContent'
																	).velocity(
																		{
																			left: -fwdworkExAnim,
																		},
																		function() {
																			$(
																				'#Prev > button'
																			).attr(
																				'disabled',
																				false
																			);
																		}
																	);
																} else {
																	$(
																		'#Prev > button'
																	).attr(
																		'disabled',
																		true
																	);
																}
															}
														);
													},
												}
											);
										},
									}
								);
			

							},
						}
					);
				
					
					
			},
			waitForAll: true,
		});
	});
})();
