{extends "layout.tpl"}

{block content}
{$params = [
    "parent" => $modx->resource->id,
    "limit" => 12,
    "sortdir" => ASC
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

 <!--START PORTFOLIO CONTENT-->
 <section style="padding-top: 30px !important;">
 <div class="row">
    <div class="span8">
        <div class="row" id="portfolio" style="position: relative; overflow: hidden; height: 1157px;">
        {foreach $result.object as  $object}
            {$image = $object.image|default:$object.imageDefault}

            {$options = "&q=50&hl=230&wl=230&zc=1"}

            {$src = $modx->runSnippet('phpthumbof', [
                "input" => $image,
                "options"   => $options
            ])}

            <div class="span2 portfolio_item block html-templates">
                <div class="view view-first">
                    <img src="{$src}" title="{$object.longtitle}" alt="{$object.pagetitle}"></a>
                    <div class="mask">
                        <a href="{$object.uri}" class="link-only"></a></div>
                </div>
                <div class="descr">
                    <h5><a href="{$object.uri}" title="{$object.pagetitle}">{$object.pagetitle}</a></h5>
                </div>
            </div>
        {/foreach}    
        </div>    
    </div>
    <!-- START SIDEBAR -->
    <div class="span4 blog_sidebar">
        <!-- FIRST WIDGET -->
        <div class="well">
                <h5 style="font-weight: 600; text-transform: uppercase !important;">Напишите нам:</h5>
                <hr/>
                <div class="textwidget">
                    <div class="alert alert-block alert-success" style="margin-bottom: 0px;">
                        [[!smarty?tpl=`inc/forms/feedback.tpl`]]
                    </div>
                </div>
            </div>
    </div>

    <div class="span4 sidebar">
        <h3>Направления</h3>
            {$params = [
                "parent" => 163,
                "limit" => 12,
                "sortdir" => DESC
            ]}
            
            {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

            {include file='inc/widgets/right/similar.tpl'}
                
        <!-- Place somewhere in the <body> of your page -->
    </div>    
</div>
<section style="padding:0px !important;">
    <hr style="margin-top:0px;">
    <div class="pride_bg"></div>
</section>    
</section>
  

{/block}