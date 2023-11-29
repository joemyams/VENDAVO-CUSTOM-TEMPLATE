 <fieldset class="question-group">
   <div class="question-header">
     <div class="question-num"><span><?php echo $question['index']; ?></span></div>
     <?php echo acfOutput($question['question'], 'h3', ''); ?>
   </div>
   <div class="field-options <?php echo $question['button_width']; ?>">
     <?php for ($i = 0; $i < count($question['answer']); $i++) {
              set_query_var('answer_id',  $question['block_id'] . '_' . ($i +1));
              set_query_var('option', $question['answer'][$i]);
              get_template_part('template-parts/quizzes/quiz-answer');
          }; ?>
   </div>
 </fieldset>