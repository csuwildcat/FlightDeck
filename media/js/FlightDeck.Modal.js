/* 
 * File: Flightdeck.Modal.js
 */

FlightDeck = Class.refactor(FlightDeck,{
	options: {
		modalWrap: {
			start: '<div class="UI_Modal_Wrapper"><div class="UI_Modal">',
			end: '</div></div>'
		}
	},
	initialize: function(options) {
		this.modal = new ModalWindow();
		this.setOptions(options);
		this.previous(options);
		this.modals = {};
        // display "I will be dead" info
        var key = 'I will die soon';
        if (!Cookie.read(key)) {
          Cookie.write(key, true, {
            duration: 1
          });
          this.displayModal(
            '<div id="i-will-die-soon">'+
              '<h3>The Add-on Builder is Moving!</h3>'+
              '<div class="UI_Modal_Section" style="max-width: 500px">'+
                '<p>We have recently moved the Add-on Builder to its permanent production home at'+
                '   <a href="http://builder.addons.mozilla.org">http://builder.addons.mozilla.org</a>.'+
                '   We will be shutting down this version at the end of January.'+
                '</p>'+
                '<p>Migrating your existing add-ons to the new site:<ol style="padding-top: 10px;">'+
                  '<li>1. Download your add-ons as xpi files via the "Download" button in the code edit view</li>'+
                  '<li>2. Login to the new editor site and navigate to the My Account page</li>'+
                  '<li>3. In the left column, you will find and option called "Upload Package", click it and enter the location of a add-on xpi you\'d like to import.</li>'+
                  '</ol>'+
                  'This process should create a new add-on project on the Builder for each add-on xpi you upload.</p>'+
                '<p>Thank you for participating in this phase of the Add-on Builder\'s developer'+
                'preview! We look forward to announcing the beta release of the Builder in the'+
                'coming months.</p>'+
                '<p>Keep cranking out those add-ons!</p>'+
              '<div>'+
              '<div class="UI_Modal_Actions">'+
                  '<ul>'+
                      '<li><input type="reset" value="Hide" class="closeModal"/></li>'+
                  '</ul>'+
              '</div>'+
            '</div>'
          );
        }
        
    },
    /*
     * Method: displayModal
	 * Pretty dummy function which just wraps the content with divs and shows on the screen
	 */
	makeModal: function(content) {
		// copy options
		var data = $H(this.options.modalWrap).getClean();
		data['content'] = content;
		var modal_el = Elements.from('{start}{content}{end}'.substitute(data));
		var key = new Date().getTime();
		modal_el.store('modalKey', key);
		this.modals[key] = modal_el;
		return modal_el;
	},
	/*
	 * Method: displayModal
	 * Pretty dummy function which just wraps the content with divs and shows on the screen
	 */
	displayModal: function(content) {
		// modal is defined in base.html - this should probably be done elsewhere
		return this.modal.create(this.makeModal(content)[0]);
	},
	// these two are not really used atm
	hideModal: function(key) {
		this.modals[key].hide();
	},
	destroyModal: function(key) {
		this.modals[key].destroy();
	},
	showQuestion: function(data) {
		if (!data.cancel) data.cancel = 'Cancel';
		if (!data.ok) data.ok = 'OK';
		if (!data.id) data.id = '';
		var template = '<div id="display-package-info">'+
							'<h3>{title}</h3>'+
							'<div class="UI_Modal_Section">'+
								'<p>{message}</p>'+
							'</div>'+
							'<div class="UI_Modal_Actions">'+
								'<ul>'+
									'<li><input id="{id}" type="button" value="{ok}" class="submitModal"/></li>'+
									'<li><input type="reset" value="{cancel}" class="closeModal"/></li>'+
								'</ul>'+
							'</div>'+
						'</div>';
		display = this.displayModal(template.substitute(data));
		if (data.callback && data.id) {
			$(data.id).addEvent('click', data.callback);
		}
		return display;
	}
});
