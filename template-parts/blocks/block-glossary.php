<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if( !empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) ) : ?>
<div class="block__glossary-header pos-rel z-3">
  <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
    <div class="text-center rte is-sm is-bottom--md">
      <?php echo acfOutput($text['kicker'], 'p', 'kicker'); ?>
      <?php echo acfOutput($text['headline'], 'h2', 'half-text__headline'); ?>
      <?php echo acfOutput($text['subheadline'], 'div', 'half-text__subheadline'); ?>
    </div>
  </div>
</div>
<?php endif; ?>

<?php $terms = get_terms( 'glossary-type', array( 'orderby' => 'name', 'order' => 'ASC', 'hide_empty' => true ) );
if($terms && count($terms) > 0) : ?>
  <div class="block__glossary-loop pos-rel z-3">
    <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
      <?php foreach ( $terms as $term ) :
        $args = array( 'post_type' => 'glossary', 'orderby'=> 'title', 'order' => 'ASC',
          'tax_query' => array(
            array(
              'taxonomy' => 'glossary-type',
              'field' => 'name',
              'terms' => $term->name,
            )
          ) );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) : ?>
          <div id="<?php echo $term->slug; ?>" class="glossary__cat mb-3">
            <h3 class="h2 text-center is-bottom--xs"><?php echo $term->name; ?></h3>
            <ul class="nav row">
              <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>           
                <li class="nav-item col-lg-6 is-bottom--xs">
                  <a class="glossary__card nav-link d-block font-weight-normal" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                    <div class="card__title font-weight-bold font-size-h5 is-bottom--xs"><?php the_title(); ?></div>
                    <?php if(get_the_excerpt()): 
                       echo acfOutput(get_the_excerpt(), 'div', 'card__text is-bottom--xs'); 
                    endif; ?>
                    <div class="link-with-arrow is-text--green-20">Learn More ></div>
                  </a>
                </li>
              <?php endwhile; ?>
            </ul>
          </div>
        <?php endif;
        wp_reset_postdata();
      endforeach; ?>
    </div>
  </div>
<?php endif; ?>

<?php echo '</section>'; ?>

<?php endif; ?>

