	$(document).ready(function() {
       let fwdworkExAnim = 0;

		$('#Next > button').click(() => {
			$('#Prev > button').attr('disabled', false);
			$('#Next > button').attr({
				disabled: true,
				color: 'red',
			});

			if (
				Math.round($('#weContent').width() - -$('#weContent').position().left) -
					Math.round($('#weContent').width() / 8) >
				10
			) {
				fwdworkExAnim =
					-Math.round($('#weContent').position().left) + Math.round($('#weContent').width() / 8);
				console.log(
					Math.round($('#weContent').width() - -$('#weContent').position().left) +
						':' +
						':' +
						Math.round($('#weContent').width() / 8) +
						':' +
						fwdworkExAnim
				);

				$('#weContent').velocity(
					{
						left: -fwdworkExAnim,
					},
					function() {
						$('#Next > button').attr('disabled', false);
					}
				);
			} else {
				$('#Next > button').attr('disabled', true);
			}
		});

		$('#Prev > button').click(() => {
			$('#Next > button').attr('disabled', false);
			$('#Prev > button').attr('disabled', true);

			if (Math.round($('#weContent').position().left) < -1) {
				fwdworkExAnim =
					-Math.round($('#weContent').position().left) -
					Math.round($('#weContent').width() / 8);


				console.log(
					Math.round($('#weContent').width() - -$('#weContent').position().left) +
						':' +
						':' +
						Math.round($('#weContent').width() / 8) +
						':' +
						fwdworkExAnim
				);

				$('#weContent').velocity(
					{
						left: -fwdworkExAnim,
					},
					function() {
						$('#Prev > button').attr('disabled', false);
					}
				);
			} else {
				$('#Prev > button').attr('disabled', true);
			}
		});

		// $('#contents1 #front').click(() => {
		// 	$('#front').velocity({ rotateY: '-180deg' }, { duration: 600 })
								
		
		// });

		// $('#contents1 #contactInfo').click(() => {
		// 	$('#contactInfo').velocity({ rotateY: '0deg' }, { duration: 600 });
		// });

		




    })

