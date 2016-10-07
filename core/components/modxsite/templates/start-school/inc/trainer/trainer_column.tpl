{$image = "assets/images/"|cat:$object.image|default:$object.imageDefault}
{$src = $modx->runSnippet('phpthumbof', [
"input" => $image,
"options"   => $options
])}

<article style="background-color: ; " class="our-team5 clearfix">
    <div class="content-o clearfix">
        <div class=tdetail>
            <figure >
                <img src="{$src}" alt="">
            </figure>
            <h2>{$object.title}</h2>
            <h5>{$object.note}</h5>
            <p >{$object.description}</p>
            <!--<div class=social-team><a style=color:; href="index.html#"><i
                            class=fa-facebook></i></a><a style=color:;
                                                         href="index.html#"><i
                            class=fa-twitter></i></a><a style=color:;
                                                        href="index.html#"><i
                            class=fa-google-plus></i></a><a style=color:;
                                                            href="index.html#"><i
                            class=fa-dribbble></i></a>
                </div>-->
            <div class=social-team></div>
        </div>
    </div>
</article>
<hr class=vertical-space1>
