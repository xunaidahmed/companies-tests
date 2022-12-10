@extends( 'frontend.layouts.master' )
@section('title', 'Home')
@section('content')

    <div class="flex-center position-ref full-height">

        <div class="content">
            <div class="title m-b-md">
                {{ config('app.name') }}
            </div>

            <div class="links">
                {{--<a target="_blank" href="https://laravel.com/docs">Docs</a>
                <a target="_blank" href="https://laracasts.com">Laracasts</a>
                <a target="_blank" href="https://laravel-news.com">News</a>
                <a target="_blank" href="https://blog.laravel.com">Blog</a>
                <a target="_blank" href="https://nova.laravel.com">Nova</a>
                <a target="_blank" href="https://forge.laravel.com">Forge</a>
                <a target="_blank" href="https://github.com/laravel/laravel">GitHub</a>--}}
                {{--<a href="{{ url('api/documentation') }}">API Documentation</a>--}}
                <a href="{{ url('admin/login') }}">Admin Panel</a>
            </div>
        </div>
    </div>

@endsection
@push('styles')
<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
    }
    .full-height {
        height: 100vh;
    }
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
    .position-ref {
        position: relative;
    }
    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }
    .content {
        text-align: center;
    }
    .title {
        font-size: 84px;
    }
    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
    .m-b-md {
        margin-bottom: 30px;
    }
</style>
@endpush
