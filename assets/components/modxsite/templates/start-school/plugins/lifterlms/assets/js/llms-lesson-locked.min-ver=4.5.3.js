jQuery(document).ready(function(l){var t=l(".llms-lesson-tooltip");l(".llms-lesson-link-locked").click(function(e){e.preventDefault();var n=l(this),o=n.find(".llms-lesson-tooltip");o.length||(n.append(t.clone()),o=n.find(".llms-lesson-tooltip"),o.html(n.attr("title"))),o.toggleClass("active")})});