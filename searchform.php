<?php $searchText = (is_home()) ? 'Search the Vendavo Blog' : 'Search Vendavo.com' ?>
<form class="search-form" id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <input type="text" class="search-field" name="s" placeholder="<?php echo $searchText; ?>"
    value="<?php echo get_search_query(); ?>" required>
  <input type="submit" value="Search">
</form>