<?php 
$text = get_field('block_text');
$image = get_field('block_image');
$pins = get_field('map_pins');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont rel '. $design['width'] . '">';

echo '<div class="text-center rte is-sm is-bottom--md">'. acfOutput($text['kicker'], 'p', 'kicker') . acfOutput($text['headline'], 'h2', 'half-text__headline') . acfOutput($text['subheadline'], 'div', 'half-text__subheadline') . '</div>';

echo '<div class="world-map-container cont rel">';
echo acfImgOutput($image, '', ''); ?>
<?php if(!empty($pins)):
    foreach ($pins as $pin) : ?>
        <button type="button" class="map-pin btn btn-tooltip btn-pulse border-0" style="top: <?php echo $pin['pin']['yPos']; ?>%; left: <?php echo $pin['pin']['xPos'] ;?>%;" data-toggle="popover" data-html="true" title="<?php echo esc_attr($pin['pin']['label']); ?>" data-content="<?php echo esc_attr($pin['pin']['description']); ?>">
            <span class="d-none"><?php echo esc_attr( $pin['pin']['label'] ); ?></span></button>
        <?php endforeach;
    endif;
    echo '</div>
</div></section>'; ?>

<?php endif; ?>
