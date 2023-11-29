<?php echo acfImgOutput($images['main_image'], 'image-fit', 'half-image__aspect'); ?>
<?php if ($stats['repeater']): ?>
<div class="repeater-stats">
    <?php foreach ($stats['repeater'] as $stat): ?>
    <article class="single__stat">
        <?php if ($stat['number']['value']) {
                $str = 'class="stat-num single-stat__num"';
                if ($stat['number']['prepend']) { $str = $str . ' data-prepend="'. $stat['number']['prepend'] .'"'; }
                if ($stat['number']['append']) { $str = $str . ' data-append="'. $stat['number']['append'] .'"'; }
                echo '<p '. $str .'>' . $stat['number']['value']. '</p>';
            } ; ?>
        <?php echo acfOutput($stat['label'], 'p', 'single-stat__label'); ?>
    </article>
    <?php endforeach; ?>  
</div>
<?php endif; ?>
