{assign var=params value=[
    "where" => [
        "id"    => 176
    ],
    "current"   => true,
    "limit" => 3
]}
{processor action="web/portfolio/getdata" ns="modxsite" params=$params assign=result}

<!-- Start recent portfolio item -->


<!--<div class="row">-->
<div>
    <div class="span12">
        <h3 class="builder_heading">Наши работы</h3>                                
    </div>

    <div class="row">
        {assign var=object value=$result.object}
        {assign var=i value=0}
        {assign var=$gal value=arsort($object.gallery)}
        {$options = "&q=75&w=270&h=220&zc=1"}        
        {foreach $object.gallery as $item}
            {$src = $modx->runSnippet('phpthumbof', [
            "input" => $item.image,
            "options"   => $options
        ])}
            {if ($i)< 4}
            <!-- Start Item -->
            <div class="span3">
                <div class="portfolio_item">
                    <div class="view view-first">
                        <a href="" class="link_image">
                            <!-- Link to Main Big Image -->
                            <img src="{$src}" alt="{$item.description}" >
                        </a>
                        <div class="mask">
                            <!-- Link to Thambnail -->
                            <a href="{$item.image}" data-fancybox-group="gallery" class="info-only fancybox"></a>
                            <!-- Link to Page -->
                            <!--<a href="item-single-image.html" class="link"></a>-->
                        </div>
                    </div>
                </div>
                <div class="descr">
                    <!-- Item Heading -->
                    <h5 class="post_title"><a href="" class="link title" title="{$item.description}">{$item.description}</a></h5>
                    <!-- Item Description -->
                    <!--<div class="entry_content">
                        Few words about project
                    </div>-->
                </div>
            </div>
            <!-- End Item -->
            {$i=$i+1}
            {else}
                {break}
            {/if}
            {/foreach}
        </ul>
    </div>
</div>


<!-- End recent portfolio item -->



