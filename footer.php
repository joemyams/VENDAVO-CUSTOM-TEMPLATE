<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

?>
</main><!-- #main -->
</div><!-- #primary -->
</div><!-- #content -->

<?php if (get_post_type() !== 'quiz_pdf'): ?>
	<?php get_template_part('/template-parts/footer/site-prefooter'); ?>
	<footer id="site-footer" role="contentinfo" class="site-footer is-bg--blue-40">
		<div class="cont is-fluid">
			<div class="site-footer__brand">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-footer__logo"><?php get_template_part('/template-parts/svg/footer-logo'); ?></a>
				<div class="site-footer__social">
					<?php 
					$socials = get_field('social_profiles', 'options');
					set_query_var('socials', $socials); 
					get_template_part('/template-parts/components/social-links'); ?>
				</div>
				<div class="site-footer__legal">
					<nav class="site-footer__legal-nav">
						<?php if ( has_nav_menu( 'legal-nav' ) ) { wp_nav_menu( array( 'theme_location' => 'legal-nav' ) );}; ?>
					</nav>
					<nav class="site-footer__lang-nav">
						<?php if ( has_nav_menu( 'lang-nav' ) ) { wp_nav_menu( array( 'theme_location' => 'lang-nav' ) );}; ?>
					</nav>
					<ul class="menu">
						<li class="menu-item">&copy; Vendavo</li>
						<li class="menu-item"><?php _e( 'All Rights Reserved', 'vendavo' ); ?></li>
					</ul>

				</div>
			</div>

			<div class="site-footer__right">
				<nav class="site-footer__nav">
					<?php if ( has_nav_menu( 'footer-nav' ) ) { wp_nav_menu( array( 'theme_location' => 'footer-nav' ) );}; ?>
				</nav>
				<div class="site-footer__featured">
					<div>
						<h6><?php _e( 'Customer Favorites', 'vendavo' ); ?></h6>
					</div>
					<div class="featured-grid is-favorites">
						<?php 
						$favorites = get_field('footer_favorites', 'options'); 
						if ($favorites) {
							foreach ($favorites as $favorite) {
								echo '<article class="featured-footer__single">
								<a rel="noopener noreferrer" href="'. $favorite['link'] .'" class="featured-footer__inner rte">
								<div class="featured-footer__tags">'. $favorite['flag'] .'</div>
								<h6 class="featured-footer__headline">'. $favorite['title'].'</h6>
								</a>
								</article>';
							}
						}; ?>
					</div>

				</div>
				<div class="site-footer__featured">
					<div>
						<h6><?php _e( 'Featured Resources', 'vendavo' ); ?></h6>
					</div>
					<div class="featured-grid is-featured">
						<?php $resources = get_field('footer_resources', 'options');
						if ($resources) {
							foreach ($resources as $resource) {
								echo '<article class="featured-footer__single">
								<a rel="noopener noreferrer" href="'. $resource['link'] .'" class="featured-footer__inner rte">
								<div class="featured-footer__tags">'. $resource['flag'] .'</div>
								<h6 class="featured-footer__headline">'. $resource['title'].'</h6>
								</a>
								</article>';
							}
						}; ?>
					</div>
				</div>
			</div>
		</div>

	</footer>

</div><!-- #page -->

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TV4VR9"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TV4VR9');</script>
<!-- End Google Tag Manager -->
<?php endif; ?>
<?php if (is_singular( 'post' )): ?>
	<script type="text/javascript" src="https://www.gartner.com/reviews/public/Widget/js/widget.js"></script>
<?php endif; ?>
<?php wp_footer(); ?>
<?php if (get_field('footer_scripts', 'option')) : the_field('footer_scripts', 'option'); endif; ?>

<?php if(is_page_template('event-page.php')) : ?>
	<script type="text/javascript">
		var $grid = jQuery('.grid').isotope({ filter: '.webinar, .live', sortBy : '.webinar, .live', sortAscending: true });
		jQuery('body').on('change', '.track-cat', function(event){
			var current = jQuery(this);
			var track = jQuery(this).val();
			if(jQuery('.showpastevents').is(':checked')){
				if(track == '.webinar, .live'){

					track += ', .webinar, .live, .webinarpastEvent, .livepastEvent';
				} else {
					track += ',' + track + 'pastEvent';

				}
				$grid.isotope({ filter: track, sortBy : track, sortAscending: false });
			} else {
				$grid.isotope({ filter: track, sortBy : track, sortAscending: true });
			}
		});
		jQuery('body').on('change', '.showpastevents', function(event){
			var track = jQuery('.track-cat').val();
			if(jQuery('.showpastevents').is(':checked')){
				if(track == '.webinar, .live'){
					track += ', .webinarpastEvent, .livepastEvent';
				} else {
					track += ', ' + track + 'pastEvent';
				}
				$grid.isotope({ filter: track, sortBy : track, sortAscending: false });
			}
			else {
				$grid.isotope({ filter: track, sortBy : track, sortAscending: true });
			}
		});
	</script>
	<script>
		function initMap() {
			var myLatLng = {lat: 45.550551, lng: -32.519531};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 3,
				center: myLatLng,
				styles:[{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
			});
			<?php 
			$eventCount = 0;
			$args = array (
				'post_type'      => array( 'events' ),
				'posts_per_page' => '-1',
				'meta_key'       => 'event_type',
				'meta_value'      => 'live'
			);

			$the_query = new WP_Query( $args ); ?>

			<?php if ( $the_query->have_posts() ) : ?>

				<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

					<?php $location = get_field('event_location');?>
					var eventName<?php echo $eventCount;?> = '<?php the_field('event_name'); ?> ';
					<?php if ($location['lat']): ?>
						var eventLocation<?php echo $eventCount;?> = {lat:<?php echo $location['lat']; ?>, lng: <?php echo $location['lng']; ?>};

						var infowindow<?php echo $eventCount;?> = new google.maps.InfoWindow({
							content: eventName<?php echo $eventCount;?>
						});

						var marker<?php echo $eventCount;?> = new google.maps.Marker({
							position: eventLocation<?php echo $eventCount;?>,
							map: map,
							title: eventName<?php echo $eventCount;?>,
							icon: '<?php bloginfo('template_url'); ?>/assets/img/map_marker.png'
						});
						marker<?php echo $eventCount;?>.addListener('click', function() {
							infowindow<?php echo $eventCount;?>.open(map, marker<?php echo $eventCount;?>);
						});


					<?php endif; $eventCount++; 
				endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php endif; ?>
		}

	</script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXOmGA5p-QEoD2oSgBG5yvyy0mf26Yx0U&callback=initMap"></script>
	<?php wp_reset_postdata(); ?>
<?php endif; ?>

<?php 
$disabledItems = get_field('popup_disable_on_pages', 'options');
if( ( (is_singular(array('post')) && !is_single($disabledItems)) || (is_page() && !is_page($disabledItems)) ) && get_field('has_popup', 'options') && get_field('popup_form_id', 'options')) :
	$popupFormID = get_field('popup_form_id', 'options'); ?>
<div class="modal micromodal-slide exit-modal" id="exit-modal" data-cookie-duration="<?php the_field('popup_duration', 'options'); ?>" aria-hidden="true">
	<div class="modal__overlay" tabindex="-1" data-micromodal-close>
		<div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="exit-modal-title">
			<header class="modal__header">
				<button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
			</header>
			<main class="modal__content block--contact-form text-center" id="exit-modal-content">
				<?php if(get_field('popup_content', 'options')): the_field('popup_content', 'options'); endif; ?>
				<form id="mktoForm_<?php echo $popupFormID; ?>"></form>
			</main>
		</div>
	</div>
</div>
<script>jQuery(document).ready(function() { MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", <?php echo $popupFormID; ?>); });</script>
<?php endif; ?>
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.vendavo.com",
    "name": "Vendavo",
    "description": "Achieve Commercial Transformation and predictable, profitable outcomes by putting our proven solutions to work.",
    "logo": "https://www.vendavo.com/wp-content/uploads/2021/02/vendavo-logo-events.jpg",
    "url": "https://www.vendavo.com",
    "sameAs": [
    	"https://www.facebook.com/Vendavo",
    	"https://www.linkedin.com/company/vendavo",
        "https://twitter.com/vendavo"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-303-309-2320",        
        "contactType": "support",
        "email": "vsupport@vendavo.com",
        "contactOption": "TollFree",
        "areaServed": "",
        "availableLanguage": [
            "English"
        ]
    },
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "United States",
        "addressLocality": "Denver",
        "addressRegion": "CO",
        "postalCode": "80202",
        "streetAddress": "1401 17th St #800"
    }
}
</script>
</body>
</html>
