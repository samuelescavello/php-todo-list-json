<?php

$todoJson = json_decode(file_get_contents("js/data.json"), true);
var_dump($todoJson);