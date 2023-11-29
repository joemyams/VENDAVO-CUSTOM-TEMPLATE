<article class="quiz-contact-card">
  <div class="quiz-contact__image">
    <?php if ($contact['headshot']): ?>
      <img class="quiz-contact__image" src="<?php echo $contact['headshot']['url']; ?>" alt="" />
    <?php endif; ?>
  </div>
  <div class="quiz-contact__text">
    <?php echo acfOutput($contact['name'], 'p', 'quiz-contact__name'); ?>
    <?php if ($contact['email']) echo '<p><a href="mailto:'. $contact['email'] . '">'. $contact['email'] .'</a></p>'; ?>
    <?php if ($contact['phone']) echo '<p><a href="tel:'. $contact['phone'] . '">'. $contact['phone'] .'</a></p>'; ?>
    <?php if ($contact['website']) echo '<p><a href="'. $contact['website'] . '">'. $contact['website'] .'</a></p>'; ?>
  </div>
</article>