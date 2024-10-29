<?php

return [
    'dependencies' => ['core', 'backend'],
    'tags' => [
        'backend.contextmenu',
    ],
    'imports' => [
        '@branch_cache/' => 'EXT:branch_cache/Resources/Public/JavaScript/',
    ],
];
