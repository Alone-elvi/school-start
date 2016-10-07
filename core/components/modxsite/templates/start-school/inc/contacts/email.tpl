{$params=[
"where"=>["id"=>185],
'current' => 1,
'showhidden' => 1,
'showunpublished' => 1,
"class_key" => 1
]}

{processor action="web/resources/getdata" ns="modxsite" params=$params assign=result}

{mailto address="{$result.object.introtext}" encode="javascript"}