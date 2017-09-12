$( document ).ready( function() {

		'use strict';
    
		var webDesigne = new ProgressBar.Circle( '#webDesigne', {
			color: '#aaa'
			, strokeWidth: 4
			, trailWidth: 1
			, easing: 'easeInOut'
			, duration: 1400
			, trailColor: '#ccc'
            , text: {
				autoStyleContainer: false
			}
			, from: {
				color: '#333'
				, width: 4
			}
			, to: {
				color: '#333'
				, width: 4
			}
			, step: function( state, circle ) {
				circle.path.setAttribute( 'stroke', state.color );
				circle.path.setAttribute( 'stroke-width', state.width );

				var value = Math.round( circle.value() * 100 );
				if ( value === 0 ) {
					circle.setText( '' );
				} else {
					circle.setText( value );
				}

			}
		} );
		webDesigne.animate( .85 );

		
    
    
    var barhtml = new ProgressBar.Line(lineHtml, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barcss = new ProgressBar.Line(linecss, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barjs = new ProgressBar.Line(linejs, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barboot = new ProgressBar.Line(lineboot, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    barhtml.animate(.90);
    barcss.animate(.90);
    barjs.animate(.40);
    barboot.animate(.90);
    
    var webDevelopment = new ProgressBar.Circle( '#webDevelopment', {
			color: '#aaa'
			, strokeWidth: 4
			, trailWidth: 1
			, easing: 'easeInOut'
			, trailColor: '#ccc'
            , duration: 1400
			, text: {
				autoStyleContainer: false
			}
			, from: {
				color: '#333'
				, width: 4
			}
			, to: {
				color: '#333'
				, width: 4
			}
			, step: function( state, circle ) {
				circle.path.setAttribute( 'stroke', state.color );
				circle.path.setAttribute( 'stroke-width', state.width );

				var value = Math.round( circle.value() * 100 );
				if ( value === 0 ) {
					circle.setText( '' );
				} else {
					circle.setText( value );
				}

			}
		});
    
    webDevelopment.animate( .30 );
    
    var barphp = new ProgressBar.Line(linephp, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barsql = new ProgressBar.Line(linesql, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barjava = new ProgressBar.Line(linejava, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    

    barphp.animate(.50);
    barsql.animate(.20);
    barjava.animate(0);
    
    var Languages = new ProgressBar.Circle( '#Languages', {
			color: '#aaa'
			, strokeWidth: 4
			, trailWidth: 1
			, easing: 'easeInOut'
			, trailColor: '#ccc'
            , duration: 1400
			, text: {
				autoStyleContainer: false
			}
			, from: {
				color: '#333'
				, width: 4
			}
			, to: {
				color: '#333'
				, width: 4
			}
			, step: function( state, circle ) {
				circle.path.setAttribute( 'stroke', state.color );
				circle.path.setAttribute( 'stroke-width', state.width );

				var value = Math.round( circle.value() * 100 );
				if ( value === 0 ) {
					circle.setText( '' );
				} else {
					circle.setText( value );
				}

			}
		} );
    
    Languages.animate( .85 );
    
    var baren = new ProgressBar.Line(lineen, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    var barar = new ProgressBar.Line(linear, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fc0',
        trailColor: '#333',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '0',
                top: '-10px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    baren.animate(.80);
    barar.animate(1);
    
    $('footer.footer .email-update input').focusin(function () {
       $('footer.footer div:nth-child(2) button').css('left','96px') 
    });
    
    $('footer.footer .email-update input').focusout(function () {
       $('footer.footer .email-update button').css('left','-100px') 
    });
    
});


    

		

    
