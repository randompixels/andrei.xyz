document.addEventListener('DOMContentLoaded', function () {
	if (window.DatArchive) {
		URLprefix = '';
	} else {
		URLprefix = 'https://andrei.xyz/wp-content'
	}
});


jQuery(document).ready(function($){
	colors = ['#ca2c58', '#c5b861', '#53877e', '#FFCF01', '#FF6138', '#00A388', '#FFFAC2', '#E1FFB5', '#FF6EEE', '#B361FF', '#FF6661', '#A5FF85', '#82E4FF'];
	$('.random-colour').each(function(){
		$(this).css('color', colors[Math.floor(Math.random()*colors.length)]);
	});
	$('.shuffle g').css('fill', colors[Math.floor(Math.random()*colors.length)]);
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
	var options = {
		url: "/index.json",
		getValue: "title",
		list: {
			match: {
				enabled: true
			},
			maxNumberOfElements: 12
		},
		template: {
			type: "custom",
			method: function(value, item) {
				return '<a class="search-result" href="'+item.uri+'"><img src="'+item.cover+'"><div class="search-meta"><div class="search-artist">'+item.artist+'</div><div class="search-album">'+item.album_name+'</div></div>';
			}
		},
		theme: "round"
	};
	$("#search").easyAutocomplete(options);
	fetch('/index.json').then(res => res.json()).then((feedx) => {
		$('.shuffle').attr('data-text', feedx.length+' records');
		console.log(feedx);
	}).catch(err => {
		throw err
	});
});
