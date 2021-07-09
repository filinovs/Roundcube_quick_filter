<?php
/**
* Quick Filter
*
* Sample plugin to replace emoticons in plain text message body with real icons
*
* @version 1.0
* @author Sergei Filinov
* @url https://github.com/filinovs/Roundcube_quick_filter
*/
class quick_filter extends rcube_plugin
{
    public $task = 'mail';

    function init()
    {
        $this->add_texts('localization/', true);
        $this->include_script('client.js');
    }

}