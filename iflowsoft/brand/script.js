var Product = {
							"Product":[{
									"name":"Apple ipod",
									"properties":
										{
												"id":
												{
														"value":32324244324,
														"id_name":"APPLE IPOD",
												},
												"desc":
												{
														"description":"Pod touch is the perfect way to carry your music collection in your pocket. With the iTunes Store — the world’s largest music catalog — you can load up your iPod touch with your favorite songs. And thanks to iCloud, everything you purchase through the iTunes Store is automatically available on all your devices for free. To enhance your music experience even more, Apple Music is available on your iPod touch, right in the Music app.",
													    "features":["More power to play with.","A8 chip. Satisfy your need for speed.","4-inch Retina display. Big fun."],
													    "img_name":"apple_ipod.png"
												},
												"price":
												{
														"value":300,
														"currency":"USD",
												},
												"tags":
											    { 
													   "value":["music","mp3","player"]
												
												}

										}
							     },
								
								{
									"name":"Apple ipod",
									"properties":
										{
												"id":
												{
														"value":32324244324,
														"id_name":"APPLE IPOD",
												},
												"desc":
												{
														"description":"Pod touch is the perfect way to carry your music collection in your pocket. With the iTunes Store — the world’s largest music catalog — you can load up your iPod touch with your favorite songs. And thanks to iCloud, everything you purchase through the iTunes Store is automatically available on all your devices for free. To enhance your music experience even more, Apple Music is available on your iPod touch, right in the Music app.",
													    "features":["More power to play with.","A8 chip. Satisfy your need for speed.","4-inch Retina display. Big fun."],
													    "img_name":"apple_ipod.png"
												},
												"price":
												{
														"value":300,
														"currency":"USD",
												},
												"tags":
											    { 
													   "value":["music","mp3","player"]
												
												}

										}
							     },
								
								{
									"name":"Apple ipod",
									"properties":
										{
												"id":
												{
														"value":32324244324,
														"id_name":"APPLE IPOD",
												},
												"desc":
												{
														"description":"Pod touch is the perfect way to carry your music collection in your pocket. With the iTunes Store — the world’s largest music catalog — you can load up your iPod touch with your favorite songs. And thanks to iCloud, everything you purchase through the iTunes Store is automatically available on all your devices for free. To enhance your music experience even more, Apple Music is available on your iPod touch, right in the Music app.",
													    "features":["More power to play with.","A8 chip. Satisfy your need for speed.","4-inch Retina display. Big fun."],
													    "img_name":"apple_ipod.png"
												},
												"price":
												{
														"value":300,
														"currency":"USD",
												},
												"tags":
											    { 
													   "value":["music","mp3","player"]
												
												}

										}
							     }	   
								
								
								
								
                            ]};                                

            for ( var i =0 ; i< Product.Product.length; i++ ) {

				$('.desc').append("<h4 class= alignleft>" + Product.Product[i].name + "</h4>");
				// $('.productname').append("<br>");
				// console.log(Product.Product[i].name);

				//$('.desc').append(Product.Product[i].properties.id.value);
				var id = Product.Product[i].properties.id.value; 
				var str = "#";
				var res = str.concat(id);
				$('.desc').append("<p class=alignright>" + res + "</p>");
				$('.desc').append("<p class=clear> </p>");
				
				
				// console.log(res);

				var id = Product.Product[i].properties.price.value;
				var str = "$";
				var res = str.concat(id);
				$('.desc').append("<strong>"+ res + "</strong>"+"<br>");

			
				var desc = Product.Product[i].properties.desc.description + "</br>";
				//$('.desc').append(desc);
				$('.desc').append(desc);
				$('.desc').append("<h3>Features</h3>");
				for( var j = 0; j < Product.Product[i].properties.desc.features.length; ++j)
					{ 
						var list =  Product.Product[i].properties.desc.features[j] ;
				$('.desc').append("<li>"+ list+"</li>");
				//console.log()
				

				// console.log(list);
					}
				
				
					
				$('.desc').append("<hr> ");
				$('.desc').append("<br>");
				 }
			function openNav() {
				document.getElementById("mySidenav").style.width = "250px";
			}
			function closeNav() {
				document.getElementById("mySidenav").style.width = "0";
			}