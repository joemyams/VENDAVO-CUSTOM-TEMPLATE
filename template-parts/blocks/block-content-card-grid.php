<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else: ?>
  <section <?php echo $blockInfo; ?>>
    <div class="cont is-default text-center <?php echo $design['background']; ?>">
      <div class="content-card-grid__header front">
        <?php echo acfOutput($content['kicker'], 'h4', 'content-card-grid__subheadline'); ?>
        <?php echo acfOutput($content['headline'], 'h2', 'content-card-grid__headline'); ?>
      </div>
      <div class="content-card__grid front <?php echo $numCards; ?>">

        <?php if ($cards['resources']) {
          foreach ($cards['resources'] as $card) {
            set_query_var('card', $card);
            get_template_part('/template-parts/cards/card-content'); 
          }; 
        } 
        if ($cards['manual_cards']) {
          foreach ($cards['manual_cards'] as $card) {
            set_query_var('card', $card);
            get_template_part('/template-parts/cards/card-content', 'custom'); 
          }

        }; ?>
      </div>

    </div>
  </section>

  <?php endif; ?>