/*
function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'records.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
      allrecords = (JSON.parse(xobj.responseText))
    }
  };
  xobj.send(null);  
}
*/

document.addEventListener('DOMContentLoaded', function () {

if (window.DatArchive) {
URLprefix = '';
} else {
URLprefix = 'https://andrei.xyz/wp-content'
}

colors = ['ca2c58', 'c5b861', '53877e', 'FFCF01', 'FF6138', '00A388'];


/*
loadJSON(function(json) {
	records = json; // this will log out the json object
	$('#content').html('');
	var ph_index = 0;
	for (var key in records) {
	    // skip loop if the property is from prototype
	    if (!records.hasOwnProperty(key)) continue;
	    var obj = records[key];
	    output ='<div class="col-lg-4 col-md-4 col-sm-12"  style="color: #'+ colors[Math.floor(Math.random()*colors.length)] +';"><article><header><h2><a href="#' + obj.link + '">' + obj.artist + '<br><small>' + obj.album_name + '</small></a></h2></header><div><a href="#' + obj.link + '"><img src="' + URLprefix + obj.main_photo + '" alt="' + obj.artist + ' - ' + obj.album_name + '"></a></div><footer class="text-left" style="margin-top:5px;"><small>' + obj.date + '</small></footer></article></div>';
	    ph_index++;
	    if(ph_index%3 == '0') { output += '</div><div class="row">'; }
		$('#content').append(output).show();
		$('#single_content').hide();
		if(ph_index == 12) { break; }
	}


});
*/


/*
$( document ).on( "click", "a#logo", function(e) {
	e.preventDefault();
	$('#content').show();
	$('#single_content').hide();
});
*/





/*

$( document ).on( "click", "a", function() {
	if($( this ).attr('href').startsWith("#")) { 
		hash = $( this ).attr('href').replace('#', '');
		for (var key in allrecords) {
			if(hash === key) {
				obj = allrecords[hash];
				console.log(obj);
				video_url = obj.video.replace('[yt ', '');
				video_url = video_url.replace(']', '');
				random_color = colors[Math.floor(Math.random()*colors.length)];
				output = '<div class="col-lg-6 col-md-5 col-sm-12 record-container" style="color: #' + random_color + ';"><img class="wp-post-image" src="' + URLprefix + obj.main_photo + '" alt="' + obj.artist + ' - ' + obj.album_name + '">';
				
				var ph_index = 0;
			    for (var prop in obj.photos) {
					// skip loop if the property is from prototype
					photo = obj.photos[prop].photo;
					output += '<img src="'+ URLprefix + photo.sizes['large'] + '" class="hidden" id="img-' + ph_index + '">';
					ph_index++;
			    }

				
				output += '</div><div class="col-lg-6 col-md-7 col-sm-12 record-content"  style="color: #' + random_color + ';"><article><header class="record-header"><h2><small>' + obj.year + '</small><br><strong>' + obj.artist + '</strong><br>' + obj.album_name + '</h2><h4>' + obj.format + '</h4></header><div class="row single-gallery">';
				var ph_index = 0;
			    for (var prop in obj.photos) {
					// skip loop if the property is from prototype
					photo = obj.photos[prop].photo;
					output += '<div class="col-md-6 col-lg-4"><a href="javascript:void(0)" class="switch-image" id="switch-' + ph_index + '" data-link="' + photo.url + '"><img src="' + URLprefix + photo.sizes['post-thumbnail'] + '"></a></div>';
					ph_index++;
					if(ph_index%3 == '0') { output += '</div><div class="row single-gallery">'; }
			    }
				
				
				output += '</div><div class="single-video"><iframe width="100%" height="315" class="youtube-frame" src="https://www.youtube-nocookie.com/embed/' + video_url + '?rel=0" frameborder="0" allowfullscreen></iframe></div><footer class=""><small>' + obj.date + '</small></footer></article></div>';
				$('#content').hide();
				$('#single_content').html(output).show();
			}
		}
	  
	}

});
*/













})


jQuery(document).ready(function(){
	$(document).on({
		click: function(){
			$link = jQuery(this).attr('data-link');
		    $('.lightbox .lb-content img').attr('sizes', '');
		    $('.lightbox .lb-content img').attr('srcset', '');
		    $('.lightbox .lb-content img').attr('src', $link);
		    $('.lightbox').show('fast');
		},
		mouseenter: function(){
			$id = jQuery(this).attr('id');
			$id = $id.replace('switch', '#img');
		    $($id).show().removeClass('hidden');
		    $('.wp-post-image').hide();
		},
		mouseleave: function(){
			$id = jQuery(this).attr('id');
			$id = $id.replace('switch', '#img');
		    $($id).hide().addClass('hidden');
		    $('.wp-post-image').show();
		}
	}, 'a.switch-image');
	$(document).on({
		click: function(){
			$(this).hide('fast');
		}
	}, '.lightbox');
});
