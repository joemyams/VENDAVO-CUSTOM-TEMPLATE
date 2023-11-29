<?php 
$variant = get_field('block_variant');
$text = get_field('block_text');
$image = get_field('block_image');
$ctas = get_field('block_ctas');
$statColor = get_field('stat_color');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--tablet '. $design['width'] . ' ' . $text['position'] . '">'; ?>
<div class="half half--text rte">
    <?php  echo acfReturnTextBlock( $text, 'half-text');
    if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); } ?>   
</div>
<?php if ($variant == 'simple-image') {
    echo '<div class="half half--image rel  '. $image['style']['orientation'] .'">'. acfImgOutput($image['image'], 'image-cover   ', 'half-image__aspect') .'</div>';
} elseif ($variant == 'simple-stat') {
    $stat = get_field('single_stat');

    echo '<div class="half is-stat '. $statColor .'">';
    if ($stat) {
        set_query_var('stat', $stat);
        get_template_part('/template-parts/cards/card-stat');
    }
    echo '</div>';
} elseif ($variant == 'simple-image-with-blob') {
   echo '<div class="half half--image rel has-blob '. $image['style']['orientation'] .'">'. acfImgOutput($image['image'], 'image-cover   ', 'half-image__aspect') .'<svg class="simple-image__blob is-overlay" width="919" height="616" viewBox="0 0 919 616" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M355.602 596C273.196 565.278 212.709 493.975 159.337 420.058C147.332 403.432 134.429 386.591 121.368 369.544C92.2243 331.506 62.2967 292.444 39.8169 252.47C23.0843 222.717 10.5281 192.537 5.52704 162" stroke="#736AC7" stroke-width="4"/>
</svg>
<svg class="simple-image__blob" width="919" height="616" viewBox="0 0 919 616" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M159.61 420.028C222.077 506.541 294.996 590.58 402.168 609.302C509.456 628.046 608.597 576.432 695.043 513.517C704.07 506.948 713.349 500.313 722.753 493.589C765.636 462.928 811.124 430.404 847.165 393.69C891.154 348.878 921.473 297.432 915.786 234.965C912.979 204.129 902.784 180.988 887.007 163.366C871.26 145.778 850.1 133.855 825.628 125.173C801.165 116.493 773.255 111.005 743.892 106.373C731.707 104.451 719.312 102.682 706.796 100.895C689.026 98.3581 671.015 95.7867 653.023 92.6957C508.891 67.9335 462.808 60.2392 443.509 57.1307C437.569 56.174 434.169 55.652 431.233 55.2014C424.622 54.1865 420.366 53.5332 394.762 49.0903C371.283 45.0161 344.687 38.7419 316.607 32.1175C308.2 30.1342 299.66 28.1196 291.031 26.1233C253.643 17.4735 214.65 9.18486 177.932 5.41571C141.243 1.64943 106.603 2.36854 77.9992 11.8993C49.2805 21.4682 26.6726 39.9205 14.2755 71.384C-10.1303 133.325 7.15082 193.912 39.8849 252.119C62.4842 292.305 92.6619 331.695 121.876 369.828C134.897 386.825 147.727 403.572 159.61 420.028Z" stroke="#736AC7" stroke-width="4"/>
          </svg></div>';

} elseif ($variant == 'image-with-stats') {
    echo '<div class="half half--image has-stats '. $image['style']['orientation'] .'">'. acfImgOutput($image['image'], 'image-cover   ', 'half-image__aspect'); ?>
    <?php $stats = get_field('block_stats'); 
    if ($stats): ?>
        <div class="half-image__stats <?php echo $statColor; if (count($stats) > 1) { echo ' has-multiple'; }; ?>">
        <?php foreach ($stats as $stat): ?>
        <div class="half-image__stat">
            <?php echo acfOutput($stat['stat']['number'], 'p', 'stat-number'); ?>
            <?php echo acfOutput($stat['label'], 'p', 'stat-desc'); ?>
        </div>
        <?php endforeach; ?>
        </div>
    <?php endif; ?>
    <?php echo '</div>';
};
echo '</div></section>'; ?>

<?php endif; ?>