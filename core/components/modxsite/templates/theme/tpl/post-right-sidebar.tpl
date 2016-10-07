{extends "layout.tpl"}

{block name=content}
{$params = [
    where => ["id" => $modx->resource->id]
]}
{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

{assign var=object value=$result.object[$modx->resource->id]}

{$image = $object.image|default:$object.imageDefault}
{$options = "&q=75&w=770&h=220&zc=1"}

{$src = $modx->runSnippet('phpthumbof', [
    "input" => $image,
    "options"   => $options
])}

<div class="row">
     <!--START BLOG CONTENT-->
     <div class="span8" style="min-height: 950px !important;">
        <div class="row" style="margin-bottom:50px;">
            <!-- POST IMAGE -->
            
            <div class="span8">
               <div class="row">
                <div class="span8 blog_item nolink" style="margin-bottom:0px;">
                    <h1>{$modx->resource->pagetitle}</h1>
                    <div class="blog_head blog_inner">
                        <div class="small-meta">
                            <p><b>Дата:</b> {$object.publishedon|date_format:"%d - %m - %Y"}</p>
                        </div>
                    </div>        
                    
                    <div class="view view-first">
                        <img src="{$src}" alt="{$object.pagetitle}" >
                        <div class="mask">
                            <a href="{$image}" data-fancybox-group="gallery" class="info-only fancybox" title="{$object.pagetitle}"></a>
                        </div>
                        
                    </div>   
                </div>
            </div> 
            </div>
            <!--POST TEXT-->
            <div class="span8">
                <div class="blog_item">
                    <!--Post info and Title-->
                    <div class="blog_head">
                        <div style=" margin-bottom:-5px !important;"></div>
                    </div>
                    <!--Post content-->
                    <div class="blog_post_item_description-post">
                        <p>
                            <p>
                                {$str=$object.content|replace:'h1':'h3'}
                                {$str}
                            </p>
                            
                            <p><span>Для более полной иноформации позвоните по номеру:</span> <em><strong>{$phone->content}.</strong></em></p>
                            <span>Или напишите на e-mail:</span> <a href="mailto:{$email->content}">{$email->content}</a>
                        </p>
                                        
                    </div>
                </div>  
            </div>        
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
        <!-- Place somewhere in the <body> of your page -->
        {$params = [
            "parent" => $modx->resource->parent,
            "limit" => 6,
            "sortdir" => DESC
        ]}
        
        {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
        <h3>Похожее</h3>
        {include file='inc/widgets/right/similar.tpl'}

    </div>
</div>
{/block}
 