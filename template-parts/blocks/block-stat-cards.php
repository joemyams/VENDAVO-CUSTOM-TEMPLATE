<?php 
$cards = get_field('block_cards');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont text-center is-flex--tablet '. $design['width'] . '">'; ?>
  <?php foreach ($cards as $card): ?>
    <div class="stat-grid__card">
   
        <div class="half-image__stat">
               <?php 
            if ($card['stat']['number']) {
                $str = 'class="stat-num is-lg stat-number stat-number--scale '. $card['color'] .'"';
                if ($card['stat']['prepend']) { $str = $str . ' data-prepend="'. $card['stat']['prepend'] .'"'; }
                if ($card['stat']['append']) { $str = $str . ' data-append="'. $card['stat']['append'] .'"'; }
                echo '<p '. $str .'>' . $card['stat']['number']. '</p>';
            } ; ?>
            <?php echo acfOutput($card['label'], 'p', 'stat-desc'); ?>
        </div>
             
    </div>
        <?php endforeach; ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>

