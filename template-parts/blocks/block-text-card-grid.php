<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$cards = get_field('block_cards');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, 'rel'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont is-fluid--limited text-center">
        <?php if ($content['kicker'] || $content['headline']): ?>
        <div class="card-grid__header">
            <?php echo acfOutput($content['kicker'], 'p', 'kicker'); ?>
            <?php echo acfOutput($content['headline'], 'h3', 'text-card-grid__headline'); ?>
        </div>
        <?php endif; ?>
        <?php if ($cards): ?>
        <div class="card-grid__inner">
            <?php foreach ($cards as $card): ?>
            <article class="text-card">
                <?php if ($card['link']): ?>
                    <a href="<?php echo $card['link']['url']; ?>" class="text-card__inner">
                        <?php echo acfOutput($card['headline'], 'h4', 'text-card__headline'); ?>
                        <?php echo acfOutput($card['subheadline'], 'p', 'text-card__subheadline'); ?>
                        <div class="text-card__hover"><span class="text-card__btn"><?php echo $card['link']['title']; ?></span></div>
                    </a>
                <?php else: ?>
                    <div class="text-card__inner">
                        <?php echo acfOutput($card['headline'], 'h4', 'text-card__headline') .
                                   acfOutput($card['subheadline'], 'p', 'text-card__subheadline'); ?>  
                    </div>
                <?php endif; ?>
            </article>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>
    </div>
    <svg class="text-card__swoop" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1042.94 284.11" style="enable-background:new 0 0 1042.94 284.11;" xml:space="preserve">
        <style type="text/css">
            .swoop-line {fill:none;stroke:#64BC46;stroke-width:3;stroke-miterlimit:10;}
         </style>
        <g class="swoop-base">
            <path class="swoop-line" vector-effect="non-scaling-stroke" d="M0.07,121.81c57.49,35.79,113.44,74.88,175.29,102.64c41.68,18.7,86.86,27.99,132.76,28.16
                c45.31,0.17,89.93-12.81,132.69-26.54c33.93-10.89,67.45-23.06,100.84-35.5c203.27-75.73,409.06-143.89,501.2-173.85"/>
            <path vector-effect="non-scaling-stroke" class="swoop-line" d="M0.07,127.37c39.43,24.4,78.05,50.11,117.82,73.98c56.05,33.65,116.91,58.19,182.88,61.1
                c66.93,2.96,130.67-21.12,193.51-40.71c14.39-4.49,28.79-8.97,43.22-13.33c4.32-1.3,8.63-2.6,12.95-3.9
                c213.5-64.02,408.17-126.3,492.39-153.52"/>
        </g>
        </svg>
</section>

<?php endif; ?>