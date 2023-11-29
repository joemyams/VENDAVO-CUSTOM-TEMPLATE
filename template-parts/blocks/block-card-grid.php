<?php 
$header = get_field('block_header');
$cards = get_field('block_cards');
$design = get_field('block_design');
$layout = get_field('grid_layout');
$ctas = get_field('block_ctas');
$variant = get_field('block_variant');
$gridLayout = implode (' ', $layout );
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
<div class="text-center is-bottom--md" style="max-width: 900px; margin: 0 auto; ">
<?php echo acfOutput($header['kicker']['text'], 'p', $header['kicker']['color'] . ' kicker'); ?>
<?php echo acfOutput($header['headline']['text'], 'h2', $header['headline']['color']); ?>
<?php echo acfOutput($header['subheadline']['text'], 'h3', $header['subheadline']['color']); ?>
</div>


<?php echo acfOutput(get_field('grid_headline'), 'h2', 'card-grid__headline text-center'); ?>
<?php if ($cards): 
            $numCards = (count($cards) % 2 == 0 ) ? ' is-even' : ' is-odd';
?>
    <div class="card-grid-container <?php echo $gridLayout . $numCards; ?>">
        <?php foreach ($cards as $card) {
                if ($variant == 'is-headshot') {
                set_query_var('card', $card);
                get_template_part('/template-parts/cards/card-headshot');
                } else {
                set_query_var('card', $card);
                get_template_part('/template-parts/cards/card-simple');
                }
        }; ?>
    </div>
<?php endif; ?>

<?php  if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
  echo '<div class="text-center">';
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container');
        echo '</div>';
        } ?>   
<?php echo '</div></section>'; ?>

<?php endif; ?>