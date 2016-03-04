$(function() {

	var linesSansSpaces = 'initial-value';

	function getHtml(codeElement) {

		// get target element if data-target is set on code element
		var target = $(codeElement).data("target");
		if(target) {
			// if data-target, grab element with that target, duplicate (clone), and remove data-target-name attribute
			// prior to copying to clipboard
			var el = $("[data-target-name=" + target + "]").clone().removeAttr("data-target-name");
		} else {
			// create selector from code element inner-html (content) and select the element from the dom 
			var el = $($(codeElement).parent().children("code").text().replace(/\s/g, "")); 
			// the (/\s/g, "") regex removes whitespace when multiple classes are included in the same code element
		}

		// splits each line of html into an array item
		var codeLines = el[0].outerHTML.toString().split("\n");
		var lastLine = codeLines[codeLines.length -1];

		/*	figure out how many spaces to remove from all lines by looking at spaces on last line 
		(spaces before closing tag) */
		var extraSpaces = lastLine.match(/^\s*/)[0].length; 

		// insert first line into array so that spaces/chars won't be removed from it
		var linesSansSpaces = [codeLines[0]];
		var codeLinesQty = codeLines.length

		// remove extra spaces from each line (excluding first line) and add to existing array
		for(var i = 1; i < codeLinesQty; i++) {
			linesSansSpaces.push(codeLines[i].substring(extraSpaces));
		}

		// join array as new string
		return linesSansSpaces.join("\n");
	}

/*--------------------------------------------------------------|
|     create a popup window to display html code examples       |     
|--------------------------------------------------------------*/

	$("code").on("click", function popup() {

		$('#wrapper-blur').addClass('blur');

		//function (e) { popup.parentNode.removeChild(popup) };
		$('.popup').remove();

	    var popup = $('<div>');
	    popup.addClass('popup');
	    popup.attr("id", "test");
	    var cancel = $('<div>');
	    cancel.addClass('cancel');
	    cancel.html('X');
	    var message = $('<span>');
		var tooltip = $('<pre>').addClass('language-markup').text(getHtml(this));


	    //remove popup
	    cancel.on('click', function (e) { 
	    	popup.remove();
	    	$('#wrapper-blur').removeClass('blur');
	    });

		popup.on('click', function(e){
			console.log(e.target);
			if($(e.target).hasClass('popup')) {
				popup.remove();
				$('#wrapper-blur').removeClass('blur');
			}
		});

		
	    message.append(tooltip);
	    popup.append(cancel);
	    popup.append(message);                                    
	    $('body').append(popup);

	    Prism.highlightElement(tooltip[0]); //run prism.js to perform syntax highlighting :)


	});



});





