<div class="flexslider">
    <ul class="slides">
        <!-- First Slide-->
        {foreach $result.object as $object}
            {if $object.id != $modx->resource->id}
                {$flag=1}
                {$image = $object.image|default:$object.imageDefault}
                <li style="width: 100%; float: left; display: block;">
                   <a class="link_image" href="{$object.uri}" title="{$object.pagetitle}">
                    {$options = "&q=50&h=230&w=440zc=1"}
    
                    {$src = $modx->runSnippet('phpthumbof', [
                        "input" => $image,
                        "options"   => $options
                    ])}
                    <img src="{$src}" title="{$object.pagetitle}" alt="{$object.longtitle}"/>
                    </a>

                    <div class="flex-caption blog_item">
                        <div class="blog_head">
                            <div class="date">
                            <h6><i class="icon-calendar icon-white"></i> {$object.publishedon|date_format:"%d - %m - %Y"}</h6>   
                            </div>
                            <h3><a href="{$object.uri}">{$object.pagetitle}</a></h3>
                        </div>
                        
                        {*mb_strimwidth($object.content, 0, 300, "...")}
                        {$object.content*}
                        {$str=$object.content|replace:'h1':'h3'}
                        {mb_strimwidth($str, 0, 300, "...")}
                        
                        <h6 class="read_more" style="margin-top: 10px !important;">
                            <a style="margin-top: 15px;" href="{$object.uri}">Читать далее</a>
                        </h6>
                    </div>
                </li>
            {/if}
        {/foreach}
         <!-- Second Slide-->
    </ul>
    <!-- FlexSlider Nav -->
    {if flag==1}
        <ul class="flex-direction-nav">
            <li><a href="index.html#" class="flex-prev"></a></li>
            <li><a href="index.html#" class="flex-next"></a>
        </ul>
    {/if}
    <!-- End FlexSlider Nav -->
</div>