let setup = (function() {
	$(document).ready(function() {
		let windowWidth = $('main').width();
		let windowHeight = $('main').height();
		let smokeWid = '5vw';
		let smokeHt = '10vh';
		let bikeAnimDuration = 0;
		let fWheelWidth,
			bikeImgWidth,
			bikeImgHeight,
			bikeIntialOffset = 0;
		if (windowHeight / windowWidth > 1.5) {
			// MOBILE MEDIA QUERY
			fWheelWidth = (windowWidth * 95) / 1368 + 20;
			bikeImgWidth = (windowWidth * 180) / 700;
			bikeImgHeight = (windowHeight * 158) / 1400;
			bikeIntialOffset = 50;
			smokeWid = '5.5vw';
			smokeHt = '11vh';
			bikeAnimDuration = 3000;
		} else if (windowHeight / windowWidth < 1.5 && windowHeight / windowWidth > 1.2) {
			// TABLET MEDIA QUERY
			fWheelWidth = (windowWidth * 100) / 1368;
			bikeImgWidth = (windowWidth * 180) / 1100;
			bikeImgHeight = (windowHeight * 158) / 1400;
			bikeIntialOffset = 20;
			smokeWid = '4vw';
			smokeHt = '8vh';
			bikeAnimDuration = 3000;
		} else {
			// LAPTOP MEDIA QUERY
			smokeWid = '5vw';
			smokeHt = '10vh';
			bikeIntialOffset = 200;
			bikeAnimDuration = 5500;

			fWheelWidth = (windowWidth * 85) / 1368;
			bikeImgWidth = (windowWidth * 180) / 1368;
			bikeImgHeight = (windowHeight * 158) / 720;
		}
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
					width: smokeWid,
					height: smokeHt,
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
		smokeDiv('#scenery', bikeImgInitLPos + bikeIntialOffset, $('#scenery').height() - WheelH);

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

							$('#landingPage').velocity({ translateX: '-450vw' }, { duration: bikeAnimDuration });

							$('#bwheel').css({ left: 0, top: WheelTPos });
							$('#bikeImg').css({ left: bikeImgInitLPos, bottom: 0 });
							$('#fwheel').css({
								left: bikeImgWidth,
								top: WheelTPos,
							});

							console.log(windowWidth + ':' + fwheelStopPos);
							console.log($('#fwheel').position().left);
							let bwheelStopPos =
								fwheelStopPos - ($('#fwheel').position().left - $('#bwheel').position().left);
							let bikeImgStopPos =
								fwheelStopPos - ($('#fwheel').position().left - $('#fwheel').width() / 2) - 5;

							//        console.log(`FOR ${windowWidth}X${windowHeight} the Bike-Wheel dimensions
							//             are ${WheelW}X${WheelH} AND THE BIKE SIZE IS ${bikeImgWidth}X${bikeImgHeight}. THE BIKE STOPPING POSITION
							// 			ARE FWHEEL:- ${fwheelStopPos}, BIKEIMG:- ${bikeImgStopPos}, BWHEEL:- ${bwheelStopPos}  `);

							$('#bwheel').velocity(
								{
									rotateZ: '360deg',
									left: bwheelStopPos,
								},
								{
									duration: bikeAnimDuration,
								}
							);

							// $('#bikeImg').append('<audio autoplay> <source src="../sounds/biker.mp3"></audio>');

							$('#fwheel').velocity(
								{
									rotateZ: '360deg',
									left: fwheelStopPos,
								},
								{
									duration: bikeAnimDuration,
								}
							);

							$('#bikeImg').velocity(
								{
									left: bikeImgStopPos,
								},
								{
									duration: bikeAnimDuration,

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
																			$(
																				'#landingPage'
																			).velocity(
																				{
																					right:
																						'100vw',
																				},
																				{
																					duration: 1000,
																				}
																			);

																			$(
																				'#resume'
																			).velocity(
																				{
																					right:
																						'100vw',
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
																						$(
																							'audio'
																						).remove();
																						$(
																							'#banner'
																						).remove();
																					},
																				}
																			);
																			// RESUME WORK PROFESSIONAL SECTION

																			let fwdworkExAnim = 0;
																			console.log(
																				'WECONTENT WIDTH:-' +
																					$(
																						'#weContent'
																					).width() +
																					'::::' +
																					$(
																						'#weContent'
																					).width()
																			)/9;									
																			$(
																				'#Next > button'
																			).click(
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
																						{
																							disabled: true,
																							color:
																								'red',
																						}
																					);

																					if (
																						Math.round(
																							$(
																								'#weContent'
																							).width() -
																								-$(
																									'#weContent'
																								).position()
																									.left
																						) -
																							Math.round(
																								$(
																									'#weContent'
																								).width() /
																									9
																							) >
																						10
																					) {
																						fwdworkExAnim =
																							-Math.round(
																								$(
																									'#weContent'
																								).position()
																									.left
																							) +
																							Math.round(
																								$(
																									'#weContent'
																								).width() /
																									9
																							);
																						console.log(
																							Math.round(
																								$(
																									'#weContent'
																								).width() -
																									-$(
																										'#weContent'
																									).position()
																										.left
																							) +
																								':' +
																								':' +
																								Math.round(
																									$(
																										'#weContent'
																									).width() /
																										9
																								) +
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

																			$(
																				'#Prev > button'
																			).click(
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
																						Math.round(
																							$(
																								'#weContent'
																							).position()
																								.left
																						) <
																						-1
																					) {
																						fwdworkExAnim =
																							-Math.round(
																								$(
																									'#weContent'
																								).position()
																									.left
																							) -
																							Math.round(
																								$(
																									'#weContent'
																								).width() /
																									9
																							);

																						console.log(
																							Math.round(
																								$(
																									'#weContent'
																								).width() -
																									-$(
																										'#weContent'
																									).position()
																										.left
																							) +
																								':' +
																								':' +
																								Math.round(
																									$(
																										'#weContent'
																									).width() /
																										9
																								) +
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
