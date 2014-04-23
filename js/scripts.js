// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

		//Good Stuff

new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.489406, 
		lon: -117.580053,
		zoom: 17
			}]
		}).Load(); 

	console.log('Page Loaded. Lets Do this!');

}); 



//s.google.com/maps?q=200+E.+2ND+AVENUE+SPOKANE,+WA++99202&hl=en&sll=47.489406,-117.580053&sspn=0.131076,0.125999&hnear=200+E+2nd+Ave,+Spokane,+Spokane+County,+Washington+99202&t=m&z=17
//https://maps.google.com/maps?q=765+E+Holland+Avenue+Spokane,+WA+99218&hl=en&sll=47.654254,-117.407849&sspn=0.008166,0.007875&hnear=765+E+Holland+Ave,+Spokane,+Washington+99218&t=m&z=17
