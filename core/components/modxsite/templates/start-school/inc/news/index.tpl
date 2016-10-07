{$params=[
    "parent"=> 174,
    'showhidden' => 1,
    'showunpublished' => 1,
    "cache"     => 1,
    "class_key" => 1,
    "limit" => 5
]}

    {processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

    {foreach $result.object as $object}
        {$inner_tpl = "inc/news/inner.tpl"}
    {/foreach}
