<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @if( isset($site_settings['sites']) && $site_settings['sites']['site_favicon'] )
        <link rel="icon" href="{{ ( \App\Models\Setting::getImageURL( $site_settings['sites']['site_favicon']) ?: front_asset('images/fav.png')) }}" type="image/gif">
    @endif
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta name="base-url" content="{{ url('/') }}"/>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    @stack('styles')
</head>
<body>

    @if( isset($site_settings['sites']) && $site_settings['sites']['site_logo'] )
        <a class="navbar-brand" href="{{ url('/') }}">
            <img class="img-fluid" src="{{ ( \App\Models\Setting::getImageURL( $site_settings['sites']['site_logo']) ?: front_asset('images/logo.png')) }}" alt="{{ $site_settings['sites']['site_name'] }}" width="150px"/>
        </a>
    @endif

    @yield('content')

    @stack('scripts')
</body>
</html>
