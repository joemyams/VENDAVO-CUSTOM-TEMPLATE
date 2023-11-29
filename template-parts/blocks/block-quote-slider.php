<?php
$variant = get_field('block_variant');
$quotes = get_field('block_quotes');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
<?php if ($variant == 'style-one'): ?>
<h2 class="front text-center quote-slider__header"><?php _e( 'Real Vendavo Customer Testimonials', 'vendavo' ); ?></h2>

<!-- Slider main container -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <?php 
        $count = 1;
        foreach ($quotes as $quote): 
        $details = get_field('quote_details', $quote); ?>
      <article class="quote-card">
        <div class="quote-card__inner">
          <div class="quote-card__decor front"></div>
          <?php set_query_var('details', $details);
                get_template_part('/template-parts/cards/card-quote'); $count++; ?>
        </div>
      </article>
    <?php endforeach; ?>

  </div>
  <div class="swiper-pagination"></div>
</div>
<?php elseif ($variant == 'style-two'): ?>
<div class="cont is-md">
  <div class="testimonial-slider__slick front">
    <?php foreach ($quotes as $quote): ?>
    <div class="testimonial__inner">
      <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'quote', 36, 'testimonal__quote-svg ' . 'is-fill--blue-10' ); ?>
      <div>
        <?php $quoteDetails = get_field('quote_details', $quote);
         echo acfOutput($quoteDetails['headline'], 'h2', 'testimonial__headline') .
              acfOutput($quoteDetails['subheadline'], 'h6', 'testimonial__subheadline'); ?>
        <div class="testimonial__meta">
          <?php echo acfImgOutput($quoteDetails['source']['headshot'], 'image-cover', 'testimonial__headshot'); ?>
          <div>
            <?php echo acfOutput($quoteDetails['source']['name'], 'h5', 'testimonial__name'); ?>
            <?php echo acfOutput($quoteDetails['source']['title'], 'h6', 'testimonial__title'); ?>
            <?php echo acfImgOutput($quoteDetails['company']['logo'], '', 'testimonial__logo'); ?>
          </div>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>
</div>
<?php endif; ?>

<?php echo '</div></section>'; ?>

<?php endif; ?>