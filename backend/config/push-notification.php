<?php

return array(

    'IOSUser'     => array(
        'environment' => env('IOS_USER_ENV', 'development'),
        'certificate' => app_path().'/apns/user/thinkin_user_live.pem',
        'passPhrase'  => env('IOS_USER_PUSH_PASS', 'Thinkin123$'),
        'service'     => 'apns'
    ),
    'IOSProvider' => array(
        'environment' => env('IOS_PROVIDER_ENV', 'development'),
        'certificate' => app_path().'/apns/provider/thinkin_provider_live.pem',
        'passPhrase'  => env('IOS_PROVIDER_PUSH_PASS', 'Thinkin123$'),
        'service'     => 'apns'
    ),
    'AndroidUser' => array(
        'environment' => env('ANDROID_USER_ENV', 'production'),
        'apiKey'      => env('GCM_SERVER_KEY', 'yourAPIKey'),
        'service'     => 'gcm'
    ),
    'AndroidProvider' => array(
        'environment' => env('ANDROID_PROVIDER_ENV', 'production'),
        'apiKey'      => env('GCM_SERVER_KEY', 'yourAPIKey'),
        'service'     => 'gcm'
    )

);
