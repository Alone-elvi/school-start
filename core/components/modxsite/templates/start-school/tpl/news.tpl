{extends file="layout.tpl"}

{block name=params}
    {$params=[
    "parent"=> 158,
    'showhidden' => 1,
    'showunpublished' => 1,
    "cache"     => 1,
    "class_key" => 1,
    "limit" => 5,
    "summary" => 1
    ]}
    {$options = "&q=100&w=780&h=260&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}

{/block}


{block name=content append}


    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
    <section class="container page-content">
        <hr class=vertical-space2>
        <section class="col-md-12 cntt-w">
            {foreach $result.object as $object}
                {$image = $object.image|default:$object.imageDefault}
                {$src = $modx->runSnippet('phpthumbof', [
                "input" => $image,
                "options"   => $options
                ])}
                <article
                         class="blog-post blgtyp1 post type-post status-publish format-standard has-post-thumbnail hentry category-school">
                    <div class=blog-inner>
                        <div class=blgt1-top-sec><span class="post-format-icon colorb "></span>
                            <h3 class=post-title-ps1>
                                <a href="{$object.uri}">{$object.pagetitle}</a>
                            </h3>
                            <div class=au-avatar-box>
                                <h6 class=blog-date><a
                                            href="{$object.uri}">{$object.publishedon|date_format:"%D"}</a></h6>
                            </div>
                        </div>
                        <a href="{$object.uri}"
                           title="Five tips to adapt children with modern technology"><img
                                    src="{$src}"
                                    alt="Five tips to adapt children with modern technology" class="landscape full"
                                    width=960 height=549/></a>
                        <div class=blgt1-inner>
                            <p>{$object.summary}

                                <br>
                                <br><a class="readmore colorf colorr hcolorr"
                                       href="{$object.uri}">Читать</a>
                            </p>
                        </div>
                        <hr class=vertical-space1>
                    </div>
                </article>
            {/foreach}
        </section>
    </section>
    {block name=pagination}
        {include "common/pagination/pagination.tpl"}
    {/block}


{/block}