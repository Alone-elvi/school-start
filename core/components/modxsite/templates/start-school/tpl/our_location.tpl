{extends "layout.tpl"}
{block name="params"}
    {$params=[
    "where"=>["id" => $modx->resource->id],
    "current" => 1,
    'showhidden' => 1,
    'showunpublished' => 1,
    "class_key" => 1
    ]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
    {$objSl = json_decode($result.object.tvs.tv_multi_pool.value, 1)}

{/block}

{block name=content}
    <section id="headline">
        <div class="container">
            <h2>{$modx->resource->pagetitle}</h2>
        </div>
    </section>
    <section id=main-content class=container>
        <div class=row-wrapper-x>
            <div id=tribe-events class=tribe-no-js data-live_ajax=1 data-datepicker_format="" data-category="">
                <div class=tribe-events-before-html></div>

                {foreach $objSl as $object}
                    {$options = "&q=100&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}
                    {$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
                    {$src = $modx->runSnippet('phpthumbof', [
                    "input" => $image,
                    "options"   => $options
                    ])}
                    <div class="tribe_events type-tribe_events status-publish has-post-thumbnail hentry tribe_events_cat-meeting-hall cat_meeting-hall">
                        <div class=col-md-8>
                            <div class=w-event-content>
                                <h2 class="tribe-events-single-event-title summary entry-title">{$object.title}</h2>
                            </div>
                            <div class=tribe-events-event-image>
                                <img width=700 height=388 src="{$src}"
                                     class="attachment-michigan_webnus_latest_img size-michigan_webnus_latest_img wp-post-image"
                                     alt={$object.alt} srcset="{$src}, {$src} 300w"
                                sizes="(max-width: 700px) 100vw, 700px"/>
                            </div>
                        </div>
                        <div class=col-md-4>
                            <div class=w-event-meta>
                                <div class="tribe-events-meta-group tribe-events-meta-group-details">
                                    <dl>
                                        <div class=w-single-event-time>
                                            <p><br></p>

                                            <h3 class=te-time>Время занятий: </h3>
                                            <dd>
                                                <abbr class="tribe-events-abbr updated published dtstart"
                                                      title=2016-11-01>
                                                    {$object.worktime}
                                                </abbr>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div class="tribe-events-meta-group tribe-events-meta-group-venue">
                                    <div class=w-single-event-location>
                                        <p><br></p>
                                        <h3 class="tribe-events-single-section-title te-location">Расположение</h3>
                                        <dd class="author fn org"> {$object.title}</dd>
                                        <dd class=location>
                                            <address class=tribe-events-address>
                                                <span class=tribe-address>
                                                    <span class=tribe-street-address>
                                                        {$object.address}
                                                    </span>
                                                </span>
                                            </address>
                                        </dd>
                                    </div>
                                </div>
                                <div class="tribe-events-meta-group tribe-events-meta-group-organizer">
                                    <div class=w-single-event-organizer>
                                        <h3 class=tribe-events-single-section-title>Телефон</h3>
                                        <dt style=display:none;></dt>
                                        <dd class=tribe-organizer-tel> {$object.phone}</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            {$object.iframe}
                        </div>
                    </div>
                {/foreach}
            </div>
            <div class=tribe-events-after-html></div>
        </div>
    </section>
{/block}


