<?php if ($button['type'] == 'video'): ?>
    <a class="btn <?php echo $button['color']; ?> fancybox" href="<?php echo $button['video_link']; ?>"><?php echo $button['text']; ?></a>
<?php elseif ($button['type'] == 'internal'): ?>
    <a class="btn <?php echo $button['color']; ?>" href="<?php echo $button['internal_link']; ?>"><?php echo $button['text']; ?></a>
<?php elseif ($button['type'] == 'external'): ?>
    <a class="btn <?php echo $button['color']; ?>" href="<?php echo $button['external_link']; ?>"<?php echo $button['target'] ? ' target="_blank"' : ''; ?>><?php echo $button['text']; ?></a>
<?php elseif ($button['type'] == 'file'): ?>
    <a class="btn <?php echo $button['color']; ?>" href="<?php echo $button['file']['url']; ?>"<?php echo $button['target'] ? ' target="_blank"' : ''; ?>><?php echo $button['text']; ?></a>
<?php endif; ?>