{extends "layout.tpl"}

{block name="params"}
    {$params=[
    "parent" => 163,
    'showhidden' => 1,
    'showunpublished' => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

    {$params=[
    "where" => ["id" => 173],
    "current" => 1,
    'showhidden' => 1,
    'showunpublished' => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result_tr}
    {$arr_trainer = array()}
    {$obj_tr = json_decode($result_tr.object.tvs.slider.value, 1)}
    {$arr_trainer = $obj_tr}
{/block}

{block name=content}
    <section id="headline">
        <div class="container">
            <h2>{$modx->resource->pagetitle}</h2>
        </div>
    </section>
    <section class="container">
        <hr class=vertical-space2>
        <section class="col-md-12">
            <article id=post-8961
                     class="blog-post blgtyp1  post-8961 post type-post status-publish format-standard has-post-thumbnail hentry category-school">
                <div class=blog-inner>
                    <div class=blgt1-top-sec>

                        {foreach $result.object as $obj}
                            {$objSl = json_decode($obj.tvs.tv_multi_pool.value, 1)}
                            {foreach $objSl as $object}

                                {$options = "&q=100&w=200h=300&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}
                                {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                                {$src = $modx->runSnippet('phpthumbof', [
                                "input" => $image,
                                "options"   => $options
                                ])}
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-9">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <a class=fancybox-media href="{$image}"><img src="{$src}"></a>
                                                </div>
                                                <div class="col-md-8">
                                                    <a href="{$obj.uri}"><h2>{$object.title}</h2></a><br>
                                                    {$object.address}<br>
                                                    {$object.phone}<br>
                                                    {$object.worktime}
                                                </div>
                                            </div>
                                            <div class="row">
                                                {$object.iframe}
                                            </div>
                                            </div>
                                        <div class="col-md-3">
                                            Главный тренер:<br>
                                            {foreach $obj_tr as $object_tr}
                                                {if $object_tr["MIGX_id"] == $object.couches}
                                                    {$image = "assets/images/"|cat:$object_tr.image|default:$object.imageDefault}
                                                    {$src = $modx->runSnippet('phpthumbof', [
                                                    "input" => $image,
                                                    "options"   => $options
                                                    ])}
                                                    <img src="{$src}"><br>
                                                    {$object_tr.title}
                                                {/if}
                                            {/foreach}
                                        </div>
                                    </div>
                                </div>
                            {/foreach}
                            <hr>
                        {/foreach}
                    </div>
                </div>
            </article>
        </section>
    </section>
{/block}
