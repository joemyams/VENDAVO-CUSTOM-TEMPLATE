<?php
/**
 * Template Name: Events Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

/* Start the Loop */
while ( have_posts() ) : the_post(); 
	$eventsHeader = get_field('events_page', 'options'); ?>
	<section id="content" class="page-template-events is-top--sm">
		<div class="cont is-md is-top--md is-bottom--lg is-text--blue-30">
			<div class="events-template__header">
				<div class="events-header__text">
					<?php echo acfOutput($eventsHeader['headline'], 'h1', ''); ?>
					<?php echo acfOutput($eventsHeader['subheadline'], 'div', 'about'); ?>
				</div>
				<div class="events-header__filters">
					<div>
						<select class="track-cat">
							<option value=".webinar, .live"><?php _e( 'All', 'vendavo' ); ?></option>
							<option value=".webinar"><?php _e( 'Virtual', 'vendavo' ); ?></option>
							<option value=".live"><?php _e( 'In-Person', 'vendavo' ); ?></option>
						</select>
						<label class="showPast">
							<input type="checkbox" name="showpastevents" class="showpastevents"> <?php _e( 'Show Archived Events', 'vendavo' ); ?>
						</label>
					</div>
					<div class="legend">
						<span><img src="<?php bloginfo('template_url'); ?>/assets/img/map_marker.png"> <?php _e( 'In-Person', 'vendavo' ); ?></span>
						<span><img src="<?php bloginfo('template_url'); ?>/assets/img/webcast_icon.png"> <?php _e( 'Virtual', 'vendavo' ); ?></span>
					</div>
				</div>
			</div>
			<div class="grid events">
				<?php $args = array (
					'post_type'       => array( 'events' ),
					'posts_per_page'  => '-1',
					'meta_key'        => 'event_start_date',
					'orderby'         => 'meta_value',
					'order'           => 'ASC'
				);
				$the_query = new WP_Query( $args ); 
				if ( $the_query->have_posts() ) : 
					while ( $the_query->have_posts() ) : $the_query->the_post();
						$startDate = get_field('event_start_date');
						$startDate = str_replace('/', '-', $startDate);
						$event_date = new DateTime($startDate);
						$today = new DateTime('today');
						$image = get_field('image');
						if($event_date < $today){
							$event = "pastEvent";
						} else {
							$event = '';
						}
						?>
						<div class="event-card element-item <?php the_field('event_type'); ?><?php echo $event;?>">
							<div class="event-card__inner">
								<?php if ($image): ?><a class="event-image__anchor" href="<?php the_field('event_url'); ?>" target="_blank"><img src="<?php the_field('image'); ?>" class="img-responsive event-image image-cover"></a>
								<?php else: ?>
									<a class="event-image__anchor" href="<?php the_field('event_url'); ?>" target="_blank"><div class="event-img__placeholder"></div></a>
								<?php endif; ?>
								<div class="eventDetails">
									<a class="eventLink" href="<?php the_field('event_url'); ?>" target="_blank">
										<h3 class="eventName"><?php the_field('event_name'); ?></h3>
										<span class="icon-type-<?php the_field('event_type'); ?>"></span>
									</a>
										<p class="eventDate"><?php the_field('event_date'); ?> | <?php the_field('event_city'); ?> </p>
										<div class="eventNotes rte"> <?php the_field('event_notes'); ?> </div>
										<div class="cta-container">
											<a class="btn btn--primary is-green" href="<?php the_field('event_url'); ?>" target="_blank"><?php _e( 'Register Now', 'vendavo' ); ?></a>
										</div>
									</div>
								</div>
							</div>
						<?php endwhile; ?>
						<?php else : ?>
							<p><?php _e( 'Sorry, no posts matched your criteria.', 'vendavo' ); ?></p>
						<?php endif; ?>
						<?php wp_reset_postdata(); ?>
					</div>
				</div>
			</section>
		<?php endwhile; // End of the loop. ?>
		<?php get_footer();