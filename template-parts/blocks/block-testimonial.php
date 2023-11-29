<?php 
$quote = get_field('block_quote');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-md">'; ?>
<div class="testimonial__inner">
  <?php if ($quote['design']['icon']) {
        echo Vendavo_SVG_Icons::get_svg( 'ui', 'quote', 36, 'testimonal__quote-svg ' . $quote['design']['icon_color'] );   
    }; ?>
  <div>
    <?php $quoteID = $quote['text']['quote_cpt']; 
        $quoteDetails = get_field('quote_details', $quoteID); 
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
<?php echo '</div></section>'; ?>

<?php endif; ?>