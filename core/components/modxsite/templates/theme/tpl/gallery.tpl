{extends "layout.tpl"}

{block name=content}
{assign var=params value=[
    "where" => [
        "id"    => $modx->resource->get('id')
    ],
    "current"   => true
]}
{processor action="web/portfolio/getdata" ns="modxsite" params=$params assign=result}

<div>
    <div class="span12">
        <h3 class="builder_heading">{$modx->resource->get('pagetitle')}</h3>                                
    </div>

    <div class="row">

        {include "inc/menu/leftmenu/menu.tpl"}
        {assign var=object value=$result.object}
        
        <div class="span9">
            {$modx->resource->get('content')}
            <div class="row istope"id="portfolio_sidebar" style="position: relative; overflow: hidden; height: 1157px;">
            {foreach $object.gallery as $item}
                {$image = $item.image|default:$object.imageDefault}
                {$options = "&q=75&w=270&h=202&zc=1"}
                {$options_big = "&q=100&w=800&h=600&zc=1"}

                {$src = $modx->runSnippet('phpthumbof', [
                    "input" => $image,
                    "options"   => $options
                ])}
                {$src_big = $modx->runSnippet('phpthumbof', [
                "input" => $image,
                "options"   => $options_big
                ])}
                <div class="span3 portfolio_item block html-templates">
                    <div class="view view-first">
                        <a href=""><img src="{$src}" ></a>
                        <div class="mask">
                            <a href="{$src_big}" data-fancybox-group="gallery" class="info-only fancybox" title="{$item.description}"></a>
                            <!--<a href="#" class="link"></a>-->
                        </div>
                    </div>
                    <div class="descr">
                        <p class="clo">{$item.description}</p>
                    </div>
                </div>
            {/foreach}
            </div>    
        </div>
        <div>
            {include "common/pagination/pagination.tpl"}
        </div>
    </div>
</div>

{/block}