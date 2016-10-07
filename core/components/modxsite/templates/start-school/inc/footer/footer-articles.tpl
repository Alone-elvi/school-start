{$params=[
"parent"=> 158,
'showhidden' => 1,
'showunpublished' => 1,
"cache"     => 1,
"class_key" => 1,
"limit" => 3,
"summary" => 1
]}
{$options = "&q=100&w=150&h=150&zc=1&fltr=wmi|/assets/components/modxsite/templates/start-school/images/site/logos/watermark.png"}


{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}
<li id=michigan_webnus_latestposts-2 class="widget widget_michigan_webnus_latestposts">
    <h5 class=subtitle>Последние статьи</h5>
    <div class=side-list>
        <ul>
    {foreach $result.object as $object}
        {$image = $object.image|default:$object.imageDefault}
        {$src = $modx->runSnippet('phpthumbof', [
        "input" => $image,
        "options"   => $options
        ])}
                    <li>
                        <a href="{$object.uri}"
                           title="{$object.pagetitle}">
                            <img src="{$src}" alt="" class="landscape full michigan_webnus_square_min_img" width=150 height=150/>
                        </a>
                        <h5><a href="{$object.uri}">{$object.summary}</a>
                        </h5>
                        <p>{$object.publishedon|date_format: "%D"}</p>
                    </li>
    {/foreach}
        </ul>
    </div>
</li>
