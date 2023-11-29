<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$variant = get_field('block_variant');
$count = get_field('cards_per_row');
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, $count); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <?php if ($content['headline'] || $content['kicker'] || $content['subheadline']): ?>
    <div class="cont text-center is-sm is-bottom--md">
      <?php echo acfOutput($content['kicker'], 'p', 'kicker'); ?>
      <?php echo acfOutput($content['headline'], 'h2', 'simple-grid__headline'); ?>
      <?php echo acfOutput($content['subheadline'], 'div', 'simple-grid__subheadline'); ?>
    </div>
    <?php endif; ?>
    <div class="cont <?php echo $design['content_width']; ?>">
    
    <?php if ($cards): ?>
    <div class="simple-card-grid">
    <?php {
        $count = 1;
        foreach ($cards as $card) {
            echo '<div data-index="'. $count .'" class="simple-card '. $variant .'">';
            set_query_var('card', $card);
            get_template_part('/template-parts/components/cards/card-simple'); 
            echo '</div>';
            $count++;
        }; 
    } ?>
      
    </div>
    <?php endif; ?>
    </div>
</section>

<?php endif; ?>