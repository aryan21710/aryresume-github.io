	$(document).ready(function() {
        let fwdworkExAnim = 0;

		$('#Next > button').click(() => {
			$('#Prev > button').attr('disabled', false);
			$('#Next > button').attr({
				disabled: true,
				color: 'red',
			});

			if ($('#weContent').width() - -$('#weContent').position().left > $('#weContent').width() / 8) {
				fwdworkExAnim = -$('#weContent').position().left + $('#weContent').width() / 8;
				console.log(
					$('#weContent').width() -
						-$('#weContent').position().left +
						':' +
						':' +
						$('#weContent').width() / 8 +
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



    })

